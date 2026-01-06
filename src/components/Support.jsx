import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Support = () => {
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
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/support" className="nav-link active">Support</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="container">
          <div className="dashboard-content">
            {/* Support Section */}
            <section className="game-section">
              <h2 className="section-title">Support Center</h2>

              <div className="card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
                <div className="card-header">
                  <h3>🆘 Need Help? We've Got Your Back... Sometimes! 🆘</h3>
                </div>

                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ background: 'rgba(46, 213, 115, 0.1)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(46, 213, 115, 0.3)' }}>
                      <h4 style={{ color: '#2ed573', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        📞 Contact Support
                      </h4>
                      <p style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>
                        <strong>Hotline:</strong> <span style={{ fontFamily: 'monospace', fontSize: '1.2rem' }}>1-800-GAMBLE-HELP</span>
                      </p>
                      <p style={{ margin: '0 0 10px 0' }}>
                        Hours: 24/7 (or until our coffee runs out)
                      </p>
                      <p style={{ margin: 0, fontStyle: 'italic' }}>
                        "Our support team is trained professionals... in customer service and bad jokes!"
                      </p>
                    </div>

                    <div style={{ background: 'rgba(255, 215, 0, 0.1)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255, 215, 0, 0.3)' }}>
                      <h4 style={{ color: '#ffd700', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        💰 Gambling Addiction Support
                      </h4>
                      <p style={{ margin: '0 0 15px 0' }}>
                        We take responsible gaming seriously... but not too seriously. Here are some tips:
                      </p>
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        <li>Don't gamble your house away (unless it's really ugly)</li>
                        <li>Set limits... then immediately ignore them like we do with diets</li>
                        <li>Remember: Money lost in games is just digital confetti</li>
                        <li>If you're winning too much, that's our problem, not yours</li>
                        <li>Take breaks to eat, sleep, or contemplate your life choices</li>
                      </ul>
                    </div>

                    <div style={{ background: 'rgba(55, 66, 250, 0.1)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(55, 66, 250, 0.3)' }}>
                      <h4 style={{ color: '#3742fa', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        🎯 Game Tips & Tricks
                      </h4>
                      <div style={{ display: 'grid', gap: '15px' }}>
                        <div>
                          <strong>Mines Game:</strong> Click carefully, or don't. Your call!
                        </div>
                        <div>
                          <strong>Winning Strategy:</strong> Bet small, win big, repeat until broke.
                        </div>
                        <div>
                          <strong>Pro Tip:</strong> The house always wins... eventually.
                        </div>
                        <div>
                          <strong>Fun Fact:</strong> If you're reading this, you're probably procrastinating from playing.
                        </div>
                      </div>
                    </div>

                    <div style={{ background: 'rgba(255, 71, 87, 0.1)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255, 71, 87, 0.3)' }}>
                      <h4 style={{ color: '#ff4757', margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        🚨 Emergency Contacts
                      </h4>
                      <p style={{ margin: '0 0 10px 0' }}>
                        If gambling becomes a problem (and let's be honest, it always does):
                      </p>
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        <li>National Gambling Helpline: <strong>1-800-BET-SAFE</strong></li>
                        <li>Local Pizza Delivery: <strong>Any number, they're all hungry</strong></li>
                        <li>Therapist Hotline: <strong>Only call if you're winning</strong></li>
                        <li>Bank Account Check: <strong>Probably too late for this one</strong></li>
                      </ul>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '30px', padding: '20px', background: 'rgba(0, 0, 0, 0.2)', borderRadius: '8px' }}>
                    <h4 style={{ marginBottom: '15px', color: '#ffd700' }}>🎰 Remember the Golden Rules of Gambling 🎰</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', fontSize: '0.9rem' }}>
                      <div>1. Gamble with money you can afford to lose</div>
                      <div>2. If you can't afford to lose it, don't gamble</div>
                      <div>3. But if you must, start small and dream big</div>
                      <div>4. Take breaks... to count your winnings</div>
                      <div>5. Remember: miStake is for entertainment only</div>
                      <div>6. If you win big, buy us all pizza</div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <Link to="/mines" className="btn btn-primary" style={{ marginRight: '10px' }}>
                      🎮 Play Anyway
                    </Link>
                    <Link to="/" className="btn btn-secondary">
                      🏠 Back to Safety
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
          <p>&copy; 2026 miStake. Support us by gambling responsibly... or irresponsibly. We don't judge!</p>
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

export default Support;
