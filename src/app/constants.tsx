import {
  MdOutlineHotel,
  MdOutlineBalcony,
  MdOutlineCoffeeMaker,
  MdOutlineWifi,
} from "react-icons/md"
import { IoHomeOutline, IoInformationCircleOutline } from "react-icons/io5"
import { FaShower, FaTv, FaKitchenSet } from "react-icons/fa6"
import { TbAirConditioning } from "react-icons/tb"
import { PiMountains } from "react-icons/pi"
import { TiMessages } from "react-icons/ti"
import { v4 as uuidv4 } from "uuid"
import { NavItemType } from "./components/Navbar/types"
import { Properties } from "./types"

export * as iadesHero from "/public/images/iades/iades_hero.jpg"

import apartment_sea_view_photo_1 from "/public/images/rooms/apartment_sea-view/ABOVE - Iades Studios-1.jpg"
import apartment_sea_view_photo_2 from "/public/images/rooms/apartment_sea-view/ABOVE - Iades Studios-11.jpg"
import apartment_sea_view_photo_3 from "/public/images/rooms/apartment_sea-view/ABOVE - Iades Studios-15.jpg"
import apartment_sea_view_photo_4 from "/public/images/rooms/apartment_sea-view/ABOVE - Iades Studios-18.jpg"
import apartment_sea_view_photo_5 from "/public/images/rooms/apartment_sea-view/ABOVE - Iades Studios-35.jpg"
import apartment_sea_view_photo_6 from "/public/images/rooms/apartment_sea-view/ABOVE - Iades Studios-5.jpg"
import apartment_sea_view_photo_7 from "/public/images/rooms/apartment_sea-view/ABOVE - Iades Studios-7.jpg"
import apartment_sea_view_photo_8 from "/public/images/rooms/apartment_sea-view/ABOVE - Iades Studios-9.jpg"

const APARTMENT_SEA_VIEW_PHOTOS = [
  apartment_sea_view_photo_1,
  apartment_sea_view_photo_2,
  apartment_sea_view_photo_3,
  apartment_sea_view_photo_4,
  apartment_sea_view_photo_5,
  apartment_sea_view_photo_6,
  apartment_sea_view_photo_7,
  apartment_sea_view_photo_8,
]

import del_double_room_photo_1 from "/public/images/rooms/del-double-room/ABOVE - IADES 2023-3.jpg"
import del_double_room_photo_2 from "/public/images/rooms/del-double-room/ABOVE - IADES 2023-4.jpg"
import del_double_room_photo_3 from "/public/images/rooms/del-double-room/ABOVE - IADES 2023-5.jpg"
import del_double_room_photo_4 from "/public/images/rooms/del-double-room/ABOVE - IADES 2023-9.jpg"
import del_double_room_photo_5 from "/public/images/rooms/del-double-room/ABOVE - IADES 2023-13.jpg"
import del_double_room_photo_6 from "/public/images/rooms/del-double-room/ABOVE - IADES 2023-21.jpg"

const DEL_DOUBLE_ROOM_PHOTOS = [
  del_double_room_photo_1,
  del_double_room_photo_2,
  del_double_room_photo_3,
  del_double_room_photo_4,
  del_double_room_photo_5,
  del_double_room_photo_6,
]

import del_studio_photo_1 from "/public/images/rooms/del-studio/ABOVE - ABOVE - Iades 2021 Room B 1.jpg"
import del_studio_photo_2 from "/public/images/rooms/del-studio/ABOVE - ABOVE - Iades 2021 Room B 4.jpg"
import del_studio_photo_3 from "/public/images/rooms/del-studio/ABOVE - ABOVE - Iades 2021 Room B 5.jpg"
import del_studio_photo_4 from "/public/images/rooms/del-studio/ABOVE - ABOVE - Iades 2021 Room B 9.jpg"
import del_studio_photo_5 from "/public/images/rooms/del-studio/ABOVE - ABOVE - Iades 2021 Room B 40.jpg"

const DEL_STUDIO_PHOTOS = [
  del_studio_photo_1,
  del_studio_photo_2,
  del_studio_photo_3,
  del_studio_photo_4,
  del_studio_photo_5,
]

