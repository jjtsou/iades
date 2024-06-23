import { ReactElement } from "react"

export type NavItemType = {
  id: string
  label: string
  icon: ReactElement
  onClick?: () => void
  href?: string
}
