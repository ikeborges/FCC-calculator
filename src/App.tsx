import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="calculator">
      <div id="display" className="display">
        670+6887
      </div>
      <div className="numpad">
        <button id="clear" className="numkey numkey--dimmed">
          C
        </button>
        <button className="numkey numkey--dimmed">+/-</button>
        <button className="numkey numkey--dimmed">%</button>
        <button id="divide" className="numkey numkey--highlighted">
          /
        </button>

        <button id="seven" className="numkey">
          7
        </button>
        <button id="eight" className="numkey">
          8
        </button>
        <button id="nine" className="numkey">
          9
        </button>
        <button id="multiply" className="numkey numkey--highlighted">
          x
        </button>

        <button id="four" className="numkey">
          4
        </button>
        <button id="five" className="numkey">
          5
        </button>
        <button id="six" className="numkey">
          6
        </button>
        <button id="subtract" className="numkey numkey--highlighted">
          -
        </button>

        <button id="one" className="numkey">
          1
        </button>
        <button id="two" className="numkey">
          2
        </button>
        <button id="three" className="numkey">
          3
        </button>
        <button id="add" className="numkey numkey--highlighted">
          +
        </button>

        <button id="zero" className="numkey colspan-2">
          0
        </button>
        <button id="decimal" className="numkey">
          .
        </button>
        <button id="equals" className="numkey numkey--highlighted">
          =
        </button>
      </div>
    </div>
  )
}

export default App
