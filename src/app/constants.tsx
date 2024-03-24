import { MdOutlineHotel } from "react-icons/md"
import { IoHomeOutline, IoInformationCircleOutline } from "react-icons/io5"
import { v4 as uuidv4 } from "uuid"
import { NavItem } from "./components/Navbar/types"

import imgRoom1 from "/public/images/rooms/room1.jpg"
import imgRoom2 from "/public/images/rooms/room2.jpg"
import imgRoom3 from "/public/images/rooms/room3.jpg"
import imgRoom4 from "/public/images/rooms/room4.jpg"
import imgRoom5 from "/public/images/rooms/room5.jpg"
import imgRoom6 from "/public/images/rooms/room6.jpg"
import { Properties } from "./types"

const nav_items: NavItem[] = [
  { label: "Home", icon: <IoHomeOutline title="home" size="20" />, id: uuidv4() },
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

const properties: Properties = [
  {
    id: uuidv4(),
    imageUrl: imgRoom1,
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    id: uuidv4(),
    imageUrl: imgRoom2,
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    id: uuidv4(),
    imageUrl: imgRoom3,
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    id: uuidv4(),
    imageUrl: imgRoom4,
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    id: uuidv4(),
    imageUrl: imgRoom5,
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    id: uuidv4(),
    imageUrl: imgRoom6,
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
]

export { nav_items, properties }
