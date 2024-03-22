"use client"

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Link } from "@chakra-ui/next-js"
import { NAV_ITEMS } from "./constants"
import { NavItem } from "./types"

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align="center"
      >
        <Flex flex={{ base: 1, md: "auto" }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "start" }}>
          <Text fontFamily="heading" color={useColorModeValue("gray.800", "white")}>
            Logo
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Link
          href="https://www.booking.com/hotel/gr/iades-studios.el.html"
          target="_blank"
          rel="noreferrer"
        >
          <Button fontSize="sm" fontWeight={400} variant="outline" colorScheme="whatsapp">
            Book Now
          </Button>
        </Link>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("var(--chakra-colors-whatsapp-600)", "white")
  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map(({ label, href }) => (
        <Box key={label}>
          <Link
            p={2}
            href={href ?? "#"}
            fontSize="sm"
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {label}
          </Link>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = () => (
  <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
    {NAV_ITEMS.map(({ label, href }) => (
      <MobileNavItem key={label} label={label} href={href} />
    ))}
  </Stack>
)

const MobileNavItem = ({ label, href }: NavItem) => (
  <Stack spacing={4}>
    <Box
      py={2}
      as="a"
      href={href ?? "#"}
      justifyContent="space-between"
      alignItems="center"
      _hover={{
        textDecoration: "none",
      }}
    >
      <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
        {label}
      </Text>
    </Box>
  </Stack>
)
