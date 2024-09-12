import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Nav(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
 return (
    <nav className="navbar">
       <div>
      {/* Hamburger icon for toggling the sidebar */}
      <div className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </div>

      {/* Sidebar container */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Categories</h2>
        <ul>
          <li><Link to="/business">Business</Link></li>
          <li><Link to="/entertainment">Entertainment</Link></li>
          <li><Link to="/health">Health</Link></li>
          <li><Link to="/science">Science</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/technology">Technology</Link></li>
          <li><Link to="/us">US</Link></li>
          <li><Link to="/world">World</Link></li>
        </ul>
      </div>
    </div>
      <div className="navbar-container">
      <div className='head'>
        <div>
        <h1 className="navbar-heading">NewsZone</h1>
        </div>
      </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/us">US</Link></li>
          <li><Link to="/world">World</Link></li>
          <li><Link to="/business">Business</Link></li>
          <li><Link to="/technology">Technology</Link></li>
        </ul>
      </div>
    </nav>
  );

}
export default Nav;