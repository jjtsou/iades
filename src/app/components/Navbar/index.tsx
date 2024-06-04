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
  VisuallyHidden,
} from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from "@chakra-ui/next-js"
import Image from "next/image"
import { IoIosPhonePortrait } from "react-icons/io"
import { FaRegEnvelope } from "react-icons/fa"
import iadesLogo from "/public/svg/iades.svg"
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
            <Link href="/" title="Iades Home Page" display="flex" alignItems="center" px="3">
              <Image priority src={iadesLogo} width="75" alt="Follow us on Twitter" />
              <VisuallyHidden>Iades</VisuallyHidden>
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
          <Box
            display={mobileNav.isOpen ? "none" : "flex"}
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Link
              href="mailto:iadesstudios@yahoo.gr"
              color="gray.600"
              _hover={{
                color: "var(--chakra-colors-whatsapp-600)",
              }}
            >
              <FaRegEnvelope size={25} title="Contact us" />
            </Link>
            <Link
              href="tel:+302285044129"
              color="gray.600"
              _hover={{
                color: "var(--chakra-colors-whatsapp-600)",
              }}
            >
              <IoIosPhonePortrait size={30} title="Call us" />
            </Link>
          </Box>
        </Flex>
      </chakra.header>
    </Fragment>
  )
}

export default Navbar
