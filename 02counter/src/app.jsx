// 1) import statement lekhiba 
// .syn:- import {useState} from "preact/hooks"
// import preactLogo from "./assets/preact.svg"
// import viteLogo from "/vite.svg"
// import "./app.css"

// function app ku lekhiba







import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  


  // using hooks
  let [counter , setCounter] = useState(15)

  // let counter = 15  // step 1

  const addValue = ()=>{
    if(counter <20){
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
    else{
      removeEventListener("onClick",addValue)
    }
  
    
  }

  const removeValue = ()=>{
    

    if(counter <=0 ){
      removeEventListener("onClick",removeValue)
    }
    else{
      setCounter(counter-1)
      console.log(counter)
    }
  }

  return (  //step-2
   <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter} </h2>

      <br />

      <button onClick={addValue}>Add value</button> &ensp;
      <button onClick={removeValue}>Remove value</button>
   </>
  )
}
