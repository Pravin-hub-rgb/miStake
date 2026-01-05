import React from 'react';
import Tile from './Tile';
import './GameBoard.css';

const GameBoard = ({ 
  board, 
  onTileClick, 
  gameState, 
  revealedTiles, 
  showBomb 
}) => {
  // Debug logging
  console.log('GameBoard render:', { 
    boardLength: board.length, 
    gameState, 
    revealedTilesLength: revealedTiles.length 
  });
  console.log('GameBoard board:', board);

  return (
    <div className="game-board">
      <div className="board-container">
        {board.map((tile, index) => (
          <Tile
            key={index}
            index={index}
            revealed={tile.revealed}
            isMine={tile.isMine}
            onClick={onTileClick}
            gameState={gameState}
            revealedTiles={revealedTiles}
            showBomb={showBomb}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
