import { NAV_ITEMS } from "./constants"
import NavItem from "./navItem"

const NavItems = () =>
  NAV_ITEMS.map(({ label, href, icon, id }) => (
    <NavItem key={id} label={label} href={href} icon={icon} />
  ))

export default NavItems
