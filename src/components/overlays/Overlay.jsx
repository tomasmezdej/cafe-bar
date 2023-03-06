import classes from "../../assets/styles/components/overlay.module.scss"

const Overlay = (props) => {
  return (
    <div
      id={props.id}
      className={classes.overlay}
      onClick={props.onClick}
    >

      { props.children }
    </div>
  )
}

export default Overlay