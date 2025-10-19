import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watchlist from './components/Watchlist'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import MovieContextWrapper, { MovieContext } from './context/MovieContext'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Navbar />
    <MovieContextWrapper>
      <Routes>
        <Route
          path='/'
          element = {<Home />}
        >
        </Route>
        <Route
          path='/Watchlist'
          element = {<Watchlist />}
        >
        </Route>
      </Routes>
      </MovieContextWrapper>
    </>
  )
}

export default App
