import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comp/>
    </>
  )
}

export default App
