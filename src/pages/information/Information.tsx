import React, { useEffect, useState } from 'react'

// import COMPONENTS
import { Header } from '../../components/Header/Header'
import { Carousel } from '../../components/carousel/Carousel'
import { cleanText } from '../../utils/'
import Rating from 'react-rating'

// IMPORT styles
import './Information.scss'

// router
import { withRouter } from 'react-router'
import { useLocation } from 'react-router-dom'

//services
import { getImages } from '../../services/showsService'
const defaultImg = 'images/default.jpg'

const Information = () => {
  const [images, setImages] = useState([])
  const { state } = useLocation()
  const { show }: any = state

  const getImagesByShowId = (id: number) => {
    getImages(id).then((data) => {
      setImages(data)
    })
  }

  useEffect(() => {
    getImagesByShowId(show.show.id)
  }, [])
  return (
    <>
      <Header title={show.show.name} />
      <div className="content-wrapper">
        <div className="show-info">
          <div className="show-image">
            <img
              className="img"
              alt="show img"
              width={350}
              height="auto"
              src={show.show.image?.original || defaultImg}
            />
          </div>
          <div>
            <div className="summary-wrapper">
              {cleanText(show.show?.summary)}
            </div>
            <div className="summary-wrapper">
              Genre:
              {show.show?.genres.map((item: string) => item).join(', ') ||
                'No Data'}
            </div>
            <div className="summary-wrapper">
              Premiered: {show.show?.premiered || 'No Data'}
            </div>
            <div className="summary-wrapper">
              Language: {show.show.language || 'No Data'}
            </div>
            <div className="rating">
              <p className="rating-text">
                Rating: {show.show.rating.average || 'No Data'}
              </p>
              <Rating
                emptySymbol={
                  <img
                    alt="empty"
                    width={20}
                    height={20}
                    src="images/star-black.png"
                  />
                }
                placeholderSymbol={
                  <img
                    alt="placeholder"
                    width={20}
                    height={20}
                    src="images/star-yellow.png"
                  />
                }
                fullSymbol={
                  <img
                    alt="full"
                    width={20}
                    height={20}
                    src="images/star-yellow.png"
                  />
                }
                stop={10}
                placeholderRating={show.show.rating.average}
              />
            </div>
          </div>
        </div>
        <div className="gallery">Gallery</div>
        <div className="slider-wrapper">
          <Carousel images={images} />
        </div>
      </div>
    </>
  )
}

export default withRouter(Information)
