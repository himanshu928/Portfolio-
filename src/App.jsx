import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
