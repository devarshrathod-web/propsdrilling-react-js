// CPC : create -> provide -> consume

import { createContext,useState } from "react";
// create
export const NameContext = createContext();


export function Namecontextfun({children})


{
      const [color,setcolor] = useState("light");


  function Colorchnage(){
         setcolor(color=="light"?"dark":"light");
  }
   
    return (<NameContext.Provider value={{color,setcolor, Colorchnage}}> {children}  </NameContext.Provider>)
}