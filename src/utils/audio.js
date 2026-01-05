// Audio utility for miStake game sound effects
class AudioManager {
  constructor() {
    this.audioContext = null;
    this.sounds = {};
    this.volume = 0.5; // Default volume (0-1)
    this.enabled = true; // Master audio toggle
    this.preloaded = new Set();
  }

  // Initialize audio context (required for some browsers)
  async init() {
    try {
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }

      if (this.audioContext.state === 'suspended') {
        await this.audioContext.resume();
      }
    } catch (error) {
      console.warn('Audio context initialization failed:', error);
    }
  }

  // Preload a sound file
  async preloadSound(name, url) {
    if (this.preloaded.has(name)) return;

    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();

      if (this.audioContext) {
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        this.sounds[name] = audioBuffer;
      } else {
        // Fallback for browsers without AudioContext
        const audio = new Audio(url);
        audio.preload = 'auto';
        this.sounds[name] = audio;
      }

      this.preloaded.add(name);
    } catch (error) {
      console.warn(`Failed to preload sound ${name}:`, error);
    }
  }

  // Play a sound
  async playSound(name, volume = this.volume) {
    if (!this.enabled) return;

    try {
      await this.init();

      const sound = this.sounds[name];
      if (!sound) {
        console.warn(`Sound '${name}' not found`);
        return;
      }

      if (this.audioContext && sound instanceof AudioBuffer) {
        // Web Audio API path
        const source = this.audioContext.createBufferSource();
        const gainNode = this.audioContext.createGain();

        source.buffer = sound;
        gainNode.gain.value = volume;

        source.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        source.start(0);
      } else if (sound instanceof HTMLAudioElement) {
        // Fallback HTML5 Audio path
        const audio = sound.cloneNode();
        audio.volume = volume;
        audio.currentTime = 0;
        await audio.play();
      }
    } catch (error) {
      console.warn(`Failed to play sound ${name}:`, error);
    }
  }

  // Set master volume
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
  }

  // Enable/disable all audio
  setEnabled(enabled) {
    this.enabled = enabled;
  }

  // Preload all game sounds
  async preloadAllSounds() {
    const soundsToPreload = [
      { name: 'diamond', url: '/sounds/diamond.wav' },
      { name: 'bomb', url: '/sounds/bomb.wav' },
      { name: 'coin', url: '/sounds/coin.wav' },
      { name: 'explosion', url: '/sounds/explosion.wav' }
    ];

    await Promise.all(
      soundsToPreload.map(({ name, url }) => this.preloadSound(name, url))
    );
  }
}

// Create singleton instance
const audioManager = new AudioManager();

// Export convenience functions
export const initAudio = () => audioManager.init();
export const preloadSounds = () => audioManager.preloadAllSounds();
export const playSound = (name, volume) => audioManager.playSound(name, volume);
export const setAudioVolume = (volume) => audioManager.setVolume(volume);
export const setAudioEnabled = (enabled) => audioManager.setEnabled(enabled);

export default audioManager;
