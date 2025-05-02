"use client"

import { Container, Heading, Stack, Text, Flex } from "@chakra-ui/react"
import Gallery from "@/app/components/Gallery"

const GalleryPage = () => (
  <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
    <Stack spacing={10}>
      <Flex align="center" justifyContent="center" direction="column">
        <Heading fontSize="4xl" mb={2}>
          Gallery
        </Heading>
        <Text fontSize="md" textAlign="center">
          Explore our collection of photos and see the beauty of our location and accommodation.
        </Text>
      </Flex>
      <Gallery />
    </Stack>
  </Container>
)

export default GalleryPage
