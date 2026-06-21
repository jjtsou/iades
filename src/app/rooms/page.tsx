"use client"

import { Container, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import Card from "../components/Card"
import { properties } from "../constants"
import SectionHeader from "../components/SectionHeader"
import FilterMenu from "./components/FilterMenu"

const roomTypeOptions = [
  { value: "all", label: "All Room Types" },
  { value: "studio", label: "Studio" },
  { value: "apartment", label: "Apartment" },
  { value: "family", label: "Family Room" },
]

const capacityOptions = [
  { value: "all", label: "All Capacities" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4", label: "4 Guests" },
]

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
    <Container maxW="container.xl" py={{ base: 8, md: 12 }} px={{ base: 4, md: 8 }}>
      <Flex direction="column" align="center" mb={10}>
        <SectionHeader
          eyebrow="Luxury Accommodations"
          title="Discover Your Perfect Stay"
          description="Each of our rooms and suites is meticulously designed to offer unparalleled comfort and style. Explore our collection to find the perfect space for your stay."
        />
      </Flex>

      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={4}
        w="full"
        maxW={{ base: "100%", sm: "480px" }}
        mx="auto"
        mb={8}
      >
        <FilterMenu
          value={filters.roomType}
          options={roomTypeOptions}
          onChange={roomType => setFilters({ ...filters, roomType })}
        />
        <FilterMenu
          value={filters.capacity}
          options={capacityOptions}
          onChange={capacity => setFilters({ ...filters, capacity })}
        />
      </Stack>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={{ base: 6, md: 8 }}
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
    </Container>
  )
}
