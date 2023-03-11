import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"
import MenuSection from "../menu/MenuSection"

import {
  MenuSectionFrontLeft,
  MenuSectionFrontRight,
  MenuSectionBackLeft,
  MenuSectionBackRight
} from "../../config/menu"
import { useState } from "react"

const MenuCard = () => {

  const [rowOneAnimation, setRowOneAnimation] = useState(main_view_card_styles.second_card__row_one_animation_hide)
  const [rowTwoAnimation, setRowTwoAnimation] = useState(main_view_card_styles.second_card__row_two_animation_hide)
  const [titleAnimation, setTitleAnimation] = useState(main_view_card_styles.fifth_card_title_animation_hide)



  window.addEventListener('scroll', function() {
    var title = document.querySelector('#MENU_CARD_TITLE_ID');
    var menuOne = document.querySelector('#MENU_CARD_ROW_ONE_ID');
    var rowTwo = document.querySelector('#MENU_CARD_ROW_TWO_ID');

    var positionTitle = title.getBoundingClientRect();
    var positionOne = menuOne.getBoundingClientRect();
    var positionTwo = rowTwo.getBoundingClientRect();

    if(positionTitle.top < window.innerHeight && positionTitle.bottom >= 0) {
      if (window.innerHeight - positionTitle.top > 250) {
        setTitleAnimation(main_view_card_styles.fifth_card_title_animation_show)
      } else {
        setTitleAnimation(main_view_card_styles.fifth_card_title_animation_hide)
      }
    } else {
      setTitleAnimation(main_view_card_styles.fifth_card_title_animation_hide)
    }

    if(positionOne.top < window.innerHeight && positionOne.bottom >= 0) {
      if (window.innerHeight - positionOne.top > 250) {
        setRowOneAnimation(main_view_card_styles.second_card__row_one_animation_show)
      } else {
        setRowOneAnimation(main_view_card_styles.second_card__row_one_animation_hide)
      }
    } else {
      setRowOneAnimation(main_view_card_styles.second_card__row_one_animation_hide)
    }

    if(positionTwo.top < window.innerHeight && positionTwo.bottom >= 0) {
      if (window.innerHeight - positionTwo.top > 250) {
        setRowTwoAnimation(main_view_card_styles.second_card__row_two_animation_show)
      } else {
        setRowTwoAnimation(main_view_card_styles.second_card__row_two_animation_hide)
      }
    } else {
      setRowTwoAnimation(main_view_card_styles.second_card__row_two_animation_hide)
    }
  });
  return (
    <div
      className={main_view_card_styles.fifth_card}
    >
        <div
          id="MENU_CARD_TITLE_ID"
          className={`${main_view_card_styles.fifth_card__row_one} ${titleAnimation}`}
        >
            <h2>
              Our
            </h2>
            <h1>
              MENUS
            </h1>
        </div>
        <div
          id="MENU_CARD_ROW_ONE_ID"
          className={`${main_view_card_styles.fifth_card__row_two} ${rowOneAnimation}`}
          style={{marginTop: "15px", gap: "15px"}}
        >
          <div className={main_view_card_styles.fifth_card__row_two_col_one}>
            {
              MenuSectionFrontLeft.map((section, index) =>
                <MenuSection
                  key={index}
                  icon={section.icon}
                  title={section.title}
                  list={section.list}
                />
              )
            }
          </div>
          <div className={main_view_card_styles.fifth_card__row_two_col_two}>
            {
              MenuSectionFrontRight.map((section, index) =>
                <MenuSection
                  key={index}
                  outlined={section.outlined}
                  icon={section.icon}
                  title={section.title}
                  list={section.list}
                />
              )
            }
          </div>
        </div>
        <div
          id="MENU_CARD_ROW_TWO_ID"
          className={`${main_view_card_styles.fifth_card__row_two} ${rowTwoAnimation}`}
          style={{marginTop: "15px", gap: "15px"}}
        >
          <div className={main_view_card_styles.fifth_card__row_two_col_one}>
            {
              MenuSectionBackLeft.map((section, index) =>
                <MenuSection
                  key={index}
                  outlined={section.outlined}
                  icon={section.icon}
                  title={section.title}
                  list={section.list}
                />
              )
            }
          </div>
          <div className={main_view_card_styles.fifth_card__row_two_col_two}>
            {
              MenuSectionBackRight.map((section, index) =>
                <MenuSection
                  key={index}
                  outlined={section.outlined}
                  icon={section.icon}
                  title={section.title}
                  list={section.list}
                />
              )
            }
          </div>
        </div>
        {/* <div className={main_view_card_styles.fifth_card__row_two}>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum aut repellendus similique.
                Sed minus sit soluta corrupti,
                dolore hic at fugiat tempora omnis laudantium, quasi expedita sint eligendi eveniet neque.
              </p>
              <img src={takeWayStamp} alt="" />
            </div>
            <div>
              <h1>
                DELIGHTFUL
              </h1>
              <h1>
                EXPERIENCE
              </h1>
              <img src={cardThreeImageTwo} alt="" />
            </div>
            <div>
              <div>
                <img src={cardThreeImageThree} alt="" />
              </div>
            </div>
        </div> */}

    </div>
  )
}

export default MenuCard