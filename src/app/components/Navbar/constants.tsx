import { MdOutlineHotel } from "react-icons/md"
import { IoHomeOutline, IoInformationCircleOutline } from "react-icons/io5"
import { v4 as uuidv4 } from "uuid"
import { NavItem } from "./types"

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", icon: <IoHomeOutline title="home" color="" size="20" />, id: uuidv4() },
  {
    label: "About Us",
    icon: <IoInformationCircleOutline title="About Us" size="20" />,
    id: uuidv4(),
  },
  {
    label: "Rooms",
    icon: <MdOutlineHotel title="Rooms" size="20" />,
    id: uuidv4(),
  },
]
