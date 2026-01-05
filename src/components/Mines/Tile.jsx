import React from 'react';
import './Tile.css';

const Tile = ({ 
  index, 
  revealed, 
  isMine, 
  onClick, 
  gameState, 
  revealedTiles, 
  showBomb 
}) => {
  const handleClick = () => {
    if (gameState === 'playing' && !revealed) {
      onClick(index);
    }
  };

  // Determine tile state
  const isRevealed = revealed;
  const isBombRevealed = isMine && (isRevealed || showBomb);
  const isGemRevealed = !isMine && isRevealed;

  // Calculate position for grid layout
  const row = Math.floor(index / 5);
  const col = index % 5;

  return (
    <div
      className={`tile ${isRevealed ? 'revealed' : 'covered'} ${isBombRevealed ? 'bomb' : ''} ${isGemRevealed ? 'gem' : ''}`}
      onClick={handleClick}
    >
      {isRevealed ? (
        <div className="tile-content">
          {isMine ? (
            <div className="mine-icon">
              💣
              {showBomb && (
                <div className="explosion-effect">
                  <div className="explosion-ring"></div>
                  <div className="explosion-flash"></div>
                </div>
              )}
            </div>
          ) : (
            <div className="gem-icon">💎</div>
          )}
        </div>
      ) : null}

      {/* Hover effect for unrevealed tiles */}
      {!isRevealed && gameState === 'playing' && (
        <div className="tile-hover"></div>
      )}

      {/* Click ripple effect */}
      {isRevealed && (
        <div className="ripple-effect"></div>
      )}
    </div>
  );
};

export default Tile;
