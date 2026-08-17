import { ProblemStatement, TrackItem, ProtocolStep, TimelineEvent, PrizeTier, FaqItem } from '../types';

export const HERO_DATA = {
  eyebrow: 'CSI SIESGST PRESENTS',
  mainTitle: 'ENIGMA',
  tagline: 'Decode. Build. Disrupt.',
  supportingCopy:
    'A hackathon where ideas become systems, problems become possibilities, and builders come together to create what comes next.',
  primaryCta: 'REGISTER NOW',
  secondaryCta: 'EXPLORE THE HACKATHON',
  eventDetails: 'OCTOBER 24–26, 2026 • SIESGST ARENA / HYBRID • TEAM SIZE: 2–4',
  statusText: 'REGISTRATIONS ARE LIVE',
  prizePool: '₹1,50,000+',
  championPrize: '₹75,000',
  edition: 'EDITION 2026 // v2.6',
  hostOrg: 'CSI SIESGST STUDENT CHAPTER',
  location: 'NAVI MUMBAI, INDIA & VIRTUAL',
};

export const ABOUT_DATA = {
  sectionLabel: 'THE CHALLENGE',
  heading: 'EVERY PROBLEM HAS A CODE.',
  bodyParagraphs: [
    "Some problems aren't meant to be solved conventionally.",
    'ENIGMA is a hackathon built for thinkers, developers, designers, strategists, and creators who are willing to step beyond the obvious.',
    'Take a problem. Decode its complexity. Build something meaningful.',
    'From the first idea to the final prototype, ENIGMA challenges you to transform uncertainty into innovation.',
  ],
  highlight: "DON'T JUST FIND THE ANSWER.\nCREATE IT.",
};

export const WHAT_IS_ENIGMA_DATA = {
  heading: 'ENTER THE UNKNOWN.',
  bodyParagraphs: [
    'ENIGMA is more than a coding competition.',
    "It's an arena where technology meets creativity, where teams turn unconventional ideas into working prototypes, and where the best solutions emerge from the most unexpected approaches.",
    "Whether you're here to build, design, solve, or experiment — there's a place for you in the system.",
  ],
  featureCards: [
    {
      number: '01',
      title: 'DECODE',
      description: 'Understand the problem. Question the obvious. Find the opportunity hidden inside the challenge.',
      icon: 'Binary',
      badge: 'ANALYSIS PHASE',
    },
    {
      number: '02',
      title: 'CREATE',
      description: 'Turn your idea into a functional, meaningful prototype using technology that pushes boundaries.',
      icon: 'Cpu',
      badge: 'EXECUTION PHASE',
    },
    {
      number: '03',
      title: 'DISRUPT',
      description: 'Challenge existing solutions and build something that deserves to exist.',
      icon: 'Zap',
      badge: 'IMPACT PHASE',
    },
  ],
};

export const THEME_STORY_DATA = {
  sectionLabel: 'THE ENIGMA',
  heading: 'THE SYSTEM IS WAITING TO BE CRACKED.',
  bodyParagraphs: [
    'Every challenge hides a pattern.',
    'Every pattern hides a possibility.',
    'And every possibility begins with someone willing to look closer.',
    'This year, ENIGMA puts you inside a world where technology, uncertainty, and imagination collide.',
    "The question isn't whether you can solve the problem.",
  ],
  keyQuestion: "It's whether you can see the problem differently.",
};