import del_studio_sea_view_photo_1 from "/public/images/rooms/del-studio_sea-view/ABOVE - ABOVE - Iades 2021 2 1.jpg"
import del_studio_sea_view_photo_2 from "/public/images/rooms/del-studio_sea-view/ABOVE - ABOVE - Iades 2021 2 5.jpg"
import del_studio_sea_view_photo_3 from "/public/images/rooms/del-studio_sea-view/ABOVE - ABOVE - Iades 2021 2 6.jpg"
import del_studio_sea_view_photo_4 from "/public/images/rooms/del-studio_sea-view/ABOVE - ABOVE - Iades 2021 2 17.jpg"
import del_studio_sea_view_photo_5 from "/public/images/rooms/del-studio_sea-view/ABOVE - ABOVE - Iades 2021 2 21.jpg"
import del_studio_sea_view_photo_6 from "/public/images/rooms/del-studio_sea-view/ABOVE - ABOVE - Iades 2021 2 22.jpg"

const DEL_STUDIO_SEA_VIEW_PHOTOS = [
  del_studio_sea_view_photo_1,
  del_studio_sea_view_photo_2,
  del_studio_sea_view_photo_3,
  del_studio_sea_view_photo_4,
  del_studio_sea_view_photo_5,
  del_studio_sea_view_photo_6,
]

import family_room_photo_1 from "/public/images/rooms/family-room/ABOVE - IADES 2022 1-1.jpg"
import family_room_photo_2 from "/public/images/rooms/family-room/ABOVE - IADES 2022 1-3.jpg"
import family_room_photo_3 from "/public/images/rooms/family-room/ABOVE - IADES 2022 1-18.jpg"
import family_room_photo_4 from "/public/images/rooms/family-room/ABOVE - IADES 2022 1-20.jpg"
import family_room_photo_5 from "/public/images/rooms/family-room/ABOVE - IADES 2022 1-21.jpg"
import family_room_photo_6 from "/public/images/rooms/family-room/ABOVE - IADES 2022 1-24.jpg"

const FAMILY_ROOM_PHOTOS = [
  family_room_photo_1,
  family_room_photo_2,
  family_room_photo_3,
  family_room_photo_4,
  family_room_photo_5,
  family_room_photo_6,
]

import studio_two_adults_photo_1 from "/public/images/rooms/studio_two-adults/ABOVE - IADES 2023-79.jpg"
import studio_two_adults_photo_2 from "/public/images/rooms/studio_two-adults/ABOVE - IADES 2023-82.jpg"
import studio_two_adults_photo_3 from "/public/images/rooms/studio_two-adults/ABOVE - IADES 2023-84.jpg"
import studio_two_adults_photo_4 from "/public/images/rooms/studio_two-adults/ABOVE - IADES 2023-86.jpg"
import studio_two_adults_photo_5 from "/public/images/rooms/studio_two-adults/ABOVE - IADES 2023-89.jpg"

const STUDIO_TWO_ADULTS_PHOTOS = [
  studio_two_adults_photo_1,
  studio_two_adults_photo_2,
  studio_two_adults_photo_3,
  studio_two_adults_photo_4,
  studio_two_adults_photo_5,
]

import two_bedroom_apartment_photo_1 from "/public/images/rooms/two-bedroom-apartment/ABOVE - IADES 2023-25.jpg"
import two_bedroom_apartment_photo_2 from "/public/images/rooms/two-bedroom-apartment/ABOVE - IADES 2023-79.jpg"
import two_bedroom_apartment_photo_3 from "/public/images/rooms/two-bedroom-apartment/ABOVE - IADES 2023-85.jpg"
import two_bedroom_apartment_photo_4 from "/public/images/rooms/two-bedroom-apartment/ABOVE - IADES 2023-86.jpg"
import two_bedroom_apartment_photo_5 from "/public/images/rooms/two-bedroom-apartment/ABOVE - IADES 2023-89.jpg"

const TWO_BEDROOM_APARTMENT_PHOTOS = [
  two_bedroom_apartment_photo_1,
  two_bedroom_apartment_photo_2,
  two_bedroom_apartment_photo_3,
  two_bedroom_apartment_photo_4,
  two_bedroom_apartment_photo_5,
]

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

import imgRoom1 from "/public/images/rooms/general/room1.jpg"
import imgRoom2 from "/public/images/rooms/general/room2.jpg"
import imgRoom3 from "/public/images/rooms/general/room3.jpg"
import imgRoom4 from "/public/images/rooms/general/room4.jpg"
import imgRoom5 from "/public/images/rooms/general/room5.jpg"
import imgRoom6 from "/public/images/rooms/general/room6.jpg"

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

