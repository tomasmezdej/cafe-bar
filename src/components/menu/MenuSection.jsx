import MenuElement from "./MenuElement.jsx"
import "../../assets/styles/components/menu.scss"
const MenuSection = (props) => {

  const wrapStyle = {
    border: props.outlined && "2px solid grey"
  }

  return (
    <div
      style={props.outlined ? wrapStyle : {}}
    >
      <div
        className={"title_wrap"}
        style={{gap: props.icon ? "15px" : "0px"}}
      >
        <div>
          {
            props.icon
          }
        </div>
        <h1 className={"title"}>
          { props.title }
        </h1>
      </div>

      <div
        className="elementWrap"
      >
        {
          props.list.map((element, index) =>
            <MenuElement
              key={index}
              outlined={element.outlined}
              outlineBorderTop={element.outlinedTop}
              outlineBorderBottom={element.outlinedBottom}
              title={element.title}
              volume={element.volume}
              price={element.price}
            />
          )
        }
      </div>

    </div>
  )
}

export default MenuSection