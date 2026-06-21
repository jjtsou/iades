"use client"

import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"
import { iadesHero } from "@/app/constants"
import { Image } from "@chakra-ui/next-js"

const Hero = () => {
  return (
    <Box position="relative" w="full" maxH={{ base: "70vh", md: "85vh" }} overflow="hidden">
      <Image
        w="full"
        h={{ base: "70vh", md: "85vh" }}
        objectFit="cover"
        src={iadesHero}
        alt="Iades Studios in Agia Anna, Naxos"
        priority
      />
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-t, blackAlpha.700, blackAlpha.300 50%, transparent)"
      />
      <Flex
        position="absolute"
        inset={0}
        direction="column"
        justify="flex-end"
        align="center"
        pb={{ base: 10, md: 16 }}
        px={6}
        textAlign="center"
        gap={4}
      >
        <Text
          color="whatsapp.200"
          fontWeight="semibold"
          fontSize="sm"
          letterSpacing="widest"
          textTransform="uppercase"
        >
          Agia Anna, Naxos
        </Text>
        <Heading
          color="white"
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          maxW="3xl"
          textShadow="0 2px 12px rgba(0,0,0,0.4)"
        >
          Your Island Escape on the Aegean
        </Heading>
        <Text
          color="whiteAlpha.900"
          fontSize={{ base: "md", md: "lg" }}
          maxW="xl"
          textShadow="0 1px 8px rgba(0,0,0,0.3)"
        >
          Boutique studios steps from the beach, where Greek hospitality meets island serenity.
        </Text>
        <Flex gap={4} mt={2} flexWrap="wrap" justify="center">
          <Button as={Link} href="/rooms" size="lg" colorScheme="whatsapp" shadow="lg">
            View Rooms
          </Button>
          <Button
            as={Link}
            href="/gallery"
            size="lg"
            variant="outline"
            color="white"
            borderColor="whiteAlpha.700"
            _hover={{ bg: "whiteAlpha.200" }}
          >
            Explore Gallery
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Hero
