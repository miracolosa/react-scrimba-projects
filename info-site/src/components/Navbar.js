import logo from '../logo.svg';
import '../stylesheets/Navbar.css'

export default function Navbar(props) {
  return (
    <nav className={ props.darkMode ? "dark" : "" }>
      <img src={logo} alt="React Logo" width="50px"/>
      <h3 className='nav--title'>ReactFacts</h3>
      <div className='toggler'>
        <span className='toggler--light'>Light</span>
        <div className='toggler--slider'>
          <button onClick={props.toggleDarkMode} className='toggler--slider--circle'></button>
        </div>
        <span className='toggler--dark'>Dark</span>
      </div>
    </nav>
  )
}
