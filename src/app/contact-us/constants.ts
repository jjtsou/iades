import { GoLocation } from "react-icons/go"
import { BsPhone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"

const contactOptions = [
  {
    label: "Address",
    values: ["Agia Anna, Naxos 84 300, Greece"],
    icon: GoLocation,
  },
  {
    label: "Phone Number",
    values: ["+30 22850 44129", "+30 6972 441744"],
    icon: BsPhone,
  },
  {
    label: "Email",
    values: ["iadesstudios@yahoo.gr"],
    icon: HiOutlineMail,
  },
]

export { contactOptions }
