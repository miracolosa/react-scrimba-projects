import { useState } from 'react';

import '../stylesheets/Meme.css'
import memesData from '../memesData'


export default function Meme() {
  const [meme, setMeme] = useState( {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  console.log(meme)

  function getMemeImage() {
    const memes = allMemeImages.data.memes
    const index = Math.floor(Math.random() * memes.length)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: memes[index].url
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
