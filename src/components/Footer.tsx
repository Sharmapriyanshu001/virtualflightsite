import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <Link to="/" className="logo" style={{ marginBottom: '1rem' }}>
          <Plane color="var(--primary)" size={20} />
          Virtual<span>Flight</span>
        </Link>
        
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <a href="mailto:support@virtualflightgame.com">Contact Support</a>
        </div>
        
        <p>
          Virtual Flight is a free-to-play entertainment game. Virtual coins have no real-world monetary value and cannot be exchanged for cash. The game does not offer real-money betting, deposits, withdrawals, or cash prizes.
        </p>

        <p>&copy; {year} Virtual Flight. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
