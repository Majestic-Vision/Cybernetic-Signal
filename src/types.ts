export type TransmissionCategory = 'All Dispatches' | 'Neural Theory' | 'Swarm Logic' | 'Executive';

export interface TranscriptEntry {
  id: string;
  timestamp: string;
  seconds: number;
  speaker: string;
  speakerRole: string;
  text: string;
  isKeyInsight?: boolean;
  insightTag?: string;
}

export interface TransmissionDossier {
  abstract: string;
  executiveSummary: string;
  specifications: Array<{ label: string; value: string }>;
  frameworks: string[];
}

export interface SchematicStep {
  step: string;
  label: string;
  detail: string;
  status: string;
}

export interface AxiomQuote {
  quote: string;
  context: string;
  author: string;
  timestamp: string;
}

export interface Transmission {
  id: string;
  episodeNumber: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  duration: string;
  durationSeconds: number;
  audioUrl: string;
  artworkUrl: string;
  category: TransmissionCategory;
  tag: string;
  carrierFreq: string;
  tubeWarmth: string;
  snRatio: string;
  archiveStamp: string;
  guest?: string;
  quote: {
    text: string;
    source: string;
  };
  transcripts: TranscriptEntry[];
  dossier: TransmissionDossier;
  axioms: AxiomQuote[];
  schematics: SchematicStep[];
}

export type PlaybackRate = 1.0 | 1.25 | 1.5 | 2.0;

export type ReaderTab = 'transcript' | 'dossier' | 'axioms' | 'schematics';
