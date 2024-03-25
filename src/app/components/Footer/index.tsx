"use client"

import { Link } from "@chakra-ui/next-js"
import { Flex, Icon, Box, Text } from "@chakra-ui/react"
import { FaFacebookSquare } from "react-icons/fa"
import { TbBrandBooking } from "react-icons/tb"

const Footer = () => (
  <Flex
    w="full"
    bg="green.50"
    _dark={{
      bg: "#3e3e3e",
    }}
    p={10}
    alignItems="center"
    justifyContent="center"
  >
    <Flex
      w="full"
      as="footer"
      flexDir={{
        base: "column",
        sm: "row",
      }}
      align="center"
      justify="space-between"
      px="6"
      py="4"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        color="gray.600"
        _dark={{
          color: "white",
          _hover: {
            color: "gray.300",
          },
        }}
      >
        Iades
      </Text>

      <Box
        py={{
          base: "2",
          sm: "0",
        }}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        All rights reserved
      </Box>

      <Flex alignItems="center" justifyContent="center">
        <Link
          href="https://www.facebook.com/people/Iades-studios/100021049997015"
          target="_blank"
          rel="noreferrer"
          mx="2"
          color="gray.600"
          _dark={{
            color: "gray.300",
            _hover: {
              color: "gray.400",
            },
          }}
          _hover={{
            color: "var(--chakra-colors-whatsapp-600)",
          }}
        >
          <FaFacebookSquare title="Facebook" size="20" />
        </Link>
        <Link
          href="https://www.booking.com/hotel/gr/iades-studios.el.html"
          target="_blank"
          rel="noreferrer"
          mx="1"
          color="gray.600"
          _dark={{
            color: "gray.300",
            _hover: {
              color: "gray.400",
            },
          }}
          _hover={{
            color: "var(--chakra-colors-whatsapp-600)",
          }}
        >
          <TbBrandBooking title="Booking" size="22" />
        </Link>
      </Flex>
    </Flex>
  </Flex>
)

export default Footer
