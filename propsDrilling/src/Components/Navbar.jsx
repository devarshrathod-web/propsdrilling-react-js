import React, { useState } from 'react'
import { NameContext } from './Context';
import { useContext } from 'react';

const Navbar = () => {
  const {color,setcolor,Colorchnage} = useContext(NameContext);
  return (
  <>
     
     <button  onClick={()=>Colorchnage()}> light </button>
  </>
  )
}

export default Navbar ;