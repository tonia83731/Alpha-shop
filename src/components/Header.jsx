import { ReactComponent as IconSearch } from "./Assets/icons/search.svg";
import { ReactComponent as IconCart } from "./Assets/icons/cart.svg";
import { ReactComponent as IconMoon } from "./Assets/icons/moon.svg";
import { ReactComponent as IconSun } from "./Assets/icons/sun.svg";



const navLink = [
  '男款', '女款', '最新消息', '客製商品', '聯絡我們'
]


function NavLinkItem(){
  const navLinkList = navLink.map( nav =>
    <li className="nav-item">
      <a className="nav-link" href="#">{nav}</a>
    </li>
  )
  return <ul className="nav-list site-menu-list mr-auto">{navLinkList}</ul>
}

function NavIconItem(){
  return(
    <ul className="nav-list site-action-list">
      <li className="nav-item">
        <IconSearch className="nav-icon cursor-point"/>                          
      </li>
      <li className="nav-item">
        <IconCart className="nav-icon cursor-point"/>                          
      </li>
      <li className="nav-item">
        <IconMoon className="nav-icon cursor-point"/> 
        <IconSun className="nav-icon cursor-point"/>                          
      </li>
    </ul>
  )
}

export default function Header(){
  return(
    <header className ="site-header">
      <div className ="header-container mx-auto">
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" className="burger-container">
          <svg className ="icon-toggle cursor-point">
            <use xlinkHref="#svg-icon-toggle"></use>
          </svg>
        </label>
        <nav class="navbar-menu">
          <NavLinkItem/>
          <NavIconItem/>
        </nav>
        <a className="header-logo-container" href="#">
          <svg className="icon-logo cursor-point">
            <use xlinkHref="#svg-icon-logo"></use>
          </svg>
        </a>
      </div>
    </header>
  )
}
