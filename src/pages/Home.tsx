import { PlaneTakeoff, Trophy, Gamepad2, Coins, Settings, Target } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Virtual <span>Flight</span></h1>
            <p className="hero-subtitle">Take Off. Fly Higher. Enjoy the Journey.</p>
            <p className="hero-description">
              Experience an exciting casual flight game where you follow the journey of a virtual airplane, watch the multiplier rise, and enjoy a simple, engaging arcade experience.
            </p>
          </div>
          <div className="hero-visual">
            <div className="plane-animation-container">
              <PlaneTakeoff size={120} color="var(--primary)" className="animated-plane" />
              <div className="flight-path"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>About the Game</h2>
            <div className="divider"></div>
          </div>
          <div className="about-content">
            <p>
              Virtual Flight is a free-to-play casual mobile game designed purely for entertainment. 
              Players can enjoy thrilling virtual gameplay, track their progress, and earn in-game virtual coins through supported game features.
            </p>
            <p>
              Whether you are looking for a quick arcade session or aiming for new personal records, Virtual Flight offers smooth animations, engaging mechanics, and a rewarding progression system.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section features-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Game Features</h2>
            <div className="divider"></div>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><Gamepad2 /></div>
              <h3>Simple & Engaging Gameplay</h3>
              <p>Easy to learn, hard to master. Enjoy intuitive controls and addictive arcade action.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><PlaneTakeoff /></div>
              <h3>Smooth Airplane Animations</h3>
              <p>Experience visually pleasing flights with high-quality, responsive animations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Coins /></div>
              <h3>Virtual Coins & Progress</h3>
              <p>Collect virtual coins to track your journey. Note: Coins have no real-world value.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Target /></div>
              <h3>Daily Reward Feature</h3>
              <p>Log in daily to claim exciting virtual rewards and boost your gameplay experience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Trophy /></div>
              <h3>Achievements & Statistics</h3>
              <p>Track your high scores, flight durations, and unlock prestigious achievements.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Settings /></div>
              <h3>Mobile-Friendly Experience</h3>
              <p>Optimized for both phones and tablets, providing a seamless experience anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notice & Advertising Section */}
      <section className="section notice-section">
        <div className="container">
          <div className="notice-card">
            <h3>Important Game Notice</h3>
            <p className="notice-text">
              Virtual Flight is a free-to-play entertainment game. Virtual coins have no real-world monetary value and cannot be exchanged for cash. The game does not offer real-money betting, deposits, withdrawals, or cash prizes.
            </p>
          </div>

          <div className="ad-info text-center">
            <h3>Advertising</h3>
            <p>
              To keep Virtual Flight free for everyone, our website and game may use Google AdMob advertising services to display relevant ads.
            </p>
            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '0.5rem', display: 'inline-block' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 600 }}>App-Ads.txt Record:</p>
              <code style={{ fontSize: '0.875rem', color: 'var(--text-main)', userSelect: 'all' }}>
                google.com, pub-7195489757205809, DIRECT, f08c47fec0942fa0
              </code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
