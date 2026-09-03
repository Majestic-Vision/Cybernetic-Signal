import React from 'react';
import { Sliders, Radio, Activity } from 'lucide-react';

interface TelemetryBarProps {
  carrierFreq?: string;
  snRatio?: string;
  isStreaming?: boolean;
}

export const TelemetryBar: React.FC<TelemetryBarProps> = ({
  carrierFreq = '432.8 MHz',
  snRatio = '+104 dB',
  isStreaming = true,
}) => {
  return (
    <section className="w-full bg-[#0a0e18] border border-[#262a35] p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 shadow-xl">
      {/* Left Active Feed Telemetry */}
      <div className="flex items-center gap-2.5 w-full md:w-auto">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full bg-[#ffcc61] opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 bg-[#ffcc61]"></span>
        </span>
        <span className="font-mono text-[11px] font-bold text-[#ffcc61] tracking-widest uppercase">
          TRANSMISSION FEED ACTIVE
        </span>
        <span className="text-[#4f4634] font-mono text-[11px]">//</span>
        <span className="font-mono text-[11px] text-[#d3c5ae] truncate">
          DECODING MODERN INTELLIGENCE ARCHITECTURES
        </span>
      </div>

      {/* Right Modulation Coordinates */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto justify-start md:justify-end">
        <div className="flex items-center gap-1.5 bg-[#262a35] border border-white/5 px-2.5 py-1">
          <Sliders className="w-3.5 h-3.5 text-[#00eefc]" />
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#00eefc] uppercase tracking-wider">
            FLAC 96kHz / 24-BIT
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-[#262a35] border border-white/5 px-2.5 py-1">
          <span className="w-1.5 h-1.5 bg-[#00eefc] shadow-[0_0_6px_#00eefc] animate-pulse"></span>
          <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#dfe2f1] uppercase tracking-wider">
            CARRIER {carrierFreq} [LOCKED]
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-[#171b26] border border-[#262a35] px-2.5 py-1">
          <Activity className="w-3.5 h-3.5 text-[#9c8f7b]" />
          <span className="font-mono text-[10px] sm:text-[11px] text-[#d3c5ae] uppercase tracking-wider">
            S/N RATIO: {snRatio}
          </span>
        </div>
      </div>
    </section>
  );
};
