import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"

const MainViewCard = (props) => {

  const className = props.dark ? main_view_card_styles.main_view_card__dark_bg : main_view_card_styles.main_view_card__light_bg

  const style = {
    backgroundImage: `${(props.isMobile ? 'linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)) ,' : "")}url(${props.backgroundImage})`,

  }

  return (
    <div
      className={`${main_view_card_styles.main_view_card} ${className}`}
      style={style}
    >
      {/* <img src={props.backgroundImage} alt="" /> */}
      { props.children }
    </div>
  )
}

export default MainViewCard