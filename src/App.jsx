import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Event from './components/Event'
import Object from './components/Object'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Event/> */}
      <Object/>
    </>
  )
}

export default App
