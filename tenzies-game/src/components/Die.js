import '../stylesheets/Die.css'

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return(
    <div className="dice" style={styles} onClick={props.holdDice}>
      <span className="dice--value">{props.value}</span>
    </div>
  )
}
