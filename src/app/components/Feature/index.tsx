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
  <Flex mb={4}>
    <Flex shrink={0}>
      <Flex alignItems="center" justifyContent="center" h={12} w={12} rounded="md" bg="green.100">
        <Icon aria-hidden="true" size={20} color="var(--chakra-colors-whatsapp-600)" />
      </Flex>
    </Flex>
    <Box ml={4}>
      <Text fontSize="lg" fontWeight="medium" lineHeight="6" color="gray.900">
        {title}
      </Text>
      <Text mt={2} color="gray.500">
        {rest.children}
      </Text>
    </Box>
  </Flex>
)

export default Feature
