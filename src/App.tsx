import { useState } from 'react'
import './App.css'

type Operation = 'add' | 'subtract' | 'multiply' | 'divide'

function App() {
  const [expression, setExpression] = useState('')
  const [display, setDisplay] = useState('0')

  const clearClickHandler = () => {
    console.log('clear')
  }

  const operationClickHandler = (operation: Operation) => {
    console.log(operation)
  }

  const numberClickHandler = (numStr: string) => {
    console.log(numStr)
  }

  const decimalClickHandler = () => {
    console.log('decimal')
  }

  const equalsClickHandler = () => {
    console.log('equals')
  }

  return (
    <div className="calculator">
      <div className="display--container">
        <div id="expression">{expression}</div>
        <div id="display">{display}</div>
      </div>
      <div className="numpad">
        <button
          onClick={clearClickHandler}
          id="clear"
          className="numkey numkey--dimmed colspan-3"
        >
          AC
        </button>
        <button
          onClick={() => operationClickHandler('divide')}
          id="divide"
          className="numkey numkey--highlighted"
        >
          /
        </button>

        <button
          onClick={() => numberClickHandler('7')}
          id="seven"
          className="numkey"
        >
          7
        </button>
        <button
          onClick={() => numberClickHandler('8')}
          id="eight"
          className="numkey"
        >
          8
        </button>
        <button
          onClick={() => numberClickHandler('9')}
          id="nine"
          className="numkey"
        >
          9
        </button>
        <button
          onClick={() => operationClickHandler('multiply')}
          id="multiply"
          className="numkey numkey--highlighted"
        >
          x
        </button>

        <button
          onClick={() => numberClickHandler('4')}
          id="four"
          className="numkey"
        >
          4
        </button>
        <button
          onClick={() => numberClickHandler('5')}
          id="five"
          className="numkey"
        >
          5
        </button>
        <button
          onClick={() => numberClickHandler('6')}
          id="six"
          className="numkey"
        >
          6
        </button>
        <button
          onClick={() => operationClickHandler('subtract')}
          id="subtract"
          className="numkey numkey--highlighted"
        >
          -
        </button>

        <button
          onClick={() => numberClickHandler('1')}
          id="one"
          className="numkey"
        >
          1
        </button>
        <button
          onClick={() => numberClickHandler('2')}
          id="two"
          className="numkey"
        >
          2
        </button>
        <button
          onClick={() => numberClickHandler('3')}
          id="three"
          className="numkey"
        >
          3
        </button>
        <button
          onClick={() => operationClickHandler('add')}
          id="add"
          className="numkey numkey--highlighted"
        >
          +
        </button>

        <button
          onClick={() => numberClickHandler('0')}
          id="zero"
          className="numkey colspan-2"
        >
          0
        </button>
        <button onClick={decimalClickHandler} id="decimal" className="numkey">
          .
        </button>
        <button
          onClick={equalsClickHandler}
          id="equals"
          className="numkey numkey--highlighted"
        >
          =
        </button>
      </div>
    </div>
  )
}

export default App
