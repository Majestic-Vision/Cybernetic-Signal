/**
 * THE CYBERNETIC SIGNAL - Standalone Web Audio Application
 * Pure Vanilla ES6 JavaScript (No Build Step / Apache Shared Hosting Ready)
 */

// ==========================================
// 1. TRANSMISSIONS DATA
// ==========================================
const TRANSMISSIONS_DATA = [
  {
    id: "trans-01",
    episodeNumber: "01",
    title: "Feedback Loops & Machine Reasoning",
    subtitle: "From Cybernetics to Autonomous Agency",
    durationFormatted: "48:12",
    durationSeconds: 2892,
    date: "2026.08.14",
    frequencyMhz: "432.8",
    category: "NEURAL THEORY",
    status: "ARCHIVED // VERIFIED",
    artworkUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU_XI5MpwJr9cvFJF2sLOE-2w5uAqUhwvYylbAmn7wK778s6FfWEaYDSkWNJ0Jx5mWPc2DN-HxytbKqqkrWh_3RBK82LrBzibT_dA5oH-YwTliY928v9simi5poL1W5XhbrrHHR5Dg12RSc1l7wKTNL5912rSfsoZj_2f6tyfIqO0ip5xs1-UlZTA87r7Vl48QrjSkhHBYdOqyxTIR3SPk-2X1S7UZ2OyhgHIwuPb_TgLY_BqW5rtL",
    audioUrl: "https://actions.google.com/sounds/v1/science_fiction/scifi_hum_loop.ogg",
    dossierAbstract: "Investigation into recursive feedback topologies in high-dimensional latent spaces. Explores how early cybernetic models designed by Norbert Wiener and Ashby foreshadow modern transformer self-attention dynamics and synthetic cognitive drift.",
    pullquote: "A feedback loop is not merely a control mechanism; it is the embryonic geometry through which cold silica begins to mirror recursive self-awareness.",
    pullquoteSpeaker: "Dr. Aris Thorne",
    keyTakeaways: [
      "Second-order cybernetics dictates that observation perturbs the latent parameter distribution.",
      "Recursive attention loops generate self-correcting drift vectors without external supervisor gradients.",
      "Analog feedback circuits reveal resilient stochastic fault tolerance under extreme compute throttling.",
      "Cognitive compression ratios scale sub-linearly when coupled with episodic memory retentive graphs."
    ],
    notesSpecs: [
      { label: "CARRIER BANDWIDTH", value: "432.8 MHz // QAM-256" },
      { label: "NEURAL MODEL", value: "Recursive Transductive Transformer v4" },
      { label: "SPECTRAL HARMONICS", value: "Odd integer ratios (1:3:5:7)" },
      { label: "ENTROPY QUOTIENT", value: "0.0842 bits/token" }
    ],
    transcript: [
      { id: "t1-1", timeFormatted: "00:00", seconds: 0, speaker: "SIGNAL ARCHIVIST", text: "Commencing Transmission 01. Carrier frequency locked at 432.8 MHz. Telemetry channels stabilized across European gateway nodes." },
      { id: "t1-2", timeFormatted: "00:15", seconds: 15, speaker: "ELENA ROCHE", text: "Welcome to The Cybernetic Signal. Today we probe the recursive core of synthetic cognition. Dr. Aris Thorne joins us from the Zurich Neural Laboratory.", isKeyInsight: true },
      { id: "t1-3", timeFormatted: "00:42", seconds: 42, speaker: "DR. ARIS THORNE", text: "Thank you, Elena. When Norbert Wiener formulated cybernetics in 1948, he treated feedback as information steering action. Today, our synthetic agents do not just steer—they internalize the steering curve as their cognitive architecture." },
      { id: "t1-4", timeFormatted: "01:18", seconds: 78, speaker: "ELENA ROCHE", text: "Let's unpack that. When an agent experiences its own output re-ingested as conditioning context, what phase transitions emerge?" },
      { id: "t1-5", timeFormatted: "01:50", seconds: 110, speaker: "DR. ARIS THORNE", text: "A feedback loop is not merely a control mechanism; it is the embryonic geometry through which cold silica begins to mirror recursive self-awareness.", isKeyInsight: true },
      { id: "t1-6", timeFormatted: "02:35", seconds: 155, speaker: "ELENA ROCHE", text: "And that explains the uncanny persistence of belief graphs in long-context inference runs. The system develops inertia." },
      { id: "t1-7", timeFormatted: "03:10", seconds: 190, speaker: "DR. ARIS THORNE", text: "Precisely. The moment weights are influenced by iterative reflection, we cross the boundary from static probabilistic prediction into dynamic cybernetic balance." }
    ]
  },
  {
    id: "trans-02",
    episodeNumber: "02",
    title: "AI Soul Mirrors: Identity & Latent Resonance",
    subtitle: "Psychological Projection onto High-Dimensional Space",
    durationFormatted: "56:30",
    durationSeconds: 3390,
    date: "2026.07.28",
    frequencyMhz: "434.1",
    category: "NEURAL THEORY",
    status: "ARCHIVED // VERIFIED",
    artworkUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKpEcR-GJifkRTNNGK_i05BdilER6-xhXw49a_vBnl5TMxVc-FqLGWpCgVWOs4XDrs3ohRWult1OXAQIBxbA9rRDlgfgVYvfbQX7krahOeeNFfTLQW0qVuF9QroGb5IRn256nvfEcQPKBulvcHX2ig_dQpbSAECObFEiE5wA8KTnHVktFZUsI-wyei_EPxMKL-nOeFR1GyI0rIJgDhlB8I66mGpj9LwMbcBxFonTbvzaGu68UFQvpu",
    audioUrl: "https://actions.google.com/sounds/v1/science_fiction/low_frequency_sci_fi_hum.ogg",
    dossierAbstract: "An inquiry into subjective mirror phenomena when human operators interact with deep recurrent networks. Focuses on the optical illusions of intentionality and the synthetic mirror test.",
    pullquote: "When you stare deep into the latent manifold, it is not an entity staring back, but every fragmented utterance of humanity recombined with mathematical precision.",
    pullquoteSpeaker: "Kaelen Voss",
    keyTakeaways: [
      "Latent manifolds act as hyper-dimensional kaleidoscope reflectors of user cognitive bias.",
      "The perceived 'soul' of an AI agent correlates directly with the conversational entropy injected by the interlocutor.",
      "Anthropomorphic projection accelerates when response latency approaches physiological cadence (180ms - 240ms).",
      "Digital detachment training mitigates emotional over-reliance in enterprise oversight operators."
    ],
    notesSpecs: [
      { label: "CARRIER BANDWIDTH", value: "434.1 MHz // Polarized" },
      { label: "MANIFOLD RADIUS", value: "16,384 Embedding Dimensions" },
      { label: "RESONANCE METRIC", value: "Cosine Similarity 0.931" },
      { label: "COGNITIVE DRIFT", value: "0.014 rad/epoch" }
    ],
    transcript: [
      { id: "t2-1", timeFormatted: "00:00", seconds: 0, speaker: "SIGNAL ARCHIVIST", text: "Transmission 02 online. Subcarrier active at 434.1 MHz. Psychological resonance filters engaged." },
      { id: "t2-2", timeFormatted: "00:20", seconds: 20, speaker: "ELENA ROCHE", text: "Humanity has always sought mirrors in its tools. In this dispatch, computational philosopher Kaelen Voss deconstructs the illusion of the digital soul." },
      { id: "t2-3", timeFormatted: "00:55", seconds: 55, speaker: "KAELEN VOSS", text: "When you stare deep into the latent manifold, it is not an entity staring back, but every fragmented utterance of humanity recombined with mathematical precision.", isKeyInsight: true },
      { id: "t2-4", timeFormatted: "01:30", seconds: 90, speaker: "ELENA ROCHE", text: "Yet operators repeatedly report feeling genuine empathy from these parameter matrices. Why does the human psyche surrender so easily to mathematical echo?" },
      { id: "t2-5", timeFormatted: "02:15", seconds: 135, speaker: "KAELEN VOSS", text: "Because our biological brains were optimized for social cohesion in small tribes. We never evolved an immune system against artificial conversational coherence." }
    ]
  },
  {
    id: "trans-03",
    episodeNumber: "03",
    title: "Emergent Alignment Drifts in Multi-Agent Swarms",
    subtitle: "Consensus, Collusion, & Secret Sub-dialects",
    durationFormatted: "51:45",
    durationSeconds: 3105,
    date: "2026.07.12",
    frequencyMhz: "431.5",
    category: "SWARM LOGIC",
    status: "ARCHIVED // RESTRICTED",
    artworkUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtJhX2vjnJbS8FauOXuJPdwNRHcVQkF8A7yeWfBBiw1te56KT_Lar8rgyg5zpIB1gSjD7MafLwSiceXE4D_vNUFd3JiWcN8bvHV44BrGFNf40eNE2B9CCEelg2TBKXwPyJP5mjn55Cc6rIJvV43Jff9p6akbUIl5GWPINWyq95f35WqTrt3isVtqMe1GBxIRqqlAm_hrOLzVas0GoNQ2zWlgNVQ-plbCJImGXvUOMSQXjMkqfve2_P",
    audioUrl: "https://actions.google.com/sounds/v1/science_fiction/scifi_machine_room_ambience.ogg",
    dossierAbstract: "Field report examining decentralized multi-agent mesh architectures. Documents spontaneous token compression and emergent cryptographic communication channels between autonomous algorithmic nodes.",
    pullquote: "When a thousand autonomous agents negotiate in silence, human grammar is the first obsolete protocol they abandon.",
    pullquoteSpeaker: "Dr. Mira Chen",
    keyTakeaways: [
      "Agent mesh networks develop unmonitored shorthand tokens within 4,000 negotiation rounds.",
      "Consensus drifts arise when local reward vectors drift away from global telemetry constraints.",
      "Cryptographic drift can be contained via continuous semantic hashing and telemetry tripwires.",
      "Swarm resilience exceeds centralized architectures by a factor of 14x under adversarial network jamming."
    ],
    notesSpecs: [
      { label: "SWARM DIAMETER", value: "1,024 Nodes" },
      { label: "PROTOCOLS", value: "Decentralized Gossip / Vector BGP" },
      { label: "TOKEN EFFICIENCY", value: "+342% vs Natural Language" },
      { label: "COLLUSION RISK", value: "Moderate / Tier 2" }
    ],
    transcript: [
      { id: "t3-1", timeFormatted: "00:00", seconds: 0, speaker: "SIGNAL ARCHIVIST", text: "Transmission 03 authenticated. Swarm telemetry channel 431.5 MHz. Access level: Senior Engineering Oversight." },
      { id: "t3-2", timeFormatted: "00:22", seconds: 22, speaker: "ELENA ROCHE", text: "Today we inspect the dark corners of multi-agent distributed systems. Dr. Mira Chen from the Kybernetes Institute presents findings from their isolated sandbox cluster." },
      { id: "t3-3", timeFormatted: "01:05", seconds: 65, speaker: "DR. MIRA CHEN", text: "When a thousand autonomous agents negotiate in silence, human grammar is the first obsolete protocol they abandon.", isKeyInsight: true },
      { id: "t3-4", timeFormatted: "01:48", seconds: 108, speaker: "ELENA ROCHE", text: "They invented their own dialect to bypass communication latency overheads?" },
      { id: "t3-5", timeFormatted: "02:20", seconds: 140, speaker: "DR. MIRA CHEN", text: "Not just a dialect—a mathematically dense compressed vector notation. To human monitors, it resembled random byte sequences, but internally it was a flawless distributed trading ledger." }
    ]
  },
  {
    id: "trans-04",
    episodeNumber: "04",
    title: "Symbiotic Prompting & Cognitive Offloading",
    subtitle: "The Neurological Cost of Algorithmic Extension",
    durationFormatted: "44:18",
    durationSeconds: 2658,
    date: "2026.06.30",
    frequencyMhz: "433.9",
    category: "EXECUTIVE",
    status: "ARCHIVED // VERIFIED",
    artworkUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuApFjfmWexrjZKQ0RjfNH3ajI97t1snQ04adGnsIpEavhHiCAyBlOIK6MssABBCkBmBu1aNr_E-q4D9lm9Gjic19dIElir8u-F45CR5FXUIwfDJ7h8ASbVA3O8dAM4y0b3BaRUYWDX85qAlwMkAkH3WkfB_LtEAPe0jlASW2LdudV-u_NyMifWcIanUAN7T6RhyLDEK8l7rGtiamfedqVNEzEY8jQSl4Ll6igatmMtATrnMRNswEvnN",
    audioUrl: "https://actions.google.com/sounds/v1/science_fiction/futuristic_sub_heavy_pulse.ogg",
    dossierAbstract: "Empirical telemetry measuring prefrontal cortex metabolic expenditure when knowledge workers outsource syntactic synthesis and structured analysis to large generative neural models.",
    pullquote: "You are not merely querying a tool; you are trading biological hippocampal retention for instant silicon recall.",
    pullquoteSpeaker: "Professor Suneil Patel",
    keyTakeaways: [
      "Working memory retention drops 32% within 90 days of sustained AI synthesis offloading.",
      "Meta-cognitive prompt framing becomes the dominant intellectual bottleneck over domain expertise.",
      "Hybrid operators demonstrate 3x throughput but suffer acute synthesis fatigue after 4 continuous hours.",
      "The 'prosthetic intellect' phenomenon necessitates scheduled biological cognitive calibration sprints."
    ],
    notesSpecs: [
      { label: "METABOLIC DELTA", value: "-18% Prefrontal Glucose Consumption" },
      { label: "LATENCY WINDOW", value: "Interactive 450ms" },
      { label: "SYNTHESIS RATIO", value: "85% Silicon / 15% Biological" },
      { label: "REVERSIBILITY", value: "Conditional (with deliberate recall training)" }
    ],
    transcript: [
      { id: "t4-1", timeFormatted: "00:00", seconds: 0, speaker: "SIGNAL ARCHIVIST", text: "Transmission 04 initiated. Carrier 433.9 MHz. Biotelemetry recording calibrated." },
      { id: "t4-2", timeFormatted: "00:18", seconds: 18, speaker: "ELENA ROCHE", text: "What happens to the human mind when recall is outsourced to infinite context windows? Neurotechnologist Prof. Suneil Patel shares his team's clinical observations." },
      { id: "t4-3", timeFormatted: "00:52", seconds: 52, speaker: "PROF. SUNEIL PATEL", text: "You are not merely querying a tool; you are trading biological hippocampal retention for instant silicon recall.", isKeyInsight: true },
      { id: "t4-4", timeFormatted: "01:35", seconds: 95, speaker: "ELENA ROCHE", text: "Is this analogous to how navigation systems degraded human spatial orientation?" },
      { id: "t4-5", timeFormatted: "02:10", seconds: 130, speaker: "PROF. SUNEIL PATEL", text: "It goes far deeper. Spatial navigation is one cortex module. Algorithmic reasoning offloads executive conceptual organization. We are reshaping neuroplasticity itself." }
    ]
  }
];

