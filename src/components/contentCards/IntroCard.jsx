import { useState } from "react"

import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"
import cardTwoImage from "../../assets/images/coffee_making_content.jpg"
import cardTwoImageTwo from "../../assets/images/pizza.jpg"


const IntroCard = () => {

  const [rowOneAnimation, setRowOneAnimation] = useState(main_view_card_styles.second_card__row_one_animation_hide)
  const [rowTwoAnimation, setRowTwoAnimation] = useState(main_view_card_styles.second_card__row_two_animation_hide)

  window.addEventListener('scroll', function() {
    var rowOne = document.querySelector('#INTRO_CARD_ROW_ONE');
    var rowTwo = document.querySelector('#INTRO_CARD_ROW_TWO');

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
    <div
      id="INTRO_CARD"
      className={main_view_card_styles.second_card}
    >
        <div
          id="INTRO_CARD_ROW_ONE"
          className={`${main_view_card_styles.second_card__row_one} ${rowOneAnimation}`}
        >
            <div className="img">
              <img src={cardTwoImage} alt="" />
            </div>
            <div id="INTRO_CARD_TITLE_ID" className="text">
              <h1>
                OUR PASSIONS
              </h1>
              <h2>
                  A CUP OF GOURMET COFFEE SHARED WITH A FRIEND IS HAPPINESS TASTED AND TIME WELL SPENT.
              </h2>
            </div>
        </div>
        <div
          id="INTRO_CARD_ROW_TWO"
          className={`${main_view_card_styles.second_card__row_two} ${rowTwoAnimation}`}
        >
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, magnam!
                Corporis recusandae odit nisi aliquid illum sint eius minus necessitatibus,
                ipsa voluptatum iste odio, tenetur quisquam? Maiores deserunt alias exercitationem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, magnam!
                Corporis recusandae odit nisi aliquid illum sint eius minus necessitatibus,
                ipsa voluptatum iste odio, tenetur quisquam? Maiores deserunt alias exercitationem?
              </p>
              <h4>
                Donald John Trump
              </h4>
              <h5>
                CEO & FOUNDER CRAFT COFFEE
              </h5>
            </div>
            <img src={cardTwoImageTwo} alt="" />
        </div>

    </div>
  )
}

export default IntroCard