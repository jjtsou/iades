"use client"

import { Box, Flex } from "@chakra-ui/react"
import Slider from "./components/Slider"

export default function Home() {
  return (
    <Flex direction="column" alignItems="center" gap={10}>
      <Box>
        <Slider />
      </Box>
    </Flex>
  )
}
