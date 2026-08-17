import { ProblemStatement, TrackItem, ProtocolStep, TimelineEvent, PrizeTier, FaqItem } from '../types';

export const HERO_DATA = {
  eyebrow: 'ENIGMA 5.0',
  mainTitle: 'GENESIS',
  tagline: 'BEYOND THE FUTURE',
  eventPill: '26 SEP • SIES GST • 24 HOURS',
  specsPill: '4 / TEAM • ₹25K PRIZE POOL',
  supportingCopy:
    'The year is 2097. Humanity reached the future it dreamed of—now the systems are failing. Return to the beginning: rethink, rebuild, and create solutions for a future worth living in.',
  primaryCta: 'REGISTER NOW',
  secondaryCta: 'EXPLORE EVENT INFO',
  eventDetails: '26 SEPTEMBER • SIES GST COLLEGE • 24 HOURS',
  statusText: 'REGISTRATIONS OPEN 1 SEPTEMBER',
  prizePool: '₹25,000',
  championPrize: '₹15,000',
  edition: 'ENIGMA 5.0 // GENESIS',
  hostOrg: 'CSI SIESGST STUDENT CHAPTER',
  location: 'SIES GST COLLEGE, NAVI MUMBAI',
};

export const ABOUT_DATA = {
  sectionLabel: 'EVENT OVERVIEW',
  heading: 'ENIGMA 5.0 — GENESIS: BEYOND THE FUTURE',
  bodyParagraphs: [
    'ENIGMA 5.0 is the flagship 24-hour hackathon hosted by the CSI Student Chapter at SIES Graduate School of Technology.',
    'This year, under the theme GENESIS: BEYOND THE FUTURE, builders and innovators are tasked with going back to the roots of critical societal systems to construct resilient, human-centered technology.',
    'With open eligibility, teams of 4 will collaborate under an intense 24-hour countdown to turn bold ideas into working prototypes across Health, Finance, and Sustainability.',
  ],
  highlight: "26 SEPTEMBER • SIES GST COLLEGE • 24 HOURS\n4 MEMBERS / TEAM • ₹25,000 PRIZE POOL",
};

export const WHAT_IS_ENIGMA_DATA = {
  heading: 'THE GENESIS PROTOCOL.',
  bodyParagraphs: [
    'In 2097, the systems built to make life better have begun to buckle under complex global challenges.',
    'Healthcare. Finance. Sustainability. Three critical pillars stand between humanity and a sustainable tomorrow.',
    'GENESIS is your platform to engineer breakthrough prototypes that address these structural flaws.',
  ],
  featureCards: [
    {
      number: '01',
      title: 'RETHINK',
      description: 'Deconstruct legacy failures in healthcare, financial access, and environmental degradation.',
      icon: 'Binary',
      badge: 'PHASE 01',
    },
    {
      number: '02',
      title: 'REBUILD',
      description: 'Spend 24 continuous hours architecting robust, code-backed working systems from the ground up.',
      icon: 'Cpu',
      badge: 'PHASE 02',
    },
    {
      number: '03',
      title: 'DISRUPT',
      description: 'Deliver working prototypes that set new standards for human progress beyond 2097.',
      icon: 'Zap',
      badge: 'PHASE 03',
    },
  ],
};

export const THEME_STORY_DATA = {
  sectionLabel: 'THE 2097 LORE',
  heading: 'THE YEAR IS 2097.',
  bodyParagraphs: [
    'Humanity has reached a future it once believed would be perfect.',
    'But the systems built to make life better have begun to fail.',
    'Healthcare. Finance. Sustainability.',
    'Three systems now stand between humanity and the future it imagined.',
    'GENESIS gives innovators a chance to go back to the beginning—to rethink, rebuild, and create solutions for a future worth living in.',
  ],
  keyQuestion: '“What will you build when you get the chance to create it again?”',
};

