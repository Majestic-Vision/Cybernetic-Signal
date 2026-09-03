import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Download,
  Share2,
  Volume2,
  VolumeX,
  Activity,
  Radio,
  Check,
} from 'lucide-react';
import { Transmission, PlaybackRate } from '../types';
import { formatTime } from '../utils/formatters';

interface MainPlayerDeckProps {
  transmission: Transmission;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: PlaybackRate;
  frequencyBars: number[];
  peakDb: string;
  isUsingFallback: boolean;
  onTogglePlay: () => void;
  onSeek: (seconds: number) => void;
  onSeekRelative: (delta: number) => void;
  onRateChange: (rate: PlaybackRate) => void;
  onDownloadStems: () => void;
  onShare: () => void;
  volume: number;
  onVolumeChange: (vol: number) => void;
}

export const MainPlayerDeck: React.FC<MainPlayerDeckProps> = ({
  transmission,
  isPlaying,
  currentTime,
  duration,
  playbackRate,
  frequencyBars,
  peakDb,
  isUsingFallback,
  onTogglePlay,
  onSeek,
  onSeekRelative,
  onRateChange,
  onDownloadStems,
  onShare,
  volume,
  onVolumeChange,
}) => {
  const scrubberRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPct, setHoverPct] = useState<number | null>(null);
  const [shareCopied, setShareCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(volume);

  const speedOptions: PlaybackRate[] = [1.0, 1.25, 1.5, 2.0];
  const progressPercent = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;

  // Handle Scrubbing
  const calculateScrubPosition = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
      if (!scrubberRef.current) return;
      const rect = scrubberRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      onSeek(pct * duration);
    },
    [duration, onSeek]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    calculateScrubPosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrubberRef.current) return;
    const rect = scrubberRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    setHoverPct(pct * 100);
    setHoverTime(pct * duration);

    if (isDragging) {
      calculateScrubPosition(e);
    }
  };

  const handleMouseLeave = () => {
    setHoverTime(null);
    setHoverPct(null);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        calculateScrubPosition(e);
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, calculateScrubPosition]);

  const handleMuteToggle = () => {
    if (isMuted) {
      setIsMuted(false);
      onVolumeChange(previousVolume || 0.85);
    } else {
      setPreviousVolume(volume);
      setIsMuted(true);
      onVolumeChange(0);
    }
  };

  const handleShareClick = () => {
    onShare();
    setShareCopied(true);
    setTimeout(() => setShareCopied(false), 2400);
  };

  return (
    <section className="w-full bg-[#171b26] border border-[#262a35] p-4 md:p-7 relative overflow-hidden shadow-2xl">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffcc61]/5 blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#00eefc]/5 blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative z-10 items-stretch">
        {/* ========================================================================= */}
        {/* Left Column: Cathode Screen / Oscilloscope Cover Display                  */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-[#0a0e18] border border-[#262a35] p-4 relative group">
          {/* Top Reticle Diagnostics */}
          <div className="flex justify-between items-center pb-2 text-[#9c8f7b] font-mono text-[11px] border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#ffcc61]"></span>
              <span className="text-[#dfe2f1] font-semibold">OSC-CH: 01A</span>
            </div>
            <span>GRID: 0.25mV/DIV</span>
          </div>

          {/* CRT Monitor / Album Cover Frame */}
          <div className="relative w-full aspect-square bg-[#262a35] border border-white/10 flex items-center justify-center overflow-hidden my-3">
            <img
              src={transmission.artworkUrl}
              alt={transmission.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isPlaying ? 'scale-105 filter contrast-110' : 'scale-100'
              }`}
            />

            {/* Retro CRT Scanline Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18]/90 via-transparent to-transparent opacity-80 pointer-events-none"></div>
            <div className="absolute inset-0 scanline-overlay opacity-35 pointer-events-none"></div>

            {/* Glowing Corner Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#00eefc]"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#00eefc]"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#00eefc]"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#00eefc]"></div>

            {/* Beacon Active Badge */}
            <div className="absolute bottom-3 left-3 bg-[#0a0e18]/90 border border-[#00eefc]/40 backdrop-blur-md px-3 py-1 flex items-center gap-2">
              <span className={`w-2 h-2 bg-[#00eefc] ${isPlaying ? 'animate-ping' : ''}`}></span>
              <span className="font-mono text-[10px] font-bold text-[#00eefc] uppercase tracking-widest">
                {isPlaying ? 'BEACON ACTIVE // STREAMING' : 'CARRIER STANDBY'}
              </span>
            </div>

            {/* Fallback synthesizer badge */}
            {isUsingFallback && (
              <div className="absolute top-3 right-3 bg-[#e6af2e]/90 text-[#402d00] font-mono text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider">
                SYNTH OSCILLATOR
              </div>
            )}
          </div>

          {/* Bottom Oscilloscope Telemetry */}
          <div className="pt-2 flex items-center justify-between text-[#9c8f7b] font-mono text-[11px] border-t border-white/5">
            <span className="text-[#ffcc61] font-bold">
              SYNTHESIS: {transmission.carrierFreq}
            </span>
            <span className="text-[#d3c5ae]">
              WARMTH: {transmission.tubeWarmth}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Right Column: Player Controls & Real-Time Spectrogram Scrubber            */}
        {/* ========================================================================= */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-5">
          {/* Metadata Header */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#ffcc61] text-[#402d00] px-2.5 py-0.5 font-mono text-[11px] uppercase font-bold tracking-widest">
                TRANSMISSION {transmission.episodeNumber}
              </span>
              <span className="bg-[#262a35] text-[#00eefc] border border-white/5 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider">
                {transmission.tag}
              </span>
              <span className="text-[#9c8f7b] font-mono text-[11px] uppercase tracking-widest">
                // RECORDED: {transmission.date}
              </span>
            </div>

            <h1 className="font-['Sora'] text-2xl md:text-4xl text-[#dfe2f1] tracking-tight font-semibold leading-tight pt-1">
              {transmission.title}
            </h1>

            <p className="font-['Geist'] text-sm md:text-base text-[#d3c5ae] leading-relaxed max-w-3xl">
              {transmission.subtitle}
            </p>
          </div>

          {/* Waveform Visualizer & Oscilloscope Deck */}
          <div className="bg-[#0a0e18] border border-[#262a35] p-4 space-y-3 relative">
            {/* Scrubber Telemetry Header */}
            <div className="flex items-center justify-between font-mono text-[11px]">
              <div className="flex items-center gap-2 text-[#ffcc61]">
                <Activity className="w-3.5 h-3.5 text-[#ffcc61] animate-pulse" />
                <span className="tracking-widest uppercase font-semibold">
                  REAL-TIME SPECTROGRAM
                </span>
              </div>

              <div className="flex items-center gap-4 text-[#d3c5ae]">
                <span className="text-[#00eefc] font-mono text-[11px]">
                  CH A: {peakDb}
                </span>
                <span className="tracking-widest font-mono text-[11px] text-[#dfe2f1] font-semibold">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Interactive Dynamic Waveform Bars & Scrubber Track */}
            <div
              ref={scrubberRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative h-18 w-full flex items-end gap-[3px] py-1 cursor-pointer select-none group/wave"
              title="Click or drag to seek transmission playback"
            >
              {frequencyBars.map((heightPercent, index) => {
                const barPosition = (index / frequencyBars.length) * 100;
                const isPlayed = barPosition <= progressPercent;
                const isHovered = hoverPct !== null && barPosition <= hoverPct;

                // Color dynamics:
                // If played: sovereign gold (#ffcc61) or bright cyan (#00eefc) on peak
                // If unplayed: slate surface high (#262a35)
                let barColor = 'bg-[#262a35] opacity-70';
                if (isPlayed) {
                  barColor =
                    index % 6 === 0
                      ? 'bg-[#00eefc] shadow-[0_0_8px_#00eefc]'
                      : 'bg-[#ffcc61]';
                } else if (isHovered) {
                  barColor = 'bg-[#ffcc61]/40';
                }

                return (
                  <div
                    key={index}
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full transition-all duration-150 ${barColor} group-hover/wave:opacity-90`}
                  ></div>
                );
              })}

              {/* Cursor Line Indicator at current play position */}
              <div
                style={{ left: `${progressPercent}%` }}
                className="absolute top-0 bottom-0 w-0.5 bg-[#00eefc] shadow-[0_0_12px_#00eefc] pointer-events-none z-20"
              >
                <div className="w-2 h-2 -ml-[3px] -mt-1 bg-[#00eefc] rotate-45 shadow-[0_0_8px_#00eefc]"></div>
              </div>

              {/* Hover Indicator Box */}
              {hoverTime !== null && hoverPct !== null && (
                <div
                  style={{ left: `${hoverPct}%` }}
                  className="absolute -top-7 -translate-x-1/2 bg-[#262a35] border border-[#00eefc] px-2 py-0.5 text-[10px] font-mono text-[#00eefc] pointer-events-none z-30 whitespace-nowrap"
                >
                  {formatTime(hoverTime)}
                </div>
              )}
            </div>

            {/* Secondary Continuous Progress Rail */}
            <div className="w-full bg-[#1c1f2a] h-1 flex overflow-hidden">
              <div
                style={{ width: `${progressPercent}%` }}
                className="bg-[#ffcc61] h-full transition-all duration-100"
              ></div>
              <div
                style={{ width: `${100 - progressPercent}%` }}
                className="bg-[#262a35] h-full"
              ></div>
            </div>
          </div>

          {/* Tactile Control Array */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            {/* Playback Controls (Play/Pause, Replay, Forward, Speeds) */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Sovereign Play/Pause Button */}
              <button
                onClick={onTogglePlay}
                aria-label={isPlaying ? 'Pause transmission' : 'Play transmission'}
                className="w-12 h-12 bg-[#ffcc61] text-[#402d00] flex items-center justify-center hover:bg-[#ffdea2] transition-all shadow-[0_0_16px_rgba(255,204,97,0.3)] cursor-pointer"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 fill-current" />
                ) : (
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                )}
              </button>

              {/* Replay 10s */}
              <button
                onClick={() => onSeekRelative(-10)}
                className="w-10 h-10 bg-[#262a35] border border-white/5 text-[#dfe2f1] flex items-center justify-center hover:bg-[#313540] hover:text-[#ffcc61] transition-colors cursor-pointer"
                title="Rewind 10 seconds"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Forward 30s */}
              <button
                onClick={() => onSeekRelative(30)}
                className="w-10 h-10 bg-[#262a35] border border-white/5 text-[#dfe2f1] flex items-center justify-center hover:bg-[#313540] hover:text-[#ffcc61] transition-colors cursor-pointer"
                title="Fast forward 30 seconds"
              >
                <RotateCw className="w-4 h-4" />
              </button>

              <div className="h-6 w-px bg-[#262a35] mx-1 hidden sm:block"></div>

              {/* Playback Speed Pills */}
              <div className="flex items-center bg-[#0a0e18] border border-[#262a35] p-1 gap-1">
                {speedOptions.map((rate) => (
                  <button
                    key={rate}
                    onClick={() => onRateChange(rate)}
                    className={`px-2.5 py-1 font-mono text-[11px] transition-all cursor-pointer ${
                      playbackRate === rate
                        ? 'bg-[#ffcc61] text-[#402d00] font-bold'
                        : 'text-[#d3c5ae] hover:text-[#dfe2f1]'
                    }`}
                  >
                    {rate.toFixed(rate % 1 === 0 ? 1 : 2)}x
                  </button>
                ))}
              </div>

              {/* Volume Slider & Mute Toggle */}
              <div className="hidden md:flex items-center bg-[#0a0e18] border border-[#262a35] px-2.5 py-1 gap-2">
                <button
                  onClick={handleMuteToggle}
                  className="text-[#d3c5ae] hover:text-[#ffcc61] transition-colors cursor-pointer"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-[#ffb4ab]" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-[#00eefc]" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setIsMuted(false);
                    onVolumeChange(parseFloat(e.target.value));
                  }}
                  className="w-16 h-1 bg-[#262a35] accent-[#00eefc] cursor-pointer"
                  title={`Volume: ${Math.round(volume * 100)}%`}
                />
              </div>
            </div>

            {/* Secondary Action Buttons */}
            <div className="flex items-center gap-2.5">
              {/* Audio Stems (.wav) Download */}
              <button
                onClick={onDownloadStems}
                className="flex items-center gap-1.5 px-3 py-2 bg-[#262a35] border border-[#00eefc]/30 text-[#00eefc] hover:bg-[#00eefc]/10 hover:border-[#00eefc] transition-all font-mono text-[11px] uppercase tracking-wider cursor-pointer"
                title="Synthesize and download audio stems in .wav format"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Audio Stems</span>
                <span>(.wav)</span>
              </button>

              {/* Share Carrier */}
              <button
                onClick={handleShareClick}
                className="flex items-center gap-1.5 px-3 py-2 bg-[#262a35] border border-white/10 text-[#dfe2f1] hover:text-[#ffcc61] hover:border-[#ffcc61]/40 transition-all font-mono text-[11px] uppercase tracking-wider cursor-pointer"
                title="Share Carrier Link"
              >
                {shareCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00eefc]" />
                    <span className="text-[#00eefc]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Carrier</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
