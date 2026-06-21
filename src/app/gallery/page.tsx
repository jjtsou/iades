"use client"

import { Container, Stack } from "@chakra-ui/react"
import Gallery from "@/app/components/Gallery"
import SectionHeader from "@/app/components/SectionHeader"

const GalleryPage = () => (
  <Container maxW="7xl" py={{ base: 8, md: 12 }} px={{ base: 5, md: 8 }}>
    <Stack spacing={10}>
      <SectionHeader
        eyebrow="Visual Tour"
        title="Gallery"
        description="Explore our collection of photos and discover the beauty of our location and accommodation."
      />
      <Gallery />
    </Stack>
  </Container>
)

export default GalleryPage
