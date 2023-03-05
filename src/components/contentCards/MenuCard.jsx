import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"
import MenuSection from "../menu/MenuSection"

import { MenuSectionFrontLeft, MenuSectionFrontRight } from "../../config/menu"

const MenuCard = () => {
  return (
    <div className={main_view_card_styles.fifth_card}>
        <div className={main_view_card_styles.fifth_card__row_one}>
            <h2>
              Our
            </h2>
            <h1>
              MENUS
            </h1>
        </div>
        <div className={main_view_card_styles.fifth_card__row_two}>
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