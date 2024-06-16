import { Link } from "@chakra-ui/next-js"
import { Flex, Badge, Box, Text, Button } from "@chakra-ui/react"
import Image from "next/image"
import { FaStar } from "react-icons/fa"
import { Property } from "@/app/types"
import { IoMdPerson } from "react-icons/io"

const Card = ({ property }: { property: Property }) => {
  return (
    <Flex
      direction="column"
      bg="white"
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
          {property.new && (
            <Badge rounded="full" px="2" colorScheme="teal">
              New
            </Badge>
          )}
          <Flex
            alignItems="center"
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            <Text>
              {property.beds} beds &bull; {property.baths} bath &bull;
            </Text>
            <Flex ml={1}>
              {Array(property.people)
                .fill("")
                .map((_, i) => (
                  <IoMdPerson key={i} />
                ))}
            </Flex>
          </Flex>
        </Flex>

        <Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {property.title}
        </Text>
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
        <Link href="tel:+306972441744">
          <Button fontSize="sm" fontWeight={400} variant="outline" colorScheme="whatsapp">
            For Details Contact Us
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Card
