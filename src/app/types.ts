import { StaticImageData } from "next/image"

type Property = {
  id: string
  imageUrl: StaticImageData
  imageAlt: string
  people: number
  beds: number
  baths: number
  title: string
  formattedPrice: string
  reviewCount: number
  rating: number
  new: boolean
}

type Properties = Property[]

export type { Properties, Property }
