import { StaticImageData } from "next/image"

type Property = {
  id: string
  imageUrl: StaticImageData
  imageAlt: string
  people: number
  beds: number
  title: string
  sqmt: number
}

type Properties = Property[]

export type { Properties, Property }
