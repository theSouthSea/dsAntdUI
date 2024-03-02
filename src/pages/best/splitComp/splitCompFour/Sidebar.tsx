import { CollapsableSection } from "../SplitCompThree/CollapsableSection"
import { DraggableSidebar } from "../SplitCompThree/DraggableSideBar"
import { PlanningSection } from "../SplitCompThree/planingSection"
import SomeSection from "./SomeSectionOpt"

const Header = () => <div className="sidebar-header">ELS project</div>
const DevelopmentSection = () => (
  <CollapsableSection title="Development">sidebar development section</CollapsableSection>
)
export const Sidebar = () => {
  return (
    <DraggableSidebar>
      <Header />
      <PlanningSection />
      <DevelopmentSection />
      <SomeSection />
    </DraggableSidebar>
  )
}