export const PROBLEM_STATEMENTS: ProblemStatement[] = [
  {
    id: 'ENG-PS-01',
    title: 'Zero-Knowledge Decentralized Identity Verifier',
    domain: 'CYBERSECURITY',
    description: 'Design a privacy-preserving identity verification protocol that authenticates sensitive credentials without exposing private biometric or PII data to third parties.',
    difficulty: 'HARD',
    techStack: ['ZK-SNARKs', 'Solidity', 'Rust', 'WebAssembly', 'Next.js'],
    backgroundStory: 'Modern centralized databases are honeypots for data leaks. Create a cryptographic proof mechanism so users can verify identity without handing over raw records.',
    expectedOutcomes: [
      'Interactive zero-knowledge circuit prover',
      'Client-side authentication widget',
      'Sub-500ms cryptographic proof generation latency',
    ],
    deliverables: ['Working demo interface', 'Smart contract / cryptographic backend', 'Threat model report'],
  },
  {
    id: 'ENG-PS-02',
    title: 'Autonomous Multi-Agent Disaster Relief Dispatcher',
    domain: 'AI & MACHINE LEARNING',
    description: 'Develop an agentic AI network that parses incoming multimodal emergency distress calls and live satellite telemetry to dynamically optimize rescue vehicle allocation.',
    difficulty: 'CHALLENGER',
    techStack: ['Gemini 2.5', 'Python', 'FastAPI', 'LangGraph', 'GeoJSON', 'Mapbox'],
    backgroundStory: 'In sudden urban flooding or natural disasters, communication channels fragment. Multiple autonomous agents must negotiate resources, triage triage severity, and reroute responders.',
    expectedOutcomes: [
      'Real-time automated incident prioritization algorithm',
      'Multimodal audio and text distress processor',
      'Interactive command dispatch canvas with live routing',
    ],
    deliverables: ['Live simulation dashboard', 'AI agent pipeline graph', 'Public API docs'],
  },
  {
    id: 'ENG-PS-03',
    title: 'Sub-Second Peer-to-Peer Micro-Payment Protocol',
    domain: 'FINTECH',
    description: 'Construct a state-channel streaming payment engine enabling real-time per-second billing for cloud compute, API token usage, or public EV charging.',
    difficulty: 'MEDIUM',
    techStack: ['TypeScript', 'WebSocket', 'Go / Node.js', 'PostgreSQL', 'Tailwind CSS'],
    backgroundStory: 'Subscription models force users into flat monthly costs. Micro-streaming unlocks atomic pay-as-you-use billing down to tenths of a cent with minimal gas overhead.',
    expectedOutcomes: [
      'Bidirectional payment channel implementation',
      'Live stream telemetry ticker updating every 250ms',
      'Instant settlement voucher verification system',
    ],
    deliverables: ['Payment demo app', 'Latency benchmark metrics', 'Developer SDK prototype'],
  },
  {
    id: 'ENG-PS-04',
    title: 'Offline-First Diagnostic Assistant for Remote Clinics',
    domain: 'HEALTHCARE',
    description: 'Build a lightweight, edge-compatible clinical diagnostic aid that assists rural health workers in screening symptoms and analyzing skin lesions without active internet connectivity.',
    difficulty: 'MEDIUM',
    techStack: ['TensorFlow.js / ONNX', 'IndexedDB', 'PWA', 'React', 'Web Workers'],
    backgroundStory: 'Rural primary care centers frequently suffer bandwidth outages. Localized on-device ML models allow continuous triage without waiting for cloud sync.',
    expectedOutcomes: [
      '100% functional offline diagnostic triage flow',
      'On-device computer vision inference engine',
      'Automatic opportunistic sync upon connectivity restoration',
    ],
    deliverables: ['Progressive Web App', 'Edge model benchmark', 'Patient intake workflow demo'],
  },
  {
    id: 'ENG-PS-05',
    title: 'Collaborative Spatial Canvas for Complex System Architects',
    domain: 'WEB & APP DEVELOPMENT',
    description: 'Create an ultra-responsive infinite canvas that transforms high-level textual software specs into interactive executable architecture diagrams with multiplayer cursor syncing.',
    difficulty: 'HARD',
    techStack: ['React', 'CRDTs (Yjs)', 'Canvas / WebGL', 'WebRTC', 'Tailwind CSS'],
    backgroundStory: 'Engineering teams struggle with stale static documentation. Dynamic architectural canvases sync live runtime logs with structural topological graphs.',
    expectedOutcomes: [
      '60 FPS infinite canvas pan/zoom performance',
      'Multi-user live cursor and node state synchronization',
      'Export to infrastructure-as-code manifests (Terraform/Docker Compose)',
    ],
    deliverables: ['Live multiplayer web app', 'CRDT architecture spec', 'Component test suite'],
  },
  {
    id: 'ENG-PS-06',
    title: 'Open Frontier: The Rogue Innovation Sandbox',
    domain: 'OPEN INNOVATION',
    description: 'Unshackle your creativity. Tackle an unmapped challenge at the intersection of hardware, generative media, climate tech, gaming, or urban mobility.',
    difficulty: 'CHALLENGER',
    techStack: ['OPEN / ANY STACK OF CHOICE'],
    backgroundStory: 'The most revolutionary breakthroughs emerge when conventional boundaries dissolve. Bring your wildest prototype to life.',
    expectedOutcomes: [
      'Provable disruption of an existing status-quo',
      'Tangible interactive prototype ready for live judge testing',
      'Compelling product narrative and feasibility thesis',
    ],
    deliverables: ['Live working prototype', 'Pitch slide deck', 'Repository with documentation'],
  },
];

