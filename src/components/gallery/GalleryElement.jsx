import { useState } from "react"
import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"
/* import Overlay from "../overlays/Overlay"
import { BiChevronRightSquare, BiChevronLeftSquare } from "react-icons/bi" */

const GalleryElement = (props) => {

  const [overlay, setOverlay] = useState(false)

  const overlayClickHandler = () => {
    setOverlay(false)
  }
  const imgClickHandler = () => {
    props.onSetOverlayImg(props.img)
    // setOverlay(true)
  }
  const openImgClickHandler = (event) => {
    event.stopPropagation()
    nextImgHandler()
  }

  const prevImgHandler = (event) => {
    event.stopPropagation()
    props.onPrevClick()
  }
  const nextImgHandler = (event) => {
    event.stopPropagation()
    props.onNextClick()
  }

  return (
    <>
      <div
        className={main_view_card_styles.gallery_element}
        onClick={imgClickHandler}
      >
        <img
          src={props.img.img}
          alt="gallery_img"
          width="600"
          height="400"
        />
      </div>
      {/* {
        overlay &&
        <Overlay
          onClick={overlayClickHandler}
        >
          <div>
            <BiChevronLeftSquare
              size="50px"
              style={{
                cursor: "pointer"
              }}
              onClick={prevImgHandler}
            />
            <img
              src={props.img}
              alt="gallery_img"
              onClick={openImgClickHandler}
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
      } */}
    </>
  )
}

export default GalleryElement