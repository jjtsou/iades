import { Flex, Heading, Text } from "@chakra-ui/react"

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "center" | "left"
}

const SectionHeader = ({ eyebrow, title, description, align = "center" }: SectionHeaderProps) => (
  <Flex
    align={align === "left" ? "flex-start" : "center"}
    justifyContent="center"
    direction="column"
    gap={3}
    textAlign={align}
  >
    {eyebrow && (
      <Text
        color="whatsapp.600"
        fontWeight="semibold"
        fontSize="sm"
        letterSpacing="wider"
        textTransform="uppercase"
      >
        {eyebrow}
      </Text>
    )}
    <Heading
      color="gray.700"
      fontSize={{ base: "3xl", md: "4xl" }}
      fontWeight="bold"
      lineHeight="shorter"
    >
      {title}
    </Heading>
    {description && (
      <Text color="gray.600" maxW="2xl" fontSize={{ base: "md", md: "lg" }} px={{ base: 2, md: 0 }}>
        {description}
      </Text>
    )}
  </Flex>
)

export default SectionHeader
