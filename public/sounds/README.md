# Sound Effects for miStake

This directory contains audio files for the miStake casino game sound effects.

## Required Sound Files

Place the following sound files in this directory:

### Diamond/Safe Tile Sounds
- `diamond.mp3` - Pleasant chime when revealing a diamond (💎)
- `coin.wav` - Alternative coin sound for diamonds

### Bomb/Mine Sounds
- `bomb.mp3` - Explosion sound when hitting a mine (💣)
- `explosion.wav` - Alternative explosion sound for mines

## Sound File Specifications

- **Format**: MP3 or WAV
- **Duration**: 0.5-2 seconds (keep them short)
- **Volume**: Normalized to similar levels
- **Quality**: 128kbps MP3 or 44.1kHz WAV

## Free Sound Resources

### Freesound.org (Free)
Search for these terms:
- "coin" or "chime" for diamond sounds
- "explosion" or "boom" for bomb sounds

### Zapsplat.com (Free with attribution)
- Casino sound effects
- Coin sounds
- Explosion effects

### OpenGameArt.org
- Game audio assets
- Royalty-free sounds

## Implementation Notes

- Sounds are preloaded when the app starts
- Fallback system: tries primary sound, falls back to alternative
- Web Audio API used for better performance
- HTML5 Audio fallback for older browsers
- Volume control and master toggle available

## File Size Guidelines

Keep total audio size under 2MB for better loading performance:
- MP3 files: 50-200KB each
- WAV files: 100-500KB each
