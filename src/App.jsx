// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './composant/Navbar/Navbar';
import Home from './pages/acceuil/acceuil';
import Expertise from './pages/expertise/expertise';
import Sectors from './pages/secteurs/secteur';
import About from './pages/a propos/apropos';
import Blog from './pages/notre blog/blog';
import Maximize from './pages/maximize/maximize';
import Footer from './composant/Footer/pied'; 
import Contact from './pages/nous contacter/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/secteurs" element={<Sectors />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/maximize" element={<Maximize />} />
        <Route path="/contact" element={<Contact /> } />
        
      </Routes>
      

      <Footer /> {/* Positionné ici, en dehors des Routes */}
    </Router>
  );
}

export default App;