export const TRACKS: TrackItem[] = [
  {
    id: 'ai-ml',
    title: 'AI & MACHINE LEARNING',
    description: 'Build systems that learn, adapt, predict, and assist.',
    icon: 'Brain',
    accentColor: '#a855f7', // purple-500
    technologies: ['LLMs & Multimodal Agents', 'Computer Vision', 'PyTorch / TensorFlow', 'Vector Embeddings', 'Autonomous Systems'],
    sampleIdeas: ['Autonomous incident dispatchers', 'Personalized adaptive learning neural engines', 'Synthetic data generators for edge AI'],
  },
  {
    id: 'cybersecurity',
    title: 'CYBERSECURITY',
    description: 'Identify vulnerabilities. Defend systems. Think like the adversary.',
    icon: 'ShieldCheck',
    accentColor: '#06b6d4', // cyan-500
    technologies: ['Zero-Knowledge Proofs', 'Threat Intelligence', 'eBPF Kernel Monitoring', 'Smart Contract Auditing', 'IAM & Cryptography'],
    sampleIdeas: ['Decentralized zero-trust access control', 'Automated red-teaming bot networks', 'Hardware security token emulators'],
  },
  {
    id: 'web-app',
    title: 'WEB & APP DEVELOPMENT',
    description: 'Design digital experiences that solve real-world problems.',
    icon: 'Layout',
    accentColor: '#ec4899', // pink-500
    technologies: ['Full-stack Next/Vite', 'Progressive Web Apps', 'Real-time WebSockets', 'High-FPS WebGL/Canvas', 'Mobile First'],
    sampleIdeas: ['Collaborative spatial system architects', 'Ultra-fast decentralized social graphs', 'Accessibility-first dynamic tooling'],
  },
  {
    id: 'fintech',
    title: 'FINTECH',
    description: 'Reimagine how people interact with money, markets, and financial systems.',
    icon: 'TrendingUp',
    accentColor: '#10b981', // emerald-500
    technologies: ['Payment State Channels', 'Decentralized Ledgers', 'Algorithmic Risk Models', 'Real-time Clearing', 'Fraud Detection'],
    sampleIdeas: ['Sub-second micro-streaming royalties', 'Autonomous yield hedging bots', 'Cross-border remittances with atomic swaps'],
  },
  {
    id: 'healthcare',
    title: 'HEALTHCARE',
    description: 'Use technology to create smarter, more accessible healthcare solutions.',
    icon: 'Activity',
    accentColor: '#f59e0b', // amber-500
    technologies: ['Edge Computer Vision', 'FHIR / Health Telemetry', 'Offline-First Sync', 'Bio-signal Processing', 'Telemedicine Protocols'],
    sampleIdeas: ['Offline remote clinic diagnostic triage', 'Predictive ICU patient vitals monitor', 'Mental health companion with voice biomarker detection'],
  },
  {
    id: 'open-innovation',
    title: 'OPEN INNOVATION',
    description: 'No boundaries. No predefined box. Just your idea and what you can build.',
    icon: 'Compass',
    accentColor: '#8b5cf6', // violet-500
    technologies: ['IoT & Embedded Systems', 'AR/VR/XR Experiences', 'Climate Tech', 'Generative Gaming', 'Autonomous Hardware'],
    sampleIdeas: ['Clean energy micro-grid coordinator', 'Brain-computer interface experiments', 'Smart city acoustic pollution mitigation'],
  },
];

