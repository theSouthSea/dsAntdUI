const Logo = () => <div className="logo">logo</div>
const MainMenu = () => (
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
)

const Create = () => <button className="create-button">Create</button>
export const Topbar = () => {
  return (
    <div className="top-bar">
      <Logo />
      <MainMenu />
      <Create />
      more top bar components here like SearchBar and ProfileMenu
    </div>
  )
}
