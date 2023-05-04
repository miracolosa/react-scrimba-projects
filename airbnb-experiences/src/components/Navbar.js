import airbnbLogo from '../images/airbnb-logo.png'
import '../stylesheets/navbar.css';

export default function Navbar() {
  return (
    <nav>
      <img src={airbnbLogo} alt="Airbnb Logo" width="82px"/>
    </nav>
  )
}
