import "./styles.css"

import AccessAlarmIconGoogle from "@mui/icons-material/AccessAlarm"

// import { AlertOutlined } from "@ant-design/icons"
import { ButtonWithIconComponent } from "@/libs/best/buttons/with-icon-component"
import { ButtonWithIconElement } from "@/libs/best/buttons/with-icon-element"
import { ButtonWithIconRenderFunc } from "@/libs/best/buttons/with-icon-function"

const AccessAlarmIcon = (props) => <AccessAlarmIconGoogle color="error" {...props} />

const Page = () => {
  return (
    <div className="App">
      <h3>Button with icon as an Element</h3>
      <ButtonWithIconElement icon={<AccessAlarmIconGoogle color="warning" />}>
        button here
      </ButtonWithIconElement>

      <h3>Button with icon as a Component</h3>
      <ButtonWithIconComponent Icon={AccessAlarmIcon}>button here</ButtonWithIconComponent>

      <h3>Button with icon as a Function</h3>
      <ButtonWithIconRenderFunc
        renderIcon={(settings) => (
          <AccessAlarmIconGoogle fontSize={settings.fontSize} color="success" />
        )}
      >
        button here
      </ButtonWithIconRenderFunc>
    </div>
  )
}

export default function App() {
  return <Page />
}
