import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainComponentFile from './Component/MainComponentFile'
import Footer from './Component/FooterSection/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MainComponentFile />
     {/* <Footer /> */}
    </>
  )
}

export default App
