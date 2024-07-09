import { Box } from "@chakra-ui/react"
import SlickSlider from "react-slick"
import { properties as defaultProperties } from "@/app/constants"
import Card from "../../Card"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Properties } from "@/app/types"

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

const RoomsSlider = ({ properties = defaultProperties }: { properties?: Properties }) => (
  <Box className="slider-container" w="100%" maxW="70vw" m="auto" pb="10">
    <SlickSlider {...config}>
      {Object.keys(properties).map(propertyId => (
        <Card key={propertyId} id={propertyId} property={properties[propertyId]} />
      ))}
    </SlickSlider>
  </Box>
)

export default RoomsSlider
