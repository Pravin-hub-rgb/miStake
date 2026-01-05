# 🎰 miStake - Stake-Inspired Casino Game

![miStake Logo](https://img.shields.io/badge/miStake-Casino-blue?style=for-the-badge&logo=game&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript)

> **⚠️ IMPORTANT:** This is a demo casino game built for educational purposes only. No real money is involved - all gameplay uses virtual credits!

## 🎮 What is miStake?

miStake is a modern, sleek casino gaming platform inspired by Stake.com's design philosophy. Experience the thrill of strategic gambling with our Mines game - a 5x5 grid where you hunt for diamonds while avoiding deadly bombs!

### 💎 Mines Game Features

- **🎯 Strategic Gameplay**: Click tiles to reveal diamonds (💎) and avoid bombs (💣)
- **📈 Dynamic Multipliers**: Each safe tile increases your potential winnings
- **💰 Smart Cash Out**: Walk away with profits before hitting a mine
- **📊 Live Statistics**: Track your multiplier, profit potential, and win rate
- **🎨 Stake-Inspired UI**: Clean, dark theme with gold accents
- **📱 Fully Responsive**: Play on desktop, tablet, or mobile
- **⚡ Real-time Updates**: Instant feedback and smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pravin-hub-rgb/miStake.git
   cd miStake
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🎲 How to Play Mines

1. **Set Your Bet**: Choose your wager amount (minimum $10)
2. **Choose Mines**: Select difficulty (1-24 mines)
3. **Start Playing**: Click tiles to reveal diamonds
4. **Build Multiplier**: Each safe tile increases your payout
5. **Cash Out**: Take profits before hitting a mine!

### 🎯 Game Rules

- **25 tiles** in a 5x5 grid
- **Hidden mines** and **diamonds**
- **Safe tiles** multiply your bet
- **Hit a mine** = lose your stake
- **Reveal all safe tiles** = maximum payout

### 💡 Pro Tips

- Start with fewer mines for safer gameplay
- Watch the "Profit on Next Tile" stat
- Cash out when the risk outweighs the reward
- Study your game history to improve strategy

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0 with Hooks
- **Build Tool**: Vite 7.2.4 (lightning fast!)
- **Routing**: React Router DOM
- **Styling**: CSS3 with custom properties
- **Icons**: Unicode emojis + CSS animations
- **Responsive**: Mobile-first design

### Key Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.0.0",
  "@vitejs/plugin-react": "^4.0.0"
}
```

## 📁 Project Structure

```
miStake/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx        # Main games dashboard
│   │   └── Mines/
│   │       ├── MinesGame.jsx    # Main game component
│   │       ├── GameBoard.jsx    # 5x5 tile grid
│   │       ├── Controls.jsx     # Bet/mines controls
│   │       ├── Stats.jsx        # Game statistics
│   │       └── Tile.jsx         # Individual tile component
│   ├── styles/
│   │   └── App.css             # Global styles & variables
│   ├── App.jsx                 # Main app with routing
│   └── main.jsx                # React entry point
├── docs/
│   └── PROJECT_PLAN.md         # Development roadmap
└── README.md
```

## 🎨 Design Philosophy

Inspired by Stake.com's clean aesthetic:
- **Dark theme** with gold accents
- **Minimal UI** focusing on gameplay
- **Smooth animations** and transitions
- **Professional typography** with custom fonts
- **Responsive grid layouts**

### Color Palette
```css
:root {
  --bg-primary: #0f1220;      /* Deep navy background */
  --bg-secondary: #171a2b;    /* Card backgrounds */
  --accent-gold: #ffd700;     /* Gold highlights */
  --text-primary: #ffffff;    /* White text */
  --border-color: #2d3436;    /* Subtle borders */
}
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy! 🚀

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices
- Maintain the dark theme aesthetic
- Ensure mobile responsiveness
- Add proper error handling
- Test on multiple browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

**This is a demo application for educational purposes only.**

- No real money gambling
- All gameplay uses virtual credits
- For entertainment and learning React only
- Not affiliated with any real casino platforms

## 🙏 Acknowledgments

- Inspired by Stake.com's design
- Built with React & Vite
- Icons from Unicode emoji library
- Fonts from Google Fonts (Pacifico)

---

**🎰 Have fun playing miStake! Remember: this is just for fun - gamble responsibly! 🎰**
