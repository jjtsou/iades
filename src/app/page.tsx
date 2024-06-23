"use client"

import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Slider from "./components/Slider"
import Features from "./components/Feature/features"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <Flex direction="column" alignItems="center" gap={10} mb={4}>
      <Hero />
      <Box as="section">
        <Flex direction="column" justify="center" alignItems="center" gap={2} mb={2}>
          <Text color="var(--chakra-colors-whatsapp-600)" fontWeight="bold">
            Luxury Room Collection
          </Text>
          <Heading color="gray.600">Rooms & Suites</Heading>
          <Text color="gray.600" maxW="30em" textAlign="center" marginX={5}>
            Discover the allure of our exquisite Rooms & Suites, where luxury meets comfort and
            every detail is meticulously crafted for your indulgence.
          </Text>
        </Flex>
        <Slider />
      </Box>
      <Box as="section">
        <Flex direction="column" justify="center" alignItems="center" gap={2} mb={8}>
          <Text color="var(--chakra-colors-whatsapp-600)" fontWeight="bold">
            Our Exceptional Services
          </Text>
          <Heading color="gray.600" textAlign="center">
            Discover the Finest Hotel Amenities
          </Heading>
          <Text color="gray.600" maxW="30em" textAlign="center" marginX={5}>
            Experience the epitome of hospitality with our comprehensive range of services. From
            personalized assistance to exquisite amenities, we ensure your stay is nothing short of
            extraordinary.
          </Text>
        </Flex>
        <Features />
      </Box>
    </Flex>
  )
}