export const PROBLEM_STATEMENTS: ProblemStatement[] = [
  {
    id: 'GENESIS-HLTH-01',
    title: 'Autonomous Edge Health Diagnostic & Triage Matrix',
    domain: 'HEALTHCARE',
    description: 'Build an edge-deployed diagnostic assistant that empowers community health workers to perform instant multimodal patient triage and preliminary diagnosis during zero-connectivity network blackouts.',
    difficulty: 'HARD',
    techStack: ['TensorFlow.js / ONNX', 'IndexedDB', 'PWA', 'React', 'FastAPI'],
    backgroundStory: 'In 2097, centralized medical mainframes frequently overload. Decentralized on-device triage ensures no patient is left unattended.',
    expectedOutcomes: [
      'Zero-latency offline patient symptom classifier',
      'Encrypted decentralized medical record sync engine',
      'Emergency drug dosage calculator with contraindication checks',
    ],
    deliverables: ['Working diagnostic web app', 'Local inference pipeline', 'Architecture blueprint'],
  },
  {
    id: 'GENESIS-FIN-02',
    title: 'Zero-Exploit Micro-Settlement & Autonomous Credit Ledger',
    domain: 'FINANCE',
    description: 'Engineer a transparent, non-custodial financial clearing protocol that eliminates predatory transaction fees and enables real-time fractional micro-streaming for emergency disaster aid and localized commerce.',
    difficulty: 'CHALLENGER',
    techStack: ['TypeScript', 'WebSocket', 'Smart Contracts / Web3', 'Node.js', 'PostgreSQL'],
    backgroundStory: 'Legacy financial gatekeepers drain 15% in operational fees during humanitarian crises. Direct atomic settlements restore financial sovereignty.',
    expectedOutcomes: [
      'Sub-second payment settlement channel',
      'Cryptographically verified voucher redemption engine',
      'Real-time liquidity & audit stream dashboard',
    ],
    deliverables: ['Live transaction demo', 'State-channel verification contracts', 'API documentation'],
  },
  {
    id: 'GENESIS-SUST-03',
    title: 'Decentralized Micro-Grid Energy Balancing & Carbon Verifier',
    domain: 'SUSTAINABILITY',
    description: 'Design an intelligent grid balancer that dynamically routes renewable solar/wind power between residential storage cells and tracks provable carbon offsets on an immutable public ledger.',
    difficulty: 'HARD',
    techStack: ['Python', 'IoT Telemetry (MQTT)', 'React', 'Time-Series DB', 'Tailwind CSS'],
    backgroundStory: '2097 climate volatility causes severe power surges. Peer-to-peer renewable micro-grids prevent localized blackouts while rewarding clean generation.',
    expectedOutcomes: [
      'Real-time automated energy routing simulation',
      'Verifiable tokenized carbon avoidance ledger',
      'Dynamic peak-load prediction algorithm',
    ],
    deliverables: ['Interactive microgrid command center', 'Simulation telemetry engine', 'Project pitch deck'],
  },
  {
    id: 'GENESIS-HLTH-04',
    title: 'Predictive Bio-Telemetry & Early Outbreak Sentinel',
    domain: 'HEALTHCARE',
    description: 'Develop a privacy-first collective health surveillance agent that detects localized viral transmission anomalies from wearable sensor telemetry without violating individual anonymity.',
    difficulty: 'MEDIUM',
    techStack: ['Differential Privacy', 'Python / Rust', 'Next.js', 'WebSockets', 'Chart.js'],
    backgroundStory: 'Early detection saves millions, but centralized tracking destroys civil liberties. Differential privacy guarantees total anonymization.',
    expectedOutcomes: [
      'Noise-calibrated statistical outbreak heatmaps',
      'Client-side sensor ingestion portal',
      'Automated municipal quarantine recommendation alerts',
    ],
    deliverables: ['Sentinel dashboard', 'Privacy analysis audit', 'Demo dataset generator'],
  },
  {
    id: 'GENESIS-FIN-05',
    title: 'Algorithmic Community Lending & Mutual Aid Pool',
    domain: 'FINANCE',
    description: 'Create an uncollateralized community-based micro-lending platform powered by social graph reputation scoring and automated emergency repayment insurance pools.',
    difficulty: 'MEDIUM',
    techStack: ['Solidity / Move', 'Next.js', 'Ethers.js / Wagmi', 'Supabase', 'Tailwind CSS'],
    backgroundStory: 'Traditional credit bureaus lock out underprivileged communities. Social verification protocols enable trust without credit scores.',
    expectedOutcomes: [
      'Reputation attestation system',
      'Automated vault escrow & default protection pool',
      'Intuitive borrowing & lending interface',
    ],
    deliverables: ['Live dApp interface', 'Protocol smart contracts', 'Tokenomics whitepaper'],
  },
  {
    id: 'GENESIS-SUST-06',
    title: 'Circular Material Passport & Autonomous E-Waste Traceability',
    domain: 'SUSTAINABILITY',
    description: 'Construct a lifecycle tracking system for electronic components and rare metals that automates buyback rewards and routes scrapped components to authorized recyclers.',
    difficulty: 'EASY',
    techStack: ['QR / NFC Telemetry', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    backgroundStory: 'Mountains of discarded tech in 2097 choke urban centers. Material passports incentivize 100% recycling with instant bounties.',
    expectedOutcomes: [
      'Item lifecycle QR verification scanner',
      'Instant recycling bounty calculation algorithm',
      'Recycler depot dispatch and inventory ledger',
    ],
    deliverables: ['Progressive Web App', 'Manufacturer API schema', 'Demo hardware registry'],
  },
];

export const TRACKS: TrackItem[] = [
  {
    id: 'health',
    title: 'HEALTHCARE',
    description: 'Rebuild systems of care, edge diagnostics, emergency triage, and accessible medical intelligence.',
    icon: 'Activity',
    accentColor: '#f43f5e', // rose-500
    technologies: ['Edge Computer Vision', 'Offline-First PWAs', 'Encrypted Telemetry', 'Differential Privacy', 'FastAPI'],
    sampleIdeas: ['Offline clinic diagnostic assistant', 'Zero-knowledge health record passports', 'Predictive epidemic anomaly detector'],
  },
  {
    id: 'finance',
    title: 'FINANCE',
    description: 'Reimagine financial sovereignty, zero-exploit clearing, atomic micro-payments, and decentralized trust.',
    icon: 'TrendingUp',
    accentColor: '#10b981', // emerald-500
    technologies: ['Payment Channels', 'Smart Contracts', 'Real-Time WebSockets', 'Automated Ledgers', 'Fraud Detection'],
    sampleIdeas: ['Sub-second humanitarian aid streaming', 'Social graph reputation lending', 'Zero-loss peer-to-peer micro-escrow'],
  },
  {
    id: 'sustainability',
    title: 'SUSTAINABILITY',
    description: 'Engineer climate resilience, renewable micro-grids, circular lifecycle tracking, and carbon intelligence.',
    icon: 'Compass',
    accentColor: '#06b6d4', // cyan-500
    technologies: ['IoT & MQTT', 'Time-Series Data', 'Carbon Ledger Protocols', 'Grid Optimization', 'Next.js'],
    sampleIdeas: ['Autonomous renewable micro-grid balancer', 'Circular electronic material passport', 'Urban water recovery sensor network'],
  },
];

export const PROTOCOL_STEPS: ProtocolStep[] = [
  {
    number: '01',
    title: 'REGISTER SQUAD',
    description: 'Assemble your 4-builder team before September 10.',
    milestone: 'TEAM REGISTRATION',
    details: 'Free entry for all participants. Register your 4-person squad between September 1 and September 10, 2026.',
  },
  {
    number: '02',
    title: 'CHOOSE DOMAIN',
    description: 'Pick your battlefield: Health, Finance, or Sustainability.',
    milestone: 'SYSTEM TARGETING',
    details: 'Analyze the core failures of the 2097 systems and select the challenge that your team is primed to solve.',
  },
  {
    number: '03',
    title: '24-HOUR SPRINT',
    description: 'Arrive at SIES GST on September 26 for 24 hours of nonstop building.',
    milestone: 'CODE MARATHON',
    details: 'Build with dedicated mentors, midnight energy checkpoints, and food/swag provided on campus.',
  },
  {
    number: '04',
    title: 'LIVE PITCH',
    description: 'Demonstrate your prototype live to the expert jury panel.',
    milestone: 'JURY EVALUATION',
    details: 'Showcase working software, defend system architecture, and prove real-world viability.',
  },
  {
    number: '05',
    title: 'WIN ₹25,000',
    description: 'Claim the GENESIS prize pool, certificates, and launch support.',
    milestone: 'GRAND FINALE',
    details: 'Winners take home cash prizes, trophies, direct networking opportunities, and official CSI credentials.',
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    date: 'SEP 01, 2026',
    time: '12:00 PM IST',
    title: 'REGISTRATIONS OPEN',
    description: 'Squad registration opens across all colleges and domains.',
    status: 'COMPLETED',
  },
  {
    date: 'SEP 10, 2026',
    time: '11:59 PM IST',
    title: 'REGISTRATION DEADLINE',
    description: 'Final cutoff to register your 4-member team.',
    status: 'ACTIVE',
  },
  {
    date: 'SEP 26, 2026',
    time: '09:00 AM IST',
    title: 'HACKATHON OPENING CEREMONY',
    description: 'Opening keynote and the start of the 24-hour sprint at SIES GST.',
    status: 'UPCOMING',
  },
  {
    date: 'SEP 27, 2026',
    time: '09:00 AM IST',
    title: 'CODE FREEZE & SUBMISSION',
    description: '24 hours completed. Repositories and live demos locked.',
    status: 'UPCOMING',
  },
  {
    date: 'SEP 27, 2026',
    time: '11:00 AM IST',
    title: 'LIVE JURY PITCHES & AWARDS',
    description: 'Project presentations, winner announcements, and prize distribution.',
    status: 'UPCOMING',
  },
];

export const PRIZES: PrizeTier[] = [
  {
    rank: '01',
    title: 'GRAND CHAMPION',
    amount: '₹15,000',
    description: 'Awarded to the most innovative, technically sound, and impactful overall solution at ENIGMA 5.0.',
    accent: '#a855f7',
    isPopular: true,
    perks: [
      'Cash Prize: ₹15,000',
      'Winner Trophy & Official Winner Credentials',
      'Exclusive Fast-Track Interview Opportunities',
      'Featured Project Showcase on CSI SIESGST channels',
    ],
  },
  {
    rank: '02',
    title: 'RUNNER UP',
    amount: '₹7,000',
    description: 'For the team demonstrating exceptional engineering depth and intuitive design.',
    accent: '#06b6d4',
    perks: [
      'Cash Prize: ₹7,000',
      'Runner-Up Trophy & Certificates',
      'Industry Mentorship Sessions',
      'Developer Tooling & Cloud Grant Bundles',
    ],
  },
  {
    rank: '03',
    title: 'SECOND RUNNER UP',
    amount: '₹3,000',
    description: 'For bold creativity and flawless 24-hour execution.',
    accent: '#ec4899',
    perks: [
      'Cash Prize: ₹3,000',
      'Bronze Trophy & Certificates of Merit',
      'Tech Goodie Bags & Swag Kits',
      'Community Ambassador Recognition',
    ],
  },
];

export const ADDITIONAL_REWARDS = [
  { title: 'Goodies & Swags', desc: 'Custom ENIGMA 5.0 cyberpunk stickers, badges, and swag packages for offline participants.' },
  { title: 'Verifiable Certificates', desc: 'Official digital Certificate of Participation issued and authenticated by CSI SIESGST.' },
  { title: 'Free Meals & Refreshments', desc: 'Meals, midnight snacks, and beverages fully provided throughout the 24 hours at SIES GST.' },
  { title: 'Industry Mentorship', desc: 'Live guidance and architectural review from senior engineers and domain mentors.' },
];

export const WHY_PARTICIPATE = [
  {
    number: '01',
    title: '24 HOURS OF INTENSE BUILDING',
    description: 'Test your limits and turn a concept into a fully functional product in a single day.',
    icon: 'Hammer',
  },
  {
    number: '02',
    title: 'OPEN ELIGIBILITY',
    description: 'No barriers. Whether you are a first-year student or a veteran developer, everyone is welcome.',
    icon: 'Users',
  },
  {
    number: '03',
    title: '3 CRITICAL DOMAINS',
    description: 'Tackle real-world problems in Health, Finance, or Sustainability that actually matter.',
    icon: 'Sparkles',
  },
  {
    number: '04',
    title: '₹25,000 PRIZE POOL',
    description: 'Compete for verified cash rewards, trophies, and recognition across the tech community.',
    icon: 'Trophy',
  },
];

export const JUDGING_CRITERIA = [
  {
    title: 'INNOVATION & CREATIVITY',
    weight: '30%',
    description: 'How unique and visionary is your solution to the 2097 problem statement?',
    metric: 'Originality of concept, bold engineering choices, and out-of-the-box thinking.',
  },
  {
    title: 'TECHNICAL EXECUTION',
    weight: '30%',
    description: 'Does the prototype actually work and function as intended?',
    metric: 'Working live demo, code quality, proper API and framework integrations.',
  },
  {
    title: 'REAL-WORLD IMPACT',
    weight: '25%',
    description: 'How effectively does the solution resolve issues in Health, Finance, or Sustainability?',
    metric: 'Direct utility, feasibility, and addressable pain points.',
  },
  {
    title: 'DESIGN & PRESENTATION',
    weight: '15%',
    description: 'How polished is the UI/UX and how convincingly did the team pitch the solution?',
    metric: 'User experience clarity, responsiveness, and pitch effectiveness.',
  },
];

export const RULES = [
  {
    number: '01',
    rule: 'Teams must consist of exactly 4 members. Inter-college and interdisciplinary teams are fully permitted.',
  },
  {
    number: '02',
    rule: 'Eligibility is completely OPEN — any student or builder with a passion for technology can participate.',
  },
  {
    number: '03',
    rule: 'All code, prototypes, and assets must be developed during the official 24-hour hackathon on 26 September at SIES GST.',
  },
  {
    number: '04',
    rule: 'Publicly available libraries, open-source frameworks, and AI tools are allowed with proper citations in README.',
  },
  {
    number: '05',
    rule: 'Solutions must strictly address one of the 3 official domains: Health, Finance, or Sustainability.',
  },
  {
    number: '06',
    rule: 'Registrations are open from 1 September to 10 September 2026. Late registrations will not be accepted.',
  },
  {
    number: '07',
    rule: 'Any form of plagiarism or submitting pre-built repositories will lead to immediate disqualification.',
  },
  {
    number: '08',
    rule: 'The decision of the CSI SIESGST organizing committee and judging panel will be final and binding.',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'General',
    question: 'WHAT IS ENIGMA 5.0?',
    answer: 'ENIGMA 5.0 is the 5th edition of the annual hackathon organized by the CSI Student Chapter at SIES GST, centered on the futuristic theme GENESIS: BEYOND THE FUTURE.',
  },
  {
    category: 'General',
    question: 'WHO IS ELIGIBLE TO PARTICIPATE?',
    answer: 'Eligibility is OPEN with no restrictions! Students from any branch, year, college, or university are warmly invited to participate.',
  },
  {
    category: 'Team & Participation',
    question: 'WHAT IS THE TEAM SIZE REQUIREMENT?',
    answer: 'Teams must consist of exactly 4 members. You can team up with classmates or friends from other colleges.',
  },
  {
    category: 'General',
    question: 'WHEN AND WHERE IS THE HACKATHON?',
    answer: 'ENIGMA 5.0 will be held on 26 September 2026 at SIES Graduate School of Technology (SIES GST), Nerul, Navi Mumbai. The sprint lasts for 24 continuous hours.',
  },
  {
    category: 'Logistics',
    question: 'WHAT ARE THE REGISTRATION DATES?',
    answer: 'Registrations open on 1 September and close on 10 September 2026. Make sure your team of 4 registers before the deadline.',
  },
  {
    category: 'Logistics',
    question: 'IS THERE ANY REGISTRATION FEE?',
    answer: 'No, registration is 100% FREE! Food, high-speed WiFi, mentor support, and swag kits will be provided on campus.',
  },
  {
    category: 'Rules & Submission',
    question: 'WHAT ARE THE 3 OFFICIAL DOMAINS?',
    answer: 'The three official tracks are: Healthcare, Finance, and Sustainability.',
  },
  {
    category: 'Logistics',
    question: 'WHAT IS THE TOTAL PRIZE POOL?',
    answer: 'The total prize pool is ₹25,000, along with trophies, certificates, swag kits, and fast-track opportunities.',
  },
];

export const SPONSORS_DATA = {
  sectionLabel: 'OUR PARTNERS',
  heading: 'SUPPORTING INNOVATION.',
  body: 'ENIGMA 5.0 is supported by organizations and tech communities fostering student developer talent.',
  tiers: [
    {
      tier: 'ORGANIZED BY',
      sponsors: [
        { name: 'CSI SIESGST', role: 'Computer Society of India Student Chapter', badge: 'Host' },
        { name: 'SIES GST', role: 'SIES Graduate School of Technology', badge: 'Venue' },
      ],
    },
  ],
};

export const ORGANIZERS_DATA = {
  heading: 'ORGANIZING COMMITTEE.',
  body: 'ENIGMA 5.0 is organized by the Computer Society of India (CSI) Student Chapter at SIES Graduate School of Technology, Nerul.',
  organizationName: 'CSI SIESGST',
  organizationDesc: 'Committed to empowering students through technical sprints, open-source hackathons, and industry mentorship.',
  teams: [
    {
      category: 'CORE TEAM',
      roleDesc: 'Event coordination & planning.',
      leads: [
        { name: 'CSI SIESGST Council', handle: '@csisiesgst', role: 'Lead Organizers' },
      ],
    },
  ],
};

export const EASTER_EGG_CIPHERS = [
  {
    encoded: '01000111 01000101 01001110 01000101 01010011 01001001 01010011',
    hint: 'Binary code for the 2097 origin theme',
    solution: 'GENESIS',
  },
  {
    encoded: 'RU5JR01BIDUuMCAtIDI2IFNFUA==',
    hint: 'Base64 encoded event signature',
    solution: 'ENIGMA 5.0 - 26 SEP',
  },
  {
    encoded: 'Q09ERTQ3',
    hint: 'The 4-member squad protocol',
    solution: 'CODE47',
  },
];
