# miStake - Mines Game Project Plan

## Overview
Creating "miStake", a rigged Mines game inspired by Stake casino. The game will feature a 5x5 grid where players can place bets and reveal tiles, with bombs strategically revealed only when 1-2 tiles remain to maximize excitement and ensure the house always wins.

## Game Concept

### Core Mechanics
- **Grid**: Fixed 5x5 grid (25 tiles total)
- **Betting**: Custom bet amount input
- **Mines**: Player selects 1-24 mines before starting
- **Reveal Strategy**: 23-24 tiles are safe initially, bombs revealed only at the end
- **Multiplier**: Real-time multiplier display with 99% RTP (1% house edge)
- **Cash Out**: Manual cash out button available after first safe reveal

### Game Flow
1. Player enters bet amount and selects number of mines
2. Clicks "BET" to start the round
3. Reveals 23-24 safe tiles (gems) to build excitement
4. When only 1-2 tiles remain, bomb is revealed
5. Player loses bet with dramatic effect
6. Option to play again

## Technical Architecture

### Tech Stack
- **Frontend**: React.js with Vite
- **State Management**: React hooks (useState, useReducer)
- **Styling**: CSS modules or styled-components
- **Build Tool**: Vite for fast development and build times

### File Structure
```
src/
├── components/
│   ├── Dashboard.jsx          # Main site layout with game list
│   ├── Mines/
│   │   ├── MinesGame.jsx      # Main Mines game component
│   │   ├── GameBoard.jsx      # 5x5 grid component
│   │   ├── Controls.jsx       # Bet input, mine selector, buttons
│   │   ├── Stats.jsx          # Multiplier, profit, balance display
│   │   └── Tile.jsx           # Individual tile component
│   └── GameList.jsx           # List of available games
├── hooks/
│   └── useGameLogic.js        # Mines game logic and state management
├── styles/
│   ├── App.css               # Global styles
│   └── Mines.css             # Mines-specific styles
└── App.jsx                   # Main app with routing
```

### Key Components

#### Dashboard.jsx
- Site header with "miStake" branding
- Navigation menu
- Game list display
- Simple casino-style layout

#### MinesGame.jsx
- Main container for Mines game
- Integrates all Mines components
- Manages game state and flow

#### GameBoard.jsx
- Renders 5x5 grid of tiles
- Handles tile click events
- Manages tile states (covered, revealed gem, revealed bomb)

#### Controls.jsx
- Bet amount input field
- Mine selector (1-24)
- "BET" button to start game
- "Cash Out" button (enabled after first reveal)

#### Stats.jsx
- Current multiplier display
- "Profit on Next Tile" calculator
- "Total Profit" display
- Player balance tracking

#### Tile.jsx
- Individual tile component
- Visual states: covered, gem, bomb
- Click handler for revealing

#### useGameLogic.js
- Game state management
- Random bomb placement logic
- Multiplier calculation
- Win/loss detection
- Rigged reveal strategy (23-24 safe tiles first)

## Game Logic Implementation

### Bomb Placement Strategy
```javascript
// Rigged logic: ensure 23-24 safe tiles before bomb reveal
function placeBombs(totalTiles, numMines) {
  // Always place bombs in last 1-2 positions
  // First 23-24 tiles are guaranteed safe
}
```

### Multiplier Calculation
```javascript
// 99% RTP formula with house edge
function calculateMultiplier(reveals, mines) {
  // Base probability calculation
  // Apply 1% house edge (multiply by 0.99)
  // Return cumulative multiplier
}
```

### Game States
- **IDLE**: Waiting for bet and mine selection
- **PLAYING**: Game in progress, tiles being revealed
- **CASHED_OUT**: Player successfully cashed out
- **GAME_OVER**: Bomb hit, round ended

## Visual Design

### Theme
- Dark casino-style background
- Clean, modern interface
- High-quality tile animations
- Dramatic bomb reveal effects

### Color Scheme
- Primary: Dark background (#1a1a1a)
- Secondary: Gold accents (#ffd700)
- Text: White/light gray (#ffffff/#cccccc)
- Gem: Blue/green colors
- Bomb: Red/orange explosion theme

### Animations
- Smooth tile flip animations
- Multiplier number transitions
- Dramatic bomb explosion effect
- Win/loss state transitions

## Future Expansion

### Additional Games
- Framework designed for easy addition of new games
- GameList component will dynamically render available games
- Each game gets its own directory under components/

### Potential Future Games
- Dice
- Crash
- Plinko
- Wheel
- Slots

## Development Phases

### Phase 1: Core Infrastructure
- [ ] Set up React project with Vite
- [ ] Create basic component structure
- [ ] Implement routing and dashboard

### Phase 2: Mines Game Core
- [ ] Implement game logic hook
- [ ] Create all Mines components
- [ ] Add basic styling and layout

### Phase 3: Polish and Features
- [ ] Add animations and effects
- [ ] Implement multiplier system
- [ ] Add sound effects (optional)
- [ ] Mobile responsiveness

### Phase 4: Testing and Deployment
- [ ] Cross-browser testing
- [ ] Performance optimization
- [ ] Deploy to hosting platform

## Notes

### Rigged Implementation
- Game is intentionally rigged against the player
- 23-24 safe tiles revealed first to build excitement
- Bombs only appear when 1-2 tiles remain
- House always wins with 1% edge

### No Real Money
- Uses play money only
- No actual gambling or real currency
- Educational/demo purposes only

### Stake Inspiration
- Mimics Stake Mines interface and mechanics
- Simplified for easier implementation
- Maintains core excitement and tension
