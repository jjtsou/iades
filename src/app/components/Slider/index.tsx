import { Box } from "@chakra-ui/react"
import SlickSlider from "react-slick"
import { properties } from "@/app/constants"
import Card from "../Card"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const config = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
  pauseOnHover: true,
  nextArrow: <></>,
  prevArrow: <></>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}
const rooms = properties.map(property => <Card key={property.id} property={property} />)
const Slider = () => (
  <Box className="slider-container" w="100%" maxW="70vw" m="auto" pb="10">
    <SlickSlider {...config}>{rooms}</SlickSlider>
  </Box>
)

export default Slider
