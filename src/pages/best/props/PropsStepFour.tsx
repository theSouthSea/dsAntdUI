import AccessAlarmIconGoogle from "@mui/icons-material/AccessAlarm"

import { ButtonWithIconComponentState } from "@/libs/best/buttons/with-icon-component"
import { ButtonWithIconElementState } from "@/libs/best/buttons/with-icon-element"
import { ButtonWithIconRenderFuncState } from "@/libs/best/buttons/with-icon-function"

const AlarmIconWithHoverForElement = (props) => {
  return <AccessAlarmIconGoogle {...props} color={props.isHovered ? "primary" : "warning"} />
}

const Page = () => {
  return (
    <div className="App">
      <h3>Button with icon as an Element</h3>
      <ButtonWithIconElementState icon={<AlarmIconWithHoverForElement />}>
        button here
      </ButtonWithIconElementState>

      <h3>Button with icon as a Component</h3>
      <ButtonWithIconComponentState Icon={AlarmIconWithHoverForElement}>
        button here
      </ButtonWithIconComponentState>

      <h3>Button with icon as a Function</h3>
      <ButtonWithIconRenderFuncState
        renderIcon={(settings) => (
          <AccessAlarmIconGoogle
            fontSize={settings.fontSize}
            color={settings.isHovered ? "primary" : "warning"}
          />
        )}
      >
        button here
      </ButtonWithIconRenderFuncState>
    </div>
  )
}

export default function App() {
  return <Page />
}
