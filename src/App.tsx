import { useState } from 'react'
import './App.css'
import Header from './layout/header'
import About from './layout/about'
import Footer from './layout/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  )
}

export default App
