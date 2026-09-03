import React, { useState } from 'react';
import {
  FileText,
  Code,
  Terminal,
  Quote,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Download,
} from 'lucide-react';
import { Transmission, ReaderTab } from '../types';

interface DispatchReaderProps {
  transmission: Transmission;
  currentTime: number;
  onSeek: (seconds: number) => void;
}

export const DispatchReader: React.FC<DispatchReaderProps> = ({
  transmission,
  currentTime,
  onSeek,
}) => {
  const [activeTab, setActiveTab] = useState<ReaderTab>('transcript');

  // Find active transcript index based on currentTime
  const activeTranscriptIndex = transmission.transcripts.reduce(
    (acc, entry, index) => {
      if (currentTime >= entry.seconds) {
        return index;
      }
      return acc;
    },
    0
  );

  // Download markdown transcript
  const handleDownloadMarkdown = () => {
    const mdHeader = `# ${transmission.title}\n\n**The Cybernetic Signal — Episode ${transmission.episodeNumber}**\n**Date:** ${transmission.date}\n**Duration:** ${transmission.duration}\n**Carrier:** ${transmission.carrierFreq}\n\n---\n\n## Abstract\n${transmission.dossier.abstract}\n\n---\n\n## Transcript\n\n`;

    const mdBody = transmission.transcripts
      .map(
        (t) =>
          `### [${t.timestamp}] ${t.speaker} (${t.speakerRole})\n${
            t.isKeyInsight ? `> **[${t.insightTag || 'KEY INSIGHT'}]** ` : ''
          }${t.text}\n`
      )
      .join('\n');

    const mdQuote = `\n---\n\n## Featured Axiom\n> "${transmission.quote.text}"\n> — *${transmission.quote.source}*\n`;

    const blob = new Blob([mdHeader + mdBody + mdQuote], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Cybernetic-Signal-Ep${transmission.episodeNumber}-Transcript.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Download dossier text
  const handleDownloadDossier = () => {
    const content = `MAJESTIC VISION FRONTIER LABS // TRANSMISSION DOSSIER\nEPISODE: ${transmission.episodeNumber} - ${transmission.title}\nDATE: ${transmission.date} // CARRIER: ${transmission.carrierFreq}\n\nABSTRACT:\n${transmission.dossier.abstract}\n\nEXECUTIVE SUMMARY:\n${transmission.dossier.executiveSummary}\n\nSPECIFICATIONS:\n${transmission.dossier.specifications.map((s) => `- ${s.label}: ${s.value}`).join('\n')}\n\nSYSTEM SCHEMATICS:\n${transmission.schematics.map((s) => `[Step ${s.step}] ${s.label} (${s.status})\n  ${s.detail}`).join('\n')}\n\nVERIFICATION STAMP: SHA256: 8f40a...9e1c\n`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Cybernetic-Signal-Ep${transmission.episodeNumber}-Companion-Dossier.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Navigation Tabs Bar */}
      <div className="flex items-center bg-[#0a0e18] border border-[#262a35] p-1 overflow-x-auto gap-1">
        <button
          onClick={() => setActiveTab('transcript')}
          className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5 shrink-0 transition-all cursor-pointer ${
            activeTab === 'transcript'
              ? 'bg-[#262a35] text-[#ffcc61] font-bold border border-[#ffcc61]/40 shadow-[0_0_10px_rgba(255,204,97,0.2)]'
              : 'text-[#d3c5ae] hover:text-[#dfe2f1]'
          }`}
        >
          <span
            className={`w-1.5 h-1.5 ${
              activeTab === 'transcript' ? 'bg-[#ffcc61]' : 'bg-[#9c8f7b]'
            }`}
          ></span>
          <span>Live Transcript</span>
        </button>

        <button
          onClick={() => setActiveTab('dossier')}
          className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
            activeTab === 'dossier'
              ? 'bg-[#262a35] text-[#ffcc61] font-bold border border-[#ffcc61]/40'
              : 'text-[#d3c5ae] hover:text-[#dfe2f1]'
          }`}
        >
          Companion Dossier
        </button>

        <button
          onClick={() => setActiveTab('axioms')}
          className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
            activeTab === 'axioms'
              ? 'bg-[#262a35] text-[#ffcc61] font-bold border border-[#ffcc61]/40'
              : 'text-[#d3c5ae] hover:text-[#dfe2f1]'
          }`}
        >
          Key Axioms & Takeaways
        </button>

        <button
          onClick={() => setActiveTab('schematics')}
          className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
            activeTab === 'schematics'
              ? 'bg-[#262a35] text-[#ffcc61] font-bold border border-[#ffcc61]/40'
              : 'text-[#d3c5ae] hover:text-[#dfe2f1]'
          }`}
        >
          System Schematics
        </button>
      </div>

      {/* Main Console Reader Container */}
      <div className="bg-[#171b26] border border-[#262a35] p-4 md:p-6 flex flex-col gap-6 shadow-xl">
        {/* ========================================================================= */}
        {/* TAB 1: LIVE TRANSCRIPT                                                   */}
        {/* ========================================================================= */}
        {activeTab === 'transcript' && (
          <div className="flex flex-col gap-5">
            {/* Top Reader Header */}
            <div className="flex items-center justify-between pb-1 border-b border-white/5">
              <div className="flex items-center gap-2 text-[#00eefc] font-mono text-[11px] tracking-widest uppercase">
                <Terminal className="w-4 h-4" />
                <span>TRANSCRIPT FEED // SYNCHRONIZED TO FLAC TIMESTAMP</span>
              </div>
              <span className="bg-[#313540] text-[#d3c5ae] border border-white/5 px-2 py-0.5 font-mono text-[10px]">
                ENG-US // AUTODETECT
              </span>
            </div>

            {/* Transcript Dialogue Blocks */}
            <div className="space-y-4">
              {transmission.transcripts.map((entry, idx) => {
                const isCurrent = idx === activeTranscriptIndex;

                if (entry.isKeyInsight) {
                  return (
                    <div
                      key={entry.id}
                      onClick={() => onSeek(entry.seconds)}
                      className={`p-4 space-y-2 relative overflow-hidden transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-[#1c1f2a] border border-[#00eefc] shadow-[0_0_15px_rgba(0,238,252,0.15)]'
                          : 'bg-[#1c1f2a] border border-[#00eefc]/40 hover:border-[#00eefc]'
                      }`}
                      title={`Click to jump to ${entry.timestamp}`}
                    >
                      {/* Cyan Accent Indicator */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00eefc]"></div>

                      <div className="flex items-center justify-between font-mono text-[11px]">
                        <div className="flex items-center gap-2">
                          <button className="text-[#00eefc] font-mono hover:underline cursor-pointer">
                            [{entry.timestamp}]
                          </button>
                          <span className="text-[#00eefc] uppercase font-bold">
                            {entry.speaker} ({entry.speakerRole}):
                          </span>
                        </div>
                        <span className="text-[#ffcc61] font-mono text-[10px] tracking-widest">
                          {entry.insightTag || 'KEY INSIGHT'}
                        </span>
                      </div>

                      <p className="font-['Geist'] text-sm text-[#dfe2f1] pl-2 leading-relaxed italic">
                        "{entry.text}"
                      </p>
                    </div>
                  );
                }

                return (
                  <div
                    key={entry.id}
                    onClick={() => onSeek(entry.seconds)}
                    className={`space-y-1 p-2 transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-[#262a35] border-l-2 border-[#ffcc61] pl-3'
                        : 'hover:bg-[#1c1f2a] pl-2'
                    }`}
                    title={`Click to jump to ${entry.timestamp}`}
                  >
                    <div className="flex items-center gap-2 font-mono text-[11px]">
                      <button className="text-[#00eefc] font-mono hover:underline cursor-pointer">
                        [{entry.timestamp}]
                      </button>
                      <span
                        className={`font-bold uppercase ${
                          isCurrent ? 'text-[#ffcc61]' : 'text-[#ffcc61]'
                        }`}
                      >
                        {entry.speaker} ({entry.speakerRole}):
                      </span>
                    </div>
                    <p className="font-['Geist'] text-sm text-[#dfe2f1] pl-4 leading-relaxed">
                      "{entry.text}"
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Graphic Telemetry Pullquote Card */}
            <div className="bg-[#0a0e18] border border-[#262a35] p-4 flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 bg-[#ffcc61]/10 text-[#ffcc61] flex items-center justify-center shrink-0 border border-[#ffcc61]/30">
                <Quote className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-['Sora'] text-sm sm:text-base font-semibold text-[#ffcc61]">
                  “{transmission.quote.text}”
                </span>
                <span className="font-mono text-[11px] text-[#9c8f7b] uppercase tracking-wider">
                  — {transmission.quote.source}
                </span>
              </div>
            </div>

            {/* Download Documents Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-white/5">
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={handleDownloadDossier}
                  className="px-3 py-2 bg-[#262a35] hover:bg-[#313540] text-[#dfe2f1] hover:text-[#ffcc61] font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-white/5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#ffcc61]" />
                  <span>Dossier Brief (TXT)</span>
                </button>

                <button
                  onClick={handleDownloadMarkdown}
                  className="px-3 py-2 bg-[#262a35] hover:bg-[#313540] text-[#dfe2f1] hover:text-[#00eefc] font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-white/5 cursor-pointer"
                >
                  <Code className="w-3.5 h-3.5 text-[#00eefc]" />
                  <span>Markdown Transcript</span>
                </button>
              </div>

              <span className="font-mono text-[10px] text-[#9c8f7b] uppercase tracking-wider">
                SHA256: 8f40a...9e1c
              </span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: COMPANION DOSSIER                                                  */}
        {/* ========================================================================= */}
        {activeTab === 'dossier' && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between pb-1 border-b border-white/5">
              <div className="flex items-center gap-2 text-[#ffcc61] font-mono text-[11px] tracking-widest uppercase">
                <FileText className="w-4 h-4" />
                <span>COMPANION DOSSIER // TECHNICAL BRIEFING</span>
              </div>
              <span className="font-mono text-[10px] text-[#00eefc]">
                CLEARANCE LEVEL: SOVEREIGN
              </span>
            </div>

            {/* Abstract */}
            <div className="space-y-1.5 bg-[#0a0e18] p-4 border border-[#262a35]">
              <span className="font-mono text-[10px] text-[#ffcc61] uppercase tracking-widest font-semibold">
                SYSTEM ABSTRACT
              </span>
              <p className="font-['Geist'] text-sm text-[#dfe2f1] leading-relaxed">
                {transmission.dossier.abstract}
              </p>
            </div>

            {/* Executive Summary */}
            <div className="space-y-1.5 bg-[#0a0e18] p-4 border border-[#262a35]">
              <span className="font-mono text-[10px] text-[#00eefc] uppercase tracking-widest font-semibold">
                EXECUTIVE SUMMARY
              </span>
              <p className="font-['Geist'] text-sm text-[#d3c5ae] leading-relaxed">
                {transmission.dossier.executiveSummary}
              </p>
            </div>

            {/* Telemetry Specifications Matrix */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-[#dfe2f1] uppercase tracking-wider">
                OPERATIONAL PARAMETERS & SPECIFICATIONS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {transmission.dossier.specifications.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3 bg-[#0a0e18] border border-[#262a35] flex flex-col gap-1"
                  >
                    <span className="font-mono text-[10px] text-[#9c8f7b] uppercase">
                      {spec.label}
                    </span>
                    <span className="font-mono text-xs text-[#00eefc] font-semibold">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Frameworks */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-[#dfe2f1] uppercase tracking-wider">
                ASSOCIATED SOVEREIGN FRAMEWORKS
              </span>
              <div className="flex flex-wrap gap-2">
                {transmission.dossier.frameworks.map((framework, i) => (
                  <div
                    key={i}
                    className="px-3 py-1.5 bg-[#262a35] border border-white/5 font-mono text-xs text-[#dfe2f1] flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00eefc]" />
                    <span>{framework}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: KEY AXIOMS & TAKEAWAYS                                            */}
        {/* ========================================================================= */}
        {activeTab === 'axioms' && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between pb-1 border-b border-white/5">
              <div className="flex items-center gap-2 text-[#ffcc61] font-mono text-[11px] tracking-widest uppercase">
                <Quote className="w-4 h-4" />
                <span>KEY AXIOMS & STRATEGIC TAKEAWAYS</span>
              </div>
              <span className="font-mono text-[10px] text-[#d3c5ae]">
                {transmission.axioms.length} AXIOMS CATALOGED
              </span>
            </div>

            <div className="space-y-3">
              {transmission.axioms.map((axiom, idx) => (
                <div
                  key={idx}
                  className="bg-[#0a0e18] border border-[#262a35] hover:border-[#ffcc61]/40 p-4 space-y-2 transition-colors"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#9c8f7b]">
                    <span className="text-[#ffcc61] font-bold">AXIOM #{idx + 1}</span>
                    <button
                      onClick={() => onSeek(14)}
                      className="text-[#00eefc] hover:underline"
                    >
                      [{axiom.timestamp}]
                    </button>
                  </div>

                  <p className="font-['Sora'] text-sm sm:text-base text-[#dfe2f1] font-medium leading-snug">
                    “{axiom.quote}”
                  </p>

                  <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-[#d3c5ae] font-['Geist']">
                    <span>{axiom.context}</span>
                    <span className="font-mono text-[10px] text-[#ffcc61]">
                      — {axiom.author}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: SYSTEM SCHEMATICS                                                  */}
        {/* ========================================================================= */}
        {activeTab === 'schematics' && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between pb-1 border-b border-white/5">
              <div className="flex items-center gap-2 text-[#00eefc] font-mono text-[11px] tracking-widest uppercase">
                <Layers className="w-4 h-4" />
                <span>SYSTEM SCHEMATICS // RECURSIVE ARCHITECTURE</span>
              </div>
              <span className="font-mono text-[10px] text-[#00eefc]">
                TOPOLOGY VERIFIED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {transmission.schematics.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#0a0e18] border border-[#262a35] relative flex flex-col justify-between gap-3 group hover:border-[#00eefc]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#ffcc61] font-bold">
                      STAGE {step.step}
                    </span>
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 uppercase tracking-wider ${
                        step.status === 'SYNCHRONIZED'
                          ? 'bg-[#00eefc]/10 text-[#00eefc] border border-[#00eefc]/30'
                          : step.status === 'ARMED'
                          ? 'bg-[#ffcc61]/10 text-[#ffcc61] border border-[#ffcc61]/30'
                          : 'bg-[#262a35] text-[#dfe2f1]'
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-['Sora'] text-sm font-semibold text-[#dfe2f1] mb-1">
                      {step.label}
                    </h4>
                    <p className="font-['Geist'] text-xs text-[#d3c5ae] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/5 flex items-center gap-1 font-mono text-[9px] text-[#9c8f7b]">
                    <span className="w-1 h-1 bg-[#00eefc]"></span>
                    <span>SUBLAYER BUS: VERIFIED</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
