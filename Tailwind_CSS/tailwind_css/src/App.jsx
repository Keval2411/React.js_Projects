import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [] = useState(0)

  let myObj = {
    usename: "keval ",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind CSS</h1>
      < Card  className= "keval_code" btnText='visit'/>

      

    </>
  )
}

export default App
