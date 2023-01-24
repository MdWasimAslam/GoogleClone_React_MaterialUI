import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import './App.css'


function App() {
  return (
    <>
 
      <Routes>

      <Route path="/" exact element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  )
}

export default App