import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <Plane className="logo-icon" color="var(--primary)" />
          Virtual<span>Flight</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/#features">Features</Link>
          <Link to="/#about">About</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="/#features" onClick={() => setIsOpen(false)}>Features</a>
          <a href="/#about" onClick={() => setIsOpen(false)}>About</a>
          <Link to="/privacy-policy" onClick={() => setIsOpen(false)}>Privacy Policy</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
