export const Topbar = () => {
  return (
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
  )
}
