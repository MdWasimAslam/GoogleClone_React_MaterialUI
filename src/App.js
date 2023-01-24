import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import './App.css'
import GoogleSearchNav from './Components/GoogleSearchNav.js';
import SearchResult from './Components/SearchResult';


function App() {
  return (
    <>
 
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  )
}

export default App