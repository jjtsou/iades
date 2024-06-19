import { memo } from "react"
import { useColorModeValue, Button, Text } from "@chakra-ui/react"
import { NavItemType } from "./types"
import { Link } from "@chakra-ui/next-js"

const NavItem = ({ label, href, icon }: Omit<NavItemType, "id">) => {
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("var(--chakra-colors-whatsapp-600)", "white")
  return (
    <Button
      as={Link}
      href={href ?? "#"}
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
      <Text
        fontSize="sm"
        fontWeight={500}
        color="inherit"
        _hover={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {label}
      </Text>
    </Button>
  )
}

export default memo(NavItem)