export const PROTOCOL_STEPS: ProtocolStep[] = [
  {
    number: '01',
    title: 'REGISTER',
    description: 'Get your team together and secure your place inside ENIGMA.',
    milestone: 'TEAM INITIALIZATION',
    details: 'Assemble a squad of 2 to 4 builders, assign roles, and complete the digital registration before slots fill up.',
  },
  {
    number: '02',
    title: 'DECODE',
    description: 'Explore the problem statements and identify the challenge you want to tackle.',
    milestone: 'CHALLENGE SELECTION',
    details: 'Examine official mission briefs, analyze user pain points, and select the track that maximizes your team’s impact.',
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'Design, code, test, break, rebuild — and turn your idea into a working prototype.',
    milestone: '36-HOUR SPRINT',
    details: 'Immerse in intensive development with mentorship checkpoints, technical workshops, and midnight code reviews.',
  },
  {
    number: '04',
    title: 'SUBMIT',
    description: 'Present your solution before the deadline and prepare to defend your approach.',
    milestone: 'CODE FREEZE',
    details: 'Lock repositories, deploy live preview URLs, and upload a concise 2-minute video pitch alongside architecture schematics.',
  },
  {
    number: '05',
    title: 'PITCH',
    description: 'Show the judges what you built, why it matters, and why your solution deserves to win.',
    milestone: 'JURY SCRUTINY',
    details: 'Deliver a high-impact 5-minute live demonstration to industry leaders, answering technical deep-dive queries.',
  },
  {
    number: '06',
    title: 'CONQUER',
    description: 'Stand among the teams that cracked the code.',
    milestone: 'TRIUMPH & REWARDS',
    details: 'Celebrate at the awards ceremony, claim cash prizes, internship offers, and launch your project into a viable startup.',
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    date: 'OCT 01, 2026',
    time: '12:00 PM IST',
    title: 'REGISTRATIONS OPEN',
    description: 'The system goes live. Assemble your team.',
    status: 'COMPLETED',
  },
  {
    date: 'OCT 20, 2026',
    time: '11:59 PM IST',
    title: 'REGISTRATIONS CLOSE',
    description: 'Final call for challengers.',
    status: 'ACTIVE',
  },
  {
    date: 'OCT 24, 2026',
    time: '09:00 AM IST',
    title: 'HACKATHON BEGINS',
    description: 'The clock starts now. 36-hour build marathon kicks off.',
    status: 'UPCOMING',
  },
  {
    date: 'OCT 25, 2026',
    time: '09:00 PM IST',
    title: 'SUBMISSION DEADLINE',
    description: 'Your prototype. Your solution. Your moment.',
    status: 'UPCOMING',
  },
  {
    date: 'OCT 26, 2026',
    time: '10:00 AM IST',
    title: 'JUDGING & PITCH ROUNDS',
    description: 'Solutions go under the microscope.',
    status: 'UPCOMING',
  },
  {
    date: 'OCT 26, 2026',
    time: '05:00 PM IST',
    title: 'RESULTS & GRAND FINALE',
    description: 'The code is cracked. Winners revealed.',
    status: 'UPCOMING',
  },
];

