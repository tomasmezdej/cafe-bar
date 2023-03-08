import classes from "../../assets/styles/components/mainViewCard.module.scss"
import {
  AiFillInstagram
} from "react-icons/ai"

import testImg from "../../assets/images/main_background.jpg"
import testImg2 from "../../assets/images/coffee_done.jpg"
import testImg3 from "../../assets/images/coffee_done_2.jpg"
import testImg4 from "../../assets/images/croissant.jpg"

import { instagramLink } from "../../config/contact"

const EventsCard = () => {

  const redirectToInstagram = () => {
    window.open(instagramLink, '_blank')
  }

  return (
    <div
      className={classes.event_card}
    >
      <div
        className={classes.event_card_row_one}
      >
        <div>
          <img src={testImg} alt="" />
        </div>
        <div>
          <img src={testImg2} alt="" />
        </div>
      </div>
      <div
        className={classes.event_card_row_two}
      >
        <div>
          <img src={testImg3} alt="" />
        </div>
        <div>
          <img src={testImg} alt="" />
        </div>
        <div>
          <img src={testImg4} alt="" />
        </div>
      </div>
      <div
        className={classes.event_card_more_content}
        onClick={redirectToInstagram}
      >
        <h1
          className={classes.cursor_pointer}
        >
          More on instagram
        </h1>
        <AiFillInstagram
          className={classes.cursor_pointer}
          size="50px"
        />
      </div>
    </div>
  )
}

export default EventsCard