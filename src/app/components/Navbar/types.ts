import { ReactElement } from "react"

export type NavItem = {
  id: string
  label: string
  icon: ReactElement
  href?: string
}
