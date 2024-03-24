"use client"

import { Fragment } from "react"
import {
  Box,
  useColorModeValue,
  useDisclosure,
  chakra,
  Flex,
  HStack,
  IconButton,
  VStack,
  CloseButton,
  Button,
  VisuallyHidden,
} from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from "@chakra-ui/next-js"
import NavItems from "./navItems"

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800")
  const mobileNav = useDisclosure()
  return (
    <Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <NavItems />
              </VStack>
            </Box>
            <Link href="/" title="Choc Home Page" display="flex" alignItems="center" px="3">
              Logo
              <VisuallyHidden>Choc</VisuallyHidden>
            </Link>

            <HStack
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <NavItems />
            </HStack>
          </HStack>
          <Box display={mobileNav.isOpen ? "none" : "flex"}>
            <Link
              href="https://www.booking.com/hotel/gr/iades-studios.el.html"
              target="_blank"
              rel="noreferrer"
            >
              <Button fontSize="sm" fontWeight={400} variant="outline" colorScheme="whatsapp">
                Book Now
              </Button>
            </Link>
          </Box>
        </Flex>
      </chakra.header>
    </Fragment>
  )
}

export default Navbar