export const PRIZES: PrizeTier[] = [
  {
    rank: '01',
    title: 'CHAMPION',
    amount: '₹75,000',
    description: 'For the team that goes beyond solving the challenge and creates something exceptional.',
    accent: '#a855f7',
    isPopular: true,
    perks: [
      'Direct VC Angel Pitching Sessions',
      'Exclusive Fast-Track Tech Internship Offers',
      'Premium Custom Engraved Hardware Trophy',
      '₹2,00,000 in Cloud Compute & API Credits',
      'VIP passes to Global Tech Summit',
    ],
  },
  {
    rank: '02',
    title: 'RUNNER UP',
    amount: '₹45,000',
    description: 'For a solution that proves innovation does not need to follow the obvious path.',
    accent: '#06b6d4',
    perks: [
      'Tech Accelerator Interview Privileges',
      'Hardware & Cloud Credit Grants (₹1,00,000)',
      'Runner-up Silver Shield Trophy',
      'Exclusive Industry Mentorship Sessions',
    ],
  },
  {
    rank: '03',
    title: 'SECOND RUNNER UP',
    amount: '₹25,000',
    description: 'For a team that pushes the limits and delivers an impressive solution.',
    accent: '#ec4899',
    perks: [
      'Cloud Credit Package (₹50,000)',
      'Bronze Recognition Trophy',
      '1-on-1 Portfolio & Code Review with Judges',
      'Fast-track Community Ambassador Role',
    ],
  },
];

export const ADDITIONAL_REWARDS = [
  { title: 'Goodies & Swag', desc: 'Limited edition Enigma cyberpunk hoodies, stickers, RFID badges & tech kits for all offline teams.' },
  { title: 'Certificates', desc: 'Verifiable on-chain digital credential of participation signed by CSI SIESGST.' },
  { title: 'Internship Opportunities', desc: 'Direct interview rounds with hiring sponsors and partner venture studios.' },
  { title: 'Dedicated Mentorship', desc: 'Continuous guidance from senior architects and previous hackathon champions throughout the build.' },
  { title: 'Special Category Prizes', desc: 'Best UI/UX Design, Best Freshman Team, Best ZK Project, and Community Choice Awards.' },
];

export const WHY_PARTICIPATE = [
  {
    number: '01',
    title: 'BUILD SOMETHING REAL',
    description: 'Go beyond tutorials and classroom projects. Build something that solves an actual problem.',
    icon: 'Hammer',
  },
  {
    number: '02',
    title: 'MEET YOUR PEOPLE',
    description: 'Find developers, designers, creators, and problem-solvers who think like you.',
    icon: 'Users',
  },
  {
    number: '03',
    title: 'LEARN BY DOING',
    description: 'Experiment with technologies, frameworks, APIs, and ideas you have never worked with before.',
    icon: 'Sparkles',
  },
  {
    number: '04',
    title: 'GET RECOGNIZED',
    description: 'Showcase your work to judges, mentors, peers, and the wider tech community.',
    icon: 'Award',
  },
  {
    number: '05',
    title: 'WIN BIG',
    description: 'Compete for cash prizes, cloud credits, opportunities, and industry recognition.',
    icon: 'Trophy',
  },
  {
    number: '06',
    title: 'BUILD YOUR PORTFOLIO',
    description: 'Walk away with a standout, live-deployed product you can actually show the world.',
    icon: 'Briefcase',
  },
];

export const JUDGING_CRITERIA = [
  {
    title: 'INNOVATION',
    weight: '25%',
    description: 'How original and creative is your approach?',
    metric: 'Uniqueness of angle, non-obvious synthesis of systems, bold technical bets.',
  },
  {
    title: 'IMPACT',
    weight: '20%',
    description: 'How effectively does the solution address the problem?',
    metric: 'Depth of pain-point resolution, addressable user scope, real-world utility.',
  },
  {
    title: 'TECHNICAL EXECUTION',
    weight: '20%',
    description: 'How well does the prototype actually work?',
    metric: 'System architecture, code resilience, API integration fidelity, zero fatal bugs.',
  },
  {
    title: 'DESIGN & UX',
    weight: '15%',
    description: 'How intuitive, accessible, and thoughtfully designed is the experience?',
    metric: 'Visual clarity, responsive ergonomics, coherent aesthetic polish, typography.',
  },
  {
    title: 'SCALABILITY',
    weight: '10%',
    description: 'Could this solution grow beyond the hackathon?',
    metric: 'Extensible data models, economic feasibility, infrastructure headroom.',
  },
  {
    title: 'PRESENTATION',
    weight: '10%',
    description: 'Can you communicate your idea clearly and convincingly?',
    metric: 'Clarity of the live demo, storytelling punch, confidence during judge Q&A.',
  },
];

