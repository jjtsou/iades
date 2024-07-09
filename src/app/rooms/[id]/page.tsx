"use client"

import {
  Box,
  Container,
  Stack,
  Text,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Icon,
  Flex,
} from "@chakra-ui/react"
import { RoomSlider } from "@/app/components/Slider/variations"
import { properties } from "@/app/constants"
import { IoCheckmarkOutline } from "react-icons/io5"
import Link from "next/link"

const Room = ({ params: { id } }: { params: { id: string } }) => {
  const { title, description, roomImages, details, facilities } = properties[id]

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 10, md: 12 }}
        py={{ base: 18, md: 24 }}
        textAlign="center"
      >
        <RoomSlider roomImages={roomImages} />
        <Stack spacing={{ base: 8, md: 10 }} mt={{ sm: 8, md: 0 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              color="gray.600"
            >
              {title}
            </Heading>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize="2xl"
                fontWeight="300"
              >
                {description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color="green.400"
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Details
              </Text>
              <List
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                gap={6}
              >
                {details.map(({ name, icon }) => (
                  <ListItem
                    key={name}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Icon as={icon} w={5} h={5} color="var(--chakra-colors-whatsapp-600)" />
                    <Text as={"span"}>{name}</Text>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color="green.400"
                fontWeight="500"
                textTransform="uppercase"
                mb="4"
              >
                Facilities
              </Text>
              <List
                spacing={2}
                maxH="250px"
                display="flex"
                flexDirection="column"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
              >
                {facilities.map(facility => (
                  <ListItem
                    key={facility}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexWrap="wrap"
                    gap={2}
                  >
                    <Icon
                      as={IoCheckmarkOutline}
                      w={5}
                      h={5}
                      color="var(--chakra-colors-whatsapp-600)"
                    />
                    <Text as={"span"}>{facility}</Text>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>
          <Flex justifyContent="center" alignItems="center">
            <Link href="tel:+306972441744">
              <Button mt={4} fontWeight={400} variant="outline" colorScheme="whatsapp">
                For Details Contact Us
              </Button>
            </Link>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default Room
