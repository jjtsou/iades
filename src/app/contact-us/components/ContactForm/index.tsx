import { FormEventHandler, useRef } from "react"
import {
  VStack,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react"
import emailjs from "@emailjs/browser"

const serviceId = process.env.SERVICE_ID
const templateId = process.env.TEMPLATE_ID
const publicKey = process.env.ERVICE_PUBLIC_KEY

const ContactForm = () => {
  const ref = useRef()
  const toast = useToast()

  const sendEmail: FormEventHandler<HTMLDivElement> = e => {
    e.preventDefault()
    console.log(serviceId, templateId, publicKey)
    emailjs
      .sendForm(serviceId!, templateId!, ref.current!, {
        publicKey,
      })
      .then(
        () => toast({ status: "success", description: "The message has been sent" }),
        error => {
          console.log({ error })
          toast({
            status: "error",
            title: "Error",
            description:
              "The message has not been sent. Please try again or contact the owners directly via phone",
          })
        }
      )
  }
  return (
    <VStack
      as="form"
      //@ts-ignore
      ref={ref}
      spacing={8}
      w="100%"
      bg="white"
      rounded="xl"
      boxShadow="xl"
      p={{ base: 5, sm: 10 }}
      onSubmit={sendEmail}
    >
      <VStack spacing={4} w="100%">
        <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
          <FormControl id="user_name">
            <FormLabel>Name</FormLabel>
            <Input name="user_name" type="text" placeholder="John" rounded="md" />
          </FormControl>
          <FormControl id="user_email">
            <FormLabel>Email</FormLabel>
            <Input
              name="user_email"
              type="email"
              placeholder="test@test.com (your email)"
              rounded="md"
            />
          </FormControl>
        </Stack>
        <FormControl id="subject">
          <FormLabel>Subject</FormLabel>
          <Input
            name="subject"
            type="text"
            placeholder="Room availability for the 6th of August"
            rounded="md"
          />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea name="message" size="lg" placeholder="Enter your message" rounded="md" />
        </FormControl>
      </VStack>
      <VStack w="100%">
        <Button
          type="submit"
          bg="green.300"
          color="white"
          _hover={{
            bg: "green.500",
          }}
          rounded="md"
          w={{ base: "100%", md: "max-content" }}
        >
          Send Message
        </Button>
      </VStack>
    </VStack>
  )
}

export default ContactForm
