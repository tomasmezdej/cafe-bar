import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"
import imgTop from "../../assets/images/brush_top.png"
const MainViewCard = (props) => {

  const className = props.dark ? main_view_card_styles.main_view_card__dark_bg : main_view_card_styles.main_view_card__light_bg

  const style = {
    // backgroundImage: `${(props.isMobile ? 'linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)) ,' : "")}url(${props.backgroundImage})`,
    backgroundImage: `url(${props.backgroundImage})`,
  }

  const contentStyle = {
    alignItems: props.alignCenter ? "center" : "",
    justifyContent: props.justifyCenter ? "center" : ""
  }


  return (
    <div
      id={props.id}
      className={`${main_view_card_styles.main_view_card} ${className}`}
      style={style}
    >
      {
        props.includeBrush &&
        <img
          className={main_view_card_styles.main_view_card__brush_top}
          src={imgTop}
          alt=""
        />
      }

      <div
        className={`${main_view_card_styles.main_view_card__content} ${props.className}`}
        style={contentStyle}
      >
        { props.children }
      </div>
      {
        (props.includeBrush && !props.noBottomBrush) &&
        <img
          className={main_view_card_styles.main_view_card__brush_bottom}
          src={imgTop}
          alt=""
        />
      }
    </div>
  )
}

export default MainViewCard