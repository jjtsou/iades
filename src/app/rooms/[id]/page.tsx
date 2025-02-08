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
  useBreakpointValue,
  keyframes,
} from "@chakra-ui/react"
import { RoomSlider } from "@/app/components/Slider/variations"
import { properties } from "@/app/constants"
import { IoCheckmarkOutline } from "react-icons/io5"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const Room = ({ params: { id } }: { params: { id: string } }) => {
  const { title, description, roomImages, details, facilities } = properties[id]

  const headingSize = useBreakpointValue({ base: "2xl", sm: "3xl", lg: "4xl" })
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" })

  return (
    <Container maxW={"7xl"} py={{ base: 10, md: 20 }}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 12 }} textAlign="center">
        <Box as={motion.div} animation={`${fadeIn} 0.8s ease-out`}>
          <RoomSlider roomImages={roomImages} />
        </Box>
        <Stack
          spacing={{ base: 8, md: 10 }}
          mt={{ sm: 8, md: 0 }}
          as={motion.div}
          animation={`${fadeIn} 0.8s ease-out 0.2s`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={headingSize}
              color="gray.700"
              mb={4}
            >
              {title}
            </Heading>
            <Text
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize="xl"
              fontWeight="300"
              maxW="2xl"
              mx="auto"
            >
              {description}
            </Text>
          </Box>
          <Box bg={useColorModeValue("gray.50", "gray.800")} p={6} borderRadius="lg" boxShadow="md">
            <Text fontSize="xl" color="green.400" fontWeight="600" textTransform="uppercase" mb={4}>
              Room Details
            </Text>
            <List
              display="grid"
              gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
              gap={4}
            >
              {details.map(({ name, icon }) => (
                <ListItem
                  key={name}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                  p={2}
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="md"
                  boxShadow="sm"
                >
                  <Icon as={icon} w={6} h={6} color="green.400" />
                  <Text as={"span"} fontSize="md" fontWeight="500">
                    {name}
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box bg={useColorModeValue("gray.50", "gray.800")} p={6} borderRadius="lg" boxShadow="md">
            <Text fontSize="xl" color="green.400" fontWeight="600" textTransform="uppercase" mb={4}>
              Facilities
            </Text>
            <List
              display="grid"
              gridTemplateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
              gap={4}
            >
              {facilities.map(facility => (
                <ListItem
                  key={facility}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  p={2}
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="md"
                  boxShadow="sm"
                >
                  <Icon as={IoCheckmarkOutline} w={5} h={5} color="green.400" />
                  <Text as={"span"} fontSize="md" fontWeight="500">
                    {facility}
                  </Text>
                </ListItem>
              ))}
            </List>
          </Box>
          <Flex justifyContent="center" mt={6}>
            <Link href="tel:+306972441744">
              <Button
                size={buttonSize}
                fontWeight={500}
                variant="solid"
                colorScheme="whatsapp"
                px={8}
                py={6}
                borderRadius="full"
                boxShadow="lg"
                _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
                transition="all 0.2s ease"
              >
                Contact Us for Details
              </Button>
            </Link>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default Room
