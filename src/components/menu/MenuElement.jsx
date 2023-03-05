import "../../assets/styles/components/menu.scss"

const MenuElement = (props) => {

  const outlinedStyle = {
    borderTop: props.outlineBorderTop && "2px solid grey",
    borderBottom: props.outlineBorderBottom && "2px solid grey"
  }

  return (
    <div
      className={`${"element"}`}
      style={outlinedStyle}
    >
      <div className={`${props.outlined ? "outline" : "not/outline"}`}>
        <h1>
          { props.title }
        </h1>
        <h2>
          { props.volume }
        </h2>
      </div>
      <div>
        <h1>
          { props.price }
        </h1>
      </div>
    </div>
  )
}

export default MenuElement