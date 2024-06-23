import { nav_items } from "../../constants"
import NavItem from "./navItem"

const NavItems = ({ onClick }: { onClick?: () => void }) =>
  nav_items.map(({ label, href, icon, id }) => (
    <NavItem key={id} label={label} href={href} icon={icon} onClick={onClick} />
  ))

export default NavItems
