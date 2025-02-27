import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quotes from '../components/Quotes.jsx';
import Pictures from '../components/Pictures.jsx';
import Birthday from '../components/Birthday.jsx';
import '../styles/Navbar.css'; // Import the CSS file

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <nav className="navbar">
        <div className="logo">Status Queen</div>

        {/* Hamburger Icon */}
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
          <li><Link to="/">Quotes</Link></li>
          <li><Link to="/pictures">Pictures</Link></li>
          <li><Link to="/birthday">Birthday</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Quotes />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
