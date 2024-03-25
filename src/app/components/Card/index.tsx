"use client"

import { Link } from "@chakra-ui/next-js"
import { Flex, Badge, Box, Text, Button } from "@chakra-ui/react"
import Image from "next/image"
import { FaStar } from "react-icons/fa"
import { Property } from "@/app/types"

const Card = ({ property }: { property: Property }) => {
  return (
    <Flex
      direction="column"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      m={{
        base: 2,
        sm: 4,
        md: 8,
        lg: 10,
        xl: 12,
      }}
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Flex alignItems="baseline">
          <Badge rounded="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Flex>

        <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {property.title}
        </Text>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Flex mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <FaStar key={i} color={i < property.rating ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Flex>
      </Box>
      {/* <Link href={`/blog/${post.slug}`}>{post.title}</Link> */}
      <Flex mb="6" justifyContent="center" alignItems="center">
        <Link href="#">
          <Button fontSize="sm" fontWeight={400} variant="outline" colorScheme="whatsapp">
            See Details
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Card
