"use client"

import { SimpleGrid, Flex, chakra, Text, Box } from "@chakra-ui/react"
import Image from "next/image"
import imgNaxos from "/public/images/naxos/naxos11.jpg"

const AboutUs = () => (
  <Flex direction="column">
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="start"
        px={{
          base: 4,
          lg: 20,
        }}
        py={24}
      >
        <chakra.h1
          mb={6}
          fontSize={{
            base: "4xl",
            md: "4xl",
            lg: "5xl",
          }}
          fontWeight="bold"
          color="brand.600"
          lineHeight="shorter"
        >
          About Us
        </chakra.h1>
        <Text
          pr={{
            base: 0,
            lg: 16,
          }}
          mb={4}
          color="brand.600"
          letterSpacing="wider"
        >
          Located on the enchanting island of Naxos, Iades Studios offers a tranquil haven for
          travelers seeking serenity and relaxation amidst the stunning landscapes of the Aegean
          Sea. Our boutique accommodation is nestled in Agia Anna, providing guests with convenient
          access to Naxos' pristine beaches and vibrant culture.
        </Text>
        <Text
          pr={{
            base: 0,
            lg: 16,
          }}
          mb={4}
          color="brand.600"
          letterSpacing="wider"
        >
          At Iades Studios, we pride ourselves on delivering an authentic Greek island experience
          with a personal touch. As a family-operated establishment, we extend the warm hospitality
          that Naxos is renowned for, ensuring that every guest feels at home from the moment they
          arrive.
        </Text>
        <Text
          pr={{
            base: 0,
            lg: 16,
          }}
          mb={4}
          color="brand.600"
          letterSpacing="wider"
        >
          Whether you're looking for a cozy retreat for a romantic escape or comfortable lodging for
          a family vacation, we offer a range of options to suit your preferences. In addition to
          our inviting accommodations, guests at Iades Studios can enjoy a variety of amenities and
          services designed to enhance their stay.
        </Text>
        <Text
          pr={{
            base: 0,
            lg: 16,
          }}
          mb={4}
          color="brand.600"
          letterSpacing="wider"
        >
          As advocates for sustainable tourism, we are committed to minimizing our environmental
          impact and supporting the local community. We source locally produced goods for our studio
          provisions and implement eco-conscious practices throughout our property to preserve
          Naxos' natural beauty for future generations to enjoy.Whether you're embarking on a
          romantic getaway, a family holiday, or an adventure-filled retreat, we invite you to
          experience the tranquility and charm of Iades Studios in Naxos. We look forward to hosting
          you and creating cherished memories together.
        </Text>
      </Flex>
      <Box>
        <Image src={imgNaxos} alt="Image of Naxos beach" />
      </Box>
    </SimpleGrid>
  </Flex>
)

export default AboutUs

{
  /* <Box
      padding={6}
      w="80%"
      mx="auto"
      bg="green.50"
      sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
    >
      {naxosImages.map((src, i) => (
        <Box overflow="hidden" borderRadius="xl" mb={2}>
          <Image key={i} src={src} alt={`Naxos image ${i}`} />
        </Box>
      ))}
    </Box> */
}
