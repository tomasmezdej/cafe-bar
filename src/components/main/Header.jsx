import styles from "../../assets/styles/components/header.module.scss"
// import logo from "../../assets/images/header_logo.png"
import logo from "../../assets/images/logo.svg"

import { GiHamburgerMenu } from "react-icons/gi"
import { useEffect, useState } from "react"
import HeaderMenuLeft from "./HeaderMenuLeft"
import HeaderMenuRight from "./HeaderMenuRight"


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [initLoad, setInitLoad] = useState(true)

  const menuConditions =  menuOpen
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen])

  return (
    <div
      className={divClassName}
    >
      <img
        className={logoClassName}
        src={logo} alt=""
      />
      <ul className={`${styles.menu__base} ${ulClassName}`}>
        <HeaderMenuLeft />
      </ul>
      <ul>
        <HeaderMenuRight
          className={styles.hidden_on_mobile}
        />
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