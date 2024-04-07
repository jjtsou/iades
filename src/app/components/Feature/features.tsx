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
              <Feature title="Competitive exchange rates" Icon={FaWifi} gutterBottom>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </Feature>
              <Feature title=" No hidden fees" Icon={IoBedOutline} gutterBottom>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </Feature>
              <Feature title="Transfers are instant" Icon={FaParking} gutterBottom>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </Feature>
              <Feature title="Mobile notifications" Icon={RiServiceLine}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default Features
