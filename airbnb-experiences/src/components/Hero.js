import grid from '../images/photo-grid.png'
import '../stylesheets/hero.css';

export default function Hero() {
  return(
    <section className="hero">
      <img src={grid} alt="Grid" className="hero--photo"/>
      <h1 className="hero--header">Online experiences</h1>
      <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.</p>
    </section>
  )
}