export const RULES = [
  {
    number: '01',
    rule: 'Teams must consist of 2 to 4 members. Cross-institutional teams are welcome and encouraged.',
  },
  {
    number: '02',
    rule: 'All submissions must be developed during the official hackathon sprint period unless otherwise specified.',
  },
  {
    number: '03',
    rule: 'Participants may use publicly available APIs, libraries, frameworks, open-source resources, and AI tools with proper citation.',
  },
  {
    number: '04',
    rule: 'All submitted work must comply with applicable open-source licenses and intellectual-property requirements.',
  },
  {
    number: '05',
    rule: 'Solutions must address one of the official ENIGMA problem statements or tracks.',
  },
  {
    number: '06',
    rule: 'Participants must submit their project repositories, pitch deck, and video demo before the official countdown deadline.',
  },
  {
    number: '07',
    rule: 'Any form of plagiarism, pre-built turnkey repos, or fraudulent submission will result in immediate disqualification.',
  },
  {
    number: '08',
    rule: 'The organizers and jury panel reserve the right to make final decisions regarding eligibility and judging outcomes.',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'General',
    question: 'WHO CAN PARTICIPATE?',
    answer: 'Students, developers, designers, product thinkers, and tech enthusiasts worldwide are eligible. Whether you are in your freshman year or a seasoned coder, ENIGMA welcomes diverse minds.',
  },
  {
    category: 'Team & Participation',
    question: 'HOW MANY PEOPLE CAN BE ON A TEAM?',
    answer: 'Teams can have 2 to 4 members. You can also register and use our community Discord / matchmaking channel to find fellow teammates before the build begins.',
  },
  {
    category: 'General',
    question: 'DO I NEED TO BE AN EXPERT CODER?',
    answer: 'Absolutely not! ENIGMA is about solving problems, not just writing code. Developers, UI/UX designers, researchers, product strategists, and creative thinkers all play crucial roles in winning teams.',
  },
  {
    category: 'Team & Participation',
    question: 'CAN I PARTICIPATE SOLO?',
    answer: 'While we encourage team collaboration for maximum output, solo participants can register and will be offered automatic pairing in our Discord team formation incubator.',
  },
  {
    category: 'Rules & Submission',
    question: 'WHAT TECHNOLOGIES CAN WE USE?',
    answer: 'You are free to use any modern programming languages, cloud providers, frameworks, and AI models (React, Rust, Python, Web3, Flutter, Gemini, etc.) as long as it aligns with track guidelines.',
  },
  {
    category: 'Logistics',
    question: 'IS THERE A REGISTRATION FEE?',
    answer: 'Registration is 100% FREE! Food, high-speed WiFi, mentor support, energy drinks, and official swag kits are fully provided for all shortlisted offline builders.',
  },
  {
    category: 'Logistics',
    question: 'WHAT SHOULD I BRING?',
    answer: 'Bring your laptop, charger, student/government ID, enthusiasm, curiosity, and enough caffeine to survive the 36-hour adrenaline rush.',
  },
  {
    category: 'General',
    question: 'WILL CERTIFICATES BE PROVIDED?',
    answer: 'YES. Every participant who successfully submits a working prototype will receive an official verifiable digital credential issued by CSI SIESGST.',
  },
  {
    category: 'Rules & Submission',
    question: 'CAN WE START BUILDING BEFORE THE HACKATHON?',
    answer: 'You may brainstorm ideas, read problem statements, and sketch wireframes in advance. However, all actual codebase implementation and commits must start after the official opening ceremony announcement.',
  },
  {
    category: 'Logistics',
    question: 'WHERE WILL THE HACKATHON TAKE PLACE?',
    answer: 'The physical venue is the state-of-the-art Innovation Arena at SIES Graduate School of Technology (SIESGST), Nerul, Navi Mumbai. A dedicated virtual submission track is also available for verified remote participants.',
  },
  {
    category: 'General',
    question: 'I HAVE ANOTHER QUESTION.',
    answer: 'Reach out to our organizing committee directly at contact@csi-siesgst.org or ping a moderator in the official #ask-organizers Discord channel anytime.',
  },
];

