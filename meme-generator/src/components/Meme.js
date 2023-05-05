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



  function getMemeImage() {
    const memes = allMemeImages.data.memes
    const index = Math.floor(Math.random() * memes.length)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: memes[index].url
    }))
  }

  return(
    <div className="input">
      <div className="input--fields">
        <input type="text" id="firstKeyword" placeholder="Top text"/>
        <input type="text" id="secondKeyword" placeholder="Bottom text"/>
      </div>
      <button className="input--btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
      <div className="image--center">
        <img src={meme.randomImage} alt="meme" className="meme"/>
      </div>
    </div>
  )
}
