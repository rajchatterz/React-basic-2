import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Event from './components/Event'
import Object from './components/Object'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Event/> */}
      {/* <Object/> */}
      <Form/>
    </div>
  )
}

export default App
