"use client"

import {
  Box,
  Flex,
  SimpleGrid,
  useDisclosure,
  Icon,
} from "@chakra-ui/react"
import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { galleryImages } from "@/app/constants"
import { FiZoomIn } from "react-icons/fi"
import ImageLightbox from "@/app/components/ImageLightbox"

const Gallery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleClick = (index: number) => {
    setSelectedIndex(index)
    onOpen()
  }

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 4, md: 6 }}>
        {galleryImages.map((src, index) => (
          <Box
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`View gallery image ${index + 1}`}
            cursor="pointer"
            onClick={() => handleClick(index)}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                handleClick(index)
              }
            }}
            overflow="hidden"
            borderRadius="xl"
            boxShadow="md"
            position="relative"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-4px)",
              boxShadow: "xl",
              "& img": { transform: "scale(1.05)" },
              "& .gallery-overlay": { opacity: 1 },
            }}
            _focusVisible={{
              outline: "2px solid",
              outlineColor: "whatsapp.500",
              outlineOffset: "2px",
            }}
          >
            <Box position="relative" w="100%" aspectRatio={4 / 3}>
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease",
                }}
              />
              <Flex
                className="gallery-overlay"
                position="absolute"
                inset={0}
                bg="blackAlpha.400"
                opacity={0}
                transition="opacity 0.3s ease"
                alignItems="center"
                justifyContent="center"
              >
                <Icon
                  as={FiZoomIn}
                  boxSize={8}
                  color="white"
                  filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                />
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <ImageLightbox
        images={galleryImages}
        isOpen={isOpen}
        onClose={onClose}
        selectedIndex={selectedIndex}
        onIndexChange={setSelectedIndex}
        altPrefix="Gallery image"
      />
    </Box>
  )
}

export default Gallery
