import { Link } from "@chakra-ui/next-js"
import { Flex, Box, Text, Button, Badge } from "@chakra-ui/react"
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
      borderColor="gray.100"
      rounded="xl"
      shadow="md"
      h="full"
      overflow="hidden"
      transition="all 0.25s ease"
      _hover={{
        transform: "translateY(-6px)",
        shadow: "xl",
        borderColor: "whatsapp.100",
      }}
    >
      <Box position="relative" overflow="hidden" aspectRatio={4 / 3}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
        />
      </Box>
      <Box px={5} py={5} flex={1} display="flex" flexDirection="column">
        <Flex alignItems="center" flexWrap="wrap" gap={2} mb={3}>
          <Badge colorScheme="whatsapp" variant="subtle" fontSize="xs" px={2} py={0.5} rounded="md">
            <Flex alignItems="center" gap={0.5}>
              {sqmt}
              <TbMeterSquare size={14} />
            </Flex>
          </Badge>
          <Badge colorScheme="gray" variant="subtle" fontSize="xs" px={2} py={0.5} rounded="md">
            <Flex alignItems="center" gap={0.5}>
              {Array(people)
                .fill("")
                .map((_, i) => (
                  <IoMdPerson key={i} size={12} />
                ))}
            </Flex>
          </Badge>
          <Badge colorScheme="gray" variant="subtle" fontSize="xs" px={2} py={0.5} rounded="md">
            {beds} bed{beds > 1 ? "s" : ""}
          </Badge>
          {sofas ? (
            <Badge colorScheme="gray" variant="subtle" fontSize="xs" px={2} py={0.5} rounded="md">
              {sofas} sofa bed{sofas > 1 ? "s" : ""}
            </Badge>
          ) : null}
        </Flex>

        <Text fontWeight="semibold" fontSize="lg" color="gray.800" mb={4}>
          {title}
        </Text>

        <Flex mt="auto" justifyContent="center">
          <Button
            as={Link}
            href={`/rooms/${id}`}
            w="full"
            size="md"
            variant="outline"
            colorScheme="whatsapp"
          >
            View Details
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Card
