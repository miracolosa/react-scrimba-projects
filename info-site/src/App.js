import './stylesheets/App.css';
import Main from './components/Main'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode( prevMode => !prevMode)
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
