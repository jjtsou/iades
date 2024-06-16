import { Flex, Stack, Box } from "@chakra-ui/react"
import { FaWifi, FaParking } from "react-icons/fa"
import { IoBedOutline } from "react-icons/io5"
import { RiServiceLine } from "react-icons/ri"
import Feature from "../Feature"

const Features = () => {
  return (
    <Flex bg="green.50" p={4} w="auto" justifyContent="center" alignItems="center">
      <Box py={11} bg="white" rounded="xl">
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: 4,
            lg: 8,
          }}
        >
          <Box m={6}>
            <Stack
              spacing={{
                base: 10,
                md: 0,
              }}
              display={{
                md: "grid",
              }}
              gridTemplateColumns={{
                md: "repeat(2,1fr)",
              }}
              gridColumnGap={{
                md: 8,
              }}
              gridRowGap={{
                md: 10,
              }}
            >
              <Feature title="Free Wi-Fi" Icon={FaWifi} gutterBottom>
                Stay connected with our complimentary high-speed Wi-Fi available throughout the
                rooms. Whether you need to catch up on work, stream your favorite shows, or stay in
                touch with family and friends, our robust Wi-Fi network ensures you have the best
                online experience
              </Feature>
              <Feature title="Room Service" Icon={IoBedOutline}>
                Enjoy the convenience of our comprehensive room service, available to all guests.
                Relax in the comfort of your room while we take care of your needs. We ensure that
                your room remains a sanctuary of cleanliness and comfort.
              </Feature>
              <Feature title="Parking Space" Icon={FaParking} gutterBottom>
                Our rooms offer free parking space for all our guests. Whether you're traveling by
                car or renting a vehicle during your stay, you can rest assured that parking will be
                convenient and secure. Additionally, we offer easy access to the rooms from the
                parking lot, ensuring a hassle-free experience.
              </Feature>
              <Feature title="Exceptional Hospitality" Icon={RiServiceLine} gutterBottom>
                Experience the warmth and charm of our exceptional greek hospitality. We are
                dedicated to making your stay as comfortable and enjoyable as possible. From the
                moment you check-in, you'll be greeted with a friendly smile and a willingness to
                assist with any needs or requests you may have.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default Features
