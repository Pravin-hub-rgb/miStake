import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const About = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <Link to="/" className="site-title-link">
            <h1 className="site-title">miStake</h1>
          </Link>
          <nav className="main-nav">
            <Link to="/" className="nav-link">Games</Link>
            <Link to="/about" className="nav-link active">About</Link>
            <Link to="/support" className="nav-link">Support</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="container">
          <div className="dashboard-content">
            {/* About Section */}
            <section className="game-section">
              <h2 className="section-title">About miStake</h2>

              <div className="card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                <div className="card-header">
                  <h3>🎰 Welcome to the Fun Side of Gambling! 🎲</h3>
                </div>

                <div style={{ padding: '20px' }}>
                  <p style={{ marginBottom: '20px', fontSize: '1.1rem', lineHeight: '1.6' }}>
                    <strong>miStake</strong> is your go-to spot for guilt-free, wallet-friendly gaming entertainment!
                    We believe in responsible fun - because who needs to lose their shirt when you can lose track of time instead?
                  </p>

                  <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ background: 'rgba(255, 215, 0, 0.1)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255, 215, 0, 0.3)' }}>
                      <h4 style={{ color: '#ffd700', margin: '0 0 10px 0' }}>🎯 Our Mission</h4>
                      <p style={{ margin: 0 }}>
                        To provide hours of entertainment without the existential dread. Gamble like you mean it, but don't mean it too much!
                      </p>
                    </div>

                    <div style={{ background: 'rgba(55, 66, 250, 0.1)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(55, 66, 250, 0.3)' }}>
                      <h4 style={{ color: '#3742fa', margin: '0 0 10px 0' }}>🎪 What Makes Us Special</h4>
                      <p style={{ margin: 0 }}>
                        We're not your grandma's casino. Our games are designed to be addictive enough to keep you coming back,
                        but not so addictive that you'll need an intervention... hopefully.
                      </p>
                    </div>

                    <div style={{ background: 'rgba(255, 71, 87, 0.1)', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255, 71, 87, 0.3)' }}>
                      <h4 style={{ color: '#ff4757', margin: '0 0 10px 0' }}>💡 Fun Facts</h4>
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        <li>Our Mines game was inspired by the classic "don't step on the mines" dilemma</li>
                        <li>We use more emojis than a teenager's text message</li>
                        <li>Our color scheme is basically "Las Vegas at night"</li>
                        <li>We're built with React, which is way more stable than your gambling addiction</li>
                      </ul>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <h4 style={{ marginBottom: '15px' }}>Ready to Play? 🎮</h4>
                    <Link to="/mines" className="btn btn-primary" style={{ marginRight: '10px' }}>
                      💎 Play Mines
                    </Link>
                    <Link to="/" className="btn btn-secondary">
                      🏠 Back to Games
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="footer-content">
          <p>&copy; 2026 miStake. All rights reserved. Gamble responsibly... or don't. Your call!</p>
          <nav className="footer-nav">
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
            <Link to="/responsible" className="footer-link">Responsible Gaming</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default About;
