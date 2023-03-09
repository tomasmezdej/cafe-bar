import { useEffect } from "react"

import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"
import GalleryElement from "../gallery/GalleryElement"

import { staff } from "../../config/staff"

const StaffCard = () => {

  useEffect(() => {
    const scrollContainer = document.getElementById('HORIZONTAL_SCROLL_STAFF');

    scrollContainer.addEventListener('wheel', (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY/10;
    });
  }, [])


  return (
    <div id="HORIZONTAL_SCROLL_STAFF" className={main_view_card_styles.staff_card}>
      {
        staff.map((element, index) =>
          <GalleryElement
            type="staff"
            className={main_view_card_styles.staff_element}
            key={index}
            name={element.name}
            img={{
              img: element.img,
              index
            }}
          />
        )
      }
    </div>
  )
}

export default StaffCard