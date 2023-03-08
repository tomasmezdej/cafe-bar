const HeaderMenuLeft = (props) => {

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