import { useState } from "react"

import styles from "../../assets/styles/components/scrollUpButton.module.scss"

import { BiChevronUpSquare } from "react-icons/bi"

const ScrollUpButton = () => {

    const [scrollUpButton, setScrollUpButton] = useState(false)

    // let backgroundImage = setBackgroundImage(viewPort.width)// viewPort.width < 636 ? backgroundImageMobile : backgroundImageDesktop

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200 && scrollUpButton) {
          setScrollUpButton(true)
        }
        if (window.scrollY <= 200 && !scrollUpButton) {
          setScrollUpButton(false)
        }
        // setScrollUpButton(viewPort.width < 425 ? backgroundImageMobile : backgroundImageDesktop)
        /* backgroundImage = setBackgroundImage(viewPort.width) */
    })

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

  return (
    <>
      <BiChevronUpSquare
        className={`${styles.scroll_up_button} ${(scrollUpButton) ? styles.scroll_up_button__visible : styles.scroll_up_button__hidden}`}
        size="50px"
        onClick={handleClick}
      />
    </>
  )
}

export default ScrollUpButton