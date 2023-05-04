import image from '../images/katie-zaferes.png'
import star from '../images/star.png'
import '../stylesheets/card.css';

export default function Card() {
  return (
    <div className="card">
      <img src={image} alt="Katie Zaferes" className="card--photo"/>
      <div className="card--rating">
        <img src={star} alt="Star" className='card--star'/>
        <span>5.0</span>
        <span className="text-gray">(6)</span>
        <span className="text-gray">• USA</span>
      </div>
      <div className="card--text">
        <p>Life lessons with Katie Zaferes</p>
        <span><strong>From $136</strong> / person</span>
      </div>
    </div>
  )
}
