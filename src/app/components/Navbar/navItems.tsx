import { nav_items } from "../../constants"
import NavItem from "./navItem"

const NavItems = () =>
  nav_items.map(({ label, href, icon, id }) => (
    <NavItem key={id} label={label} href={href} icon={icon} />
  ))

export default NavItems
