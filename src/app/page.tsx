import { Flex } from "@chakra-ui/react"
import Card from "./components/Card"
import { properties } from "./constants"

export default function Home() {
  return (
    <Flex direction="column" p={50} w="auto" h="auto" gap={10} alignItems="center">
      {properties.map(property => (
        <Card key={property.id} property={property} />
      ))}
    </Flex>
  )
}
