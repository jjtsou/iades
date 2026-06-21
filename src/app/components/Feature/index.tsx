import { Flex, Box, Text } from "@chakra-ui/react"
import { ReactNode } from "react"
import { IconType } from "react-icons"

type FeatureTypes = {
  Icon: IconType
  title: string
  gutterBottom?: boolean
  children: ReactNode[] | ReactNode
}
const Feature = ({ Icon, title, gutterBottom, ...rest }: FeatureTypes) => (
  <Flex mb={gutterBottom ? 4 : 0}>
    <Flex shrink={0}>
      <Flex
        alignItems="center"
        justifyContent="center"
        h={12}
        w={12}
        rounded="lg"
        bg="whatsapp.50"
      >
        <Icon aria-hidden="true" size={22} color="var(--chakra-colors-whatsapp-600)" />
      </Flex>
    </Flex>
    <Box ml={4}>
      <Text fontSize="lg" fontWeight="semibold" lineHeight="6" color="gray.800">
        {title}
      </Text>
      <Text mt={2} color="gray.600" lineHeight="tall">
        {rest.children}
      </Text>
    </Box>
  </Flex>
)

export default Feature
