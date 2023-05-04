import '../stylesheets/card.css';

export default function Card(experience) {
  return (
    <div className="card">
      <img src={`../images/${experience.img}`} alt="Experience" className="card--photo"/>
      <div className="card--rating">
        <img src="../images/star.png" alt="Star" className='card--star'/>
        <span>{experience.rating}</span>
        <span className="text-gray">({experience.reviewCount})</span>
        <span className="text-gray">• {experience.location}</span>
      </div>
      <div className="card--text">
        <p>{experience.title}</p>
        <span><strong>From ${experience.price}</strong> / person</span>
      </div>
    </div>
  )
}
