import '../stylesheets/App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'
import Die from './Die'

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allDiceHeld = dice.every(die => die.isHeld)
    const allDiceSame = dice.every(die => die.value === dice[0].value)
    if (allDiceHeld && allDiceSame) {
      setTenzies(true)
      console.log('You won!')
    }
}, [dice])

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 7),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())
    }
    return newDice
}

  const diceElements =
    dice.map(die => <Die {...die} key={die.id} holdDice={() => holdDice(die.id)}  />)

  function rollDice() {
    if(!tenzies) {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ?
                die :
                generateNewDie()
        }))
    } else {
        setTenzies(false)
        setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ?
            {...die, isHeld: !die.isHeld} :
            die
    }))
  }

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className='main--title'>Tenzies</h1>
      <p className='main--text'>Roll until all dice are the same.
        Click each die to freeze it at its current value between rolls.</p>
      <section className='main--die'>
        {diceElements}
      </section>
      <button className='main--btn' onClick={rollDice}>
        { tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
