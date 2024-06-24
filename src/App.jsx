import { Navbar } from './Components/Navbar/Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/home'
import { Destination } from './pages/Destination/Destination'
import { Crew } from './pages/Crew/Crew'
import { Technology } from './pages/Technology/Technology'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/technology' element={<Technology/>}/>
      </Routes>
    </>
  )
}

export default App
