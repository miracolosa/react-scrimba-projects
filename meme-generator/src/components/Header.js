import '../stylesheets/Header.css'

export default function Header() {
  return(
    <header className="header">
      <img src="/images/troll-face.png" alt="Troll face" className="header--photo" height="40px"/>
      <h3 className="header--title">Meme Generator</h3>
      <h4 className="header--subtitle">React Course - Project 3</h4>
    </header>
  )
}
