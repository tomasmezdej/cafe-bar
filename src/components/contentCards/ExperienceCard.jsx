import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"
import cardThreeImage from "../../assets/images/space.jpeg"
import cardThreeImageTwo from "../../assets/images/bar_setup.jpg"
import takeWayStamp from "../../assets/images/takeway_stamp.png"
import cardThreeImageThree from "../../assets/images/coffee_done.jpg"
import { useState } from "react"

const ExperienceCard = () => {

  const [rowOneAnimation, setRowOneAnimation] = useState(main_view_card_styles.second_card__row_one_animation_hide)
  const [rowTwoAnimation, setRowTwoAnimation] = useState(main_view_card_styles.second_card__row_two_animation_hide)

  window.addEventListener('scroll', function() {
    var rowOne = document.querySelector('#EXPERIENCE_CARD_ROW_ONE');
    var rowTwo = document.querySelector('#EXPERIENCE_CARD_ROW_TWO');

    var positionOne = rowOne.getBoundingClientRect();
    var positionTwo = rowTwo.getBoundingClientRect();

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
    <div className={main_view_card_styles.fourth_card}>
        <div
          id="EXPERIENCE_CARD_ROW_ONE"
          className={`${main_view_card_styles.fourth_card__row_one} ${rowOneAnimation}`}
        >
            <div className="img">
              <img src={cardThreeImage} alt="" />
            </div>
            <div className="text">
              <h2>
                  A CUP OF GOURMET COFFEE SHARED WITH A FRIEND IS HAPPINESS TASTED AND TIME WELL SPENT.
              </h2>
            </div>
        </div>
        <div
          id="EXPERIENCE_CARD_ROW_TWO"
          className={`${main_view_card_styles.fourth_card__row_two} ${rowTwoAnimation}`}
        >
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
        </div>

    </div>
  )
}

export default ExperienceCard