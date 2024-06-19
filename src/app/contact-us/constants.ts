import { GoLocation } from "react-icons/go"
import { BsPhone } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { FaWhatsapp } from "react-icons/fa6"

const contactOptions = [
  {
    label: "Address",
    values: [{ label: "Agia Anna, Naxos 84 300, Greece", icon: null }],
    icon: GoLocation,
  },
  {
    label: "Phone Number",
    values: [
      { label: "+30 22850 44129", icon: null },
      { label: "+30 6972 441744", icon: null },
      { label: "+30 6987 257926", Icon: FaWhatsapp },
    ],
    icon: BsPhone,
  },
  {
    label: "Email",
    values: [{ label: "iadesstudios@yahoo.gr", icon: null }],
    icon: HiOutlineMail,
  },
]

export { contactOptions }
