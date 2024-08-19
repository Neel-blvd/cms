import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className=' bg-black text-white min-h-screen flex justify-center items-center font-mono'>
        Start editing the 'App.jsx' file, present in the 'src' directory, to see the magic
      </main> 
    </>
  )
}

export default App
