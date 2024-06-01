"use client"

import { Link } from "@chakra-ui/next-js"
import { Flex, Box, Text } from "@chakra-ui/react"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io"

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

      <Flex alignItems="center" justifyContent="center" gap={3}>
        <Link
          href="https://www.facebook.com/people/Iades-studios/100021049997015"
          target="_blank"
          rel="noreferrer"
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
          color="gray.600"
          _hover={{
            color: "var(--chakra-colors-whatsapp-600)",
          }}
        >
          <FaInstagram title="Instagram" size="22" />
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=wmMo8bWg92Y"
          target="_blank"
          rel="noreferrer"
          color="gray.600"
          _hover={{
            color: "var(--chakra-colors-whatsapp-600)",
          }}
        >
          <IoLogoYoutube title="Youtube" size="22" />
        </Link>
      </Flex>
    </Flex>
  </Flex>
)

export default Footer
