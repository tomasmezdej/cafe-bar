
import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"
import cardTwoImage from "../../assets/images/coffee_making_content.jpg"
import cardTwoImageTwo from "../../assets/images/pizza.jpg"

const IntroCard = () => {

  return (
    <div className={main_view_card_styles.second_card}>
        <div className={main_view_card_styles.second_card__row_one}>
            <div className="img">
              <img src={cardTwoImage} alt="" />
            </div>
            <div className="text">
              <h1>
                OUR PASSIONS
              </h1>
              <h2>
                  A CUP OF GOURMET COFFEE SHARED WITH A FRIEND IS HAPPINESS TASTED AND TIME WELL SPENT.
              </h2>
            </div>
        </div>
        <div className={main_view_card_styles.second_card__row_two}>
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