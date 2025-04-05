import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import Landing from './pages/Landing'


function App() {
  const [count, setCount] = useState(0)


  // useEffect(()=>{
  //   async()=>{
  //     const response = await axios.get("/game/find") 
  //   }
  // },[])

  return (
    <>
      <Landing />
    </>
  )
}

export default App
