import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // counter is a variable
  // setCounter is a function
  // we are using let, not const, because it needs to be updated
  let [counter,setCounter] = useState(0); /*useState() is used to set the value and update the value in UI. We are passing default value as 0*/

  const addValue = ()=>{
    setCounter(counter+1); //using setCounter to update the value of counter
  }

  const decreaseValue = ()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Counter Project by Bickey in ReactJS</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increase Counter</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Counter</button>
      <br />
      <br />
      <a href="https://github.com/BickeyManandhar/counterProject">Click here to access code.</a>
    </>
  )
}

export default App
