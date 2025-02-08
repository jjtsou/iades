import { Link } from "@chakra-ui/next-js"
import { Flex, Box, Text, Button } from "@chakra-ui/react"
import Image from "next/image"
import { Property } from "@/app/types"
import { IoMdPerson } from "react-icons/io"
import { TbMeterSquare } from "react-icons/tb"

const Card = ({
  id,
  property: { title, people, beds, sofas, imageUrl, imageAlt, sqmt },
}: {
  id: string
  property: Property
}) => {
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
      transition="all 0.2s ease"
      _hover={{
        transform: "translateY(-4px)",
        shadow: "xl",
      }}
    >
      <Image src={imageUrl} alt={imageAlt} />
      <Box px="2" py="6">
        <Flex alignItems="baseline">
          <Flex
            alignItems="center"
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            gap={1}
          >
            <Flex alignItems="center">
              <Text>{sqmt}</Text>
              <TbMeterSquare size={20} />
            </Flex>
            <Text> &bull;</Text>
            <Flex>
              {Array(people)
                .fill("")
                .map((_, i) => (
                  <IoMdPerson key={i} />
                ))}
            </Flex>
            <Text> &bull;</Text>
            <Text textTransform="uppercase">
              {beds} bed{beds > 1 ? "s" : ""}
            </Text>
            {sofas ? (
              <>
                <Text> &bull;</Text>
                <Text textTransform="uppercase">
                  {sofas} sofa bed{sofas > 1 ? "s" : ""}
                </Text>
              </>
            ) : null}
          </Flex>
        </Flex>

        <Text mt="1" fontWeight="semibold" as="h4">
          {title}
        </Text>
      </Box>
      {/* <Link href={`/blog/${post.slug}`}>{post.title}</Link> */}
      <Flex mb="6" justifyContent="center" alignItems="center">
        <Link href={`/rooms/${id}`}>
          <Button fontSize="sm" fontWeight={400} variant="outline" colorScheme="whatsapp">
            Details
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Card
