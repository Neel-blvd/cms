import './index.css'
import { Route, Routes } from 'react-router-dom'
import CMS from './components/CMS'
import Manage from './components/Manage'
import CaseAI from './components/CaseAI'
import Help from './components/Help'
import Navbar from './components/Navbar'
import LoginButton from './components/LoginButton'

function App() {

  return (
    <>
      <main className='font-mono border border-black'>

          <Navbar />
          {/* <LoginButton /> */}
       

        <Routes>
          <Route path='/' element={<CMS />} />
          <Route path='/manage' element={<Manage />} />
          <Route path='/caseAI' element={<CaseAI />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </main> 
    </>
  )
}

export default App
