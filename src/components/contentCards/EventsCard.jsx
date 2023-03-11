import classes from "../../assets/styles/components/mainViewCard.module.scss"
import {
  AiFillInstagram
} from "react-icons/ai"

import testImg from "../../assets/images/main_background.jpg"
import testImg2 from "../../assets/images/coffee_done.jpg"
import testImg3 from "../../assets/images/coffee_done_2.jpg"
import testImg4 from "../../assets/images/croissant.jpg"

import { instagramLink } from "../../config/contact"
import { useState } from "react"

const EventsCard = () => {


  const [rowOneAnimation, setRowOneAnimation] = useState(classes.second_card__row_one_animation_hide)
  const [rowTwoAnimation, setRowTwoAnimation] = useState(classes.second_card__row_two_animation_hide)
  const [titleAnimation, setTitleAnimation] = useState(classes.fifth_card_title_animation_hide)


  window.addEventListener('scroll', function() {
    var title = document.querySelector('#EVENTS_CARD_MORE');
    var rowOne = document.querySelector('#EVENTS_CARD_ROW_ONE');
    var rowTwo = document.querySelector('#EVENTS_CARD_ROW_TWO');

    var positionTitle = title.getBoundingClientRect();
    var positionOne = rowOne.getBoundingClientRect();
    var positionTwo = rowTwo.getBoundingClientRect();

    if(positionTitle.top < window.innerHeight && positionTitle.bottom >= 0) {
      if (window.innerHeight - positionTitle.top > 0) {
        setTitleAnimation(classes.fifth_card_title_animation_show)
      } else {
        setTitleAnimation(classes.fifth_card_title_animation_hide)
      }
    } else {
      setTitleAnimation(classes.fifth_card_title_animation_hide)
    }

    if(positionOne.top < window.innerHeight && positionOne.bottom >= 0) {
      if (window.innerHeight - positionOne.top > 250) {
        setRowOneAnimation(classes.second_card__row_one_animation_show)
      } else {
        setRowOneAnimation(classes.second_card__row_one_animation_hide)
      }
    } else {
      setRowOneAnimation(classes.second_card__row_one_animation_hide)
    }

    if(positionTwo.top < window.innerHeight && positionTwo.bottom >= 0) {
      if (window.innerHeight - positionTwo.top > 250) {
        setRowTwoAnimation(classes.second_card__row_two_animation_show)
      } else {
        setRowTwoAnimation(classes.second_card__row_two_animation_hide)
      }
    } else {
      setRowTwoAnimation(classes.second_card__row_two_animation_hide)
    }
  });



  const redirectToInstagram = () => {
    window.open(instagramLink, '_blank')
  }

  return (
    <div
      className={classes.event_card}
    >
      <div
        id="EVENTS_CARD_ROW_ONE"
        className={`${classes.event_card_row_one} ${rowOneAnimation}`}
      >
        <div>
          <img src={testImg} alt="" />
        </div>
        <div>
          <img src={testImg2} alt="" />
        </div>
      </div>
      <div
        id="EVENTS_CARD_ROW_TWO"
        className={`${classes.event_card_row_two} ${rowTwoAnimation}`}
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
          id="EVENTS_CARD_MORE"
          className={`${classes.cursor_pointer} ${titleAnimation}`}
        >
          More on instagram
        </h1>
        <AiFillInstagram
          className={`${classes.cursor_pointer} ${titleAnimation}`}
          size="50px"
        />
      </div>
    </div>
  )
}

export default EventsCard