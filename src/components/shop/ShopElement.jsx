import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"


const ShopElement = (props) => {
  return (
    <div className={main_view_card_styles.shop_element}>
      <div>
        <img src={props.img} alt=""/>
      </div>
      <div>
        <h1>
          { props.title || "Brazilian coffee" }
        </h1>
        <h2>
          { props.price || "12,00 € - 40,00 €" }
        </h2>
      </div>
    </div>
  )
}

export default ShopElement