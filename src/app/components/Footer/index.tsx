"use client"

import { Link } from "@chakra-ui/next-js"
import { Flex, Box, Text, Divider } from "@chakra-ui/react"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io"

const Footer = () => (
  <Box w="full" bg="green.50" borderTop="1px" borderColor="green.100">
    <Flex
      w="full"
      maxW="7xl"
      mx="auto"
      as="footer"
      flexDir={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      gap={6}
      px={{ base: 6, md: 10 }}
      py={8}
    >
      <Box textAlign={{ base: "center", md: "left" }}>
        <Text fontSize="xl" fontWeight="bold" color="gray.700">
          Iades Studios
        </Text>
        <Text fontSize="sm" color="gray.500" mt={1}>
          Agia Anna, Naxos, Greece
        </Text>
      </Box>

      <Text fontSize="sm" color="gray.500" textAlign="center">
        &copy; {new Date().getFullYear()} Iades. All rights reserved.
      </Text>

      <Flex alignItems="center" justifyContent="center" gap={4}>
        <Link
          href="https://www.facebook.com/people/Iades-studios/100021049997015"
          target="_blank"
          rel="noreferrer"
          color="gray.500"
          transition="color 0.2s"
          _hover={{ color: "whatsapp.600" }}
        >
          <FaFacebookSquare title="Facebook" size="22" />
        </Link>
        <Link
          href="https://www.instagram.com/iades_studios_naxos"
          target="_blank"
          rel="noreferrer"
          color="gray.500"
          transition="color 0.2s"
          _hover={{ color: "whatsapp.600" }}
        >
          <FaInstagram title="Instagram" size="22" />
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=wmMo8bWg92Y"
          target="_blank"
          rel="noreferrer"
          color="gray.500"
          transition="color 0.2s"
          _hover={{ color: "whatsapp.600" }}
        >
          <IoLogoYoutube title="Youtube" size="24" />
        </Link>
      </Flex>
    </Flex>
    <Divider borderColor="green.100" />
  </Box>
)

export default Footer
