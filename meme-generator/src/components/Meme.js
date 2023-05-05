import '../stylesheets/Meme.css'

export default function Meme() {
  return(
    <form className="input">
      <div className="input--fields">
        <input type="text" id="firstKeyword" placeholder="Top text"/>
        <input type="text" id="secondKeyword" placeholder="Bottom text"/>
      </div>
      <input type="submit" value="Get a new meme image 🖼" className="input--btn"/>
    </form>
  )
}
