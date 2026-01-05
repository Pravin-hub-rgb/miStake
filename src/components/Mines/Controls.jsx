import React from 'react';
import './Controls.css';

const Controls = ({ 
  betAmount, 
  setBetAmount, 
  numMines, 
  setNumMines, 
  gameState, 
  startGame, 
  handleCashOut, 
  resetGame, 
  balance,
  revealedTiles 
}) => {
  // Quick bet amounts
  const quickBets = [10, 50, 100, 500, 1000];

  // Quick mine counts
  const quickMines = [5, 10, 15, 20];

  return (
    <div className="controls">
      <div className="controls-section">
        <h3 className="section-title">Controls</h3>
        
        {/* Bet Amount */}
        <div className="control-group">
          <label className="control-label">Bet Amount</label>
          <div className="input-with-buttons">
            <button 
              className="input-btn minus"
              onClick={() => setBetAmount(prev => Math.max(10, prev - 10))}
              disabled={gameState === 'playing'}
            >
              -
            </button>
            <input
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(Math.max(10, parseInt(e.target.value) || 10))}
              className="bet-input"
              disabled={gameState === 'playing'}
              min="10"
            />
            <button 
              className="input-btn plus"
              onClick={() => setBetAmount(prev => prev + 10)}
              disabled={gameState === 'playing'}
            >
              +
            </button>
          </div>
          
          {/* Quick Bet Buttons */}
          <div className="quick-bets">
            {quickBets.map(amount => (
              <button
                key={amount}
                className="quick-bet-btn"
                onClick={() => setBetAmount(amount)}
                disabled={gameState === 'playing'}
              >
                ${amount}
              </button>
            ))}
          </div>
        </div>

        {/* Number of Mines */}
        <div className="control-group">
          <label className="control-label">Number of Mines</label>
          <div className="input-with-buttons">
            <button 
              className="input-btn minus"
              onClick={() => setNumMines(prev => Math.max(1, prev - 1))}
              disabled={gameState === 'playing'}
            >
              -
            </button>
            <input
              type="number"
              value={numMines}
              onChange={(e) => setNumMines(Math.max(1, Math.min(24, parseInt(e.target.value) || 10)))}
              className="mines-input"
              disabled={gameState === 'playing'}
              min="1"
              max="24"
            />
            <button 
              className="input-btn plus"
              onClick={() => setNumMines(prev => Math.min(24, prev + 1))}
              disabled={gameState === 'playing'}
            >
              +
            </button>
          </div>
          
          {/* Quick Mine Buttons */}
          <div className="quick-mines">
            {quickMines.map(mines => (
              <button
                key={mines}
                className="quick-mine-btn"
                onClick={() => setNumMines(mines)}
                disabled={gameState === 'playing'}
              >
                {mines} Mines
              </button>
            ))}
          </div>
        </div>

        {/* Game Actions */}
        <div className="action-buttons">
          {gameState === 'idle' && (
            <>
              <button 
                className="btn btn-primary"
                onClick={startGame}
                disabled={betAmount > balance}
              >
                {betAmount > balance ? 'Insufficient Balance' : 'BET'}
              </button>
            </>
          )}
          
          {gameState === 'playing' && (
            <>
              <button 
                className="btn btn-success"
                onClick={handleCashOut}
                disabled={revealedTiles.length === 0}
              >
                CASH OUT
              </button>
            </>
          )}
          
          {(gameState === 'cashed_out' || gameState === 'game_over') && (
            <button 
              className="btn btn-secondary"
              onClick={resetGame}
            >
              PLAY AGAIN
            </button>
          )}
        </div>

        {/* Game State Info */}
        {gameState !== 'idle' && (
          <div className="game-state-info">
            <div className="state-indicator">
              <span className={`state-text ${gameState}`}>
                {gameState === 'playing' && 'Playing...'}
                {gameState === 'cashed_out' && 'Cashed Out!'}
                {gameState === 'game_over' && 'Game Over!'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Controls;
