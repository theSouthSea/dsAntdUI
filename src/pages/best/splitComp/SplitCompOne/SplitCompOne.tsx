import "../styles.css"

// 存在的问题: 太大,包含的功能太多,无法一眼看完
export const JiraIssuePage = () => {
  return (
    <div className="app">
      <div className="top-bar">
        <div className="logo">logo</div>
        <ul className="main-menu">
          <li>
            <a href="#">Your work</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Filters</a>
          </li>
          <li>
            <a href="#">Dashboards</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Apps</a>
          </li>
        </ul>
        <button className="create-button">Create</button>
        more top bar items here like search bar and profile menu
      </div>
      <div className="main-content">
        <div className="sidebar">
          <div className="sidebar-header">ELS project</div>
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
          <div className="sidebar-section">sidebar development section</div>
          other sections
        </div>
        <div className="page-content">... here there will be a lot of code for issue view</div>
      </div>
    </div>
  )
}
