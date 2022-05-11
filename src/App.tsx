import { useState } from 'react'
import './App.css'

enum Operations {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
}

function App() {
  const operatorRegex = /[\+\-\/\*]/
  const [expression, setExpression] = useState('')
  const [newResult, setNewResult] = useState('')
  const [display, setDisplay] = useState('0')

  const clearClickHandler = () => {
    setExpression('')
    setDisplay('0')
  }

  const operationClickHandler = (operation: Operations) => {
    if (newResult !== '') {
      setExpression(newResult.concat(operation))
      setDisplay(operation)
      setNewResult('')
      return
    }

    if (expression.at(-1) === operation) return

    if (
      operation !== Operations.SUBTRACT &&
      expression.at(-1)?.match(operatorRegex)
    ) {
      if (expression.at(-2)?.match(operatorRegex) && expression.at(-1) === '-')
        setExpression((e) => e.slice(0, e.length - 2) + operation)
      else setExpression((e) => e.slice(0, e.length - 1) + operation)
    } else {
      setExpression((e) => e.concat(operation))
    }
    setDisplay(operation)
  }

  const numberClickHandler = (numStr: string) => {
    setDisplay((d) => {
      if (d === '0' || d.match(operatorRegex)) return numStr
      return d.concat(numStr)
    })
    setExpression((e) => e.concat(numStr))
  }

  const decimalClickHandler = () => {
    // const textToConcat

    setDisplay((d) => {
      if (!d.includes('.')) return d.concat('.')
      return d
    })

    setExpression((e) => {
      if (e === '') return '0.'
      if (!display.includes('.')) return e.concat('.')
      return e
    })
  }

  const equalsClickHandler = () => {
    const tokens = getTokensFromExpression(expression)
    const result = String(computeResult(tokens))

    if (expression.includes('=')) return

    setDisplay(result)
    setExpression((e) => e.concat('=', result))
    setNewResult(result)
  }

  const computeResult = (tokens: string[]): number => {
    let accumulator = Number(tokens[0])
    let current, operation

    let i = 1
    while (i < tokens.length - 1) {
      operation = tokens[i]
      current = Number(tokens[i + 1])
      accumulator = computeOperation(accumulator, current, operation)

      i += 2
    }

    return accumulator
  }

  const computeOperation = (a: number, b: number, operation: string) => {
    switch (operation) {
      case Operations.ADD:
        return a + b
      case Operations.SUBTRACT:
        return a - b
      case Operations.MULTIPLY:
        return a * b
      case Operations.DIVIDE:
        return Number((a / b).toFixed(6))
      default:
        throw new Error('Unknown operation')
    }
  }

  const getTokensFromExpression = (expression: string): string[] => {
    let tokens: string[] = []

    // TODO: Deal with negative numbers (5*8/-2+5)
    // TODO: Remove double operators

    let currentNumber = ''
    for (let item of expression) {
      if (item.match(operatorRegex)) {
        tokens.push(currentNumber)
        currentNumber = ''
        tokens.push(item)
      } else {
        currentNumber += item
      }
    }

    tokens.push(currentNumber)

    // Remove items from the end that aren't numbers
    let i = tokens.length - 1
    while (i >= 0) {
      const token = Number(tokens[i])
      if (tokens[i] !== '' && !isNaN(token)) break
      i--
    }

    tokens = tokens.slice(0, i + 1)

    // Find negative numbers and attach their signal
    let foundIndex = tokens.findIndex((token) => token === '')
    while (foundIndex > 0) {
      const numberStr = '-' + tokens[foundIndex + 2]
      tokens.splice(foundIndex, 3, numberStr)

      foundIndex = tokens.findIndex((token) => token === '')
    }

    return tokens
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
          onClick={() => operationClickHandler(Operations.DIVIDE)}
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
          onClick={() => operationClickHandler(Operations.MULTIPLY)}
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
          onClick={() => operationClickHandler(Operations.SUBTRACT)}
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
          onClick={() => operationClickHandler(Operations.ADD)}
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