const properties: Properties = {
  "64a36589-9e1f-43ab-810d-c29ab6165e5a": {
    imageUrl: imgRoom1,
    imageAlt: "Rear view of modern studio with sea view",
    roomImages: DEL_STUDIO_SEA_VIEW_PHOTOS,
    people: 2,
    beds: 1,
    title: "Deluxe studio with sea view",
    description:
      "Self-catered studio with private bathroom with shower and balcony with table and chairs.",
    sqmt: 20,
    details: [
      { name: "Balcony", icon: MdOutlineBalcony },
      { name: "View", icon: PiMountains },
      { name: "Air conditioning", icon: TbAirConditioning },
      { name: "Private bathroom", icon: FaShower },
      { name: "Flat-screen TV", icon: FaTv },
      { name: "Coffee machine", icon: MdOutlineCoffeeMaker },
      { name: "Free WiFi", icon: MdOutlineWifi },
    ],
    facilities: [
      "TV",
      "Refrigerator",
      "Coffee machine",
      "Linen",
      "Flat-screen TV",
      "Private entrance",
      "Towels",
      "Wardrobe or closet",
      "Socket near the bed",
      "Air conditioning",
      "Tea/Coffee maker",
      "Clothes rack",
      "Fold-up bed",
    ],
  },
  "64a36589-9e1f-43ab-810d-c29ab6165e5b": {
    imageUrl: imgRoom2,
    imageAlt: "Rear view of modern studio with balcony view",
    roomImages: DEL_STUDIO_PHOTOS,
    people: 2,
    beds: 1,
    title: "Deluxe studio",
    description:
      "This air-conditioned studio features a private bathroom, a private entrance, a tea and coffee maker as well as a balcony. The unit offers 1 bed.",
    sqmt: 20,
    details: [
      { name: "Balcony", icon: MdOutlineBalcony },
      { name: "View", icon: PiMountains },
      { name: "Air conditioning", icon: TbAirConditioning },
      { name: "Private bathroom", icon: FaShower },
      { name: "Flat-screen TV", icon: FaTv },
      { name: "Coffee machine", icon: MdOutlineCoffeeMaker },
      { name: "Free WiFi", icon: MdOutlineWifi },
    ],
    facilities: [
      "TV",
      "Refrigerator",
      "Coffee machine",
      "Linen",
      "Flat-screen TV",
      "Private entrance",
      "Towels",
      "Wardrobe or closet",
      "Socket near the bed",
      "Air conditioning",
      "Tea/Coffee maker",
      "Clothes rack",
      "Fold-up bed",
    ],
  },
  "64a36589-9e1f-43ab-810d-c29ab6165e5c": {
    imageUrl: imgRoom3,
    imageAlt: "Rear view of modern studio with sea view",
    roomImages: APARTMENT_SEA_VIEW_PHOTOS,
    people: 3,
    beds: 2,
    title: "Apartment with sea view",
    description:
      "Featuring a private entrance, this air-conditioned apartment comprises one living room, one separate bedroom and one bathroom with a shower. This apartment features a tea and coffee maker, a wardrobe, a flat-screen TV and a balcony. The unit offers two beds.",
    sqmt: 35,
    details: [
      { name: "Balcony", icon: MdOutlineBalcony },
      { name: "View", icon: PiMountains },
      { name: "Air conditioning", icon: TbAirConditioning },
      { name: "Private bathroom", icon: FaShower },
      { name: "Flat-screen TV", icon: FaTv },
      { name: "Coffee machine", icon: MdOutlineCoffeeMaker },
      { name: "Free WiFi", icon: MdOutlineWifi },
    ],
    facilities: [
      "TV",
      "Refrigerator",
      "Coffee machine",
      "Linen",
      "Flat-screen TV",
      "Private entrance",
      "Sofa bed",
      "Towels",
      "Wardrobe or closet",
      "Socket near the bed",
      "Air conditioning",
      "Tea/Coffee maker",
      "Clothes rack",
      "Fold-up bed",
    ],
  },
  "64a36589-9e1f-43ab-810d-c29ab6165e5d": {
    imageUrl: imgRoom4,
    imageAlt: "Rear view of modern studio with balcony view",
    roomImages: STUDIO_TWO_ADULTS_PHOTOS,
    people: 2,
    beds: 2,
    title: "Studio (2 Adults)",
    description:
      "Self-catered studio with private bathroom with shower and balcony with table and chairs.",
    sqmt: 18,
    details: [
      { name: "Balcony", icon: MdOutlineBalcony },
      { name: "View", icon: PiMountains },
      { name: "Kitchen", icon: FaKitchenSet },
      { name: "Air conditioning", icon: TbAirConditioning },
      { name: "Private bathroom", icon: FaShower },
      { name: "Flat-screen TV", icon: FaTv },
      { name: "Free WiFi", icon: MdOutlineWifi },
    ],
    facilities: [
      "TV",
      "Refrigerator",
      "Linen",
      "Flat-screen TV",
      "Private entrance",
      "Kitchenware",
      "Kitchenette",
      "Kitchen",
      "Towels",
      "Wardrobe or closet",
      "Socket near the bed",
      "Air conditioning",
      "Clothes rack",
      "Fold-up bed",
    ],
  },
  "64a36589-9e1f-43ab-810d-c29ab6165e5e": {
    imageUrl: imgRoom5,
    imageAlt: "Rear view of studio",
    roomImages: FAMILY_ROOM_PHOTOS,
    people: 3,
    beds: 2,
    title: "Family room",
    description:
      "Self-catered family room with private bathroom with shower and balcony with table and chairs. Please note that this room is located on the semi-basement floor. Please note that this room can accommodate either 4 adults or 2adults and 2 children.",
    sqmt: 30,
    details: [
      { name: "Balcony", icon: MdOutlineBalcony },
      { name: "View", icon: PiMountains },
      { name: "Kitchen", icon: FaKitchenSet },
      { name: "Air conditioning", icon: TbAirConditioning },
      { name: "Private bathroom", icon: FaShower },
      { name: "Flat-screen TV", icon: FaTv },
      { name: "Free WiFi", icon: MdOutlineWifi },
    ],
    facilities: [
      "TV",
      "Refrigerator",
      "Linen",
      "Flat-screen TV",
      "Private entrance",
      "Towels",
      "Wardrobe or closet",
      "Socket near the bed",
      "Sofa bed",
      "Air conditioning",
      "Kitchenware",
      "Kitchenette",
      "Kitchen",
      "Clothes rack",
      "Fold-up bed",
    ],
  },
  "64a36589-9e1f-43ab-810d-c29ab6165e5f": {
    imageUrl: imgRoom6,
    imageAlt: "Rear view of modern studio with balcony view",
    roomImages: DEL_DOUBLE_ROOM_PHOTOS,
    people: 2,
    beds: 1,
    title: "Deluxe double room",
    description:
      "This air-conditioned double room has a private bathroom, a private entrance, a tea and coffee maker as well as a balcony. The unit has 1 bed.",
    sqmt: 30,
    details: [
      { name: "Balcony", icon: MdOutlineBalcony },
      { name: "View", icon: PiMountains },
      { name: "Air conditioning", icon: TbAirConditioning },
      { name: "Private bathroom", icon: FaShower },
      { name: "Flat-screen TV", icon: FaTv },
      { name: "Coffee machine", icon: MdOutlineCoffeeMaker },
      { name: "Free WiFi", icon: MdOutlineWifi },
    ],
    facilities: [
      "TV",
      "Refrigerator",
      "Coffee machine",
      "Linen",
      "Flat-screen TV",
      "Private entrance",
      "Towels",
      "Wardrobe or closet",
      "Socket near the bed",
      "Air conditioning",
      "Tea/Coffee maker",
      "Clothes rack",
    ],
  },
  "64a36589-9e1f-43ab-810d-c29ab6165e5g": {
    imageUrl: imgRoom4,
    imageAlt: "Rear view of modern studio with balcony view",
    roomImages: TWO_BEDROOM_APARTMENT_PHOTOS,
    people: 4,
    beds: 3,
    title: "Two-Bedroom Apartment",
    description:
      "Self-catered family room with private bathroom with shower and 2 balconies with table and chairs.",
    sqmt: 45,
    details: [
      { name: "Balcony", icon: MdOutlineBalcony },
      { name: "View", icon: PiMountains },
      { name: "Kitchen", icon: FaKitchenSet },
      { name: "Air conditioning", icon: TbAirConditioning },
      { name: "Private bathroom", icon: FaShower },
      { name: "Flat-screen TV", icon: FaTv },
      { name: "Free WiFi", icon: MdOutlineWifi },
    ],
    facilities: [
      "TV",
      "Refrigerator",
      "Linen",
      "Flat-screen TV",
      "Private entrance",
      "Towels",
      "Wardrobe or closet",
      "Socket near the bed",
      "Air conditioning",
      "Kitchenware",
      "Kitchenette",
      "Kitchen",
      "Clothes rack",
    ],
  },
}

export { nav_items, properties, naxosImages }
