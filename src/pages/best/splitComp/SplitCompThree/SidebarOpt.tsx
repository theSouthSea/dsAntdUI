import { CollapsableSection } from "./CollapsableSection"
import { DraggableSidebar } from "./DraggableSideBar"
import { PlanningSection } from "./planingSection"

const DevelopmentSection = () => (
  <CollapsableSection title="Development">sidebar development section</CollapsableSection>
)
const Header = () => <div className="sidebar-header">ELS project</div>
export const Sidebar = () => {
  return (
    <DraggableSidebar>
      <Header />
      <PlanningSection />
      <DevelopmentSection />
      other Sections
    </DraggableSidebar>
  )
}
