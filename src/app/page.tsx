"use client"

import { Box, Flex } from "@chakra-ui/react"
import { RoomsSlider } from "./components/Slider"
import Features from "./components/Feature/features"
import Hero from "./components/Hero"
import SectionHeader from "./components/SectionHeader"

export default function Home() {
  return (
    <Flex direction="column" alignItems="center" gap={{ base: 12, md: 16 }} mb={8} w="full">
      <Hero />
      <Box as="section" w="full">
        <Flex direction="column" justify="center" alignItems="center" gap={6} mb={6} px={4}>
          <SectionHeader
            eyebrow="Luxury Room Collection"
            title="Rooms & Suites"
            description="Discover the allure of our exquisite Rooms & Suites, where luxury meets comfort and every detail is meticulously crafted for your indulgence."
          />
        </Flex>
        <RoomsSlider />
      </Box>
      <Box as="section" w="full">
        <Flex direction="column" justify="center" alignItems="center" gap={6} mb={8} px={4}>
          <SectionHeader
            eyebrow="Our Exceptional Services"
            title="Discover the Finest Hotel Amenities"
            description="Experience the epitome of hospitality with our comprehensive range of services. From personalized assistance to exquisite amenities, we ensure your stay is nothing short of extraordinary."
          />
        </Flex>
        <Features />
      </Box>
    </Flex>
  )
}
