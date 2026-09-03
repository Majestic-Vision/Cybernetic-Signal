import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './components/Header';
import { TelemetryBar } from './components/TelemetryBar';
import { MainPlayerDeck } from './components/MainPlayerDeck';
import { TransmissionArchive } from './components/TransmissionArchive';
import { DispatchReader } from './components/DispatchReader';
import { SubscribeStrip } from './components/SubscribeStrip';
import { Footer } from './components/Footer';
import { TRANSMISSIONS_DATA } from './data/transmissions';
import { CyberneticAudioEngine } from './audio/audioEngine';
import { Transmission, PlaybackRate } from './types';

export function App() {
  const [transmissions] = useState<Transmission[]>(TRANSMISSIONS_DATA);
  const [activeTransmission, setActiveTransmission] = useState<Transmission>(TRANSMISSIONS_DATA[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(TRANSMISSIONS_DATA[0].durationSeconds);
  const [playbackRate, setPlaybackRate] = useState<PlaybackRate>(1.0);
  const [volume, setVolume] = useState(0.85);
  const [activeNav, setActiveNav] = useState('overview');
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const [frequencyBars, setFrequencyBars] = useState<number[]>(() =>
    Array.from({ length: 48 }, (_, i) => Math.floor(Math.sin((i / 48) * Math.PI) * 20 + 12))
  );
  const [peakDb, setPeakDb] = useState('-32.0 dB');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Audio Engine singleton ref
  const audioEngineRef = useRef<CyberneticAudioEngine | null>(null);

  // Show a notification toast
  const triggerToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  }, []);

  // Initialize Audio Engine
  useEffect(() => {
    const engine = new CyberneticAudioEngine();
    audioEngineRef.current = engine;

    engine.loadTrack(activeTransmission.audioUrl, activeTransmission.durationSeconds);

    engine.onTimeUpdate((curr, dur) => {
      setCurrentTime(curr);
      if (dur > 0) setDuration(dur);
    });

    engine.onPlayStateChange((playing) => {
      setIsPlaying(playing);
    });

    engine.onFallbackActive((fallback) => {
      setIsUsingFallback(fallback);
      if (fallback) {
        triggerToast('Analog synth engaged: 432Hz carrier generated');
      }
    });

    return () => {
      engine.stop();
    };
  }, []);

  // Real-time Spectrogram frequency loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (audioEngineRef.current) {
        setFrequencyBars(audioEngineRef.current.getFrequencyData(48));
        setPeakDb(audioEngineRef.current.getPeakDb());
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Play / Pause Toggle
  const handleTogglePlay = useCallback(() => {
    if (audioEngineRef.current) {
      audioEngineRef.current.togglePlay();
    }
  }, []);

  // Seek to exact seconds
  const handleSeek = useCallback((seconds: number) => {
    if (audioEngineRef.current) {
      audioEngineRef.current.seek(seconds);
      setCurrentTime(seconds);
    }
  }, []);

  // Seek relative (e.g. -10s or +30s)
  const handleSeekRelative = useCallback((delta: number) => {
    if (audioEngineRef.current) {
      audioEngineRef.current.seekRelative(delta);
    }
  }, []);

  // Set Playback Speed
  const handleRateChange = useCallback((rate: PlaybackRate) => {
    setPlaybackRate(rate);
    if (audioEngineRef.current) {
      audioEngineRef.current.setPlaybackRate(rate);
    }
    triggerToast(`Playback calibrated to ${rate}x`);
  }, [triggerToast]);

  // Set Volume
  const handleVolumeChange = useCallback((vol: number) => {
    setVolume(vol);
    if (audioEngineRef.current) {
      audioEngineRef.current.setVolume(vol);
    }
  }, []);

  // Switch Transmission
  const handleSelectTransmission = useCallback(
    (transmission: Transmission) => {
      setActiveTransmission(transmission);
      setDuration(transmission.durationSeconds);
      setCurrentTime(0);

      if (audioEngineRef.current) {
        audioEngineRef.current.loadTrack(transmission.audioUrl, transmission.durationSeconds);
        audioEngineRef.current.play();
      }

      triggerToast(`Calibrated to Transmission ${transmission.episodeNumber}`);
    },
    [triggerToast]
  );

  // Download Synthesized Stems
  const handleDownloadStems = useCallback(() => {
    if (audioEngineRef.current) {
      const blob = audioEngineRef.current.generateStemWavBlob(
        `Transmission-${activeTransmission.episodeNumber}-Stems`
      );
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Cybernetic-Signal-Ep${activeTransmission.episodeNumber}-Stems-432Hz.wav`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      triggerToast('Audio Stems (.wav) synthesized and downloaded');
    }
  }, [activeTransmission.episodeNumber, triggerToast]);

  // Share Carrier Link
  const handleShare = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      triggerToast('Carrier frequency link copied to clipboard');
    }
  }, [triggerToast]);

  // Navigation switching
  const handleNavChange = (nav: string) => {
    setActiveNav(nav);
    if (nav === 'archive') {
      const el = document.getElementById('archive-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (nav === 'logs') {
      const el = document.getElementById('reader-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (nav === 'protocol') {
      const el = document.getElementById('subscribe-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e18] text-[#dfe2f1] font-['Geist'] relative selection:bg-[#ffcc61] selection:text-[#402d00]">
      {/* Top Header */}
      <Header
        activeNav={activeNav}
        onNavChange={handleNavChange}
        frequency={activeTransmission.carrierFreq}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-22 pb-16 space-y-8">
        {/* Top Active Telemetry Status Bar */}
        <TelemetryBar
          carrierFreq={activeTransmission.carrierFreq}
          snRatio={activeTransmission.snRatio}
          isStreaming={isPlaying}
        />

        {/* Master Player Deck */}
        <div id="overview">
          <MainPlayerDeck
            transmission={activeTransmission}
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            playbackRate={playbackRate}
            frequencyBars={frequencyBars}
            peakDb={peakDb}
            isUsingFallback={isUsingFallback}
            onTogglePlay={handleTogglePlay}
            onSeek={handleSeek}
            onSeekRelative={handleSeekRelative}
            onRateChange={handleRateChange}
            onDownloadStems={handleDownloadStems}
            onShare={handleShare}
            volume={volume}
            onVolumeChange={handleVolumeChange}
          />
        </div>

        {/* Dual Console: Transmission Archive & Synchronized Dispatch Reader */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Archive Panel (5 cols) */}
          <div id="archive-section" className="lg:col-span-5">
            <TransmissionArchive
              transmissions={transmissions}
              activeTransmissionId={activeTransmission.id}
              isPlaying={isPlaying}
              onSelectTransmission={handleSelectTransmission}
              onTogglePlay={handleTogglePlay}
            />
          </div>

          {/* Right Synchronized Dispatches & Transcripts (7 cols) */}
          <div id="reader-section" className="lg:col-span-7">
            <DispatchReader
              transmission={activeTransmission}
              currentTime={currentTime}
              onSeek={handleSeek}
            />
          </div>
        </div>

        {/* Subscribe Strip */}
        <div id="subscribe-section">
          <SubscribeStrip />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating System Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#171b26] border border-[#ffcc61] text-[#ffcc61] font-mono text-xs px-4 py-2.5 shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <span className="w-1.5 h-1.5 bg-[#00eefc] shadow-[0_0_6px_#00eefc]"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
