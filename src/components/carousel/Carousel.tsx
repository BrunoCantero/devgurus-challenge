import Slider from 'react-slick'
import { isMobile } from 'react-device-detect'

interface ItemProps {
  url: string | undefined
}

const defaultImg = 'images/default.jpg'

const Item = ({ url = defaultImg }: ItemProps) => {
  return <img alt="img" className="imageCarousel" src={url} />
}

interface CarouselProps {
  images: Array<{
    resolutions: {
      original: {
        url: string
      }
    }
  }>
}

export const Carousel = ({ images }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: !isMobile ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: isMobile,
    cssEase: 'linear',
    centerMode: !isMobile ? true : false,
    centerPadding: '0px',
  }

  return (
    <Slider data-testid="carousel" {...settings}>
      {images.map((item, i): any => (
        <Item key={i} url={item.resolutions.original?.url} />
      ))}
    </Slider>
  )
}
