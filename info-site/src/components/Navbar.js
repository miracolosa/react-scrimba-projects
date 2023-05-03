import logo from '../logo.svg';

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="React Logo" width="50px"/>
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </div>
  )
}
