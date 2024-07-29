import get from "lodash/get"
import has from "lodash/has"
import isEqualWith from "lodash/isEqualWith"
import set from "lodash/set"
import setWith from "lodash/setWith"
import React, { Component, ReactElement } from "react"

import IconCheckCircleFill from "../../icon/react-icon/IconCheckCircleFill"
import IconCloseCircleFill from "../../icon/react-icon/IconCloseCircleFill"
import IconExclamationCircleFill from "../../icon/react-icon/IconExclamationCircleFill"
import IconLoading from "../../icon/react-icon/IconLoading"
import { isArray, isFunction } from "../_util/is"
import warn from "../_util/warning"
import { FormItemContext } from "./context"
import { FieldError, FormControlProps, FormItemContextProps } from "./interface/form"
import { IFieldKey, IFieldValue, IFormData, INotifyType, IStoreChangeInfo } from "./interface/store"
import { isSyntheticEvent, schemaValidate } from "./utils"

/**
 * 是否要更新表单UI的路径在已有filed的control上
 */
function isFieldMath(field, fields) {
  const fieldObj = setWith({}, field, undefined, Object)

  return fields.some((item) => has(fieldObj, item))
}

export default class Control<FormData extends IFormData> extends Component<
  FormControlProps<FormData>
> {
  /**
   * 这个属性感觉删了也没啥
   */
  static isFormControl = true

  /**
   * 引用上面传的context，这里是FormItem的
   */
  static contextType = FormItemContext

  context: FormItemContextProps<FormData>

  /**
   * 这里的errors和下面的warning都是setFieldsValue传的，然后通过updateFormItem更新UI到上面
   */
  private errors: FieldError<IFieldValue<FormData>> = null

  private warnings: React.ReactNode[] = null

  private isDestroyed = false

  private touched: boolean

  /**
   * 卸载这个control
   */
  private removeRegisterField: () => void

  constructor(props: FormControlProps<FormData>, context: FormItemContextProps<FormData>) {
    super(props)
    /**
     * setInitialValue
     */
    if (context.initialValue !== undefined && this.hasFieldProps(context)) {
      const innerMethods = context.store.getInnerMethods(true)
      innerMethods.innerSetInitialValue(context.field, context.initialValue)
    }
  }

  /**
   * 把自己注册到stroe上
   */
  componentDidMount() {
    const { store } = this.context
    if (store) {
      const innerMethods = store.getInnerMethods(true)
      this.removeRegisterField = innerMethods.registerField(this)
    }
  }

  /**
   * 从store上删除引用
   */
  componentWillUnmount() {
    this.removeRegisterField?.()

    this.removeRegisterField = null

    /**
     * 把errors和warnings也删除
     */
    const { updateFormItem } = this.context
    updateFormItem?.(this.context.field as string, { errors: null, warnings: null })
    this.isDestroyed = true
  }

  getErrors = (): FieldError<IFieldValue<FormData>> | null => {
    return this.errors
  }

  isTouched = (): boolean => {
    return this.touched
  }

  public hasFieldProps = (context?: FormItemContextProps<FormData>): boolean => {
    return !!(context || this.context).field
  }

  /**
   * 强制render，把store的数据映射到最新的UI上，并且更新error和warnings的UI
   */
  private updateFormItem = () => {
    if (this.isDestroyed) return
    this.forceUpdate()
    const { updateFormItem } = this.context
    updateFormItem &&
      updateFormItem(this.context.field as string, {
        errors: this.errors,
        warnings: this.warnings,
      })
  }

  /**
   * store notify的时候，会触发FormItem包裹的表单更新
   * type为rest：touched errors warning 重置 组件重新render，重新render是因为store新的值反应在表单UI上
   * type为innerSetValue 这个触发时机是表单自身值变化，比如onChange事件，结果是更改touch为true，组件重新render
   * type为setFieldValue 是外界主动调用setFieldValue触发
   */
  public onStoreChange = (type: INotifyType, info: IStoreChangeInfo<string> & { current: any }) => {
    /**
     * fields统一为数组格式
     */
    const fields = isArray(info.field) ? info.field : [info.field]
    const { field, shouldUpdate } = this.context

    // isInner: the value is changed by innerSetValue
    // 如果你的FromItem属性设置shouldUpdate这里会校验并执行
    const shouldUpdateItem = (extra?: { isInner?: boolean; isFormList?: boolean }) => {
      if (shouldUpdate) {
        let shouldRender = false
        if (isFunction(shouldUpdate)) {
          shouldRender = shouldUpdate(info.prev, info.current, {
            field: info.field,
            ...extra,
          })
        } else {
          shouldRender = !isEqualWith(info.prev, info.current)
        }
        if (shouldRender) {
          this.updateFormItem()
        }
      }
    }

    switch (type) {
      case "reset":
        this.touched = false
        this.errors = null
        this.warnings = null
        this.updateFormItem()
        break
      case "innerSetValue":
        if (isFieldMath(field, fields)) {
          this.touched = true
          this.updateFormItem()
          return
        }
        shouldUpdateItem({
          isInner: true,
          isFormList: info.isFormList,
        })
        break
      case "setFieldValue":
        if (isFieldMath(field, fields)) {
          this.touched = true
          if (info.data && "touched" in info.data) {
            this.touched = info.data.touched
          }
          if (info.data && "warnings" in info.data) {
            this.warnings = [].concat(info.data.warnings)
          }
          if (info.data && "errors" in info.data) {
            this.errors = info.data.errors
          } else if (!isEqualWith(get(info.prev, field), get(info.current, field))) {
            this.errors = null
          }
          this.updateFormItem()
          return
        }
        shouldUpdateItem()
        break
      default:
        break
    }
  }

  /**
   * form表单本身值变化，比如onChange事件触发了内部的setValue
   */
  innerSetFieldValue = (field: string, value: IFieldValue<FormData>) => {
    if (!field) return
    const { store } = this.context
    const methods = store.getInnerMethods(true)
    methods.innerSetFieldValue(field, value)

    const changedValue = {} as Partial<FormData>
    set(changedValue, field, value)
  }

  /**
   * 处理表单自身变化事件,主要要stopPropagation一下，别冒泡上去
   * 值的处理 原始value => getValueFromEvent => normalize => children?.props?.[trigger]
   */
  handleTrigger = (_value, ...args) => {
    const { store, field, trigger, normalize, getValueFromEvent } = this.context
    const value = isFunction(getValueFromEvent) ? getValueFromEvent(_value, ...args) : _value
    const children = this.context.children as ReactElement
    let normalizeValue = value
    // break if value is instance of SyntheticEvent, 'cos value is missing
    if (isSyntheticEvent(value)) {
      warn(
        true,
        "changed value missed, please check whether extra elements is outta input/select controled by Form.Item",
      )
      value.stopPropagation()
      return
    }

    if (typeof normalize === "function") {
      normalizeValue = normalize(value, store.getFieldValue(field), {
        ...store.getFieldsValue(),
      })
    }
    this.touched = true
    this.innerSetFieldValue(field, normalizeValue)

    this.validateField(trigger)
    children?.props?.[trigger]?.(normalizeValue, ...args)
  }

  /**
   * 首先筛选出触发当前事件并且rules有注明改事件的所有rules
   * 然后用schemaValidate去校验，并且返回结果赋给this.errors和warnings
   */
  validateField = (
    triggerType?: string,
  ): Promise<{
    error: FieldError<IFieldValue<FormData>> | null
    value: IFieldValue<FormData>
    field: IFieldKey<FormData>
  }> => {
    const { store, field, rules, validateTrigger } = this.context
    const value = store.getFieldValue(field)
    const _rules = !triggerType
      ? rules
      : (rules || []).filter((rule) => {
          const triggers = [].concat(rule.validateTrigger || validateTrigger)
          return triggers.indexOf(triggerType) > -1
        })
    if (_rules && _rules.length && field) {
      return schemaValidate(field, value, _rules).then(({ error, warning }) => {
        this.errors = error ? error[field] : null
        this.warnings = warning || null
        this.updateFormItem()
        return Promise.resolve({ error, value, field })
      })
    }
    if (this.errors) {
      this.errors = null
      this.warnings = null
      this.updateFormItem()
    }
    return Promise.resolve({ error: null, value, field })
  }

  /**
   * 收集rules里的validateTrigger字段
   */
  getValidateTrigger(): string[] {
    const _validateTrigger = this.context.validateTrigger
    const rules = this.context.rules || []

    const result = rules.reduce((acc, curr) => {
      acc.push(curr.validateTrigger || _validateTrigger)
      return acc
    }, [])
    return Array.from(new Set(result))
  }

  /**
   * 将validate相关事件绑定到children
   * 将值变化的事件，默认onChange绑定到children
   * 将disabled属性绑定到children
   * 将从store取出的value用formatter再次加工给表单
   */
  renderControl(children: React.ReactNode, id) {
    // trigger context上默认 'onChange',
    // triggerPropName context上默认 'value',
    const { field, trigger, triggerPropName, validateStatus, formatter } = this.context
    const { store, disabled } = this.context
    const child = React.Children.only(children) as ReactElement
    const childProps: any = {
      id,
    }

    this.getValidateTrigger().forEach((validateTriggerName) => {
      childProps[validateTriggerName] = (e) => {
        this.validateField(validateTriggerName)
        child.props?.[validateTriggerName](e)
      }
    })

    childProps[trigger] = this.handleTrigger

    if (disabled !== undefined) {
      childProps.disabled = disabled
    }
    let _value = store.getFieldValue(field)

    if (isFunction(formatter)) {
      _value = formatter(_value)
    }

    childProps[triggerPropName] = _value
    if (!validateStatus && this.errors) {
      childProps.error = true
    }

    return React.cloneElement(child, childProps)
  }

  getChild = () => {
    const { children } = this.context
    const { store } = this.context
    if (isFunction(children)) {
      return children(store.getFields(), {
        ...store,
      })
    }
    return children
  }

  render() {
    const { noStyle, field, isFormList, hasFeedback } = this.context
    const validateStatus = this.context.validateStatus || (this.errors ? "error" : "")
    const { prefixCls, getFormElementId } = this.context
    let child = this.getChild()
    const id = this.hasFieldProps() ? getFormElementId(field) : undefined
    if (this.hasFieldProps() && !isFormList && React.Children.count(child) === 1) {
      child = this.renderControl(child, id)
    }

    if (noStyle) {
      return child
    }
    return (
      <div className={`${prefixCls}-item-control-wrapper`}>
        <div className={`${prefixCls}-item-control`} id={id}>
          <div className={`${prefixCls}-item-control-children`}>
            {child}

            {validateStatus && hasFeedback && (
              <div className={`${prefixCls}-item-feedback`}>
                {validateStatus === "warning" && <IconExclamationCircleFill />}
                {validateStatus === "success" && <IconCheckCircleFill />}
                {validateStatus === "error" && <IconCloseCircleFill />}
                {validateStatus === "validating" && <IconLoading />}
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
