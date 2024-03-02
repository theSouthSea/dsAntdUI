const Header = () => <div className="sidebar-header">ELS project</div>

const PlanningSection = () => (
  <div className="sidebar-section">
    <div className="sidebar-section-title">Planning</div>
    <button className="board-picker">ELS board</button>

    <ul className="section-menu">
      <li>
        <a href="#">Roadmap</a>
      </li>
      <li>
        <a href="#">Backlog</a>
      </li>
      <li>
        <a href="#">Kanban board</a>
      </li>
      <li>
        <a href="#">Reports</a>
      </li>
      <li>
        <a href="#">Roadmap</a>
      </li>
    </ul>

    <ul className="section-menu">
      <li>
        <a href="#">Issues</a>
      </li>
      <li>
        <a href="#">Components</a>
      </li>
    </ul>
  </div>
)

const DevelopmentSection = () => <div className="sidebar-section">sidebar development section</div>
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Header />
      <PlanningSection />
      <DevelopmentSection />
      other sidebar sections
    </div>
  )
}
