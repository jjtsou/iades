import { ReactElement } from "react"

export type NavItemType = {
  id: string
  label: string
  icon: ReactElement
  href?: string
}
