import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="container text-center" style={{ padding: '8rem 0' }}>
      <Plane size={80} color="var(--primary)" style={{ margin: '0 auto 2rem', opacity: 0.5 }} />
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '2rem' }}>Flight Path Not Found</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="button">Return to Base</Link>
    </div>
  );
};

export default NotFound;
