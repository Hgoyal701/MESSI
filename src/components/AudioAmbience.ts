/**
 * Minimalist cinematic stadium synthesizer via Web Audio API.
 * Creates an ambient low-frequency sub-hum and ethereal harmonic shimmer.
 */
class StadiumAmbience {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      if (!this.ctx) {
        const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.ctx = new AudioCtxClass();
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 3);
      this.masterGain.connect(this.ctx.destination);

      // Low stadium sub-hum (55Hz / A1)
      const subOsc = this.ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(55, this.ctx.currentTime);

      const subGain = this.ctx.createGain();
      subGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      subOsc.connect(subGain);
      subGain.connect(this.masterGain);
      subOsc.start();
      this.oscillators.push(subOsc);

      // Warm cinematic fifth (82.4Hz / E2)
      const fifthOsc = this.ctx.createOscillator();
      fifthOsc.type = 'sine';
      fifthOsc.frequency.setValueAtTime(82.41, this.ctx.currentTime);

      const fifthGain = this.ctx.createGain();
      fifthGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
      fifthOsc.connect(fifthGain);
      fifthGain.connect(this.masterGain);
      fifthOsc.start();
      this.oscillators.push(fifthOsc);

      // Ethereal high harmonic (220Hz / A3)
      const highOsc = this.ctx.createOscillator();
      highOsc.type = 'triangle';
      highOsc.frequency.setValueAtTime(220, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      const highGain = this.ctx.createGain();
      highGain.gain.setValueAtTime(0.15, this.ctx.currentTime);

      highOsc.connect(filter);
      filter.connect(highGain);
      highGain.connect(this.masterGain);
      highOsc.start();
      this.oscillators.push(highOsc);

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // ignore
          }
        });
        this.oscillators = [];
        this.isPlaying = false;
      }, 1200);
    } else {
      this.isPlaying = false;
    }
  }
}

export const stadiumAudio = new StadiumAmbience();
