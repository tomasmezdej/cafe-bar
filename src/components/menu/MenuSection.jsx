import MenuElement from "./MenuElement.jsx"
import "../../assets/styles/components/menu.scss"
const MenuSection = (props) => {

  const wrapStyle = {
    // border: "2px solid grey"
  }

  return (
    <div>
      <div className={"title_wrap"}>
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
        style={props.outlined ? wrapStyle : {}}
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