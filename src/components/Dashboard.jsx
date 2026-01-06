import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <Link to="/" className="site-title-link">
            <h1 className="site-title">miStake</h1>
          </Link>
          <nav className="main-nav">
            <Link to="/" className="nav-link active">Games</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/support" className="nav-link">Support</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="container">
          <div className="dashboard-content">
            {/* Game List */}
            <section className="game-section">
              <h2 className="section-title">Available Games</h2>
              <div className="games-grid">
                {/* Mines Game Card */}
                <div className="game-card">
                  <div className="game-card-header">
                    <div className="game-icon">💎</div>
                    <h3 className="game-title">Mines</h3>
                  </div>
                  <p className="game-description">
                    Classic 5x5 grid game where you reveal tiles to find mines and multiply your winnings.
                  </p>
                  <Link to="/mines" className="btn btn-primary">
                    Play Now
                  </Link>
                </div>
                
                {/* Placeholder for future games */}
                <div className="game-card placeholder">
                  <div className="game-card-header">
                    <div className="placeholder-icon"></div>
                    <h3 className="game-title">Coming Soon</h3>
                  </div>
                  <p className="game-description">
                    More exciting games will be available soon!
                  </p>
                  <button className="btn btn-secondary" disabled>Soon</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="footer-content">
          <p>&copy; 2026 miStake. All rights reserved.</p>
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

export default Dashboard;
