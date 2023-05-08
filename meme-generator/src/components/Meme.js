import { useState, useEffect } from 'react';
import '../stylesheets/Meme.css'


export default function Meme() {
  const [meme, setMeme] = useState( {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect( () => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(info => setAllMemes(info.data.memes))
  })

  function getMemeImage() {
    const index = Math.floor(Math.random() * allMemes.length)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: allMemes[index].url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme( prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return(
    <div className="input">
      <div className="input--fields">
        <input
          type="text"
          id="firstKeyword"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          id="secondKeyword"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
      </div>
      <button className="input--btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme--image"/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  )
}
