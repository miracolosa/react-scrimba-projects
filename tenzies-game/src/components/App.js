import { useState } from 'react';
import { nanoid } from 'nanoid';
import '../stylesheets/App.css';
import Die from './Die'

function App() {
  const [dice, setDice] = useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push({
            value: Math.floor(Math.random() * 7),
            isHeld: false,
            id: nanoid()
        })
    }
    return newDice
}

  const diceElements =
    dice.map(die => <Die {...die} key={die.id} holdDice={() => holdDice(die.id)}  />)

  function rollDice() {
    setDice(allNewDice())
  }

  function holdDice(id) {
    console.log(id)
  }

  return (
    <main>
      <h1 className='main--title'>Tenzies</h1>
      <p className='main--text'>Roll until all dice are the same.
        Click each die to freeze it at its current value between rolls.</p>
      <section className='main--die'>
        {diceElements}
      </section>
      <button className='main--btn' onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
