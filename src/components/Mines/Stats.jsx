import React from 'react';
import './Stats.css';

const Stats = ({ 
  multiplier, 
  profitOnNextTile, 
  totalProfit, 
  winRate, 
  gameState, 
  betAmount 
}) => {
  return (
    <div className="stats">
      <div className="stats-section">
        <h3 className="section-title">Statistics</h3>
        
        {/* Current Multiplier */}
        <div className="stat-card">
          <div className="stat-label">Current Multiplier</div>
          <div className="stat-value multiplier-value">
            <span className="multiplier-text">x</span>
            <span className="multiplier-number">{multiplier.toFixed(2)}</span>
          </div>
        </div>

        {/* Profit on Next Tile */}
        <div className="stat-card">
          <div className="stat-label">Profit on Next Tile</div>
          <div className={`stat-value profit-next ${profitOnNextTile > 0 ? 'positive' : 'negative'}`}>
            ${Math.abs(profitOnNextTile).toFixed(2)}
            {profitOnNextTile > 0 && <span className="profit-indicator">+ Expected</span>}
            {profitOnNextTile <= 0 && <span className="profit-indicator">Risk</span>}
          </div>
        </div>

        {/* Total Profit */}
        <div className="stat-card">
          <div className="stat-label">Total Profit</div>
          <div className={`stat-value total-profit ${totalProfit >= 0 ? 'positive' : 'negative'}`}>
            {totalProfit >= 0 ? '+' : ''}${totalProfit.toFixed(2)}
          </div>
        </div>

        {/* Win Rate */}
        <div className="stat-card">
          <div className="stat-label">Win Rate</div>
          <div className="stat-value win-rate">
            {winRate}%
          </div>
        </div>

        {/* Current Bet */}
        <div className="stat-card">
          <div className="stat-label">Current Bet</div>
          <div className="stat-value current-bet">
            ${betAmount.toLocaleString()}
          </div>
        </div>

        {/* Game Status */}
        <div className="stat-card">
          <div className="stat-label">Game Status</div>
          <div className="stat-value game-status">
            <span className={`status-badge ${gameState}`}>
              {gameState === 'idle' && 'Ready to Play'}
              {gameState === 'playing' && 'In Progress'}
              {gameState === 'cashed_out' && 'Cashed Out'}
              {gameState === 'game_over' && 'Game Over'}
            </span>
          </div>
        </div>

        {/* Risk Level */}
        <div className="stat-card">
          <div className="stat-label">Risk Level</div>
          <div className="stat-value risk-level">
            <div className="risk-meter">
              <div className="risk-fill" style={{ width: `${Math.min(100, (multiplier * 10))}%` }}></div>
            </div>
            <span className="risk-text">
              {multiplier < 2 && 'Low Risk'}
              {multiplier >= 2 && multiplier < 5 && 'Medium Risk'}
              {multiplier >= 5 && multiplier < 10 && 'High Risk'}
              {multiplier >= 10 && 'Extreme Risk'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
