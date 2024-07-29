import React, {
  cloneElement,
  forwardRef,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { CSSTransition } from "react-transition-group"

import cs from "../_util/classNames"
import { isArray, isFunction, isObject, isUndefined } from "../_util/is"
import Grid from "../Grid"
import { FormContext, FormItemContext } from "./context"
import Control from "./control"
import FormItemLabel from "./form-label"
import { FieldError, FormItemProps, VALIDATE_STATUS } from "./interface/form"
import { IFormData } from "./interface/store"

const Row = Grid.Row
const Col = Grid.Col

interface FormItemTipProps extends Pick<FormItemProps, "prefixCls" | "help"> {
  errors: FieldError[]
  warnings: ReactNode[]
}

/**
 * 错误提示文字
 */
const FormItemTip: React.FC<FormItemTipProps> = ({
  prefixCls,
  help,
  errors: propsErrors,
  warnings = [],
}) => {
  /**
   * error信息聚合
   */
  const errorTip = propsErrors.map((item, i) => {
    if (item) {
      return <div key={i}>{item.message}</div>
    }
  })
  const warningTip = []
  /**
   * waring信息聚合
   */
  warnings.map((item, i) => {
    warningTip.push(
      <div key={i} className={`${prefixCls}-message-help-warning`}>
        {item}
      </div>,
    )
  })
  /**
   *  自定义校验文案存在或者warnings存在，则isHelpTip为true
   */
  const isHelpTip = !isUndefined(help) || !!warningTip.length
  /**
   * 是否显示的条件其实是：是否有自定义文案，或者warning或者errors
   */
  const visible = isHelpTip || !!errorTip.length

  return (
    visible && (
      <CSSTransition in={visible} appear classNames="formblink" timeout={300} unmountOnExit>
        <div
          className={cs(`${prefixCls}-message`, {
            [`${prefixCls}-message-help`]: isHelpTip,
          })}
        >
          {!isUndefined(help) ? (
            help
          ) : (
            <>
              {errorTip.length > 0 && errorTip}
              {warningTip.length > 0 && warningTip}
            </>
          )}
        </div>
      </CSSTransition>
    )
  )
}

const Item = <FormData extends IFormData>(
  props: PropsWithChildren<FormItemProps<FormData>>,
  ref: React.Ref<typeof Row>,
) => {
  /**
   * formItem的context只是比formContext多了一个updateFormItem
   */
  const topFormItemContext = useContext(FormItemContext)
  const [errors, setErrors] = useState<{
    [key: string]: FieldError
  }>(null)
  const [warnings, setWarnings] = useState<{
    [key: string]: ReactNode[]
  }>(null)

  /**
   * 获取外部formContext的传入
   */
  const formContext = useContext(FormContext)
  const prefixCls = formContext.prefixCls
  /* 收敛layout属性 */
  const formLayout = props.layout || formContext.layout
  /* 收敛label布局属性 */
  const labelAlign = props.labelAlign || formContext.labelAlign
  /* 收敛disabled属性 */
  const disabled = "disabled" in props ? props.disabled : formContext.disabled
  const errorInfo = errors ? Object.values(errors) : []
  const warningInfo = warnings
    ? Object.values(warnings).reduce((total, next) => total.concat(next), [])
    : []

  /**
   * rest还有
   * style initialValue field labelCol wrapperCol colon disabled rules trigger
   * triggerPropName getValueFromEvent validateTrigger noStyle required hasFeedback help
   * normalize formatter shouldUpdate labelAlign requiredSymbol
   */
  const { label, extra, className, style, validateStatus, hidden } = props
  /**
   * 是否这个组件已经卸载了
   */
  const isDestroyed = useRef(false)

  /**
   * 把error和warning数据同步到UI
   */
  const updateInnerFormItem = (
    field: string,
    params: {
      errors?: FieldError
      warnings?: ReactNode[]
    } = {},
  ) => {
    if (isDestroyed.current) {
      return
    }
    const { errors, warnings } = params || {}

    setErrors((preErrors) => {
      const newErrors = { ...(preErrors || {}) }
      if (errors) {
        newErrors[field] = errors
      } else {
        delete newErrors[field]
      }
      return newErrors
    })
    setWarnings((preWarnings) => {
      const newVal = { ...(preWarnings || {}) }
      if (warnings && warnings.length) {
        newVal[field] = warnings
      } else {
        delete newVal[field]
      }
      return newVal
    })
  }

  const updateFormItem =
    isObject(props.noStyle) && props.noStyle.showErrorTip && topFormItemContext.updateFormItem
      ? topFormItemContext.updateFormItem
      : updateInnerFormItem

  useEffect(() => {
    return () => {
      isDestroyed.current = true
      setErrors(null)
      setWarnings(null)
    }
  }, [])

  /**
   * 传给control的数据
   */
  const contextProps = {
    ...formContext,
    prefixCls,
    updateFormItem,
    disabled,
    field: isArray(props.children) ? undefined : props.field,
    shouldUpdate: props.shouldUpdate,
    trigger: props.trigger,
    normalize: props.normalize,
    getValueFromEvent: props.getValueFromEvent,
    children: props.children,
    rules: props.rules,
    validateTrigger: props.validateTrigger || formContext.validateTrigger || "onChange",
    triggerPropName: props.triggerPropName,
    validateStatus: props.validateStatus,
    formatter: props.formatter,
    noStyle: props.noStyle,
    isFormList: props.isFormList,
    hasFeedback: props.hasFeedback,
    initialValue: props.initialValue,
  }
  const labelClassNames = cs(`${prefixCls}-label-item`, {
    [`${prefixCls}-label-item-left`]: labelAlign === "left",
  })

  /**
   * 收敛状态 自定义validateStatus必须跟feedback一起用在control的右边才有icon
   */
  const itemStatus = useMemo(() => {
    if (validateStatus) {
      return validateStatus
    }
    if (errorInfo.length) {
      return VALIDATE_STATUS.error
    }
    if (warningInfo.length) {
      return VALIDATE_STATUS.warning
    }
    return undefined
  }, [errors, warnings, validateStatus])

  const hasHelp = useMemo(() => {
    return !isUndefined(props.help) || warningInfo.length > 0
  }, [props.help, warnings])

  const classNames = cs(
    // width: 100%;
    // margin-bottom: 20px;
    // display: flex;
    // justify-content: flex-start;
    // align-items: flex-start;
    `${prefixCls}-item`,
    {
      /* margin-bottom: 0 */
      [`${prefixCls}-item-error`]:
        hasHelp || (!validateStatus && itemStatus === VALIDATE_STATUS.error),
      // 让下面的control组件定义backgroundcolor
      [`${prefixCls}-item-status-${itemStatus}`]: itemStatus,
      // 无样式
      [`${prefixCls}-item-has-help`]: hasHelp,
      // display: none
      [`${prefixCls}-item-hidden`]: hidden,
      /* 让control下的组件定义 padding-right: 28px; */
      [`${prefixCls}-item-has-feedback`]: itemStatus && props.hasFeedback,
    },
    /* 无样式 */
    `${prefixCls}-layout-${formLayout}`,
    className,
  )

  const cloneElementWithDisabled = () => {
    const { field, children } = props
    if (isFunction(children)) {
      return <Control {...(field ? { key: field } : {})}>{(...rest) => children(...rest)}</Control>
    }
    if (isArray(children)) {
      const childrenDom = React.Children.map(children, (child, i) => {
        const key = (isObject(child) && (child as ReactElement).key) || i
        return isObject(child) ? cloneElement(child as ReactElement, { key }) : child
      })
      return <Control>{childrenDom}</Control>
    }
    if (React.Children.count(children) === 1) {
      if (field) {
        return <Control key={field}>{children}</Control>
      }
      if (isObject(children)) {
        return <Control>{children}</Control>
      }
    }

    return children
  }
  return (
    <FormItemContext.Provider value={contextProps}>
      {props.noStyle ? (
        cloneElementWithDisabled()
      ) : (
        <Row ref={ref} className={classNames} div={formLayout !== "horizontal"} style={style}>
          {label ? (
            <Col
              {...(props.labelCol || formContext.labelCol)}
              className={cs(
                labelClassNames,
                props.labelCol?.className,
                formContext.labelCol?.className,
                {
                  [`${prefixCls}-label-item-flex`]: !props.labelCol && !formContext.labelCol,
                },
              )}
            >
              <FormItemLabel
                htmlFor={props.field && formContext.getFormElementId(props.field)}
                label={label}
                prefix={prefixCls}
                requiredSymbol={
                  "requiredSymbol" in props ? props.requiredSymbol : formContext.requiredSymbol
                }
                required={props.required}
                rules={props.rules}
                showColon={"colon" in props ? props.colon : formContext.colon}
              />
            </Col>
          ) : null}
          <Col
            className={cs(`${prefixCls}-item-wrapper`, {
              [`${prefixCls}-item-wrapper-flex`]: !props.wrapperCol && !formContext.wrapperCol,
            })}
            {...(props.wrapperCol || formContext.wrapperCol)}
          >
            {cloneElementWithDisabled()}
            <FormItemTip
              prefixCls={prefixCls}
              help={props.help}
              errors={errorInfo}
              warnings={warningInfo}
            />
            {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
          </Col>
        </Row>
      )}
    </FormItemContext.Provider>
  )
}

const ItemComponent = forwardRef(Item)

ItemComponent.defaultProps = {
  trigger: "onChange",
  triggerPropName: "value",
}

ItemComponent.displayName = "FormItem"

export default ItemComponent as <FormData = any>(
  props: React.PropsWithChildren<FormItemProps<FormData>> & {
    ref?: React.Ref<(typeof Row)["prototype"]>
  },
) => React.ReactElement
