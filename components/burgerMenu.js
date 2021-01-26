import { slide as Menu } from "react-burger-menu"
import Link from 'next/link'
import "./burgerMenu.module.css"

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <Link className="menu-item" href="/">
        Home
      </Link>

      <Link className="menu-item" href="/about">
        About
      </Link>

      <Link className="menu-item" href="/services">
        Services
      </Link>

      <Link className="menu-item" href="/contact">
        Contact us
      </Link>
    </Menu>
  );
};
