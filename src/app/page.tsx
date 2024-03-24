import { Flex } from "@chakra-ui/react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import { properties } from "./constants"

export default function Home() {
  return (
    <>
      <Navbar />
      <Flex direction="column" p={50} w="auto" h="auto" gap={10} alignItems="center">
        {properties.map(property => (
          <Card key={property.id} property={property} />
        ))}
      </Flex>
    </>
  )
}
