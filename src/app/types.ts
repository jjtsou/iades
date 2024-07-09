import { StaticImageData } from "next/image"
import { IconType } from "react-icons"

type Property = {
  imageUrl: StaticImageData
  imageAlt: string
  roomImages: StaticImageData[]
  people: number
  beds: number
  title: string
  description: string
  sqmt: number
  details: { name: string; icon: IconType }[]
  facilities: string[]
}

type Properties = { [id: string]: Property }

export type { Properties, Property }
