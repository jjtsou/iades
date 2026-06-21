"use client"

import { Container, Stack } from "@chakra-ui/react"
import ContactOptions from "./components/ContactOptions"
import ContactForm from "./components/ContactForm"
import SectionHeader from "@/app/components/SectionHeader"

const ContactUs = () => (
  <Container maxW="7xl" py={{ base: 8, md: 12 }} px={{ base: 5, md: 8 }}>
    <Stack spacing={10}>
      <SectionHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="If you have any questions, concerns, or need assistance, please reach out to us. We're here to help!"
      />
      <ContactOptions />
      <ContactForm />
    </Stack>
  </Container>
)

export default ContactUs
