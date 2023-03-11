import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"
import ShopElement from "../shop/ShopElement"

import { shopItems } from "../../config/shop"
import { useState } from "react"

const ShopCard = () => {

  const [rowOneAnimation, setRowOneAnimation] = useState(main_view_card_styles.second_card__row_one_animation_hide)
  const [rowTwoAnimation, setRowTwoAnimation] = useState(main_view_card_styles.second_card__row_two_animation_hide)

  window.addEventListener('scroll', function() {
    var rowOne = document.querySelector('#SHOP_CARD_ROW_ONE');
    var rowTwo = document.querySelector('#SHOP_CARD_ROW_TWO');

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
    <div className={main_view_card_styles.sixth_card}>
        <div
          id="SHOP_CARD_ROW_ONE"
          className={`${main_view_card_styles.sixth_card__row_one} ${rowOneAnimation}`}
        >
          {
            shopItems.rowOne.map((item, index) =>

                <ShopElement
                  key={index}
                  img={ item.img }
                  title={ item.title }
                  price={ item.price }
                />
            )
          }
        </div>
        <div
          id="SHOP_CARD_ROW_TWO"
          className={`${main_view_card_styles.sixth_card__row_one} ${rowTwoAnimation}`}
        >
          {
            shopItems.rowTwo.map((item, index) =>

                <ShopElement
                  key={index}
                  img={ item.img }
                  title={ item.title }
                  price={ item.price }
                />
            )
          }
        </div>



    </div>
  )
}

export default ShopCard