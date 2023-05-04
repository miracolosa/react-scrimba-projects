import './stylesheets/App.css';
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import data from './data'

function App() {
  const experiences = data.map( experience => {
    return <Card img={experience.coverImg} rating={experience.stats.rating}
          reviewCount={experience.stats.reviewCount} location={experience.location}
          title={experience.title} price={experience.price}/>
  })

  return (
    <div className="container">
      <Navbar />
      <Hero />
      {experiences}
    </div>
  );
}

export default App;
