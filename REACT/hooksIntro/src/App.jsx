import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//let counter=0;
function App(){
  let [counter,setCounter]=useState(0)

  return(
    <>
    <h1>Counter value: {counter}</h1>
    <button onClick={()=>
      {
        if(counter<=19)
        setCounter(counter+1)
      }}
      >Increase</button>
    <br />
    <button onClick={()=>{

      if(counter>=-10+1)
      setCounter(counter-1)

      }}>Decrease</button>
    <footer>fotter: {counter}</footer>
    </>
  )
}


export default App
