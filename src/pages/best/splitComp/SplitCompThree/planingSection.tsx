import { CollapsableSection } from "./CollapsableSection"

export const PlanningSection = () => {
  return (
    <CollapsableSection title="Planning">
      <button className="board-picker">ELS board</button>

      <ul className="section-menu">... all the menu items here</ul>
    </CollapsableSection>
  )
}
