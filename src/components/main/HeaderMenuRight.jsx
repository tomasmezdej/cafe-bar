import {
  BsFacebook
} from "react-icons/bs"
import {
  AiFillInstagram
} from "react-icons/ai"

const HeaderMenuRight = (props) => {
  const className = props.className

  return (
    <>
      <li className={className}>
        <BsFacebook
          size="30px"
        />
      </li>
      <li className={className}>
        <AiFillInstagram
          size="30px"
        />
      </li>
      <li className={className}>
        234 567 3455
      </li>
    </>
  )
}

export default HeaderMenuRight