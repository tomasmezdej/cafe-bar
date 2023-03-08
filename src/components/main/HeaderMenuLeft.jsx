import classes from "../../assets/styles/components/header.module.scss"

const HeaderMenuLeft = (props) => {

  const hiddenOnPCClass = classes.left_menu_hidden_on_pc

  const scrollTo = (dest_element_id) => {
    document
      .getElementById(dest_element_id)
      .scrollIntoView({behavior: 'smooth'}, true)
    setTimeout(() => {
      props.onCloseMenu()
    }, 200);
  }

  return (
    <>
      {/*
        <li>
          Home
        </li>
      */}
      <li
        onClick={() => scrollTo('ABOUT_US_ID')}
      >
        About us
      </li>
      <li
        onClick={() => scrollTo('LOCAL_SUPPLIERS_ID')}
      >
        Local suppliers
      </li>
      <li
        onClick={() => scrollTo('MENU_ID')}
      >
        Menu
      </li>
      <li
        onClick={() => scrollTo('SHOP_ID')}
      >
        Shop
      </li>
      <li
        onClick={() => scrollTo('GALLERY_ID')}
      >
        Gallery
      </li>
      <li
        className={hiddenOnPCClass}
        onClick={() => scrollTo("STAFF_ID")}
      >
        Staff
      </li>
      <li
        className={hiddenOnPCClass}
        onClick={() => scrollTo("EVENTS_ID")}
      >
        Events
      </li>
      {/*
      <li>
        Staff
      </li>
      <li>
        Events
      </li>
      */}
    </>
  )
}

export default HeaderMenuLeft