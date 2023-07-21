//Libraries
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Imported files
import './App.css';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
      </Router>
  );
}

export default App;
