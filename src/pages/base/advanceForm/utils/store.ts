import get from "lodash/get"
import has from "lodash/has"
import omit from "lodash/omit"
import setWith from "lodash/setWith"

import { isArray, isObject } from "../_util/is"
import Control from "./control"
import { FieldError, FormValidateFn, ValidateFieldsErrors } from "./interface/form"
import { ICallBack, IFieldValue, IFormData, INotifyType, IStoreChangeInfo } from "./interface/store"
import promisify from "./promisify"
import { cloneDeep, isNotEmptyObject, iterativelyGetKeys, set, string2Array } from "./utils"

class Store<FormData extends IFormData> {
  /**
   * 触发在form上注册的onChange事件
   * 需要注意value的属性是字符串，比如'name', 'list.1.name'...
   */
  private triggerTouchChange(value: Record<string, any>) {
    if (isNotEmptyObject(value)) {
      this.callbacks?.onChange?.(value, this.getFields())
    }
  }

  /**
   * 注册callbacks，主要是注册在form上传入的值变化和提交事件
   */
  public innerSetCallbacks = (values: ICallBack<FormData>) => {
    this.callbacks = values
  }

  /**
   * 收集所有control字段，并在组件卸载时移除
   */
  public registerField = (item: Control<FormData>) => {
    this.registerFields.push(item)
    return () => {
      this.registerFields = this.registerFields.filter((x) => x !== item)
    }
  }

  /**
   *  registerFields: 获得全部注册的FormItem包裹的元素实例
   *  hasField为true时，只返回传入field属性的control实例
   */
  private getRegisteredFields = (hasField?: boolean): Control<FormData>[] => {
    if (hasField) {
      return this.registerFields.filter(
        (control) => control.hasFieldProps() && !control.context?.isFormList,
      )
    }
    return this.registerFields
  }

  /**
   * registerFields: 获得单个注册的FormItem包裹的元素实例
   * 获取props.field === field 的control组件
   */
  public getRegisteredField = (field?: string) => {
    return this.registerFields.find((x) => x.context.field === field)
  }

  /**
   *  做两件事，一是把变化过的field标记为touch
   *  第二通知所有的formItem进行更新。有以下三种类型会触发
   *  setFieldValue: 外部调用setFieldsValue (setFieldValue等)方法触发更新
   *  innerSetValue: 控件例如Input，通过onChange事件触发的更新
   *  reset： 重置
   */
  private notify = (type: INotifyType, info: IStoreChangeInfo<string>) => {
    if (type === "setFieldValue" || (type === "innerSetValue" && !info.ignore)) {
      /**
       * 将field标记touch过
       */
      this._pushTouchField(
        info.changeValues
          ? /**
             * info.changeValues 假如是 { a: { b : 2 } } => ['a.b']
             */
            iterativelyGetKeys(info.changeValues)
          : this._getIterativelyKeysByField(info.field),
      )
    }
    this.registerFields.forEach((item) => {
      item.onStoreChange?.(type, {
        ...info,
        current: this.store,
      })
    })
  }

  /**
   * initialValue初始化，只是把值给了store，并没有onStoreChange给FormItem包* 裹的表单元素同步数据
   */
  public innerSetInitialValues = (values: Partial<FormData>) => {
    if (!values) return
    this.initialValues = cloneDeep(values)

    Object.keys(values).forEach((field) => {
      set(this.store, field, values[field])
    })
  }

  /**
   * 更改InitialValue，改单个值
   */
  public innerSetInitialValue = (field: string, value: any) => {
    if (!field) return
    set(this.initialValues, field, value)
    // 组件在创建的时候，判断这个field是否touch过。只要没有被操作过（touchedFields里不存在），就生效
    if (!this._inTouchFields(field)) {
      set(this.store, field, get(this.initialValues, field))
    }
  }

  private _getIterativelyKeysByField(field: string | string[]) {
    if (!field) return []
    const keys = string2Array(field)
      .map((item) => iterativelyGetKeys(set({}, item, undefined)))
      .reduce((total, next) => {
        return total.concat(next)
      }, [])
    return [field, ...keys]
  }

  /**
   * 判断这个field是否touch过
   */
  private _inTouchFields(field?: string) {
    const keys = this._getIterativelyKeysByField(field)
    return keys.some((item) => has(this.touchedFields, item))
  }

  /**
   * 将touch过的field移除
   */
  private _popTouchField(field?: string | string[]) {
    if (field === undefined) {
      this.touchedFields = {}
    }
    const keys = this._getIterativelyKeysByField(field)
    this.touchedFields = omit(this.touchedFields, keys)
  }

