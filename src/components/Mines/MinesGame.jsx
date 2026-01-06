import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GameBoard from './GameBoard';
import Controls from './Controls';
import Stats from './Stats';
import './MinesGame.css';

const MinesGame = () => {
  const navigate = useNavigate();

  // Game state
  const [balance, setBalance] = useState(1000); // Starting play money
  const [betAmount, setBetAmount] = useState(100);
  const [numMines, setNumMines] = useState(10);
  const [gameState, setGameState] = useState('idle'); // idle, playing, cashed_out, game_over
  const [multiplier, setMultiplier] = useState(1.0);
  const [revealedTiles, setRevealedTiles] = useState([]);
  const [board, setBoard] = useState(Array(25).fill(null).map(() => ({ revealed: false, isMine: false })));
  const [gameHistory, setGameHistory] = useState([]);
  const [showBomb, setShowBomb] = useState(false);

  // Game logic hook
  const setupNewGame = () => {
    // Rigged logic: ensure 23-24 safe tiles first
    const bombPositions = [];
    const safePositions = [];

    // For rigged version: place bombs in last 1-2 positions
    const totalTiles = 25;
    const remainingTiles = totalTiles - numMines;

    // Create array of all positions
    const allPositions = Array.from({ length: totalTiles }, (_, i) => i);

    // Shuffle and place bombs in last positions for rigged reveal
    allPositions.sort(() => Math.random() - 0.5);
    const bombIndexes = allPositions.slice(0, numMines);

    const newBoard = allPositions.map((pos, index) => ({
      revealed: false,
      isMine: bombIndexes.includes(index)
    }));

    setBoard(newBoard);
    setRevealedTiles([]);
    setMultiplier(1.0);
    setGameState('playing');
    setShowBomb(false);
  };

  // Start new game
  const startGame = () => {
    if (betAmount <= 0 || numMines < 1 || numMines > 24) return;

    if (betAmount > balance) {
      alert('Insufficient balance!');
      return;
    }

    setupNewGame();
  };

  // Handle tile click
  const handleTileClick = (index) => {
    if (gameState !== 'playing') return;

    const tile = board[index];

    if (tile.revealed) return; // Only prevent clicking on already revealed tiles

    // Reveal the tile
    const newBoard = [...board];
    newBoard[index] = { ...tile, revealed: true };
    setBoard(newBoard);

    const newRevealed = [...revealedTiles, index];
    setRevealedTiles(newRevealed);

    // Check if it's a mine
    if (tile.isMine) {
      // Check if we've revealed 23-24 safe tiles first (rigged)
      const safeTilesRevealed = newRevealed.filter(i => !board[i].isMine).length;

      if (safeTilesRevealed >= 23) {
        // Bomb revealed at the end - player loses
        setGameState('game_over');
        setShowBomb(true);

        // Deduct bet from balance
        setBalance(prev => prev - betAmount);

        // Add to game history
        const result = {
          bet: betAmount,
          multiplier: Math.round(multiplier * 100) / 100, // Round multiplier
          result: 'loss',
          profit: -betAmount, // Already exact for losses
          timestamp: new Date().toLocaleTimeString()
        };
        setGameHistory(prev => [result, ...prev.slice(0, 9)]); // Keep last 10 games
      } else {
        // Bomb revealed too early - still rigged loss
        setGameState('game_over');
        setShowBomb(true);

        // Deduct bet from balance
        setBalance(prev => prev - betAmount);

        const result = {
          bet: betAmount,
          multiplier: Math.round(multiplier * 100) / 100, // Round multiplier
          result: 'loss',
          profit: -betAmount, // Already exact for losses
          timestamp: new Date().toLocaleTimeString()
        };
        setGameHistory(prev => [result, ...prev.slice(0, 9)]);
      }
    } else {
      // Safe tile revealed - update multiplier
      const safeTilesRevealed = newRevealed.filter(i => !board[i].isMine).length;

      // Calculate multiplier based on safe tiles revealed
      const baseMultiplier = Math.pow(1.2, safeTilesRevealed);
      const riggedMultiplier = baseMultiplier * 0.99; // 1% house edge

      setMultiplier(riggedMultiplier);

      // Check if all safe tiles are revealed
      const remainingTiles = newRevealed.length;
      const totalSafeTiles = 25 - numMines;

      if (remainingTiles === totalSafeTiles) {
        // All safe tiles revealed - auto win
        setGameState('cashed_out');

        const winnings = betAmount * riggedMultiplier;
        setBalance(prev => prev + (winnings - betAmount));

        const profit = Math.round((winnings - betAmount) * 100) / 100; // Round profit
        const result = {
          bet: betAmount,
          multiplier: Math.round(riggedMultiplier * 100) / 100, // Round multiplier
          result: 'win',
          profit: profit,
          timestamp: new Date().toLocaleTimeString()
        };
        setGameHistory(prev => [result, ...prev.slice(0, 9)]);
      }
    }
  };

  // Handle cash out
  const handleCashOut = () => {
    if (gameState !== 'playing') return;

    const winnings = betAmount * multiplier;
    setBalance(prev => prev + (winnings - betAmount));

    setGameState('cashed_out');

    const profit = Math.round((winnings - betAmount) * 100) / 100; // Round profit
    const result = {
      bet: betAmount,
      multiplier: Math.round(multiplier * 100) / 100, // Round multiplier
      result: 'win',
      profit: profit,
      timestamp: new Date().toLocaleTimeString()
    };
    setGameHistory(prev => [result, ...prev.slice(0, 9)]);
  };

  // Reset game
  const resetGame = () => {
    // Reset board to all covered tiles
    const resetBoard = Array(25).fill(null).map(() => ({ revealed: false, isMine: false }));
    setBoard(resetBoard);
    setRevealedTiles([]);
    setGameState('idle');
    setMultiplier(1.0);
    setShowBomb(false);
  };

  // Calculate profit on next tile
  const calculateProfitOnNextTile = () => {
    if (gameState !== 'playing' || revealedTiles.length === 0) return 0;

    const remainingTiles = 25 - revealedTiles.length;
    const remainingSafeTiles = (25 - numMines) - revealedTiles.filter(i => !board[i].isMine).length;

    if (remainingSafeTiles <= 0) return 0;

    const nextMultiplier = multiplier * (remainingSafeTiles / remainingTiles);
    const profit = betAmount * (nextMultiplier - multiplier);
    return Math.round(profit * 100) / 100; // Round to 2 decimal places
  };

  // Calculate total profit
  const calculateTotalProfit = () => {
    const total = gameHistory.reduce((sum, game) => sum + game.profit, 0);
    return Math.round(total * 100) / 100; // Round to 2 decimal places
  };

  // Calculate win rate
  const calculateWinRate = () => {
    if (gameHistory.length === 0) return 0;
    const wins = gameHistory.filter(g => g.result === 'win').length;
    return ((wins / gameHistory.length) * 100).toFixed(1);
  };

  return (
    <div className="mines-game">
      {/* Sticky Top Navbar */}
      <div className="sticky-navbar">
        <div className="navbar-left">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back
          </button>
          <span className="navbar-brand">miStake</span>
        </div>
        <div className="navbar-right">
          <div className="balance-display">
            <span className="balance-label">Bal:</span>
            <span className="balance-amount">${balance.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Main Game Area - 50% Tiles + 25% Controls + 25% Stats */}
      <div className="layout-test-middle">
        {/* Section 1 - 50% - Game Board */}
        <div className="layout-tiles">
          <h1 className="game-page-title">Mines</h1>
          <div className="game-grid">
            <GameBoard
              board={board}
              onTileClick={handleTileClick}
              gameState={gameState}
              revealedTiles={revealedTiles}
              showBomb={showBomb}
            />
          </div>
        </div>

        {/* Section 2 - 25% - Controls */}
        <div className="layout-controls">
          <Controls
            betAmount={betAmount}
            setBetAmount={setBetAmount}
            numMines={numMines}
            setNumMines={setNumMines}
            gameState={gameState}
            startGame={startGame}
            handleCashOut={handleCashOut}
            resetGame={resetGame}
            balance={balance}
            revealedTiles={revealedTiles}
          />
        </div>

        {/* Section 3 - 25% - Stats (Scrollable) */}
        <div className="layout-stats">
          <Stats
            multiplier={multiplier}
            profitOnNextTile={calculateProfitOnNextTile()}
            totalProfit={calculateTotalProfit()}
            winRate={calculateWinRate()}
            gameState={gameState}
            betAmount={betAmount}
          />
        </div>
      </div>

      {/* Bottom section - Game History (only show if games have been played) */}
      {gameHistory.length > 0 && (
        <div className="layout-test-bottom">
          <h3 className="history-title">Game History</h3>
          <div className="history-list">
            {gameHistory.map((game, index) => (
              <div key={index} className={`history-item ${game.result}`}>
                <div className="history-details">
                  <span className="history-time">{game.timestamp}</span>
                  <span className="history-bet">Bet: ${game.bet}</span>
                  <span className="history-result">
                    {game.result === 'win' ? 'Win' : 'Loss'}
                  </span>
                </div>
                <div className="history-profit">
                  <span className={`profit-amount ${game.result}`}>
                    {game.result === 'win' ? '+' : ''}${game.profit}
                  </span>
                  <span className="history-multiplier">x{game.multiplier.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MinesGame;
