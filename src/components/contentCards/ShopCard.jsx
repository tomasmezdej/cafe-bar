import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"
import ShopElement from "../shop/ShopElement"

import { shopItems } from "../../config/shop"

const ShopCard = () => {
  return (
    <div className={main_view_card_styles.sixth_card}>
        {/* <div className={main_view_card_styles.sixth_card__row_one}>
            <div className="img">
            </div>
            <div className="text">
              <h2>
                  A CUP OF GOURMET COFFEE SHARED WITH A FRIEND IS HAPPINESS TASTED AND TIME WELL SPENT.
              </h2>
            </div>
        </div>
        <div className={main_view_card_styles.sixth_card__row_two}>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum aut repellendus similique.
                Sed minus sit soluta corrupti,
                dolore hic at fugiat tempora omnis laudantium, quasi expedita sint eligendi eveniet neque.
              </p>
            </div>
            <div>
              <h1>
                DELIGHTFUL
              </h1>
              <h1>
                EXPERIENCE
              </h1>
            </div>
            <div>
              <div>

              </div>
            </div>
        </div> */}
        <div
          className={main_view_card_styles.sixth_card__row_one}
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
          className={main_view_card_styles.sixth_card__row_one}
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