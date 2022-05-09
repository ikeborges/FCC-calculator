import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="calculator">
      <div className="display">670+6887</div>
      <div className="numpad">
        <button className="numkey numkey--dimmed">C</button>
        <button className="numkey numkey--dimmed">+/-</button>
        <button className="numkey numkey--dimmed">%</button>
        <button className="numkey numkey--highlighted">/</button>

        <button className="numkey">7</button>
        <button className="numkey">8</button>
        <button className="numkey">9</button>
        <button className="numkey numkey--highlighted">x</button>

        <button className="numkey">4</button>
        <button className="numkey">5</button>
        <button className="numkey">6</button>
        <button className="numkey numkey--highlighted">-</button>

        <button className="numkey">1</button>
        <button className="numkey">2</button>
        <button className="numkey">3</button>
        <button className="numkey numkey--highlighted">+</button>

        <button className="numkey colspan-2">0</button>
        <button className="numkey">,</button>
        <button className="numkey numkey--highlighted">=</button>
      </div>
    </div>
  )
}

export default App
