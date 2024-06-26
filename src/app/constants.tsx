import { MdOutlineHotel } from "react-icons/md"
import { IoHomeOutline, IoInformationCircleOutline } from "react-icons/io5"
import { TiMessages } from "react-icons/ti"
import { v4 as uuidv4 } from "uuid"
import { NavItemType } from "./components/Navbar/types"
import { Properties } from "./types"

export * as iadesHero from "/public/images/iades/iades_hero.jpg"

import imgRoom1 from "/public/images/rooms/room1.jpg"
import imgRoom2 from "/public/images/rooms/room2.jpg"
import imgRoom3 from "/public/images/rooms/room3.jpg"
import imgRoom4 from "/public/images/rooms/room4.jpg"
import imgRoom5 from "/public/images/rooms/room5.jpg"
import imgRoom6 from "/public/images/rooms/room6.jpg"
import imgNaxos1 from "/public/images/naxos/naxos1.jpg"
import imgNaxos2 from "/public/images/naxos/naxos2.jpg"
import imgNaxos5 from "/public/images/naxos/naxos5.jpg"
import imgNaxos6 from "/public/images/naxos/naxos6.jpg"
import imgNaxos7 from "/public/images/naxos/naxos7.jpg"
import imgNaxos8 from "/public/images/naxos/naxos8.jpg"
import imgNaxos11 from "/public/images/naxos/naxos11.jpg"
import imgNaxos13 from "/public/images/naxos/naxos13.jpg"
import imgNaxos14 from "/public/images/naxos/naxos14.jpg"
import imgNaxos15 from "/public/images/naxos/naxos15.jpg"
import imgNaxos18 from "/public/images/naxos/naxos18.jpg"
import imgNaxos19 from "/public/images/naxos/naxos19.jpg"

const naxosImages = [
  imgNaxos1,
  imgNaxos2,
  imgNaxos5,
  imgNaxos6,
  imgNaxos7,
  imgNaxos8,
  imgNaxos11,
  imgNaxos13,
  imgNaxos14,
  imgNaxos15,
  imgNaxos18,
  imgNaxos19,
]

const nav_items: NavItemType[] = [
  {
    label: "Home",
    href: "/",
    icon: <IoHomeOutline title="home" size="20" />,
    id: uuidv4(),
  },
  {
    label: "About Us",
    href: "/about-us",
    icon: <IoInformationCircleOutline title="About Us" size="20" />,
    id: uuidv4(),
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    icon: <TiMessages title="Contact Us" size="20" />,
    id: uuidv4(),
  },
  // {
  //   label: "Rooms",
  //   icon: <MdOutlineHotel title="Rooms" size="20" />,
  //   id: uuidv4(),
  // },
]

const properties: Properties = [
  {
    id: uuidv4(),
    imageUrl: imgRoom1,
    imageAlt: "Rear view of modern studio with sea view",
    people: 2,
    beds: 1,
    title: "Deluxe studio with sea view",
    sqmt: 20,
  },
  {
    id: uuidv4(),
    imageUrl: imgRoom2,
    imageAlt: "Rear view of modern studio with balcony view",
    people: 2,
    beds: 1,
    title: "Deluxe studio",
    sqmt: 20,
  },
  {
    id: uuidv4(),
    imageUrl: imgRoom3,
    imageAlt: "Rear view of modern studio with sea view",
    people: 3,
    beds: 2,
    title: "Apartment with sea view",
    sqmt: 35,
  },
  {
    id: uuidv4(),
    imageUrl: imgRoom4,
    imageAlt: "Rear view of modern studio with balcony view",
    people: 2,
    beds: 2,
    title: "Studio (2 Adults)",
    sqmt: 18,
  },
  {
    id: uuidv4(),
    imageUrl: imgRoom5,
    imageAlt: "Rear view of studio",
    people: 3,
    beds: 2,
    title: "Family room",
    sqmt: 30,
  },
  {
    id: uuidv4(),
    imageUrl: imgRoom6,
    imageAlt: "Rear view of modern studio with balcony view",
    people: 2,
    beds: 1,
    title: "Deluxe double room",
    sqmt: 30,
  },
  {
    id: uuidv4(),
    imageUrl: imgRoom4,
    imageAlt: "Rear view of modern studio with balcony view",
    people: 4,
    beds: 3,
    title: "Two-Bedroom Apartment",
    sqmt: 45,
  },
]

export { nav_items, properties, naxosImages }
