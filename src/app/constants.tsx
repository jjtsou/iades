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

const unlimitedAdrenalineUrl =
  "https://app.unlimited-adrenaline.gr/aff/en/810-cAitddtucR?ignoreWebKitOutliers=1738690572"
const UnlimitedAdrenaline = () => (
  <svg viewBox="0 -20 90 150" width={30} height={30}>
    <g>
      <path
        fill="#db0b29"
        d="M43.8,15.1h2.9l0.8-0.6l1.6,2l0.8-1.4h5.2l1.7,0.7l1.1-1l-0.5-1.1l1.3-1.3l1.2,1.3l1.5-0.3l0.4,1.7h1.6
		       l3.1,5.5l0.2,2.3l1.2,1.7L71,26l0,2.5l6.4,11.2l2,2.1l2-0.8l1.7,0.3L81.3,44l-0.2,2.3l5.3,9.4l1.2,0.2l1.8,1.6l-2,1.6l1.6,1.4
		       l3.3,5.9l1.8,0.4l-0.6,1.7l1.3,2.3c2.9-6.3,4.5-13.3,4.5-20.7c0-1.7-0.1-3.4-0.2-5l-1.6-1.4l-0.9,0.7l-1.5-1.1l0.2-1.6l2.6-0.7
		       L97.9,40l0.2-1.6c-1.3-5.2-3.3-10.1-6.1-14.6l-1.2,0.3l-0.9-1.3l-1.9-0.5l0.6-1.5l1.4-0.8l-1.4-1.4l-1.4,0.4l-1-1.4l0.1-1.3
		       c-2.8-3.1-6.1-5.8-9.6-8.1l-1.1-1.4L75,6.9l-1.3,2.3l-2.4,0.4l1-2.2l-0.4-1.7C65.3,2.3,57.9,0.5,50,0.5c-4.6,0-9.1,0.6-13.3,1.8
		       l-1.3,2.6l-3.8,1.1l1,3l-0.2,1.2L29,9.5l-1-2.8l-2.4,0.2c-3.5,2-6.8,4.4-9.7,7.2l-0.8,0.1L14.9,15l0.9,1l-0.4,1l0.2,1.2l-0.8,1.4
		       l-0.3,0L14,17.7l-1.5-1.3l-0.6,0l0.6,1.9L12,19.2l-1,0.3c-3.7,4.8-6.6,10.2-8.4,16.2L3,37l-0.4,1.2L5,39.3l-0.2,0.3l-1.7,0.7
		       L1,39.8l-0.3,0.4l1,1.3l0.1,2.1l-1,1.1c-0.2,1.7-0.3,3.5-0.3,5.3c0,6.4,1.2,12.5,3.4,18.1l1.4-1.9l0.5-2.8l-0.2-1l-0.2-2l2.3-0.3
		       L8,61.9l2.6,1.2l0.7-0.5l-2.2-2.9l1.5-0.5l7.7-10.3l-0.9-0.6l0.5-2.6l1.6-0.2l1-1.2l0.8,0.8l8-10.7l1.8-0.2l1.7-2.1l-2.7-2.1
		       l1.1-0.7l1.6,0.5l6.7-8.9L38,19.4l0.3-1.1l1.1,0.6l1.8-0.4L43.8,15.1z"
      ></path>

      <path
        fill="#db0b29"
        d="M45.4,62.6l7.3,0.5l0.4-1l1.1,0.1l0.3,1.5l1.2-0.4l5.9,0.4l1.1-0.7l1.1,2.5l1.2-0.7l0.6-0.8l4.9,0.3l-1.8-3
		       l0.1-2L66.4,60l0.1-1.8l-5.6-9.3l-2.5-1.4l-1.2-2.4l-1.5-0.2l-1.6-3.6l0.9-2.2l-2.2-3.6l-1.3,0l-1.5,1l0.1,2.4l-1.8,2.2l1.6,0.9
		       l0.8,1.1l-1.4,0.9l-1.3,0l-1.3,1l-1.4,2.6L42,48.9L33.8,59l0.6,2.1l-2.2,1.5l-0.6,1.1l-1.2-0.5L26,68.7l-1.7-0.5l-1,2l0.1,1.7
		       L19,77.3l-0.4,1.6l1.9,0.2l-0.2,2l-2.1,0.6l-1-0.7l-1.6,0.5l-1.8,2.2c3.2,3.5,6.9,6.5,11,8.9l0.3,1.8l1,0.7l0.6-0.3l0.4-1.8
		       l1.1-1.1l0.7-0.1l0.4,2.4l0.7,0.4l-0.1,0.7c2,0.9,4.2,1.7,6.3,2.3l0.5,1l1.3-0.7l-0.5-2.7l0.6-0.4l1.2,2.2l-0.3,1.9l1.5,0.1l0.2-1
		       l0.8,0.3l0.4,0.6c2.6,0.4,5.3,0.7,8,0.7c2.7,0,5.3-0.2,7.9-0.6l1.1,0.3l0.4-0.2L59,97.2l-1.3-2.3l0.6-0.3l2.3,0.7l0.4,1.8l1.3,0.8
		       c4.2-1.1,8.1-2.6,11.8-4.7l0.2-1.5l1-1.3l1.9,0.9c3.4-2.2,6.4-4.8,9.2-7.7l-5.9-3.1l-0.2-1.3L78,80l-2.3-0.3l-1.9,0.3l-0.6,0.8
		       l-3-0.6l-0.2-0.6l1.8-0.9l0.6-2.4l-14.1-7.3l-0.7,1.1l-2.8-0.2v-1.2l-1.6-0.7L52,66L45.4,62.6z"
      ></path>
    </g>
  </svg>
)

const nav_items: NavItemType[] = [
  {
    label: "Home",
    href: "/",
    icon: <IoHomeOutline title="home" size="20" />,
    id: uuidv4(),
  },
  {
    label: "About us",
    href: "/about-us",
    icon: <IoInformationCircleOutline title="About us" size="20" />,
    id: uuidv4(),
  },
  {
    label: "Contact us",
    href: "/contact-us",
    icon: <TiMessages title="Contact us" size="20" />,
    id: uuidv4(),
  },
  {
    label: "Rooms",
    href: "/rooms",
    icon: <MdOutlineHotel title="Rooms" size="20" />,
    id: uuidv4(),
  },
  {
    label: "Things to do",
    href: unlimitedAdrenalineUrl,
    isExternal: true,
    icon: <UnlimitedAdrenaline />,
    id: uuidv4(),
  },
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
