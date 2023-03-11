import { useEffect, useState } from "react"

import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"
import GalleryElement from "../gallery/GalleryElement"

import { staff } from "../../config/staff"

const StaffCard = () => {

  const [rowOneAnimation, setRowOneAnimation] = useState(main_view_card_styles.second_card__row_one_animation_hide)

  window.addEventListener('scroll', function() {
    var rowOne = document.querySelector('#HORIZONTAL_SCROLL_STAFF');

    var positionOne = rowOne.getBoundingClientRect();

    if(positionOne.top < window.innerHeight && positionOne.bottom >= 0) {
      if (window.innerHeight - positionOne.top > 250) {
        setRowOneAnimation(main_view_card_styles.second_card__row_one_animation_show)
      } else {
        setRowOneAnimation(main_view_card_styles.second_card__row_one_animation_hide)
      }
    } else {
      setRowOneAnimation(main_view_card_styles.second_card__row_one_animation_hide)
    }

  });

  useEffect(() => {
    const scrollContainer = document.getElementById('HORIZONTAL_SCROLL_STAFF');

    scrollContainer.addEventListener('wheel', (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY/10;
    });
  }, [])


  return (
    <div id="HORIZONTAL_SCROLL_STAFF" className={`${main_view_card_styles.staff_card} ${rowOneAnimation}`}>
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