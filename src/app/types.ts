import { StaticImageData } from "next/image"

type Property = {
  id: string
  imageUrl: StaticImageData
  imageAlt: string
  beds: number
  baths: number
  title: string
  formattedPrice: string
  reviewCount: number
  rating: number
}

type Properties = Property[]

export type { Properties, Property }
