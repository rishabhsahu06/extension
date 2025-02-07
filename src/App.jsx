import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Popup from './components/popup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-green-600 w-52 '>
     <h1>Welcome to better buy</h1>
     <Popup/>
    </div>
    </>
  )
}

export default App