export const SPONSORS_DATA = {
  sectionLabel: 'THE NETWORK',
  heading: 'POWERED BY THOSE WHO BUILD THE FUTURE.',
  body: 'ENIGMA is made possible by organizations that believe in technology, creativity, and the next generation of builders.',
  tiers: [
    {
      tier: 'TITLE PARTNER',
      sponsors: [
        { name: 'NEXUS LABS', role: 'Global Tech & Compute Infrastructure', badge: 'Tier 1 Lead' },
        { name: 'SYNAPSE AI', role: 'Next-Gen Foundation Models', badge: 'Intelligence Partner' },
      ],
    },
    {
      tier: 'POWERED BY',
      sponsors: [
        { name: 'HYPERION CLOUD', role: 'Cloud Compute & GPU Clusters' },
        { name: 'ZERO PROTOCOL', role: 'Zero-Knowledge Cryptography Ecosystem' },
      ],
    },
    {
      tier: 'TECH PARTNERS',
      sponsors: [
        { name: 'VECTOR DB', role: 'Vector Search Engine' },
        { name: 'AUTH CYBER', role: 'Decentralized IAM' },
        { name: 'DEVSTATION', role: 'Developer Tooling' },
        { name: 'FLOW STREAM', role: 'High-Throughput WebSockets' },
      ],
    },
    {
      tier: 'COMMUNITY PARTNERS',
      sponsors: [
        { name: 'CSI REGION VI', role: 'Computer Society of India' },
        { name: 'HACKCLUB GLOBAL', role: 'Student Developer Alliance' },
        { name: 'DEVOPS MUMBAI', role: 'Engineering Community' },
      ],
    },
  ],
};

export const ORGANIZERS_DATA = {
  heading: 'BEHIND THE CODE.',
  body: 'ENIGMA is organized by a community of students and creators passionate about technology, innovation, and building experiences that bring people together.',
  organizationName: 'CSI SIESGST',
  organizationDesc: 'The Computer Society of India Student Chapter at SIES Graduate School of Technology — dedicated to fostering engineering excellence, open-source innovation, and student leadership.',
  teams: [
    {
      category: 'CORE TEAM',
      roleDesc: 'The people behind the operation.',
      leads: [
        { name: 'Aarav Sharma', handle: '@aarav.core', role: 'Lead Organizer' },
        { name: 'Riya Deshmukh', handle: '@riya.exec', role: 'Co-Lead & Strategy' },
      ],
    },
    {
      category: 'TECH TEAM',
      roleDesc: 'Building the systems that power ENIGMA.',
      leads: [
        { name: 'Siddharth Iyer', handle: '@sid.kernel', role: 'Head of Engineering' },
        { name: 'Tanvi Nair', handle: '@tanvi.dev', role: 'Platform Architect' },
      ],
    },
    {
      category: 'DESIGN TEAM',
      roleDesc: 'Creating the visual language of the experience.',
      leads: [
        { name: 'Kabir Verma', handle: '@kabir.render', role: 'Creative Director' },
        { name: 'Meera Kulkarni', handle: '@meera.motion', role: 'Visual & 3D Lead' },
      ],
    },
    {
      category: 'OPERATIONS',
      roleDesc: 'Making sure everything runs when the clock starts.',
      leads: [
        { name: 'Aditya Patil', handle: '@aditya.ops', role: 'Logistics Head' },
        { name: 'Ananya Roy', handle: '@ananya.comms', role: 'Outreach & PR Lead' },
      ],
    },
  ],
};

export const EASTER_EGG_CIPHERS = [
  {
    encoded: '01000100 01000101 01000011 01001111 01000100 01000101',
    hint: 'Binary sequence of the primary imperative',
    solution: 'DECODE',
  },
  {
    encoded: 'U0lFU0dTVF9FTklHTUFfMjAyNg==',
    hint: 'Base64 encoded event signature',
    solution: 'SIESGST_ENIGMA_2026',
  },
  {
    encoded: 'GLVUXSW (Caesar Shift -3)',
    hint: 'The third imperative in our manifesto',
    solution: 'DISRUPT',
  },
];
