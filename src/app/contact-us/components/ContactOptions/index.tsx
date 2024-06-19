import { Stack, Flex, Icon, Divider, Box, Text } from "@chakra-ui/react"
import { contactOptions } from "../../constants"
import { memo } from "react"

const ContactOptions = () => (
  <Stack
    spacing={{ base: 6, md: 0 }}
    direction={{ base: "column", md: "row" }}
    justifyContent="space-between"
  >
    {contactOptions.map(({ icon, label, values }, index) => (
      <Flex key={`${label}-${index}`} flex={1}>
        <Stack
          flex={1}
          spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
          px={3}
        >
          <Icon as={icon} w={10} h={10} color="green.400" />
          <Text fontSize="lg" fontWeight="semibold">
            {label}
          </Text>
          <Box>
            {values.map(({ label, Icon }) => (
              <Flex key={label} gap={1} alignItems="center">
                <Text fontSize="md" textAlign="center">
                  {label}
                </Text>
                {Icon ? (
                  <Icon aria-hidden="true" size={20} color="var(--chakra-colors-whatsapp-600)" />
                ) : null}
              </Flex>
            ))}
          </Box>
        </Stack>
        {contactOptions.length - 1 !== index && (
          <Flex display={{ base: "none", md: "flex" }}>
            <Divider orientation="vertical" borderColor="var(--chakra-colors-whatsapp-300)" />
          </Flex>
        )}
      </Flex>
    ))}
  </Stack>
)

export default memo(ContactOptions)
