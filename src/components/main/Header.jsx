import styles from "../../assets/styles/components/header.module.scss"
import logo from "../../assets/images/header_logo.png"

import { GiHamburgerMenu } from "react-icons/gi"
import { useEffect, useState } from "react"


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [initLoad, setInitLoad] = useState(true)

  const menuConditions = menuOpen
    ? styles.menu_open
    : (initLoad)
      ? styles.menu_close_init
      : styles.menu_close

  const [ulClassName, setIlClassName] = useState(menuConditions)

  const divClassName = `${styles.header} ${menuOpen
    ? styles.header_open
    : styles.header_close}`

  const logoClassName = menuOpen
    ? `${styles.logo_hidden}`
    : styles.logo

  /* const ulClassName = menuOpen
    ? styles.menu_open
    : (initLoad)
      ? styles.menu_close_init
      : styles.menu_close */

  useEffect(() => {
    setInitLoad(false)
    setIlClassName(menuConditions)
  }, [menuOpen])

  return (
    <div
      className={divClassName}
    >
      <img
        className={logoClassName}
        src={logo} alt=""
      />
      <ul className={ulClassName}>
        <li>
          Home { initLoad }
        </li>
        <li>
          Staff
        </li>
        <li>
          Events
        </li>
      </ul>
      <div className={styles.hamburger}>
        <GiHamburgerMenu
          size="50px"
          style={{
            padding: "0px 10px"
          }}
          onClick={() => setMenuOpen((prevState) => {
            return !prevState
          })}
        />
      </div>

    </div>
  )
}

export default Header