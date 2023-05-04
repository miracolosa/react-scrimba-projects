import './App.css';
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
