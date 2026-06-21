"use client"

import { SimpleGrid, Flex, Text, Box } from "@chakra-ui/react"
import Image from "next/image"
import imgNaxos from "/public/images/naxos/naxos11.jpg"
import SectionHeader from "@/app/components/SectionHeader"

const AboutUs = () => (
  <Flex direction="column" w="full">
    <SimpleGrid columns={{ base: 1, lg: 2 }} minH={{ lg: "600px" }}>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 6, md: 12, lg: 20 }}
        py={{ base: 12, lg: 16 }}
        bg="white"
      >
        <Box mb={8}>
          <SectionHeader
            align="left"
            eyebrow="Our Story"
            title="About Us"
            description="Located on the enchanting island of Naxos, Iades Studios offers a peaceful retreat for travelers seeking serenity amidst the stunning landscapes of the Aegean Sea."
          />
        </Box>
        <Flex direction="column" gap={4}>
          <Text color="gray.600" lineHeight="tall">
            Our boutique accommodation is nestled in Agia Anna, providing guests with convenient
            access to Naxos&apos; pristine beaches and vibrant culture. As a family-operated
            establishment, we extend the warm hospitality that Naxos is renowned for.
          </Text>
          <Text color="gray.600" lineHeight="tall">
            Whether you&apos;re looking for a cozy retreat for a romantic escape or comfortable
            lodging for a family vacation, we offer a range of options to suit your preferences.
          </Text>
          <Text color="gray.600" lineHeight="tall">
            As advocates for sustainable tourism, we are committed to minimizing our environmental
            impact and supporting the local community. We invite you to experience the warmth and charm of Iades Studios in Naxos.
          </Text>
        </Flex>
      </Flex>
      <Box position="relative" minH={{ base: "300px", lg: "auto" }}>
        <Image
          src={imgNaxos}
          alt="Naxos beach near Iades Studios"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </Box>
    </SimpleGrid>
  </Flex>
)

export default AboutUs
