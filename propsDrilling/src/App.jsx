import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainpage from './Components/Mainpage'
import Navbar from './Components/Navbar'
import { useContext } from 'react'
import {NameContext } from './Components/Context'

function App() {
       const {color,setcolor,Colorchnage} = useContext(NameContext);
  

  return (  
    <>
         <div style={{background:color=="light"?"black":"red"}}>
             <Mainpage/>
             <Navbar></Navbar>
         </div>
    </> 
  )
}

export default App
