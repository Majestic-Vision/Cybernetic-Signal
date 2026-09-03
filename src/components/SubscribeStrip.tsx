import React, { useState } from 'react';
import { Send, Terminal, CheckCircle2, Shield, Lock, Radio } from 'lucide-react';

export const SubscribeStrip: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [terminalMsg, setTerminalMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setTerminalMsg('> ERR: INVALID ENDPOINT SYNTAX. REQUIRE USER@HOST');
      return;
    }

    setIsSubmitted(true);
    setTerminalMsg(`> 200 OK: ENDPOINT [${email.toUpperCase()}] REGISTERED // PGP KEY EXCHANGED`);
    setEmail('');
  };

  return (
    <section className="w-full bg-[#171b26] border border-[#262a35] p-5 md:p-8 relative overflow-hidden shadow-2xl">
      {/* Background cyan/gold radial accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00eefc]/5 blur-3xl pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
        {/* Left Copy */}
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#00eefc] tracking-widest uppercase">
            <Terminal className="w-4 h-4" />
            <span>ROOT://SIGNAL.NET/DISPATCH_SUBSCRIBE</span>
          </div>

          <h3 className="font-['Sora'] text-xl md:text-2xl font-bold text-[#dfe2f1] tracking-tight">
            Subscribe to Raw Transmissions
          </h3>

          <p className="font-['Geist'] text-xs sm:text-sm text-[#d3c5ae] leading-relaxed">
            Direct uncompressed FLAC stream feeds, weekly technical dossiers, and cryptographic hash verification delivered to your endpoint.
          </p>
        </div>

        {/* Right Terminal Form */}
        <div className="w-full lg:w-auto flex flex-col gap-2.5">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex items-center bg-[#0a0e18] border border-[#262a35] focus-within:border-[#00eefc] transition-colors">
              <span className="pl-3 font-mono text-sm text-[#00eefc]">&gt;</span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@network.sys"
                className="w-full sm:w-72 bg-transparent text-[#dfe2f1] font-mono text-xs px-3 py-3 outline-none placeholder:text-[#9c8f7b]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#ffcc61] hover:bg-[#ffdea2] text-[#402d00] font-mono text-xs font-bold px-6 py-3 uppercase tracking-widest transition-all shadow-[0_0_12px_rgba(255,204,97,0.25)] flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Transmit</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Terminal message feedback */}
          {terminalMsg && (
            <div className="font-mono text-[11px] text-[#00eefc] animate-in fade-in duration-200">
              {terminalMsg}
            </div>
          )}

          {/* Security & Verification Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-[#9c8f7b] font-mono text-[10px] uppercase">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-[#00eefc]" />
              Zero Tracking Telemetry
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#ffcc61]" />
              Cryptographic Ledger
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Radio className="w-3 h-3 text-[#dfe2f1]" />
              PGP Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
