import { memo } from "react"
import { useColorModeValue, Button } from "@chakra-ui/react"
import { NavItem } from "./types"
import { Link } from "@chakra-ui/next-js"

const NavItem = ({ label, href, icon }: Omit<NavItem, "id">) => {
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("var(--chakra-colors-whatsapp-600)", "white")
  return (
    <Button
      variant="ghost"
      w="full"
      leftIcon={icon}
      size="lg"
      color={linkColor}
      _hover={{
        bg: "green.50",
        textDecoration: "none",
        color: linkHoverColor,
      }}
    >
      <Link
        href={href ?? "#"}
        fontSize="sm"
        fontWeight={500}
        color="inherit"
        _hover={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {label}
      </Link>
    </Button>
  )
}

export default memo(NavItem)
