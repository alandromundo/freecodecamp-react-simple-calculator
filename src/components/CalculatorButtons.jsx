import React from 'react'

export function CalculatorButtons({ addToDisplay, resolveDisplay, clearDisplay }) {
  // , resolveDisplay, clearDisplay
  return (
    <div className='CalculatorButtons'>
      <button onClick={() => addToDisplay("1")}>1</button>
      <button onClick={() => addToDisplay("2")}>2</button>
      <button onClick={() => addToDisplay("3")}>3</button>
      <button onClick={() => addToDisplay("+")}>+</button>
      <button onClick={() => addToDisplay("4")}>4</button>
      <button onClick={() => addToDisplay("5")}>5</button>
      <button onClick={() => addToDisplay("6")}>6</button>
      <button onClick={() => addToDisplay("-")}>-</button>
      <button onClick={() => addToDisplay("7")}>7</button>
      <button onClick={() => addToDisplay("8")}>8</button>
      <button onClick={() => addToDisplay("9")}>9</button>
      <button onClick={() => addToDisplay("*")}>*</button>
      <button onClick={resolveDisplay}>=</button>
      <button onClick={() => addToDisplay("0")}>0</button>
      <button onClick={() => addToDisplay(".")}>.</button>
      <button onClick={() => addToDisplay("/")}>/</button>
      <button onClick={clearDisplay}>Clear</button>
    </div>
  )
}
