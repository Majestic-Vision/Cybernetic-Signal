/**
 * Web Audio Engine with HTML5 Audio & Fallback Analog Oscillator Synthesizer
 * Provides real-time frequency analysis for spectrogram, seeking, rate control,
 * and stem audio generation.
 */

export class CyberneticAudioEngine {
  private audio: HTML5AudioElementOrMock;
  private audioCtx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private sourceNode: MediaElementAudioSourceNode | null = null;

  // Fallback synthesizer nodes
  private isUsingFallbackSynth = false;
  private synthOscillators: OscillatorNode[] = [];
  private synthGainNode: GainNode | null = null;
  private synthLfo: OscillatorNode | null = null;
  private synthFilter: BiquadFilterNode | null = null;
  private fallbackTimer: number | null = null;

  // State
  private isPlaying = false;
  private currentTime = 0;
  private duration = 3250;
  private playbackRate = 1.0;
  private volume = 0.85;

  // Callbacks
  private onTimeUpdateCallback?: (currentTime: number, duration: number) => void;
  private onPlayStateChangeCallback?: (isPlaying: boolean) => void;
  private onFallbackActiveCallback?: (usingFallback: boolean) => void;

  constructor() {
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this.audio.crossOrigin = 'anonymous';

    this.audio.addEventListener('timeupdate', () => {
      if (!this.isUsingFallbackSynth) {
        this.currentTime = this.audio.currentTime;
        this.duration = this.audio.duration || this.duration;
        this.onTimeUpdateCallback?.(this.currentTime, this.duration);
      }
    });

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.onPlayStateChangeCallback?.(true);
    });

    this.audio.addEventListener('pause', () => {
      if (!this.isUsingFallbackSynth) {
        this.isPlaying = false;
        this.onPlayStateChangeCallback?.(false);
      }
    });

    this.audio.addEventListener('ended', () => {
      this.isPlaying = false;
      this.onPlayStateChangeCallback?.(false);
    });

    this.audio.addEventListener('error', () => {
      // Gracefully switch to fallback oscillator synth
      this.activateFallbackSynth();
    });
  }

  private initAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
        this.analyser = this.audioCtx.createAnalyser();
        this.analyser.fftSize = 64;
        this.analyser.smoothingTimeConstant = 0.8;

        try {
          // Attempt connecting media element source
          if (!this.sourceNode) {
            this.sourceNode = this.audioCtx.createMediaElementSource(this.audio as HTMLMediaElement);
            this.sourceNode.connect(this.analyser);
            this.analyser.connect(this.audioCtx.destination);
          }
        } catch {
          // MediaElementAudioSourceNode may throw if already connected or CORS blocked
        }
      }
    }

    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public loadTrack(url: string, durationSeconds: number) {
    this.stop();
    this.duration = durationSeconds;
    this.currentTime = 0;
    this.isUsingFallbackSynth = false;
    this.onFallbackActiveCallback?.(false);

    this.audio.src = url;
    this.audio.playbackRate = this.playbackRate;
    this.audio.volume = this.volume;
    this.onTimeUpdateCallback?.(0, this.duration);
  }

  public async play(): Promise<void> {
    this.initAudioContext();

    if (this.isUsingFallbackSynth) {
      this.startFallbackOscillators();
      this.isPlaying = true;
      this.onPlayStateChangeCallback?.(true);
      return;
    }

    try {
      await this.audio.play();
      this.isPlaying = true;
      this.onPlayStateChangeCallback?.(true);
    } catch {
      // Audio playback blocked or network fail -> switch to fallback ambient oscillator
      this.activateFallbackSynth();
      this.startFallbackOscillators();
      this.isPlaying = true;
      this.onPlayStateChangeCallback?.(true);
    }
  }

  public pause(): void {
    if (this.isUsingFallbackSynth) {
      this.stopFallbackOscillators();
    } else {
      this.audio.pause();
    }
    this.isPlaying = false;
    this.onPlayStateChangeCallback?.(false);
  }

  public togglePlay(): void {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public stop(): void {
    this.pause();
    this.currentTime = 0;
    if (!this.isUsingFallbackSynth) {
      this.audio.currentTime = 0;
    }
    this.onTimeUpdateCallback?.(0, this.duration);
  }

  public seek(seconds: number): void {
    const clamped = Math.max(0, Math.min(seconds, this.duration));
    this.currentTime = clamped;

    if (!this.isUsingFallbackSynth) {
      try {
        this.audio.currentTime = clamped;
      } catch {
        // Ignored if not yet loaded
      }
    }
    this.onTimeUpdateCallback?.(this.currentTime, this.duration);
  }

  public seekRelative(deltaSeconds: number): void {
    this.seek(this.currentTime + deltaSeconds);
  }

  public setPlaybackRate(rate: number): void {
    this.playbackRate = rate;
    this.audio.playbackRate = rate;
  }

  public setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(1, vol));
    this.audio.volume = this.volume;
    if (this.synthGainNode) {
      this.synthGainNode.gain.setValueAtTime(this.volume * 0.15, this.audioCtx?.currentTime || 0);
    }
  }

  // --- Fallback Cybernetic Synthesizer ---
  private activateFallbackSynth() {
    this.isUsingFallbackSynth = true;
    this.onFallbackActiveCallback?.(true);
  }

  private startFallbackOscillators() {
    this.stopFallbackOscillators();
    if (!this.audioCtx) return;

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    // Warm analog lowpass filter (Vacuum tube warmth simulation)
    this.synthFilter = this.audioCtx.createBiquadFilter();
    this.synthFilter.type = 'lowpass';
    this.synthFilter.frequency.setValueAtTime(840, this.audioCtx.currentTime);
    this.synthFilter.Q.setValueAtTime(2.5, this.audioCtx.currentTime);

    // Master synth gain
    this.synthGainNode = this.audioCtx.createGain();
    this.synthGainNode.gain.setValueAtTime(this.volume * 0.14, this.audioCtx.currentTime);

    // Subtle LFO drift
    this.synthLfo = this.audioCtx.createOscillator();
    this.synthLfo.frequency.setValueAtTime(0.2, this.audioCtx.currentTime);
    const lfoGain = this.audioCtx.createGain();
    lfoGain.gain.setValueAtTime(15, this.audioCtx.currentTime);
    this.synthLfo.connect(lfoGain);

    // 4 Harmonic frequencies tuned to 432Hz Carrier:
    // Root 108Hz (sub), 216Hz, 432Hz (carrier), 648Hz (fifth harmonic)
    const baseFreqs = [108, 216, 432, 648];
    this.synthOscillators = baseFreqs.map((freq, i) => {
      const osc = this.audioCtx!.createOscillator();
      osc.type = i === 0 ? 'sine' : i === 1 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx!.currentTime);
      lfoGain.connect(osc.frequency);

      const oscGain = this.audioCtx!.createGain();
      const relativeGain = [0.4, 0.3, 0.2, 0.1][i];
      oscGain.gain.setValueAtTime(relativeGain, this.audioCtx!.currentTime);

      osc.connect(oscGain);
      oscGain.connect(this.synthFilter!);
      osc.start();
      return osc;
    });

    this.synthLfo.start();
    this.synthFilter.connect(this.synthGainNode);

    // Connect to analyser and speakers
    if (this.analyser) {
      this.synthGainNode.connect(this.analyser);
      this.analyser.connect(this.audioCtx.destination);
    } else {
      this.synthGainNode.connect(this.audioCtx.destination);
    }

    // Timer to increment current time
    if (this.fallbackTimer) window.clearInterval(this.fallbackTimer);
    this.fallbackTimer = window.setInterval(() => {
      if (this.isPlaying) {
        this.currentTime += 0.25 * this.playbackRate;
        if (this.currentTime >= this.duration) {
          this.pause();
          this.currentTime = 0;
        }
        this.onTimeUpdateCallback?.(this.currentTime, this.duration);
      }
    }, 250);
  }

  private stopFallbackOscillators() {
    this.synthOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Ignored
      }
    });
    this.synthOscillators = [];

    if (this.synthLfo) {
      try {
        this.synthLfo.stop();
        this.synthLfo.disconnect();
      } catch {
        // Ignored
      }
      this.synthLfo = null;
    }

    if (this.fallbackTimer) {
      window.clearInterval(this.fallbackTimer);
      this.fallbackTimer = null;
    }
  }

  // --- Real-Time Telemetry & Spectrogram Data ---
  public getFrequencyData(barCount = 48): number[] {
    if (!this.isPlaying) {
      // Idle resting wave
      return Array.from({ length: barCount }, (_, i) => {
        const base = Math.sin((i / barCount) * Math.PI) * 20 + 8;
        return Math.floor(base);
      });
    }

    if (this.analyser) {
      const buffer = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.getByteFrequencyData(buffer);

      const step = Math.max(1, Math.floor(buffer.length / barCount));
      const result: number[] = [];
      for (let i = 0; i < barCount; i++) {
        const idx = Math.min(i * step, buffer.length - 1);
        const val = buffer[idx] || 0;
        // Normalize between 10% and 98%
        const normalized = Math.floor((val / 255) * 88) + 10;
        result.push(normalized);
      }
      return result;
    }

    // Algorithmic dynamic fallback if audio context not permitted yet
    return Array.from({ length: barCount }, (_, i) => {
      const waveA = Math.sin(Date.now() / 200 + i * 0.4) * 35;
      const waveB = Math.cos(Date.now() / 320 - i * 0.2) * 25;
      const val = Math.max(12, Math.min(95, Math.floor(waveA + waveB + 45)));
      return val;
    });
  }

  public getPeakDb(): string {
    if (!this.isPlaying) return '-32.0 dB';
    const variance = (Math.sin(Date.now() / 400) * 2.8).toFixed(1);
    const peakVal = (-6.2 + parseFloat(variance)).toFixed(1);
    return `${peakVal} dB`;
  }

  // Generate a valid synthesized .wav audio stem download
  public generateStemWavBlob(carrierName = 'Transmission-01-Stems'): Blob {
    const sampleRate = 44100;
    const durationSec = 4;
    const numSamples = sampleRate * durationSec;
    const buffer = new ArrayBuffer(44 + numSamples * 2);
    const view = new DataView(buffer);

    // RIFF identifier
    this.writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + numSamples * 2, true);
    this.writeString(view, 8, 'WAVE');
    this.writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
    view.setUint16(20, 1, true); // AudioFormat (1 = PCM)
    view.setUint16(22, 1, true); // NumChannels (Mono)
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true); // ByteRate
    view.setUint16(32, 2, true); // BlockAlign
    view.setUint16(34, 16, true); // BitsPerSample
    this.writeString(view, 36, 'data');
    view.setUint32(40, numSamples * 2, true);

    // Synthesize warm retro cybernetic drone sound
    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      const f1 = Math.sin(2 * Math.PI * 432 * t);
      const f2 = Math.sin(2 * Math.PI * 216 * t) * 0.5;
      const f3 = Math.sin(2 * Math.PI * 648 * t) * 0.25;
      const env = Math.min(1, t * 2) * Math.min(1, (durationSec - t) * 2);
      const sample = Math.max(-1, Math.min(1, (f1 + f2 + f3) * 0.3 * env));
      view.setInt16(44 + i * 2, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
    }

    return new Blob([buffer], { type: 'audio/wav' });
  }

  private writeString(view: DataView, offset: number, string: string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  // --- Subscriptions ---
  public onTimeUpdate(callback: (currentTime: number, duration: number) => void) {
    this.onTimeUpdateCallback = callback;
  }

  public onPlayStateChange(callback: (isPlaying: boolean) => void) {
    this.onPlayStateChangeCallback = callback;
  }

  public onFallbackActive(callback: (usingFallback: boolean) => void) {
    this.onFallbackActiveCallback = callback;
  }

  public getCurrentTime() {
    return this.currentTime;
  }

  public getDuration() {
    return this.duration;
  }

  public getIsPlaying() {
    return this.isPlaying;
  }

  public getPlaybackRate() {
    return this.playbackRate;
  }
}

interface HTML5AudioElementOrMock {
  src: string;
  currentTime: number;
  duration: number;
  playbackRate: number;
  volume: number;
  preload: string;
  crossOrigin: string | null;
  play(): Promise<void>;
  pause(): void;
  addEventListener(event: string, handler: EventListenerOrEventListenerObject): void;
}
