"use client"

import {
  Box,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { galleryImages } from "@/app/constants"

const Gallery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null)

  const handleClick = (src: StaticImageData) => {
    setSelectedImage(src)
    onOpen()
  }

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
        {galleryImages.map((src, index) => (
          <Box
            key={index}
            cursor="pointer"
            onClick={() => handleClick(src)}
            overflow="hidden"
            borderRadius="xl"
          >
            <Box position="relative" w="100%" aspectRatio={4 / 3}>
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                style={{
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none" maxW="90vw">
          <ModalBody p={0}>
            {selectedImage && (
              <Box
                position="relative"
                w={{ base: "100%", md: "90%" }}
                maxW="1000px"
                mx="auto"
                aspectRatio={4 / 3}
              >
                <Image
                  src={selectedImage}
                  alt="Enlarged image"
                  fill
                  style={{
                    objectFit: "contain",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Gallery