  /**
   * 将field标记touch过，touchField都要经过iterativelyGetKeys的改装
   */
  private _pushTouchField(field: string | string[]) {
    string2Array(field).forEach((key) => {
      setWith(this.touchedFields, key, undefined, Object)
    })
  }

  /**
   * 内部使用，更新value，会同时触发onChange 和 onValuesChange
   * 并且强制更新field对应的组件包括其子组件
   */
  public innerSetFieldValue = (
    field: string,
    value: any,
    options?: { isFormList?: boolean; ignore?: boolean },
  ) => {
    if (!field) return
    const prev = cloneDeep(this.store)
    const changeValues = { [field]: value }

    set(this.store, field, value)
    this.triggerValuesChange(changeValues)
    this.triggerTouchChange(changeValues)
    this.notify("innerSetValue", { prev, field, ...options, changeValues })
  }

  /**
   * 获取内部的form表单值, 注意这里没有克隆store，是拿的引用
   */
  public innerGetStore = () => {
    return this.store
  }

  /**
   * 获取所有被操作过的字段，并且是FormItem上有field的字段的才行
   */
  public getTouchedFields = (): string[] => {
    return this.getRegisteredFields(true)
      .filter((item) => {
        return item.isTouched()
      })
      .map((x) => x.context.field)
  }

  /**
   * 外部调用设置单个表单字段值
   * */
  public setFieldValue = (field: string, value: any) => {
    if (!field) return
    this.setFields({
      [field]: { value },
    })
  }

  /**
   * 外部调用，设置多个表单控件的值
   */
  public setFieldsValue = (values: Record<string, any>) => {
    if (isObject(values)) {
      const fields = Object.keys(values)
      const obj = {} as {
        [field in string]: {
          value?: IFieldValue<FormData>
          error?: FieldError<IFieldValue<FormData>>
        }
      }
      fields.forEach((field) => {
        obj[field] = {
          value: values[field],
        }
      })
      this.setFields(obj)
    }
  }

  /**
   * 外部调用，设置多个表单控件的值，以及 error，touch 信息。
   * 触发notify的setFieldValue事件，并且有changeValues
   * 这里面有有可能obj本身的key是路径字符串，比如'a.c.v'，而且有可能值是对象，所以要处理值
   * 并且触发valuesChange，但没有触发onChange
   * 这里如果传入waring，errors这些参数，会把这些信息传递给Formitem去显示
   */
  public setFields = (obj: {
    [field in string]?: {
      value?: any
      error?: FieldError<any>
      touched?: boolean
      warning?: React.ReactNode
    }
  }) => {
    const fields = Object.keys(obj)
    const changeValues: Record<string, any> = {}
    fields.forEach((field) => {
      const item = obj[field]
      const prev = cloneDeep(this.store)
      if (item) {
        /**
         * info 格式
         * errors?: FieldError<any>;
         * warnings?: React.ReactNode;
         * touched?: boolean;
         */
        const info: IStoreChangeInfo<string>["data"] = {}
        if ("error" in item) {
          info.errors = item.error
        }
        if ("warning" in item) {
          info.warnings = item.warning
        }
        if ("touched" in item) {
          info.touched = item.touched
        }
        if ("value" in item) {
          set(this.store, field, item.value)
          changeValues[field] = item.value
        }
        this.notify("setFieldValue", {
          data: info,
          prev,
          field,
          changeValues: { [field]: item.value },
        })
      }
    })
    this.triggerValuesChange(changeValues)
  }

  /**
   * 获取单个值
   * */
  public getFieldValue = (field: string) => {
    return get(this.store, field)
  }

  /**
   * 获取单个字段的错误信息。
   * */
  public getFieldError = (field: string): FieldError<any> | null => {
    const item = this.getRegisteredField(field)
    return item ? item.getErrors() : null
  }

  /**
   * 获取传入字段/全部的错误信息
   */
  public getFieldsError = (fields?: string[]) => {
    const errors = {} as { [key in string]?: FieldError<IFieldValue<FormData>> }
    if (isArray(fields)) {
      fields.map((field) => {
        const error = this.getFieldError(field)
        if (error) {
          errors[field] = error
        }
      })
    } else {
      this.getRegisteredFields(true).forEach((item) => {
        if (item.getErrors()) {
          errors[item.context.field] = item.getErrors()
        }
      })
    }
    return errors
  }

  /**
   * 获取form表单值
   * */
  public getFields = (): Partial<FormData> => {
    return cloneDeep(this.store)
  }

  /**
   * 获取一组form里的数据，也可以获取传入fields的form数据
   * */
  public getFieldsValue = (fields?: string[]): Partial<FormData> => {
    const values = {}

    if (isArray(fields)) {
      fields.forEach((key) => {
        set(values, key, this.getFieldValue(key))
      })
      return values
    }
    this.getRegisteredFields(true).forEach(({ context: { field } }) => {
      const value = get(this.store, field)
      set(values, field, value)
    })
    return values
  }