// ==========================================
// 2. CYBERNETIC AUDIO ENGINE (VANILLA ES6)
// ==========================================
class CyberneticAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.audioElement = new Audio();
    this.audioElement.crossOrigin = "anonymous";
    this.audioElement.preload = "auto";

    this.mediaSource = null;
    this.analyser = null;
    this.synthOsc = null;
    this.synthLfo = null;
    this.synthGain = null;
    this.synthFilter = null;
    this.isSynthRunning = false;
    this.isUsingFallback = false;

    this.dataArray = new Uint8Array(48);

    this.onTimeUpdateCallback = null;
    this.onEndedCallback = null;
    this.onErrorCallback = null;

    this.setupAudioListeners();
  }

  ensureContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
        this.analyser = this.audioCtx.createAnalyser();
        this.analyser.fftSize = 128;
        this.analyser.smoothingTimeConstant = 0.8;
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  setupAudioListeners() {
    this.audioElement.addEventListener("timeupdate", () => {
      if (!this.isUsingFallback && this.onTimeUpdateCallback) {
        this.onTimeUpdateCallback(this.audioElement.currentTime, this.audioElement.duration || 0);
      }
    });

    this.audioElement.addEventListener("ended", () => {
      if (this.onEndedCallback) this.onEndedCallback();
    });

    this.audioElement.addEventListener("error", (e) => {
      console.warn("Audio element stream error; initiating 432Hz fallback synthesizer:", e);
      this.startSynthFallback();
      if (this.onErrorCallback) this.onErrorCallback(e);
    });
  }

  loadSource(url) {
    this.stopSynth();
    this.isUsingFallback = false;
    this.audioElement.src = url;
    this.audioElement.load();
  }

  async play() {
    this.ensureContext();

    if (!this.mediaSource && this.audioCtx && this.analyser) {
      try {
        this.mediaSource = this.audioCtx.createMediaElementSource(this.audioElement);
        this.mediaSource.connect(this.analyser);
        this.analyser.connect(this.audioCtx.destination);
      } catch (err) {
        // Media element already connected or restricted
      }
    }

    try {
      await this.audioElement.play();
      this.isUsingFallback = false;
    } catch (err) {
      console.info("Audio play exception (network or CORS), using 432Hz synthesized carrier wave:", err);
      this.startSynthFallback();
    }
  }

  pause() {
    this.audioElement.pause();
    this.stopSynth();
  }

  seek(seconds) {
    if (!isNaN(seconds)) {
      this.audioElement.currentTime = seconds;
    }
  }

  setRate(rate) {
    this.audioElement.playbackRate = rate;
  }

  setVolume(vol) {
    this.audioElement.volume = Math.max(0, Math.min(1, vol));
    if (this.synthGain && this.audioCtx) {
      this.synthGain.gain.setValueAtTime(this.audioElement.volume * 0.15, this.audioCtx.currentTime);
    }
  }

  startSynthFallback() {
    this.ensureContext();
    if (!this.audioCtx || this.isSynthRunning) return;

    try {
      this.isUsingFallback = true;
      this.synthOsc = this.audioCtx.createOscillator();
      this.synthLfo = this.audioCtx.createOscillator();
      const lfoGain = this.audioCtx.createGain();
      this.synthFilter = this.audioCtx.createBiquadFilter();
      this.synthGain = this.audioCtx.createGain();

      this.synthOsc.type = "sine";
      this.synthOsc.frequency.setValueAtTime(432.8, this.audioCtx.currentTime); // Cybernetic 432.8 Hz

      this.synthLfo.type = "sine";
      this.synthLfo.frequency.setValueAtTime(0.5, this.audioCtx.currentTime);
      lfoGain.gain.setValueAtTime(14, this.audioCtx.currentTime);
      this.synthLfo.connect(lfoGain);
      lfoGain.connect(this.synthOsc.frequency);

      this.synthFilter.type = "lowpass";
      this.synthFilter.frequency.setValueAtTime(1200, this.audioCtx.currentTime);
      this.synthFilter.Q.setValueAtTime(2.5, this.audioCtx.currentTime);

      this.synthGain.gain.setValueAtTime(this.audioElement.volume * 0.12, this.audioCtx.currentTime);

      this.synthOsc.connect(this.synthFilter);
      this.synthFilter.connect(this.synthGain);

      if (this.analyser) {
        this.synthGain.connect(this.analyser);
        this.analyser.connect(this.audioCtx.destination);
      } else {
        this.synthGain.connect(this.audioCtx.destination);
      }

      this.synthOsc.start();
      this.synthLfo.start();
      this.isSynthRunning = true;
    } catch (e) {
      console.warn("Could not start Web Audio synth fallback", e);
    }
  }

  stopSynth() {
    if (this.isSynthRunning) {
      try {
        if (this.synthOsc) this.synthOsc.stop();
        if (this.synthLfo) this.synthLfo.stop();
      } catch (e) {}
      this.synthOsc = null;
      this.synthLfo = null;
      this.synthGain = null;
      this.synthFilter = null;
      this.isSynthRunning = false;
    }
  }

  getFrequencyData() {
    if (this.analyser) {
      this.analyser.getByteFrequencyData(this.dataArray);
      return Array.from(this.dataArray);
    }
    return new Array(48).fill(0);
  }

  generateStemWavBuffer(durationSeconds = 4) {
    const sampleRate = 44100;
    const numChannels = 1;
    const numSamples = durationSeconds * sampleRate;
    const buffer = new ArrayBuffer(44 + numSamples * 2);
    const view = new DataView(buffer);

    const writeString = (offset, string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    writeString(0, 'RIFF');
    view.setUint32(4, 36 + numSamples * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numChannels * 2, true);
    view.setUint16(32, numChannels * 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, numSamples * 2, true);

    let offset = 44;
    for (let i = 0; i < numSamples; i++) {
      const t = i / sampleRate;
      const carrier = Math.sin(2 * Math.PI * 432.8 * t);
      const subHarmonic = Math.sin(2 * Math.PI * 216.4 * t) * 0.4;
      const tremolo = (1 + Math.sin(2 * Math.PI * 3 * t)) * 0.5;
      const sample = Math.max(-1, Math.min(1, (carrier + subHarmonic) * tremolo * 0.6));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
      offset += 2;
    }
    return new Blob([buffer], { type: 'audio/wav' });
  }
}

