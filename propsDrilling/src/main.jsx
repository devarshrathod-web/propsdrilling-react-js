import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Namecontextfun } from './Components/Context.jsx'

createRoot(document.getElementById('root')).render(
   
     <Namecontextfun>
         <App />
     </Namecontextfun>
  

 
)
