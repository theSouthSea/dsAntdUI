import React, {
  forwardRef,
  PropsWithChildren,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react"
import scrollIntoView, { Options as ScrollIntoViewOptions } from "scroll-into-view-if-needed"

import cs from "../_util/classNames"
import useMergeProps from "../_util/hooks/useMergeProps"
import { isObject } from "../_util/is"
import ConfigProvider, { ConfigContext } from "../ConfigProvider"
import { FormContext, FormProviderContext } from "./context"
import { FieldError, FormContextProps, FormInstance, FormProps } from "./interface/form"
import { IFieldKey, IFormData } from "./interface/store"
import useForm from "./useForm"
import { getFormElementId, getId, ID_SUFFIX } from "./utils"

const defaultProps = {
  layout: "horizontal" as const,
  labelCol: { span: 5, offset: 0 },
  labelAlign: "right" as const,
  wrapperCol: { span: 19, offset: 0 },
  requiredSymbol: true,
  wrapper: "form" as FormProps<FormData>["wrapper"],
  validateTrigger: "onChange",
}

const Form = <FormData extends IFormData>(
  baseProps: PropsWithChildren<FormProps<FormData>>,
  ref: React.Ref<FormInstance<FormData>>,
) => {
  /**
   * 获取根context上注册的信息
   * 每个组件都会从这里拿去一些根的配置信息
   */
  const ctx = useContext(ConfigContext)
  /**
   * 包裹Form组件的provider，共享一些方法
   * 主要的方法就是register，把formInstance注册上去的
   * onFormValuesChange 包裹的任意 Form 组件的值改变时，该方法会被调用
   * onFormSubmit 包裹的任意 Form 组件触发提交时，该方法会被调用
   */
  const formProviderCtx = useContext(FormProviderContext)

  /**
   * 包裹表单dom元素引用
   */
  const wrapperRef = useRef<HTMLElement>(null)
  /**
   * 将useform产生的Store实例拿出赋予formInstance
   */
  const [formInstance] = useForm<FormData>(baseProps.form)
  /**
   * 记录是否componentDidMount
   * 有人会说为啥不用useEffect去模拟componentDidMount
   * 是因为需要在render执行，useEffect做不到
   */
  const isMount = useRef<boolean>()
  /* 老规矩上来合并props，每个组件都有这货 */
  const props = useMergeProps<FormProps<FormData>>(
    baseProps,
    defaultProps,
    ctx.componentConfig?.Form,
  )

  const {
    layout,
    labelCol,
    wrapperCol,
    wrapper: Wrapper,
    id,
    requiredSymbol,
    labelAlign,
    disabled,
    colon,
    className,
    validateTrigger,
    size: formSize,
  } = props

  const prefixCls = ctx.getPrefixCls("form")
  const size = formSize || ctx.size
  const innerMethods = formInstance.getInnerMethods(true)
  /**
   * 收敛外部传入给form的参数，当做provider给下面的组件
   * 这是在form上统一设置的，formItem也就对应的，可以覆盖这里设置的
   */
  const contextProps: FormContextProps = {
    requiredSymbol,
    labelAlign,
    disabled,
    colon,
    labelCol,
    wrapperCol,
    layout,
    store: formInstance,
    prefixCls,
    validateTrigger,
    getFormElementId: (field: string) => getId({ getFormElementId, id, field, ID_SUFFIX }),
  }
  if (!isMount.current) {
    innerMethods.innerSetInitialValues(props.initialValues)
  }
  useEffect(() => {
    isMount.current = true
  }, [])

  useEffect(() => {
    let unregister
    if (formProviderCtx.register) {
      unregister = formProviderCtx.register(props.id, formInstance)
    }
    return unregister
  }, [props.id, formInstance])

  useImperativeHandle(ref, () => {
    return formInstance
  })

  // 滚动到目标表单字段位置
  formInstance.scrollToField = (field: IFieldKey<FormData>, options?: ScrollIntoViewOptions) => {
    /**
     * 获取到dom元素
     */
    const node = wrapperRef.current
    /**
     * 外界传的id, 作为获取dom的prefix
     */
    const id = props.id
    if (!node) {
      return
    }
    /**
     * formItem会把这个id放到dom上，好让scroll插件滚动到对应位置
     */
    const fieldNode = node.querySelector(`#${getId({ getFormElementId, id, field, ID_SUFFIX })}`)
    fieldNode &&
      scrollIntoView(fieldNode, {
        behavior: "smooth",
        block: "nearest",
        scrollMode: "if-needed",
        ...options,
      })
  }

  /**
   * 赋给store实例上的callback属性，也就把给from的自定义方法传给store，也就是注册到store上
   * onValuesChange 在两处触发，一个是formProviderCtx上注册的，一个是form上的onValuesChange
   * onChange form上注册的onChange
   * onValidateFail 没给外面暴露
   * onSubmitFailed	数据验证失败后回调事件
   * onSubmit	数据验证成功后回调事件
   */
  innerMethods.innerSetCallbacks({
    onValuesChange: (value, values) => {
      props.onValuesChange && props.onValuesChange(value, values)
      formProviderCtx.onFormValuesChange && formProviderCtx.onFormValuesChange(props.id, value)
    },
    onChange: props.onChange,
    onValidateFail: (errors: { [key in string]: FieldError<any> }) => {
      if (props.scrollToFirstError) {
        const options = isObject(props.scrollToFirstError) ? props.scrollToFirstError : {}
        formInstance.scrollToField(Object.keys(errors)[0], options)
      }
    },
    onSubmitFailed: props.onSubmitFailed,
    onSubmit: (values) => {
      props.onSubmit && props.onSubmit(values)
      formProviderCtx.onFormSubmit && formProviderCtx.onFormSubmit(props.id, values)
    },
  })

  return (
    <ConfigProvider {...ctx} size={size}>
      <FormContext.Provider value={contextProps}>
        <Wrapper
          ref={wrapperRef}
          {...props.wrapperProps}
          /**
           * layout和size在这里修改
           */
          className={cs(
            prefixCls,
            `${prefixCls}-${layout}`,
            `${prefixCls}-size-${size}`,
            className,
          )}
          style={props.style}
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            /* 调用store的submit */
            formInstance.submit()
          }}
          id={id}
        >
          {props.children}
        </Wrapper>
      </FormContext.Provider>
    </ConfigProvider>
  )
}

const FormComponent = forwardRef(Form)

FormComponent.displayName = "Form"

export default FormComponent as <FormData extends IFormData>(
  props: React.PropsWithChildren<FormProps<FormData>> & {
    ref?: React.Ref<FormInstance<FormData>>
  },
) => React.ReactElement
