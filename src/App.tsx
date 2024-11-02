import { useState } from 'react'
import './App.css'
import Header from './layout/header'
import About from './layout/aboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About />
    </>
  )
}

export default App