  /**
   * 很简单，就是做几件事
   * set数据重置
   * notify通知FormItem表单数据更新
   * 触发valueChange事件
   * 更新相应表单的touch属性
   */
  public resetFields = (fieldKeys?: string | string[]) => {
    const prev = cloneDeep(this.store)
    const fields = string2Array(fieldKeys)

    if (fields && isArray(fields)) {
      const changeValues = {}
      /* 把值统一重置 */
      fields.forEach((field) => {
        /* store重置 */
        set(this.store, field, get(this.initialValues, field))
        changeValues[field] = get(this.store, field)
      })

      /* 触发valueChange事件 */
      this.triggerValuesChange(changeValues)
      /* 触发reset事件给每一个onStoreChange */
      this.notify("reset", { prev, field: fields })
      /* 只有reset事件会重置touch */
      this._popTouchField(fields)
    } else {
      const newValues = {}
      const changeValues = cloneDeep(this.store)
      /*  利用initialValue 重置value */
      Object.keys(this.initialValues).forEach((field) => {
        set(newValues, field, get(this.initialValues, field))
      })
      this.store = newValues
      this.getRegisteredFields(true).forEach((item) => {
        const key = item.context.field
        set(changeValues, key, get(this.store, key))
      })

      this.triggerValuesChange(changeValues)
      this._popTouchField()

      this.notify("reset", { prev, field: Object.keys(changeValues) })
    }
  }

  /**
   * 校验并获取表单输入域的值与 Errors，如果不设置 fields 的话，会验证所有的 fields。这个promisiFy感觉写的过于繁琐
   */
  public validate: FormValidateFn<FormData> = promisify<FormData>(
    (
      fieldsOrCallback?:
        | string[]
        | ((errors?: ValidateFieldsErrors<FormData>, values?: FormData) => void),
      cb?: (errors?: ValidateFieldsErrors<FormData>, values?: FormData) => void,
    ) => {
      let callback: (
        errors?: ValidateFieldsErrors<FormData>,
        values?: Partial<FormData>,
      ) => void = () => {}

      let controlItems = this.getRegisteredFields(true)

      if (isArray(fieldsOrCallback) && fieldsOrCallback.length > 0) {
        controlItems = controlItems.filter((x) => fieldsOrCallback.indexOf(x.context.field) > -1)
        callback = cb || callback
      } else if (typeof fieldsOrCallback === "function") {
        /* 如果是function就校验全部 */
        callback = fieldsOrCallback
      }

      const promises = controlItems.map((x) => x.validateField())
      /* 校验完毕后处理 */
      Promise.all(promises).then((result) => {
        let errors = {} as ValidateFieldsErrors<FormData>
        const values = {} as Partial<FormData>

        result.map((x) => {
          if (x.error) {
            errors = { ...errors, ...x.error }
          }
          set(values, x.field, x.value)
        })
        /* 错误信息导出给callback和onValidateFail */
        if (Object.keys(errors).length) {
          const { onValidateFail } = this.callbacks
          onValidateFail?.(errors)
          callback?.(errors, cloneDeep(values))
        } else {
          callback?.(null, cloneDeep(values))
        }
      })
    },
  )

  /**
   * 提交方法，提交的时候会先验证
   */
  public submit = () => {
    this.validate((errors, values) => {
      if (!errors) {
        const { onSubmit } = this.callbacks
        onSubmit?.(values)
      } else {
        const { onSubmitFailed } = this.callbacks
        onSubmitFailed?.(errors)
      }
    })
  }

  /**
   * 清除表单控件的值
   * 很简单，就是做几件事
   * set数据重置
   * notify通知FormItem表单数据更新
   * 触发valueChange事件
   * 更新相应表单的touch属性
   */
  public clearFields = (fieldKeys?: string | string[]) => {
    const prev = cloneDeep(this.store)
    const fields = string2Array(fieldKeys)
    if (fields && isArray(fields)) {
      const changeValues = {}
      fields.forEach((field) => {
        set(this.store, field, undefined)
        changeValues[field] = get(this.store, field)
      })

      this.triggerValuesChange(changeValues)

      this.notify("setFieldValue", { prev, field: fields })
      /**
       * 清空值也会让touch重置
       */
      this._popTouchField(fields)
    } else {
      const changeValues = {}
      this.store = {}
      this.getRegisteredFields(true).forEach((item) => {
        const key = item.context.field
        set(changeValues, key, undefined)
      })

      this.triggerValuesChange(changeValues)
      this._popTouchField()

      this.notify("setFieldValue", {
        prev,
        field: Object.keys(changeValues),
      })
    }
  }
}

export default Store
7
