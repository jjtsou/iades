"use client"

import { Box, Flex, Grid, GridItem, Heading, Text, Select, Stack, HStack } from "@chakra-ui/react"
import { useState } from "react"
import Card from "../components/Card"
import { properties } from "../constants"

export default function RoomsPage() {
  const [filters, setFilters] = useState({
    roomType: "all",
    capacity: "all",
  })

  const filteredRooms = Object.keys(properties).filter(propertyId => {
    const property = properties[propertyId]
    return (
      (filters.roomType === "all" || property.title.toLowerCase().includes(filters.roomType)) &&
      (filters.capacity === "all" || property.people >= parseInt(filters.capacity))
    )
  })

  return (
    <Box w="full" maxW="container.xl" py={10} px={{ base: 4, md: 8 }}>
      <Flex direction="column" align="center" mb={12}>
        <Text color="whatsapp.600" fontWeight="bold" fontSize="lg">
          Luxury Accommodations
        </Text>
        <Heading color="gray.700" fontSize={{ base: "3xl", md: "4xl" }} mb={4} textAlign="center">
          Discover Your Perfect Stay
        </Heading>
        <Text color="gray.600" maxW="2xl" textAlign="center" fontSize={{ base: "md", md: "lg" }}>
          Each of our rooms and suites is meticulously designed to offer unparalleled comfort and
          style. Explore our collection to find the perfect space for your stay.
        </Text>
      </Flex>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        mb={8}
        justify="space-between"
        align="center"
      >
        <HStack spacing={4}>
          <Select
            value={filters.roomType}
            onChange={e => setFilters({ ...filters, roomType: e.target.value })}
            maxW="200px"
          >
            <option value="all">All Room Types</option>
            <option value="studio">Studio</option>
            <option value="apartment">Apartment</option>
            <option value="family">Family Room</option>
          </Select>
          <Select
            value={filters.capacity}
            onChange={e => setFilters({ ...filters, capacity: e.target.value })}
            maxW="200px"
          >
            <option value="all">All Capacities</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </Select>
        </HStack>
      </Stack>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={{ base: 6, md: 8 }}
        px={{ base: 2, md: 4 }}
      >
        {filteredRooms.map(propertyId => (
          <GridItem key={propertyId} w="100%">
            <Card id={propertyId} property={properties[propertyId]} />
          </GridItem>
        ))}
      </Grid>
      {filteredRooms.length === 0 && (
        <Flex justify="center" align="center" w="full" py={10}>
          <Text fontSize="lg" color="gray.500">
            No results found. Try adjusting your filters.
          </Text>
        </Flex>
      )}
    </Box>
  )
}
