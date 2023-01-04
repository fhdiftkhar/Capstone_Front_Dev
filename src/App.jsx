import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero/Hero'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Highlights/>
        <Testimonials/>
      </main>
      <Footer/>
    </>
  )
}

export default App
