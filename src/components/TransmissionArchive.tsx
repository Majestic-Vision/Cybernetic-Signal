import React, { useState } from 'react';
import { Play, Pause, History, ChevronDown, ChevronUp } from 'lucide-react';
import { Transmission, TransmissionCategory } from '../types';

interface TransmissionArchiveProps {
  transmissions: Transmission[];
  activeTransmissionId: string;
  isPlaying: boolean;
  onSelectTransmission: (transmission: Transmission) => void;
  onTogglePlay: () => void;
}

export const TransmissionArchive: React.FC<TransmissionArchiveProps> = ({
  transmissions,
  activeTransmissionId,
  isPlaying,
  onSelectTransmission,
  onTogglePlay,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TransmissionCategory>('All Dispatches');
  const [showHistoricalArchive, setShowHistoricalArchive] = useState(false);

  const categories: TransmissionCategory[] = [
    'All Dispatches',
    'Neural Theory',
    'Swarm Logic',
    'Executive',
  ];

  const filteredTransmissions = transmissions.filter((t) => {
    if (selectedCategory === 'All Dispatches') return true;
    return t.category === selectedCategory;
  });

  // 12 Earlier Transmissions historical backlog
  const historicalLogs = [
    { num: '06', title: 'Cryptographic Vector Snapshots', date: 'MAY 2025', duration: '51:12', stamp: '#4896' },
    { num: '07', title: 'Unbounded Context Window Harmonics', date: 'APR 2025', duration: '44:30', stamp: '#4897' },
    { num: '08', title: 'High-Dimensional Latent Navigation', date: 'MAR 2025', duration: '39:55', stamp: '#4898' },
    { num: '09', title: 'Sub-Zero Drift Alignment Proofs', date: 'FEB 2025', duration: '56:20', stamp: '#4899' },
    { num: '10', title: 'The Sovereign AI Balance Sheet', date: 'JAN 2025', duration: '48:10', stamp: '#4900' },
    { num: '11', title: 'Adversarial Prompting as Stress Test', date: 'DEC 2024', duration: '41:45', stamp: '#4901' },
    { num: '12', title: 'Deterministic Neural Output Filters', date: 'NOV 2024', duration: '37:18', stamp: '#4902' },
    { num: '13', title: 'Air-Gapped Sovereign Compute Hubs', date: 'OCT 2024', duration: '50:40', stamp: '#4903' },
    { num: '14', title: 'Agent Swarms under Network Partition', date: 'SEP 2024', duration: '62:10', stamp: '#4904' },
    { num: '15', title: 'Recursive Heuristic Self-Calibration', date: 'AUG 2024', duration: '43:25', stamp: '#4905' },
    { num: '16', title: 'Autonomous Multi-Model Consensus', date: 'JUL 2024', duration: '47:50', stamp: '#4906' },
    { num: '17', title: 'Genesis Broadcast: The Cybernetic Horizon', date: 'JUN 2024', duration: '58:04', stamp: '#4907' },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* Header Matrix */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h2 className="font-['Sora'] text-lg md:text-xl text-[#dfe2f1] font-semibold flex items-center gap-2">
            <span className="text-[#ffcc61] font-mono text-sm">// 01</span>
            <span>Signal Transmission Archive</span>
          </h2>
          <span className="font-mono text-[11px] text-[#9c8f7b] uppercase tracking-wider">
            {filteredTransmissions.length}/17 LOGS LOADED
          </span>
        </div>
        <p className="font-['Geist'] text-xs text-[#d3c5ae]">
          Complete audio catalog indexed by recursive neural telemetry and advisory dispatches.
        </p>
      </div>

      {/* Filter Matrix */}
      <div className="flex flex-wrap gap-1.5">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#ffcc61] text-[#402d00] font-bold shadow-[0_0_12px_rgba(255,204,97,0.25)]'
                  : 'bg-[#262a35] text-[#d3c5ae] hover:text-[#dfe2f1] hover:bg-[#313540]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Transmission List */}
      <div className="flex flex-col gap-2">
        {filteredTransmissions.map((transmission) => {
          const isActive = transmission.id === activeTransmissionId;

          if (isActive) {
            return (
              <div
                key={transmission.id}
                className="bg-[#262a35] border border-[#ffcc61]/40 p-4 flex flex-col gap-2 relative overflow-hidden transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                {/* Gold Sovereign Accent Line on Left */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ffcc61]"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#00eefc] shadow-[0_0_8px_#00eefc] animate-pulse"></span>
                    <span className="font-mono text-[11px] text-[#00eefc] uppercase font-bold tracking-widest">
                      ACTIVE BROADCAST
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#d3c5ae]">
                    {transmission.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-['Sora'] text-base text-[#ffcc61] font-semibold leading-tight">
                    {transmission.episodeNumber} // {transmission.title}
                  </h3>
                  <button
                    onClick={onTogglePlay}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="w-8 h-8 bg-[#ffcc61] text-[#402d00] flex items-center justify-center hover:bg-[#ffdea2] transition-colors shrink-0 shadow-[0_0_10px_rgba(255,204,97,0.3)] cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>
                </div>

                <p className="font-['Geist'] text-xs text-[#d3c5ae] line-clamp-2">
                  {transmission.subtitle}
                </p>

                <div className="flex items-center justify-between pt-1.5 font-mono text-[10px] sm:text-[11px] text-[#9c8f7b] border-t border-white/5">
                  <span>
                    {transmission.date} // TRANSMISSION {transmission.episodeNumber}
                  </span>
                  <span className="text-[#00eefc] font-semibold tracking-wider">
                    96 kHz FLAC STREAMING
                  </span>
                </div>
              </div>
            );
          }

          return (
            <div
              key={transmission.id}
              onClick={() => onSelectTransmission(transmission)}
              className="bg-[#171b26] hover:bg-[#1c1f2a] border border-[#262a35] hover:border-[#00eefc]/40 p-4 flex flex-col gap-2 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#9c8f7b] uppercase tracking-wider">
                  TRANSMISSION {transmission.episodeNumber}
                </span>
                <span className="font-mono text-[11px] text-[#9c8f7b]">
                  {transmission.duration}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <h3 className="font-['Sora'] text-sm sm:text-base text-[#dfe2f1] group-hover:text-[#ffcc61] font-medium leading-tight transition-colors">
                  {transmission.episodeNumber} // {transmission.title}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTransmission(transmission);
                  }}
                  className="w-8 h-8 bg-[#313540] text-[#dfe2f1] flex items-center justify-center group-hover:bg-[#ffcc61] group-hover:text-[#402d00] transition-colors shrink-0 cursor-pointer"
                  title={`Play Transmission ${transmission.episodeNumber}`}
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </button>
              </div>

              <p className="font-['Geist'] text-xs text-[#9c8f7b] line-clamp-2">
                {transmission.subtitle}
              </p>

              <div className="flex items-center justify-between pt-1 font-mono text-[10px] text-[#9c8f7b]">
                <span className="truncate">
                  {transmission.date} // {transmission.guest ? `GUEST: ${transmission.guest}` : transmission.tag}
                </span>
                <span className="text-[#9c8f7b] shrink-0">
                  ARCHIVE STAMP {transmission.archiveStamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Historical Archive Toggle */}
      <div className="flex flex-col gap-2 pt-1">
        <button
          onClick={() => setShowHistoricalArchive(!showHistoricalArchive)}
          className="w-full py-2.5 bg-[#1c1f2a] border border-[#262a35] text-[#d3c5ae] hover:text-[#ffcc61] hover:bg-[#262a35] transition-all font-mono text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
        >
          <History className="w-3.5 h-3.5" />
          <span>
            {showHistoricalArchive
              ? 'COLLAPSE HISTORICAL ARCHIVE LOGS'
              : 'ACCESS 12 EARLIER TRANSMISSIONS IN ARCHIVE'}
          </span>
          {showHistoricalArchive ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>

        {showHistoricalArchive && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3 bg-[#0a0e18] border border-[#262a35] animate-in fade-in duration-300">
            {historicalLogs.map((log) => (
              <div
                key={log.num}
                className="p-2.5 bg-[#171b26] border border-white/5 hover:border-[#ffcc61]/30 flex flex-col gap-1 transition-colors"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-[#9c8f7b]">
                  <span>LOG #{log.num}</span>
                  <span>{log.duration}</span>
                </div>
                <div className="font-['Sora'] text-xs text-[#dfe2f1] font-medium truncate">
                  {log.title}
                </div>
                <div className="flex items-center justify-between font-mono text-[9px] text-[#9c8f7b] pt-1 border-t border-white/5">
                  <span>{log.date}</span>
                  <span className="text-[#ffcc61]">{log.stamp}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
