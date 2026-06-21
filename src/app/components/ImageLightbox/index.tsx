"use client"

import { useCallback, useEffect } from "react"
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Icon,
} from "@chakra-ui/react"
import Image, { StaticImageData } from "next/image"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

type ImageLightboxProps = {
  images: StaticImageData[]
  isOpen: boolean
  onClose: () => void
  selectedIndex: number
  onIndexChange: (index: number) => void
  altPrefix?: string
}

const navButtonStyles = {
  position: "absolute" as const,
  top: "50%",
  transform: "translateY(-50%)",
  color: "white",
  bg: "blackAlpha.600",
  _hover: { bg: "blackAlpha.800" },
  _active: { bg: "blackAlpha.800" },
  borderRadius: "full",
  zIndex: 1,
}

const ImageLightbox = ({
  images,
  isOpen,
  onClose,
  selectedIndex,
  onIndexChange,
  altPrefix = "Image",
}: ImageLightboxProps) => {
  const goPrev = useCallback(() => {
    onIndexChange(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
  }, [selectedIndex, images.length, onIndexChange])

  const goNext = useCallback(() => {
    onIndexChange(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
  }, [selectedIndex, images.length, onIndexChange])

  useEffect(() => {
    if (!isOpen || images.length <= 1) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, images.length, goPrev, goNext])

  const selectedImage = images[selectedIndex]
  if (!selectedImage) return null

  const showNav = images.length > 1

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered motionPreset="scale">
      <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(8px)" />
      <ModalContent
        bg="transparent"
        boxShadow="none"
        maxW="100vw"
        w="100vw"
        h="100dvh"
        m={0}
        position="relative"
      >
        <ModalCloseButton
          color="white"
          bg="blackAlpha.600"
          _hover={{ bg: "blackAlpha.800" }}
          borderRadius="full"
          size="lg"
          top={{ base: 3, md: 2 }}
          right={{ base: 3, md: 2 }}
          zIndex={2}
        />
        {showNav && (
          <>
            <IconButton
              {...navButtonStyles}
              left={{ base: 2, md: 4 }}
              size={{ base: "md", md: "lg" }}
              aria-label="Previous image"
              icon={<Icon as={FiChevronLeft} boxSize={{ base: 5, md: 6 }} />}
              onClick={goPrev}
            />
            <IconButton
              {...navButtonStyles}
              right={{ base: 2, md: 4 }}
              size={{ base: "md", md: "lg" }}
              aria-label="Next image"
              icon={<Icon as={FiChevronRight} boxSize={{ base: 5, md: 6 }} />}
              onClick={goNext}
            />
          </>
        )}
        <ModalBody
          p={0}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={3}
          h="100%"
          px={{ base: 1, md: 4 }}
        >
          <Box
            position="relative"
            w="100%"
            maxW={{ base: "100%", md: "90vw", lg: "1400px" }}
            mx="auto"
            h={{ base: "82dvh", md: "88vh" }}
            borderRadius={{ base: "lg", md: "xl" }}
            overflow="hidden"
          >
            <Image
              src={selectedImage}
              alt={`${altPrefix} ${selectedIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 95vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
          {showNav && (
            <Box color="whiteAlpha.800" fontSize="sm" fontWeight="medium" letterSpacing="wide" pb={{ base: 4, md: 0 }}>
              {selectedIndex + 1} / {images.length}
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ImageLightbox
