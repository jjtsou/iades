"use client"

import { Container, Stack, Heading, Flex, Text } from "@chakra-ui/react"
import ContactOptions from "./components/ContactOptions"
import ContactForm from "./components/ContactForm"

const ContactUs = () => (
  <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
    <Stack spacing={10}>
      <Flex align="center" justifyContent="center" direction="column">
        <Heading fontSize="4xl" mb={2}>
          Contact Us
        </Heading>
        <Text fontSize="md" textAlign="center">
          If you have any questions, concerns, or need assistance, please reach out to us. We're
          here to help!
        </Text>
      </Flex>
      <ContactOptions />
      <ContactForm />
    </Stack>
  </Container>
)

export default ContactUs
