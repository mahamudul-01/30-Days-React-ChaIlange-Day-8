import './index.css'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='max-w-9xl mx-auto p-4'>
      <Navbar></Navbar>
      <Outlet></Outlet>
        
    </div>
  )
}

export default App
