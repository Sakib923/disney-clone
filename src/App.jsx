import { useState } from 'react'
import './App.css'
import Headers from './components/Header'
import Slider from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Headers />
      <Slider />
    </div>
  )
}

export default App
