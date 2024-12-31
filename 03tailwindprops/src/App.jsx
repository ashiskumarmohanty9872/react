import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username: "Sibun",
    age:20
  }

  let newArr=[1,2,3,4]
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl" > Tailwind test</h1>
      <Card userName="protein shake"  />
      {/* <Card userName="Smart Boy" /> */}

     
    </>
  )
}

export default App