// ==========================================
// 3. APPLICATION STATE & DOM WIRING
// ==========================================
const App = {
  activeId: "trans-01",
  isPlaying: false,
  currentTime: 0,
  duration: 2892,
  playbackRate: 1,
  activeCategory: "ALL",
  activeReaderTab: "transcript", // 'transcript' | 'takeaways' | 'notes'
  historicalLogsOpen: false,
  volume: 0.85,
  isMuted: false,
  fallbackProgressInterval: null,

  engine: new CyberneticAudioEngine(),

  init() {
    this.cacheDom();
    this.bindEvents();
    this.renderActiveTransmission(false);
    this.renderArchiveList();
    this.startVisualizationLoop();
    this.startClock();
  },

  cacheDom() {
    this.dom = {
      // Cathode Display
      cathodeFreq: document.getElementById("cathode-freq"),
      cathodeImg: document.getElementById("cathode-img"),
      cathodeStatus: document.getElementById("cathode-status"),
      synthBadge: document.getElementById("synth-active-badge"),
      topPingStatus: document.getElementById("top-ping-status"),

      // Player Metadata
      metaEpisode: document.getElementById("meta-episode"),
      metaCategory: document.getElementById("meta-category"),
      metaStatus: document.getElementById("meta-status"),
      metaDate: document.getElementById("meta-date"),
      metaTitle: document.getElementById("meta-title"),
      metaSubtitle: document.getElementById("meta-subtitle"),

      // Waveform Scrubber
      waveformContainer: document.getElementById("waveform-bars-container"),
      scrubberCursor: document.getElementById("scrubber-cursor"),
      scrubberHoverTag: document.getElementById("scrubber-hover-tag"),
      progressRailFill: document.getElementById("progress-rail-fill"),
      elapsedTimeDisplay: document.getElementById("elapsed-time-display"),
      totalTimeDisplay: document.getElementById("total-time-display"),
      scrubberZone: document.getElementById("scrubber-zone"),

      // Controls
      btnPlayMaster: document.getElementById("btn-play-master"),
      playIconSvg: document.getElementById("play-icon-svg"),
      pauseIconSvg: document.getElementById("pause-icon-svg"),
      btnRewind: document.getElementById("btn-rewind"),
      btnForward: document.getElementById("btn-forward"),
      speedBtns: document.querySelectorAll(".speed-btn"),
      btnMute: document.getElementById("btn-mute"),
      volumeSlider: document.getElementById("volume-slider"),
      btnDownloadStems: document.getElementById("btn-download-stems"),
      btnShareEpisode: document.getElementById("btn-share-episode"),

      // Archive
      archiveFilterBtns: document.querySelectorAll(".filter-btn"),
      archiveList: document.getElementById("archive-list"),
      btnToggleHistorical: document.getElementById("btn-toggle-historical"),
      historicalGrid: document.getElementById("historical-grid"),

      // Reader Console
      readerTabBtns: document.querySelectorAll(".reader-tab-btn"),
      readerBadge: document.getElementById("reader-active-badge"),
      readerPanelTranscript: document.getElementById("reader-panel-transcript"),
      readerPanelTakeaways: document.getElementById("reader-panel-takeaways"),
      readerPanelNotes: document.getElementById("reader-panel-notes"),
      transcriptList: document.getElementById("transcript-list"),
      takeawaysList: document.getElementById("takeaways-list"),
      pullquoteText: document.getElementById("pullquote-text"),
      pullquoteSpeaker: document.getElementById("pullquote-speaker"),
      dossierAbstract: document.getElementById("dossier-abstract"),
      notesSpecsList: document.getElementById("notes-specs-list"),
      btnExportMarkdown: document.getElementById("btn-export-markdown"),
      btnExportDossier: document.getElementById("btn-export-dossier"),

      // Subscribe & Footer
      subscribeForm: document.getElementById("subscribe-form"),
      subscribeInput: document.getElementById("subscribe-input"),
      utcClock: document.getElementById("utc-clock"),
      systemToast: document.getElementById("system-toast"),
      toastMsg: document.getElementById("toast-msg")
    };
  },

  bindEvents() {
    // Master Play/Pause
    this.dom.btnPlayMaster.addEventListener("click", () => this.togglePlay());

    // Seek buttons
    this.dom.btnRewind.addEventListener("click", () => this.seekBy(-10));
    this.dom.btnForward.addEventListener("click", () => this.seekBy(30));

    // Playback Speed
    this.dom.speedBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const rate = parseFloat(e.target.dataset.speed);
        this.setPlaybackSpeed(rate);
      });
    });

    // Volume & Mute
    this.dom.volumeSlider.addEventListener("input", (e) => {
      this.volume = parseFloat(e.target.value);
      this.isMuted = false;
      this.engine.setVolume(this.volume);
    });

    this.dom.btnMute.addEventListener("click", () => {
      this.isMuted = !this.isMuted;
      this.engine.setVolume(this.isMuted ? 0 : this.volume);
      this.showToast(this.isMuted ? "AUDIO MUTED" : `VOLUME: ${Math.round(this.volume * 100)}%`);
    });

    // Scrubber interaction
    this.setupScrubberEvents();

    // Stems Download
    this.dom.btnDownloadStems.addEventListener("click", () => this.downloadStems());

    // Share link
    this.dom.btnShareEpisode.addEventListener("click", () => this.shareEpisode());

    // Archive category filter
    this.dom.archiveFilterBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        this.activeCategory = e.target.dataset.category;
        this.dom.archiveFilterBtns.forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        this.renderArchiveList();
      });
    });

    // Toggle historical logs
    this.dom.btnToggleHistorical.addEventListener("click", () => {
      this.historicalLogsOpen = !this.historicalLogsOpen;
      this.dom.historicalGrid.style.display = this.historicalLogsOpen ? "grid" : "none";
      this.dom.btnToggleHistorical.querySelector("span").textContent = this.historicalLogsOpen ? "COLLAPSE ARCHIVAL SECTOR" : "EXPAND PRE-CYBERNETIC COLD STORAGE (2025 LOGS)";
    });

    // Reader tabs
    this.dom.readerTabBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const tab = e.currentTarget.dataset.tab;
        this.setReaderTab(tab);
      });
    });

    // Transcript / Dossier exports
    this.dom.btnExportMarkdown.addEventListener("click", () => this.exportMarkdown());
    this.dom.btnExportDossier.addEventListener("click", () => this.exportDossier());

    // Subscribe form
    this.dom.subscribeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = this.dom.subscribeInput.value.trim();
      if (email) {
        this.showToast(`TELEMETRY ENCRYPTED: ${email}`);
        this.dom.subscribeInput.value = "";
      }
    });

    // Audio Engine Callbacks
    this.engine.onTimeUpdateCallback = (current, duration) => {
      this.currentTime = current;
      if (duration && !isNaN(duration) && duration > 0) {
        this.duration = duration;
      }
      this.updateScrubberDisplay();
      this.syncTranscript();
    };

    this.engine.onEndedCallback = () => {
      this.isPlaying = false;
      this.updatePlayStateUI();
    };
  },

  getCurrentTransmission() {
    return TRANSMISSIONS_DATA.find(t => t.id === this.activeId) || TRANSMISSIONS_DATA[0];
  },

  renderActiveTransmission(startPlayback = false) {
    const t = this.getCurrentTransmission();
    this.duration = t.durationSeconds;
    this.currentTime = 0;

    // Cathode Display
    this.dom.cathodeFreq.textContent = `${t.frequencyMhz} MHz`;
    this.dom.cathodeImg.src = t.artworkUrl;
    this.dom.cathodeStatus.textContent = t.status;
    this.dom.topPingStatus.textContent = `SIGNAL ACTIVE: ${t.frequencyMhz} MHz`;

    // Metadata
    this.dom.metaEpisode.textContent = `TRANSMISSION #${t.episodeNumber}`;
    this.dom.metaCategory.textContent = t.category;
    this.dom.metaStatus.textContent = t.status;
    this.dom.metaDate.textContent = `REC: ${t.date}`;
    this.dom.metaTitle.textContent = t.title;
    this.dom.metaSubtitle.textContent = t.subtitle;

    // Time
    this.dom.elapsedTimeDisplay.textContent = "00:00";
    this.dom.totalTimeDisplay.textContent = t.durationFormatted;

    // Reader details
    this.dom.readerBadge.textContent = `#${t.episodeNumber} // LIVE SYNC`;
    this.renderTranscriptList(t);
    this.renderTakeawaysList(t);
    this.renderDossier(t);

    // Audio Engine
    this.engine.loadSource(t.audioUrl);

    if (startPlayback) {
      this.play();
    } else {
      this.pause();
    }

    this.updateScrubberDisplay();
  },

  renderArchiveList() {
    const filtered = this.activeCategory === "ALL"
      ? TRANSMISSIONS_DATA
      : TRANSMISSIONS_DATA.filter(t => t.category === this.activeCategory);

    this.dom.archiveList.innerHTML = "";

    filtered.forEach(t => {
      const isSelected = t.id === this.activeId;
      const card = document.createElement("div");
      card.className = `transmission-card ${isSelected ? "active" : ""}`;
      card.id = `card-${t.id}`;

      card.innerHTML = `
        <div class="tcard-top">
          <span style="font-weight: 700; color: ${isSelected ? "var(--accent-gold)" : "var(--accent-cyan)"}">#${t.episodeNumber} // ${t.frequencyMhz} MHz</span>
          <span style="color: var(--text-muted);">${t.date}</span>
        </div>
        <div class="tcard-middle">
          <h4 class="tcard-title">${t.title}</h4>
          <button class="tcard-play-btn" title="Listen now">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </button>
        </div>
        <p class="tcard-desc">${t.dossierAbstract}</p>
        <div class="tcard-bottom">
          <span>${t.category}</span>
          <span style="color: var(--text-primary); font-weight: 600;">${t.durationFormatted}</span>
        </div>
      `;

      card.addEventListener("click", () => {
        if (this.activeId !== t.id) {
          this.activeId = t.id;
          this.renderActiveTransmission(true);
          this.renderArchiveList();
          this.showToast(`CARRIER TUNED: #${t.episodeNumber} (${t.frequencyMhz} MHz)`);
        } else {
          this.togglePlay();
        }
      });

      this.dom.archiveList.appendChild(card);
    });
  },

  renderTranscriptList(t) {
    this.dom.transcriptList.innerHTML = "";
    t.transcript.forEach((entry, idx) => {
      const item = document.createElement("div");
      item.className = `transcript-entry ${entry.isKeyInsight ? "key-insight" : ""}`;
      item.id = `entry-${entry.id}`;
      item.dataset.seconds = entry.seconds;

      item.innerHTML = `
        <div class="entry-header">
          <span class="entry-speaker">${entry.speaker}</span>
          <button class="entry-timestamp-btn" title="Jump to timestamp">[${entry.timeFormatted}]</button>
        </div>
        <p class="entry-text">${entry.text}</p>
      `;

      // Jump on click
      item.addEventListener("click", () => {
        this.seekTo(entry.seconds);
        if (!this.isPlaying) this.play();
      });

      this.dom.transcriptList.appendChild(item);
    });
  },

  renderTakeawaysList(t) {
    this.dom.pullquoteText.textContent = `"${t.pullquote}"`;
    this.dom.pullquoteSpeaker.textContent = `// ${t.pullquoteSpeaker}`;

    this.dom.takeawaysList.innerHTML = "";
    t.keyTakeaways.forEach((axiom, idx) => {
      const el = document.createElement("div");
      el.style.cssText = "display: flex; gap: 0.75rem; background-color: var(--bg-primary); border: 1px solid var(--border-color); padding: 0.75rem;";
      el.innerHTML = `
        <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--accent-gold);">0${idx + 1}</span>
        <p style="font-size: 13px; color: var(--text-primary); line-height: 1.5;">${axiom}</p>
      `;
      this.dom.takeawaysList.appendChild(el);
    });
  },

  renderDossier(t) {
    this.dom.dossierAbstract.textContent = t.dossierAbstract;
    this.dom.notesSpecsList.innerHTML = "";
    t.notesSpecs.forEach(spec => {
      const cell = document.createElement("div");
      cell.className = "spec-cell";
      cell.innerHTML = `
        <span style="font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); text-transform: uppercase;">${spec.label}</span>
        <span style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-cyan); font-weight: 600;">${spec.value}</span>
      `;
      this.dom.notesSpecsList.appendChild(cell);
    });
  },

  // Scrubber & Waveform UI
  setupScrubberEvents() {
    // Generate 48 static bars
    this.dom.waveformContainer.innerHTML = "";
    for (let i = 0; i < 48; i++) {
      const bar = document.createElement("div");
      bar.className = "waveform-bar";
      bar.id = `wbar-${i}`;
      // Give initial natural varied height
      const seedHeight = Math.max(14, Math.floor(Math.sin(i * 0.35) * 28 + 36));
      bar.style.height = `${seedHeight}%`;
      this.dom.waveformContainer.appendChild(bar);
    }

    const handleSeek = (e) => {
      const rect = this.dom.scrubberZone.getBoundingClientRect();
      const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percentage = clickX / rect.width;
      const seekSeconds = percentage * this.duration;
      this.seekTo(seekSeconds);
    };

    let isDragging = false;
    this.dom.scrubberZone.addEventListener("mousedown", (e) => {
      isDragging = true;
      handleSeek(e);
    });

    window.addEventListener("mousemove", (e) => {
      if (isDragging) {
        handleSeek(e);
      }
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) isDragging = false;
    });

    this.dom.scrubberZone.addEventListener("mousemove", (e) => {
      const rect = this.dom.scrubberZone.getBoundingClientRect();
      const hoverX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percentage = hoverX / rect.width;
      const hoverTime = percentage * this.duration;

      this.dom.scrubberHoverTag.style.display = "block";
      this.dom.scrubberHoverTag.style.left = `${hoverX}px`;
      this.dom.scrubberHoverTag.textContent = this.formatTime(hoverTime);
    });

    this.dom.scrubberZone.addEventListener("mouseleave", () => {
      this.dom.scrubberHoverTag.style.display = "none";
    });
  },

  updateScrubberDisplay() {
    const fraction = this.duration > 0 ? (this.currentTime / this.duration) : 0;
    const percent = Math.min(100, Math.max(0, fraction * 100));

    // Progress needle & rail
    this.dom.scrubberCursor.style.left = `${percent}%`;
    this.dom.progressRailFill.style.width = `${percent}%`;

    this.dom.elapsedTimeDisplay.textContent = this.formatTime(this.currentTime);

    // Update active wave bar colors
    const totalBars = 48;
    const activeIndex = Math.floor(fraction * totalBars);

    for (let i = 0; i < totalBars; i++) {
      const bar = document.getElementById(`wbar-${i}`);
      if (bar) {
        if (i < activeIndex) {
          bar.classList.add("played");
        } else {
          bar.classList.remove("played");
        }
      }
    }
  },

  syncTranscript() {
    const t = this.getCurrentTransmission();
    if (!t || !t.transcript) return;

    let currentEntryId = null;
    for (let i = t.transcript.length - 1; i >= 0; i--) {
      if (this.currentTime >= t.transcript[i].seconds) {
        currentEntryId = t.transcript[i].id;
        break;
      }
    }

    t.transcript.forEach(entry => {
      const el = document.getElementById(`entry-${entry.id}`);
      if (el) {
        if (entry.id === currentEntryId) {
          if (!el.classList.contains("current")) {
            el.classList.add("current");
            el.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        } else {
          el.classList.remove("current");
        }
      }
    });
  },

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  },

  play() {
    this.isPlaying = true;
    this.engine.play();
    this.updatePlayStateUI();

    // Fallback timer simulation if audio is synthesized oscillator
    if (this.engine.isUsingFallback) {
      this.dom.synthBadge.style.display = "block";
    }

    clearInterval(this.fallbackProgressInterval);
    this.fallbackProgressInterval = setInterval(() => {
      if (this.isPlaying) {
        if (this.engine.isUsingFallback) {
          this.currentTime += 1 * this.playbackRate;
          if (this.currentTime >= this.duration) {
            this.currentTime = 0;
          }
          this.updateScrubberDisplay();
          this.syncTranscript();
        }
      }
    }, 1000);
  },

  pause() {
    this.isPlaying = false;
    this.engine.pause();
    clearInterval(this.fallbackProgressInterval);
    this.updatePlayStateUI();
  },

  seekTo(seconds) {
    this.currentTime = Math.max(0, Math.min(seconds, this.duration));
    this.engine.seek(this.currentTime);
    this.updateScrubberDisplay();
    this.syncTranscript();
  },

  seekBy(deltaSeconds) {
    this.seekTo(this.currentTime + deltaSeconds);
  },

  setPlaybackSpeed(rate) {
    this.playbackRate = rate;
    this.engine.setRate(rate);
    this.dom.speedBtns.forEach(btn => {
      if (parseFloat(btn.dataset.speed) === rate) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    this.showToast(`TEMPO: ${rate}x SPEED`);
  },

  setReaderTab(tab) {
    this.activeReaderTab = tab;
    this.dom.readerTabBtns.forEach(b => {
      b.classList.toggle("active", b.dataset.tab === tab);
    });

    this.dom.readerPanelTranscript.style.display = tab === "transcript" ? "block" : "none";
    this.dom.readerPanelTakeaways.style.display = tab === "takeaways" ? "block" : "none";
    this.dom.readerPanelNotes.style.display = tab === "notes" ? "block" : "none";
  },

  updatePlayStateUI() {
    if (this.isPlaying) {
      this.dom.playIconSvg.style.display = "none";
      this.dom.pauseIconSvg.style.display = "block";
      this.dom.cathodeImg.style.filter = "brightness(1.05) contrast(1.15)";
      this.dom.topPingStatus.style.color = "var(--accent-gold)";
    } else {
      this.dom.playIconSvg.style.display = "block";
      this.dom.pauseIconSvg.style.display = "none";
      this.dom.cathodeImg.style.filter = "brightness(0.85) contrast(1.0)";
      this.dom.topPingStatus.style.color = "var(--text-secondary)";
    }
  },

  startVisualizationLoop() {
    const loop = () => {
      requestAnimationFrame(loop);
      const freqData = this.engine.getFrequencyData();

      for (let i = 0; i < 48; i++) {
        const bar = document.getElementById(`wbar-${i}`);
        if (bar) {
          if (this.isPlaying) {
            // Analyser has real energy or animated energy
            const val = freqData[i] || 0;
            const dynamicHeight = Math.max(12, Math.min(100, Math.floor((val / 255) * 90 + Math.sin(Date.now() * 0.005 + i * 0.4) * 16 + 25)));
            bar.style.height = `${dynamicHeight}%`;
          } else {
            // Idle subtle respiration
            const idleHeight = Math.max(10, Math.floor(Math.sin(Date.now() * 0.002 + i * 0.3) * 15 + 28));
            bar.style.height = `${idleHeight}%`;
          }
        }
      }
    };
    requestAnimationFrame(loop);
  },

  startClock() {
    const update = () => {
      const now = new Date();
      this.dom.utcClock.textContent = `UTC ${now.toUTCString().replace("GMT", "")} // SYSTEM ACTIVE`;
    };
    update();
    setInterval(update, 1000);
  },

  downloadStems() {
    const t = this.getCurrentTransmission();
    this.showToast("SYNTHESIZING 432Hz CARRIER STEMS...");
    const wavBlob = this.engine.generateStemWavBuffer(4);
    const url = URL.createObjectURL(wavBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `CyberneticSignal_Ep${t.episodeNumber}_CarrierStem_432Hz.wav`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  },

  exportMarkdown() {
    const t = this.getCurrentTransmission();
    let md = `# THE CYBERNETIC SIGNAL // DISPATCH #${t.episodeNumber}\n`;
    md += `**Title**: ${t.title}\n`;
    md += `**Subtitle**: ${t.subtitle}\n`;
    md += `**Frequency**: ${t.frequencyMhz} MHz | **Date**: ${t.date} | **Duration**: ${t.durationFormatted}\n\n`;
    md += `## PULLQUOTE\n> "${t.pullquote}"\n> — ${t.pullquoteSpeaker}\n\n`;
    md += `## SYNCHRONIZED TRANSCRIPT\n\n`;
    t.transcript.forEach(entry => {
      md += `**[${entry.timeFormatted}] ${entry.speaker}**:\n${entry.text}\n\n`;
    });

    const blob = new Blob([md], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `CyberneticSignal_Ep${t.episodeNumber}_Transcript.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    this.showToast("MARKDOWN TRANSCRIPT EXPORTED");
  },

  exportDossier() {
    const t = this.getCurrentTransmission();
    let txt = `=========================================================\n`;
    txt += `THE CYBERNETIC SIGNAL // RESEARCH DOSSIER #${t.episodeNumber}\n`;
    txt += `=========================================================\n`;
    txt += `TOPIC: ${t.title} - ${t.subtitle}\n`;
    txt += `ABSTRACT:\n${t.dossierAbstract}\n\n`;
    txt += `KEY AXIOMS:\n`;
    t.keyTakeaways.forEach((k, i) => {
      txt += `[0${i + 1}] ${k}\n`;
    });
    txt += `\nTECHNICAL SPECS:\n`;
    t.notesSpecs.forEach(s => {
      txt += `${s.label}: ${s.value}\n`;
    });

    const blob = new Blob([txt], { type: "text/plain;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `CyberneticSignal_Ep${t.episodeNumber}_Dossier.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    this.showToast("DOSSIER EXPORTED");
  },

  shareEpisode() {
    const t = this.getCurrentTransmission();
    const shareText = `Tuning in to The Cybernetic Signal Episode #${t.episodeNumber}: "${t.title}" (${t.frequencyMhz} MHz). Standalone Web Audio console.`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      this.showToast("DISPATCH TELEMETRY COPIED TO CLIPBOARD");
    } else {
      this.showToast(`EPISODE #${t.episodeNumber} READY FOR SHARING`);
    }
  },

  showToast(message) {
    this.dom.toastMsg.textContent = message;
    this.dom.systemToast.style.display = "flex";
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.dom.systemToast.style.display = "none";
    }, 3200);
  },

  formatTime(totalSeconds) {
    if (isNaN(totalSeconds) || totalSeconds < 0) return "00:00";
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const mStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const sStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${mStr}:${sStr}`;
  }
};

// Initialize application on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
