"use client"

import { Link } from "@chakra-ui/next-js"
import { Flex, Icon, Box, Text } from "@chakra-ui/react"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

const Footer = () => (
  <Flex w="full" bg="green.50" p={10} alignItems="center" justifyContent="center">
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
    >
      <Text fontSize="xl" fontWeight="bold" color="gray.600">
        Iades
      </Text>

      <Box
        py={{
          base: "2",
          sm: "0",
        }}
        color="gray.800"
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
          _hover={{
            color: "var(--chakra-colors-whatsapp-600)",
          }}
        >
          <FaFacebookSquare title="Facebook" size="20" />
        </Link>
        <Link
          href="https://www.instagram.com/iades_studios_naxos"
          target="_blank"
          rel="noreferrer"
          mx="1"
          color="gray.600"
          _hover={{
            color: "var(--chakra-colors-whatsapp-600)",
          }}
        >
          <FaInstagram title="Instagram" size="22" />
        </Link>
      </Flex>
    </Flex>
  </Flex>
)

export default Footer
