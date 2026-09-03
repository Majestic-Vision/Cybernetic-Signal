import React, { useState, useEffect } from 'react';
import { Radio } from 'lucide-react';

export const Footer: React.FC = () => {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      setUtcTime(`${hours}:${minutes}:${seconds} UTC`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#0a0e18] border-t border-[#262a35] py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9c8f7b]">
        {/* Left Studio Anchor */}
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border border-[#ffcc61] flex items-center justify-center rotate-45">
            <div className="w-1.5 h-1.5 bg-[#00eefc]"></div>
          </div>
          <div>
            <span className="text-[#dfe2f1] font-semibold">MAJESTIC VISION FRONTIER LABS</span>
            <span className="mx-2 text-[#4f4634]">//</span>
            <span>GAINESVILLE, FL</span>
          </div>
        </div>

        {/* Center Live UTC Clock */}
        <div className="flex items-center gap-2 bg-[#171b26] border border-[#262a35] px-3 py-1">
          <span className="w-1.5 h-1.5 bg-[#00eefc] shadow-[0_0_6px_#00eefc] animate-pulse"></span>
          <span className="text-[#00eefc] font-bold">SYSTEM TIME:</span>
          <span className="text-[#dfe2f1]">{utcTime || '14:49:02 UTC'}</span>
        </div>

        {/* Right Topology Notice */}
        <div className="flex items-center gap-2 text-[11px]">
          <span>CARRIER STREAM ESTABLISHED</span>
          <span className="text-[#4f4634]">//</span>
          <span className="text-[#d3c5ae]">THE CYBERNETIC SIGNAL © 2025</span>
        </div>
      </div>
    </footer>
  );
};
