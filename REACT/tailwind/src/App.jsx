import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from '../component/card'
function App() {
  const [count, setCount] = useState(0)

  return (

    <>
     <h1 className="text-3xl font-bold underline mb-5">
      Hello world!
    </h1>
    <Card h5="This is my first tailwind" name="lakshya"/>
    </>
  )
}

export default App
