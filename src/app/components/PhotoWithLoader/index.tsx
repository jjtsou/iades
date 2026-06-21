"use client"

import { Flex, Spinner } from "@chakra-ui/react"
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"

type PhotoWithLoaderProps = {
  src: StaticImageData
  alt: string
  objectFit?: "cover" | "contain"
  sizes?: string
  priority?: boolean
  loaderBg?: string
}

const PhotoWithLoader = ({
  src,
  alt,
  objectFit = "cover",
  sizes,
  priority,
  loaderBg = "gray.100",
}: PhotoWithLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
  }, [src.src])

  return (
    <>
      {isLoading && (
        <Flex
          position="absolute"
          inset={0}
          alignItems="center"
          justifyContent="center"
          bg={loaderBg}
          zIndex={1}
        >
          <Spinner size="lg" color="whatsapp.500" thickness="3px" speed="0.7s" />
        </Flex>
      )}
      <Image
        key={src.src}
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        style={{
          objectFit,
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.25s ease",
        }}
      />
    </>
  )
}

export default PhotoWithLoader
