import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LenisScroll from './LenisScroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LenisScroll />
    </>
  )
}

export default App
