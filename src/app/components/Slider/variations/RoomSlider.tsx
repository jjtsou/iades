import { Box } from "@chakra-ui/react"
import Image, { StaticImageData } from "next/image"
import Slider from "react-slick"

const RoomSlider = ({ roomImages }: { roomImages: StaticImageData[] }) => {
  const config = {
    customPaging: (i: number) => (
      <Image
        priority
        src={roomImages[i]}
        alt="product image"
        style={{ height: "25px", width: "20px", borderRadius: "10%" }}
      />
    ),
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    fade: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
  }
  return (
    <Box className="slider-container" w="auto" h="auto">
      <Slider {...config}>
        {roomImages.map(img => (
          <Box key={img.blurDataURL} h="100%" mb={2}>
            <Image
              src={img}
              height={400}
              alt={"product image"}
              style={{
                margin: "auto",
                width: "auto",
                borderRadius: "1%",
                verticalAlign: "middle",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default RoomSlider
