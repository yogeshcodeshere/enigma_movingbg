export interface ProblemStatement {
  id: string;
  title: string;
  domain: string;
  description: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD' | 'CHALLENGER';
  techStack: string[];
  backgroundStory?: string;
  expectedOutcomes: string[];
  deliverables: string[];
}

export interface TrackItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  accentColor: string;
  technologies: string[];
  sampleIdeas: string[];
}

export interface ProtocolStep {
  number: string;
  title: string;
  description: string;
  milestone: string;
  details: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  time: string;
  status: 'COMPLETED' | 'ACTIVE' | 'UPCOMING';
}

export interface PrizeTier {
  rank: string;
  title: string;
  amount: string;
  description: string;
  perks: string[];
  accent: string;
  isPopular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Team & Participation' | 'Rules & Submission' | 'Logistics';
}

export interface TeamMember {
  name: string;
  email: string;
  role: string;
  github?: string;
}

export interface RegistrationData {
  teamName: string;
  leaderName: string;
  leaderEmail: string;
  leaderPhone: string;
  college: string;
  track: string;
  experienceLevel: string;
  members: TeamMember[];
  projectIdea: string;
}
