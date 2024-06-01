"use client"

import { iadesHero } from "@/app/constants"
import { Image } from "@chakra-ui/next-js"

const Hero = () => {
  return <Image w="full" maxH="100vh" src={iadesHero} alt="Iades Hero Image" />
}

export default Hero
