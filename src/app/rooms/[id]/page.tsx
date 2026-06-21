"use client"

import {
  Box,
  Container,
  Stack,
  Text,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  List,
  ListItem,
  Icon,
  Flex,
  Badge,
  Divider,
} from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"
import { RoomSlider } from "@/app/components/Slider/variations"
import { properties } from "@/app/constants"
import { IoCheckmarkOutline } from "react-icons/io5"
import { IoMdPerson } from "react-icons/io"
import { TbMeterSquare } from "react-icons/tb"
import { FiArrowLeft } from "react-icons/fi"

const Room = ({ params: { id } }: { params: { id: string } }) => {
  const { title, description, roomImages, details, facilities, people, beds, sofas, sqmt } =
    properties[id]

  const sectionBg = useColorModeValue("gray.50", "gray.800")
  const cardBg = useColorModeValue("white", "gray.700")
  const accentColor = "green.400"

  return (
    <Container maxW="7xl" py={{ base: 6, md: 12 }} px={{ base: 4, md: 8 }}>
      <Stack spacing={{ base: 8, md: 10 }}>
        <Link
          href="/rooms"
          display="inline-flex"
          alignItems="center"
          gap={2}
          color="gray.600"
          fontWeight="medium"
          fontSize="sm"
          w="fit-content"
          _hover={{ color: "whatsapp.600" }}
        >
          <Icon as={FiArrowLeft} />
          All Rooms
        </Link>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 12 }} alignItems="start">
          <Box position={{ lg: "sticky" }} top={{ lg: 24 }}>
            <RoomSlider roomImages={roomImages} />
          </Box>

          <Stack spacing={8} textAlign={{ base: "center", lg: "left" }}>
            <Box>
              <Flex flexWrap="wrap" gap={2} mb={4} justify={{ base: "center", lg: "flex-start" }}>
                <Badge colorScheme="whatsapp" variant="subtle" px={3} py={1} rounded="md">
                  <Flex alignItems="center" gap={1}>
                    {sqmt}
                    <TbMeterSquare size={14} />
                  </Flex>
                </Badge>
                <Badge colorScheme="gray" variant="subtle" px={3} py={1} rounded="md">
                  <Flex alignItems="center" gap={0.5}>
                    {Array(people)
                      .fill("")
                      .map((_, i) => (
                        <IoMdPerson key={i} size={14} />
                      ))}
                  </Flex>
                </Badge>
                <Badge colorScheme="gray" variant="subtle" px={3} py={1} rounded="md">
                  {beds} bed{beds > 1 ? "s" : ""}
                </Badge>
                {sofas ? (
                  <Badge colorScheme="gray" variant="subtle" px={3} py={1} rounded="md">
                    {sofas} sofa bed{sofas > 1 ? "s" : ""}
                  </Badge>
                ) : null}
              </Flex>

              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                color="gray.700"
                lineHeight="shorter"
                mb={4}
              >
                {title}
              </Heading>
              <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                {description}
              </Text>
            </Box>

            <Box bg={sectionBg} p={{ base: 5, md: 6 }} borderRadius="xl" boxShadow="sm">
              <Text
                fontSize="sm"
                color={accentColor}
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={4}
              >
                Room Details
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
                {details.map(({ name, icon }) => (
                  <Flex
                    key={name}
                    alignItems="center"
                    gap={3}
                    p={3}
                    bg={cardBg}
                    borderRadius="lg"
                    boxShadow="sm"
                  >
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      w={10}
                      h={10}
                      borderRadius="md"
                      bg="green.50"
                      shrink={0}
                    >
                      <Icon as={icon} w={5} h={5} color={accentColor} />
                    </Flex>
                    <Text fontSize="sm" fontWeight="medium" color="gray.700">
                      {name}
                    </Text>
                  </Flex>
                ))}
              </SimpleGrid>
            </Box>

            <Box bg={sectionBg} p={{ base: 5, md: 6 }} borderRadius="xl" boxShadow="sm">
              <Text
                fontSize="sm"
                color={accentColor}
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wider"
                mb={4}
              >
                Facilities
              </Text>
              <List spacing={2}>
                {facilities.map(facility => (
                  <ListItem
                    key={facility}
                    display="flex"
                    alignItems="center"
                    gap={3}
                    color="gray.600"
                    fontSize="sm"
                  >
                    <Icon as={IoCheckmarkOutline} w={4} h={4} color={accentColor} />
                    {facility}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Divider borderColor="gray.200" />

            <Flex justify={{ base: "center", lg: "flex-start" }}>
              <Button
                as={Link}
                href="tel:+306972441744"
                size="lg"
                colorScheme="whatsapp"
                px={8}
                borderRadius="full"
                boxShadow="lg"
                _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
                transition="all 0.2s ease"
              >
                Contact Us for Details
              </Button>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

export default Room
