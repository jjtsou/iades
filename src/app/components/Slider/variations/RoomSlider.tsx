"use client"

import { Box, Flex, Icon, IconButton, Text, useDisclosure } from "@chakra-ui/react"
import { StaticImageData } from "next/image"
import { useState } from "react"
import { FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi"
import ImageLightbox from "@/app/components/ImageLightbox"
import PhotoWithLoader from "@/app/components/PhotoWithLoader"

const RoomPhotos = ({ roomImages }: { roomImages: StaticImageData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const goPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? roomImages.length - 1 : prev - 1))
  }

  const goNext = () => {
    setCurrentIndex(prev => (prev === roomImages.length - 1 ? 0 : prev + 1))
  }

  const openLightbox = () => {
    setLightboxIndex(currentIndex)
    onOpen()
  }

  const showNav = roomImages.length > 1

  return (
    <>
      <Box
        position="relative"
        w="full"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="lg"
        bg="gray.100"
      >
        <Box
          position="relative"
          w="full"
          aspectRatio={{ base: 4 / 3, md: 3 / 2 }}
          cursor="pointer"
          onClick={openLightbox}
          role="button"
          aria-label="View full-size photo"
          _hover={{ "& .photo-overlay": { opacity: 1 } }}
        >
          <PhotoWithLoader
            src={roomImages[currentIndex]}
            alt={`Room photo ${currentIndex + 1}`}
            objectFit="cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={currentIndex === 0}
          />
          <Flex
            className="photo-overlay"
            position="absolute"
            inset={0}
            bg="blackAlpha.400"
            opacity={0}
            transition="opacity 0.25s ease"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Icon as={FiZoomIn} boxSize={7} color="white" />
            <Text color="white" fontWeight="medium" fontSize="sm">
              View full size
            </Text>
          </Flex>
        </Box>

        {showNav && (
          <>
            <IconButton
              aria-label="Previous photo"
              icon={<Icon as={FiChevronLeft} boxSize={5} />}
              position="absolute"
              left={3}
              top="50%"
              transform="translateY(-50%)"
              size="md"
              borderRadius="full"
              bg="whiteAlpha.900"
              color="gray.700"
              _hover={{ bg: "white" }}
              onClick={e => {
                e.stopPropagation()
                goPrev()
              }}
            />
            <IconButton
              aria-label="Next photo"
              icon={<Icon as={FiChevronRight} boxSize={5} />}
              position="absolute"
              right={3}
              top="50%"
              transform="translateY(-50%)"
              size="md"
              borderRadius="full"
              bg="whiteAlpha.900"
              color="gray.700"
              _hover={{ bg: "white" }}
              onClick={e => {
                e.stopPropagation()
                goNext()
              }}
            />
            <Box
              position="absolute"
              bottom={3}
              right={3}
              bg="blackAlpha.700"
              color="white"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
              fontWeight="medium"
            >
              {currentIndex + 1} / {roomImages.length}
            </Box>
          </>
        )}
      </Box>

      <ImageLightbox
        images={roomImages}
        isOpen={isOpen}
        onClose={onClose}
        selectedIndex={lightboxIndex}
        onIndexChange={setLightboxIndex}
        altPrefix="Room photo"
      />
    </>
  )
}

export default RoomPhotos
