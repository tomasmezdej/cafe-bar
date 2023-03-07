import { useEffect, useState } from "react"

import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"
import GalleryElement from "../gallery/GalleryElement"

import img from "../../assets/images/bar_setup.jpg"
import imgs from "../../assets/images/coffee_making_white.jpg"
import imgd from "../../assets/images/main_background.jpg"
/* import img from "../../assets/images/bar_setup.jpg"
import img from "../../assets/images/bar_setup.jpg" */
import Overlay from "../overlays/Overlay"

import { BiChevronRightSquare, BiChevronLeftSquare } from "react-icons/bi"


const images = [
  img,
  imgs,
  imgd,
  img,
  imgs,
  imgd,
  img,
  imgs,
  imgd,
]

const GalleryCard = () => {

  const [overlay, setOverlay] = useState(false)
  const [overlayImg, setOverlayImg] = useState(null)

  const onPrevClickHandler = (e) => {
    alert('prev')
  }
  const onNextClickHandler = (e) => {
    alert("next")
  }

  const overlayClickHandler = () => {
    setOverlay(false)
  }
  const openImgClickHandler = (event) => {
    event.stopPropagation()
    nextImgHandler()
  }


  const handleNextImage = () => {
    const lastIndex = images.length - 1
    const nextIndex = overlayImg.index === lastIndex ? 0 : overlayImg.index + 1

    setOverlayImg({
      img: images[nextIndex],
      index: nextIndex
    })
  }
  const handlePrevImage = () => {
    const lastIndex = images.length - 1
    const nextIndex = overlayImg.index === 0 ? lastIndex : overlayImg.index - 1
    setOverlayImg({
      img: images[nextIndex],
      index: nextIndex
    })
  }

  const prevImgHandler = (event) => {
    event.stopPropagation()
    handlePrevImage()
  }
  const nextImgHandler = (event) => {
    event.stopPropagation()
    handleNextImage()
  }

  const onSetOverlayImgHandler = (img) => {
    setOverlay(true)
    setOverlayImg(img)
  }

  useEffect(() => {
    if (overlay) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [overlay])


  useEffect(() => {
    const scrollContainer = document.getElementById('HORIZONTAL_SCROLL');

    scrollContainer.addEventListener('wheel', (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });
  }, [])

  return (
    <div id="HORIZONTAL_SCROLL" className={main_view_card_styles.gallery_card}>
      {
        overlay &&
        <Overlay
          onClick={overlayClickHandler}
        >
          <div
            id="OVERLAY_ID"
          >
            <BiChevronLeftSquare
              size="50px"
              style={{
                cursor: "pointer"
              }}
              onClick={prevImgHandler}
            />
            <img
              src={overlayImg.img}
              alt="gallery_img"
              onClick={nextImgHandler}
            />
            <BiChevronRightSquare
              size="50px"
              style={{
                cursor: "pointer"
              }}
              onClick={nextImgHandler}
            />
          </div>
        </Overlay>
      }
      {
        images.map((img, index) =>
          <GalleryElement
            key={index}
            img={{
              img,
              index
            }}
            onPrevClick={onPrevClickHandler}
            onNextClick={onNextClickHandler}
            onSetOverlayImg={onSetOverlayImgHandler}
          />
        )
      }
    </div>
  )
}

export default GalleryCard