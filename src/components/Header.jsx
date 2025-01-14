import logo from "../assets/img/dc-logo.png"

const Header = (props) => {
  const { headerList } = props;
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <ul className="headerList">
            {headerList.map((item, index) => (
              <li key={index}>
                <a className={item.isActive ? "active" : ""} href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </header>
  )
}

export default Header