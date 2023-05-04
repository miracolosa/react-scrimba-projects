import '../stylesheets/card.css';

export default function Card(item) {
  let badgeText
  if (item.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (item.location === "Online") {
      badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${item.coverImg}`} alt="Experience" className="card--photo"/>
      <div className="card--rating">
        <img src="../images/star.png" alt="Star" className='card--star'/>
        <span>{item.stats.rating}</span>
        <span className="text-gray">({item.stats.reviewCount})</span>
        <span className="text-gray">• {item.location}</span>
      </div>
      <div className="card--text">
        <p>{item.title}</p>
        <span><strong>From ${item.price}</strong> / person</span>
      </div>
    </div>
  )
}
