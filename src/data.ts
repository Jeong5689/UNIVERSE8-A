import { PortfolioProject, ServiceDetail, Testimonial } from './types';

export const IMPACT_METRICS = [
  { id: 'delivered', label: 'Projects Delivered', value: '140+', prefix: '', suffix: '+' },
  { id: 'served', label: 'Organizations Served', value: '45+', prefix: '', suffix: '+' },
  { id: 'workshops', label: 'Workshops & Training', value: '90+', prefix: '', suffix: '+' },
  { id: 'reach', label: 'Audience Reach', value: '18M+', prefix: '', suffix: 'M+' },
  { id: 'experience', label: 'Years of Strategy', value: '12+', prefix: '', suffix: '+' },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'p1',
    title: 'The Rise of Tomorrow',
    client: 'Hyperion Global Technologies',
    category: 'Brand Storytelling',
    snippet: 'Strategic cinematic miniature-documentary tracking Hyperion\'s carbon capture initiatives.',
    coverImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    duration: '6 Months',
    impactMetric: '35% increase in B2B inquiries',
    challenge: 'Hyperion possessed revolutionary green science but struggled to articulate their engineering breakthroughs to conventional institutional investors without drowning in high-density jargon.',
    solution: 'We engineered a 5-part character-driven mini-documentary tracing the personal journeys of three key engineers, integrating high-end industrial visual layouts with strategic narrative storyboards.',
    execution: 'Deployed 8K anamorphic cinematography with immersive ambient soundtracks. Coordinated structural briefings with investor relations to align narrative beats with upcoming series funding cycles.',
    results: [
      'Over 2.4 million organic industrial stakeholder views within the first quarter.',
      'Secured $45M Series-B funding within 6 weeks post-launch.',
      'Won Gold at the International Media Council for Corporate Communication.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'p2',
    title: 'Beyond the Campus Gateway',
    client: 'Summit National Academy',
    category: 'Educational Programs',
    snippet: 'Complete educational curriculum and visual positioning program re-imagining digital literacy.',
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    duration: '4 Months',
    impactMetric: 'Enrollment capacity reached (100%)',
    challenge: 'National Summit wanted to recruit high-performing creators for its state-of-the-art interactive digital scholarship program but was perceived as a rigid, text-centric legacy institution.',
    solution: 'We rebuilt their admissions narrative from the perspective of modern digital native students, launching interactive webinars alongside a high-concept, fast-paced media campaign showing dynamic code-to-camera workflows.',
    execution: 'Created educational assets, interactive digital guides, and 12 styled social documentaries explaining student-led innovations with rich infographics and cinematic styling.',
    results: [
      'Yielded a historic 240% increase in qualified scholarship applicants.',
      'Enrolled 45 elite multi-disciplinary content creators across 8 countries.',
      'Won the National Education Marketing Excellence Award.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'p3',
    title: 'Pioneers of Logic',
    client: 'Nexus Open Source Coalition',
    category: 'Documentary Production',
    snippet: 'An immersive documentary on the unsung heroes maintaining global Linux core codebases.',
    coverImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
    duration: '9 Months',
    impactMetric: '+1.2M Open Source Dev Registrations',
    challenge: 'The open-source core infrastructure was severely underfunded. Nexus needed to rally high-net-worth technology patrons and show standard citizens the unseen software holding modern society together.',
    solution: 'A highly cinematic human-first Netflix-style documentary looking at 4 principal developers maintaining ancient lines of code under extreme pressure, emphasizing global utility dependency.',
    execution: 'Shot in Germany, Japan, and the San Francisco Bay Area. Utilized low-key moody office studio lighting to achieve a sleek cybernetic, high-contrast visual environment.',
    results: [
      'Premiered at the Global Tech Summit in Geneva.',
      'Directly stimulated $8.4M in institutional security grants for core dependencies.',
      'Over 5.2M views across premier engineering networks.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'p4',
    title: 'The Creator Accelerator Program',
    client: 'Metropolitan Art Foundation',
    category: 'Creator Development',
    snippet: 'Strategic scaling framework training 120 digital creators to build self-sustaining business ecosystems.',
    coverImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    duration: '12 Months',
    impactMetric: 'Combined 4.2M follower expansion',
    challenge: 'Talented traditional artists struggled with the transition to modern social distribution systems, resulting in gorgeous creations that remained invisible to global art markets.',
    solution: 'We formulated a structured personal branding, cinematic video editing, and algorithmic growth strategy framework custom-tailored for creative fine arts practitioners.',
    execution: 'Conducted bi-weekly interactive coaching laboratories. Deployed studio templates, sound-design libraries, and narrative blueprints focused around strategic micro-storytelling.',
    results: [
      'Average student follower growth exceeded 320% in 180 days.',
      'Enabled absolute self-sufficiency with a collective of $1.8M in creator brand deals.',
      'Created 12 self-sustaining digital art collectives.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'p5',
    title: 'Public Voice Advocacy Campaign',
    client: 'Global Health Ministry',
    category: 'Public Sector Projects',
    snippet: 'A strategic public health media campaign outlining preventive wellness initiatives for youth.',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    duration: '3 Months',
    impactMetric: '67% youth awareness index increase',
    challenge: 'Traditional bureaucratic press statements were flat-out ignored by generations aged 16 to 25, resulting in record-low rates of seasonal prophylactic safety compliance.',
    solution: 'Constructed an upbeat, energetic creator-led informational stream, designing highly aesthetic dynamic motion graphics and pairing influencers with clinical medical advisors.',
    execution: 'Delivered 40 high-intensity, short-form strategic explainer modules synchronized with targeted regional micro-influencer cascades.',
    results: [
      'Achieved 12M+ cross-platform impressions within 30 days.',
      'Directly linked with a 42% spike in public health center bookings.',
      'Adopted as the benchmark communication framework for public agency outreach.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 'p6',
    title: 'Rebranding Legacy Leadership',
    client: 'Vanguard Industrial Holdings',
    category: 'Corporate Content',
    snippet: 'Corporate executive messaging overhaul that refreshed Vanguard\'s global manufacturing image.',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    duration: '5 Months',
    impactMetric: '+88% Employee Brand Sentiment Score',
    challenge: 'A massive heavy industrial corporation faced server internal morale crises and public skepticism over legacy machinery and union negotiations.',
    solution: 'Designed and captured a series of transparent executive video columns paired with strategic internal storytelling newsletters that placed human teamwork alongside industrial modernization.',
    execution: 'Executed multi-level visual interviews, executive training suites, and transparent round-table video releases utilizing balanced, classical cinematic lighting structures.',
    results: [
      'Cultivated an impressive turnaround in external employer brand index.',
      'Secured zero-conflict implementation of upcoming manufacturing milestones with team consensus.',
      'Recognized with the Silver Lion in Executive Communications.'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80'
    ]
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 's1',
    title: 'Strategic Media Production',
    iconName: 'Clapperboard',
    tagline: 'High-concept cinematic storytelling engineered for core business metrics.',
    description: 'We orchestrate complete media blueprints from research and scripting to principal photography, professional color workflows, and modular distribution strategies.',
    benefits: [
      'High-end visual credibility matching global standards.',
      'Absolute alignment with commercial funnel and marketing cycles.',
      'Turnkey delivery overseen by experienced cinema professionals.'
    ],
    process: [
      { step: 1, title: 'Strategic Scripting', desc: 'Decoding corporate goals and drafting screenplay story arcs centered on key value vectors.' },
      { step: 2, title: 'High-Fidelity Capture', desc: 'Anamorphic cinema production, professional lighting setups, and executive performance coaching.' },
      { step: 3, title: 'Studio Development', desc: 'Immersive sound design, advanced color grading, motion systems, and final delivery.' }
    ],
    deliverables: [
      '60-180 second Cinematic Brand Film',
      'High-Density Script Archive & Concept Deck',
      'Formatted Multi-Platform Campaign Assets (Social & Web cuts)',
      'Distribution Strategy Matrix'
    ],
    priceRange: '$15,000 - $75,000'
  },
  {
    id: 's2',
    title: 'Storytelling & Brand Strategy',
    iconName: 'Map',
    tagline: 'Formulating narratives that transform audience behavior and build equity.',
    description: 'Structure a robust strategic messaging framework. We define your core brand positioning, core hooks, narrative anchors, and standard operational briefs to solidify corporate messaging.',
    benefits: [
      'Unify complex corporate branches under a single, powerful narrative banner.',
      'Prevent communication waste by standardizing messaging protocols.',
      'Build immediate empathetic links with high-value stakeholders and investors.'
    ],
    process: [
      { step: 1, title: 'Discovery Workshop', desc: 'Direct collaborative audit of market positioning, operational culture, and targets.' },
      { step: 2, title: 'Anchor Synthesis', desc: 'Formalizing main narrative anchors, tone curves, and strategic positioning guidelines.' },
      { step: 3, title: 'Playbook Implementation', desc: 'Consolidating the strategic Brand Playbook and training in-house communications teams.' }
    ],
    deliverables: [
      'Comprehensive Brand Narrative Playbook',
      'Audience Engagement Framework Matrix',
      '12-Month Content Outline Strategy',
      'PR Messaging Blueprint'
    ],
    priceRange: '$8,000 - $25,000'
  },
  {
    id: 's3',
    title: 'Creator Empowerment & Coaching',
    iconName: 'Sparkles',
    tagline: 'Rebuilding creative portfolios for authentic authority and expansion.',
    description: 'For personal brands, startups, and elite creators striving to establish self-reliant digital revenue architectures, advanced narrative training, and cinematic systems.',
    benefits: [
      'Pivot from low-return visual algorithms to premium premium client acquisitions.',
      'Master high-fidelity recording paradigms using readily available tools.',
      'Formulate sustainable corporate brand structures and intellectual properties.'
    ],
    process: [
      { step: 1, title: 'System Diagnostics', desc: 'Analyzing existing channels, audience affinity, and system monetization bottlenecks.' },
      { step: 2, title: 'Aesthetic Upgrade', desc: 'Mastering scripting pacing, advanced microphone engineering, and high-contrast color looks.' },
      { step: 3, title: 'Productization launch', desc: 'Structuring premium consulting packages, subscription models, or digital books.' }
    ],
    deliverables: [
      'Detailed Content System Diagnostic',
      'Personal Technical Production Guide',
      'Algorithmic Hook Library (Custom-tailored)',
      '1-on-1 Strategy Video Archive'
    ],
    priceRange: '$5,000 - $12,000'
  },
  {
    id: 's4',
    title: 'Corporate Training & Workshops',
    iconName: 'GraduationCap',
    tagline: 'Empowering employee hubs with professional media communication literacy.',
    description: 'Equip your leaders, HR units, and creative teams with the tools to construct cinematic company statements, streamline project alignment, and lead technical campaigns.',
    benefits: [
      'Drastically reduce external media consulting overheads through internal talent discovery.',
      'Transform traditional business presentations into high-engagement narratives.',
      'Ensure standard media literacy and regulatory alignment across corporate hierarchies.'
    ],
    process: [
      { step: 1, title: 'Pre-Audit Evaluation', desc: 'Checking current internal storytelling skill indexes and hardware resources.' },
      { step: 2, title: 'Interactive Bootcamp', desc: '2 to 3-day high-intensity practical workshops covering script mechanics and editing flows.' },
      { step: 3, title: 'Feedback Pipeline', desc: 'Providing expert feedback cycles on ongoing participant media releases over 30 days.' }
    ],
    deliverables: [
      'Proprietary UNIVERSE8 Workshop Training Manuals',
      'Interactive Case Studies Library',
      'Reusable Storyboard & Audio Blueprints',
      'Post-Workshop Team Competency Certificates'
    ],
    priceRange: '$12,000 - $30,000'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Elizabeth Jenkins',
    role: 'Vice President of Investor Relations',
    company: 'Hyperion Global Technologies',
    quote: 'UNIVERSE8 completely revolutionized how we interface with capital providers. What could have been an opaque scientific whitepaper became an emotional, cinematic journey that directly secured our $45M funding round. Absolute tactical excellence.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't2',
    name: 'Dr. Michael Chen',
    role: 'Director of Advanced Media Initiatives',
    company: 'Summit National Academy',
    quote: 'We spent millions on standard public relations consultants with negligible results. Within four months, UNIVERSE8 formulated an educational narrative system that packed our creative scholarship cohort to maximum capacity. They understand strategy first.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 't3',
    name: 'Alena Rostova',
    role: 'Co-Founder & Lead Counsel',
    company: 'Nexus Open Source Coalition',
    quote: 'The cinematic documentary Pioneers of Logic didn\'t just describe code; it saved an ecosystem. Their vision translated abstract technical parameters into a high-stakes modern narrative. Unparalleled production craft.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  }
];
