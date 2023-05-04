import './stylesheets/App.css';
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import data from './data'

function App() {
  const experiences = data.map( experience => {
    return <Card key={experience.id} {...experience}/>
  })

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {experiences}
      </section>
    </div>
  );
}

export default App;
