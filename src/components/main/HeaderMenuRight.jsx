import {
  BsFacebook
} from "react-icons/bs"
import {
  AiFillInstagram
} from "react-icons/ai"

import { instagramLink } from "../../config/contact"

const HeaderMenuRight = (props) => {
  const className = props.className

  const scrollTo = (dest_element_id) => {
    document
      .getElementById(dest_element_id)
      .scrollIntoView({behavior: 'smooth'}, true)
    setTimeout(() => {
      props.onCloseMenu()
    }, 200);
  }

  const redirect = () => {
    window.open(instagramLink, '_blank')
  }

  return (
    <>
      <li
        className={className}
        onClick={() => scrollTo("STAFF_ID")}
      >
        Staff
      </li>
      <li
        className={className}
        onClick={() => scrollTo("EVENTS_ID")}
      >
        Events
      </li>
      {/* <li className={className}>
        <BsFacebook
          size="30px"
        />
      </li> */}
      <li className={className}>
        <AiFillInstagram
          size="30px"
          onClick={redirect}
        />
      </li>
      <li className={className}>
        234 567 3455
      </li>
    </>
  )
}

export default HeaderMenuRight