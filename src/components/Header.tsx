import React from 'react';
import { Radio, ArrowLeft, User } from 'lucide-react';

interface HeaderProps {
  activeNav: string;
  onNavChange: (nav: string) => void;
  frequency?: string;
}

export const Header: React.FC<HeaderProps> = ({
  activeNav,
  onNavChange,
  frequency = '432.8 MHz',
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'archive', label: 'Signal Archive' },
    { id: 'logs', label: 'Transmission Logs' },
    { id: 'protocol', label: 'Lab Protocol' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0a0e18]/95 backdrop-blur-xl z-40 border-b border-[#262a35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand & Back Anchor */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Geometric Diamond Emblem */}
          <div className="w-8 h-8 relative flex items-center justify-center border border-[#00eefc]/60 bg-[#0f131d] shadow-[0_0_12px_rgba(0,238,252,0.25)]">
            <div className="w-4 h-4 rotate-45 border border-[#ffcc61] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#00eefc]"></div>
            </div>
          </div>

          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              onNavChange('overview');
            }}
            className="font-mono text-[11px] font-semibold text-[#d3c5ae] hover:text-[#ffcc61] transition-colors tracking-widest uppercase flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Majestic Vision Home</span>
            <span className="xs:hidden">Home</span>
          </a>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavChange(item.id)}
                className={`text-[12px] uppercase font-mono tracking-widest transition-all py-1 border-b ${
                  isActive
                    ? 'text-[#ffcc61] font-bold border-[#ffcc61] shadow-[0_1px_10px_rgba(255,204,97,0.3)]'
                    : 'text-[#d3c5ae] hover:text-[#dfe2f1] border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Status Badges & Profile */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 bg-[#171b26] border border-[#262a35] px-3 py-1">
            <div className="w-2 h-2 bg-[#00eefc] shadow-[0_0_8px_#00eefc] animate-pulse"></div>
            <span className="font-mono text-[11px] font-semibold text-[#00eefc] tracking-widest uppercase">
              {frequency}
            </span>
          </div>

          <button
            aria-label="User Profile"
            className="w-8 h-8 bg-[#ffcc61] text-[#402d00] flex items-center justify-center hover:bg-[#ffdea2] transition-colors shadow-[0_0_12px_rgba(255,204,97,0.25)] cursor-pointer"
            title="Sovereign Terminal Key #4802"
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
