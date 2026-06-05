import React, { useState } from 'react';
import { ArrowRight, Sparkles, Trophy, Video, Users, Play, Radio, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { PORTFOLIO_PROJECTS, TESTIMONIALS, IMPACT_METRICS } from '../data';

interface HomeViewProps {
  onViewChange: (view: string) => void;
  onSelectProject: (projectId: string) => void;
}

export default function HomeView({ onViewChange, onSelectProject }: HomeViewProps) {
  const [cinematicStyle, setCinematicStyle] = useState<'netflix' | 'corporate' | 'scifi'>('netflix');
  const [emailInput, setEmailInput] = useState('');
  const [newsSubmitted, setNewsSubmitted] = useState(false);

  // Style helpers for Hero Atmosphere
  const atmosphereStyles = {
    netflix: {
      shadow: 'shadow-[#D4AF37]/10',
      border: 'border-[#D4AF37]/30',
      bg: 'from-[#0F0A02] via-[#0A0A0A] to-[#0A0A0A]',
      accentText: 'text-[#D4AF37]',
      btnBg: 'bg-[#D4AF37] hover:bg-[#B59124] text-black',
      glow: 'after:bg-[#D4AF37]/10',
      badge: 'Gold Accent Style',
      photoUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80'
    },
    corporate: {
      shadow: 'shadow-[#3B82F6]/10',
      border: 'border-[#3B82F6]/30',
      bg: 'from-[#030B1C] via-[#0A0A0A] to-[#0A0A0A]',
      accentText: 'text-[#3B82F6]',
      btnBg: 'bg-[#3B82F6] hover:bg-[#2563EB] text-white',
      glow: 'after:bg-[#3B82F6]/10',
      badge: 'Corporate Blue Style',
      photoUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
    },
    scifi: {
      shadow: 'shadow-[#10B981]/10',
      border: 'border-[#10B981]/30',
      bg: 'from-[#020F0D] via-[#0A0A0A] to-[#0A0A0A]',
      accentText: 'text-[#10B981]',
      btnBg: 'bg-[#10B981] hover:bg-[#059669] text-black',
      glow: 'after:bg-[#10B981]/10',
      badge: 'Matrix Green Style',
      photoUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80'
    }
  };

  const currentTheme = atmosphereStyles[cinematicStyle];

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsSubmitted(true);
      setTimeout(() => {
        setEmailInput('');
      }, 3000);
    }
  };

  // We display first 3 projects for featured work
  const featured = PORTFOLIO_PROJECTS.slice(0, 3);

  const mockPartnerLogos = [
    { name: 'Apex Capital', type: 'Investment Group' },
    { name: 'Vanguard Corp', type: 'Legacy Logistics' },
    { name: 'Hyperion Bio', type: 'Green Engineering' },
    { name: 'Summit Academics', type: 'Private Educational Institution' },
    { name: 'Metropolitan Art', type: 'Public Art Endowment' }
  ];

  return (
    <div className="text-white">
      
      {/* 1. HERO SECTION */}
      <section 
        id="hero-section" 
        className={`relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-b ${currentTheme.bg} transition-all duration-700 overflow-hidden px-4`}
      >
        {/* Glow backdrop */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none filter blur-[150px] rounded-full opacity-45 mix-blend-screen transition-all ${currentTheme.glow}`} />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Main Copy (Left Col) */}
          <div className="lg:col-span-7 space-y-8 text-left" id="hero-main-content">
            {/* Tone selector badges */}
            <div className="flex items-center space-x-3 flex-wrap gap-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded-none font-mono bg-[#D4AF37]/5">
                CREATOR & BRAND SPECIALIST
              </span>
              <div className="flex bg-[#111827]/70 border border-gray-800 p-1 rounded-none text-[9px] font-mono tracking-widest gap-1">
                {(['netflix', 'corporate', 'scifi'] as const).map((style) => (
                  <button
                    key={style}
                    onClick={() => setCinematicStyle(style)}
                    className={`px-2 py-1 rounded-none transition-all duration-300 uppercase ${
                      cinematicStyle === style 
                        ? 'bg-gray-900 text-white border border-gray-800 font-semibold' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Title / Slogan */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <span className="h-[1px] w-8 bg-[#D4AF37]"></span>
                <span className="text-[10px] text-[#3B82F6] font-bold tracking-widest uppercase font-display">STRATEGIC MEDIA PRODUCTION</span>
              </div>
              <h1 className="text-5xl sm:text-[84px] font-display tracking-tighter font-extrabold uppercase text-white leading-[0.85] mb-8">
                WHERE STRATEGY<br />
                <span className={`bg-gradient-to-r ${cinematicStyle === 'netflix' ? 'from-[#D4AF37] to-[#FFF]' : cinematicStyle === 'corporate' ? 'from-[#3B82F6] to-[#60A5FA]' : 'from-[#10B981] to-[#34D399]'} bg-clip-text text-transparent`}>
                  MEETS STORYTELLING
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
                Transforming complex ideas into tangible corporate impact through cinematic brand campaigns, expert communications consulting, and structured creator academies.
              </p>
            </div>

            {/* CTA Controls */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5" id="hero-actions-container">
              <button
                onClick={() => onViewChange('portfolio')}
                id="hero-view-portfolio-btn"
                className={`py-4 px-8 rounded-none text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 ${currentTheme.btnBg} flex items-center justify-center space-x-2 cursor-pointer`}
              >
                <span>VIEW PORTFOLIO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onViewChange('contact')}
                id="hero-start-project-btn"
                className="py-4 px-8 rounded-none text-xs font-mono text-gray-300 hover:text-white border border-gray-800 hover:border-gray-600 bg-black/40 backdrop-blur-sm transition-all duration-300 uppercase tracking-widest text-center cursor-pointer"
              >
                START A PROJECT
              </button>
            </div>

            {/* Fine print */}
            <div className="flex items-center space-x-5 text-gray-650 font-mono text-[10px]">
              <div className="flex items-center space-x-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>STUDIO BROADCAST LIVE</span>
              </div>
              <span>•</span>
              <span>100% OFF-LINE PRIVATE NETWORKS</span>
            </div>
          </div>

          {/* Interactive Screen Preview (Right Col) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0" id="hero-interactive-screen">
            <div className={`relative rounded-none overflow-hidden border ${currentTheme.border} ${currentTheme.shadow} transition-all duration-700 bg-gray-950 p-2.5`}>
              <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md px-2.5 py-1 text-[8px] font-mono tracking-widest border border-white/5 flex items-center space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-red-650 animate-pulse shrink-0" />
                <span className="text-red-500 font-bold">REC: 00:24:15:02</span>
              </div>
              <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md px-2.5 py-1 text-[8px] font-mono tracking-widest border border-white/5 text-gray-450 text-gray-400">
                4K RAW // 24FPS
              </div>
              
              {/* Main Preview Image */}
              <div className="relative aspect-video rounded-none overflow-hidden bg-gray-900 group">
                <img 
                  src={currentTheme.photoUrl} 
                  alt="UNIVERSE8 Cinematic Suite Preview" 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Lens overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />
                
                {/* Stylized Grid Lines */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <div className="w-full h-[1px] bg-white"></div>
                  <div className="h-full w-[1px] bg-white absolute"></div>
                </div>

                {/* Audio Level simulator */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between h-8 pointer-events-none">
                  <div className="flex space-x-0.5 items-end h-full">
                    {[12, 18, 8, 22, 14, 28, 4, 16, 20, 24, 6, 12].map((h, idx) => (
                      <span 
                        key={idx} 
                        style={{ height: `${h}px` }} 
                        className={`w-0.5 rounded-t transition-all duration-500 ${idx % 2 === 0 ? 'bg-[#D4AF37]' : 'bg-[#3B82F6]'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                    CINEMATIC SEQUENCE // ACTIVE
                  </span>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="mt-3 px-2 flex justify-between items-center text-[10px] font-mono text-gray-500">
                <span className="text-[#D4AF37] font-bold">FOCUS MODE: CINEMATIC</span>
                <span>SCENE 08: THE BRAND STORY</span>
              </div>
            </div>
            
            {/* Visual decorative absolute lines */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-gray-950 pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-gray-950 pointer-events-none" />
          </div>

        </div>
      </section>

      {/* 2. IMPACT METRICS SECTION */}
      <section className="bg-[#0A0A0A] py-16 border-y border-white/10 relative" id="impact-metrics-section">
        <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-3 mb-12">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#D4AF37] uppercase font-bold block">
              // PROVEN RESULTS INDEX
            </span>
            <h2 className="text-3xl font-display font-light tracking-tight text-white uppercase">
              MEASURABLE COMPLIANCE & IMPACT
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/5 border border-white/5 bg-black p-6">
            {IMPACT_METRICS.map((metric) => (
              <div key={metric.id} className="space-y-2 p-6 text-center" id={`metric-${metric.id}`}>
                <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter font-display">
                  <span className="text-[#D4AF37]">{metric.value}</span>
                </div>
                <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-relaxed">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY UNIVERSE8 SECTION (THREE PILLARS) */}
      <section className="py-24 bg-[#0A0A0A] border-b border-white/10 relative px-4" id="why-universe8-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] block font-bold">
              [ CORE FRAMEWORK ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white">
              Strategic Media Pillars
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto" />
            <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
              We reject the notion of creating media for simple aesthetic vanity. Every camera angle, storyboard beat, and personal coaching session directly aligns with target business growth paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Strategy */}
            <div className="bg-[#090909] rounded-none border border-white/5 p-8 space-y-6 hover:border-[#D4AF37]/50 transition-all duration-300 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none rounded-bl-full" />
              <div className="w-12 h-12 rounded-none bg-black border border-white/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="text-md font-bold text-white tracking-[0.15em] font-display">01 // STRATEGY</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                Developing detailed, goal-driven communications and positioning playbooks custom-tailored to B2B audiences, strategic institutional investors, and capital partners long before hitting prompt capture bounds.
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center text-[10px] font-mono text-[#D4AF37] group-hover:translate-x-2 transition-transform duration-300">
                <span>Core Business Alignment</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>

            {/* Pillar 2: Storytelling */}
            <div className="bg-[#090909] rounded-none border border-white/5 p-8 space-y-6 hover:border-[#3B82F6]/50 transition-all duration-300 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#3B82F6]/5 to-transparent pointer-events-none rounded-bl-full" />
              <div className="w-12 h-12 rounded-none bg-black border border-white/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#3B82F6]" />
              </div>
              <h3 className="text-md font-bold text-white tracking-[0.15em] font-display">02 // STORYTELLING</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                We design narrative structures that inspire extreme viewer focus, utilizing character-driven storyboards and emotional resonance guidelines to make complex scientific blueprints immediately understood.
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center text-[10px] font-mono text-[#3B82F6] group-hover:translate-x-2 transition-transform duration-300">
                <span>Narrative Resonance Matrix</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>

            {/* Pillar 3: Media Production */}
            <div className="bg-[#090909] rounded-none border border-white/5 p-8 space-y-6 hover:border-emerald-500/50 transition-all duration-300 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none rounded-bl-full" />
              <div className="w-12 h-12 rounded-none bg-black border border-white/10 flex items-center justify-center">
                <Video className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-md font-bold text-white tracking-[0.15em] font-display">03 // MEDIA PRODUCTION</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                Capturing stunning corporate environments and executive leaders using gold-standard cinema gear, professional lighting rigs, and state-of-the-art spatial post-production suites.
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center text-[10px] font-mono text-emerald-450 group-hover:translate-x-2 transition-transform duration-300">
                <span>Cinematic Deliverables Index</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>

          </div>

        </div>
      </section>      {/* 4. FEATURED WORK PREVIEW */}
      <section className="py-24 bg-black border-t border-white/10 relative px-4" id="featured-work-section">
        <div className="absolute inset-0 editorial-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] block font-bold">
                [ VISUAL EVIDENCE ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white">
                Featured Strategic Works
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm max-w-lg font-light leading-relaxed">
                A highly curated look at media campaigns that transformed technology funds, academic enrollment metrics, and cross-platform communities.
              </p>
            </div>
            <button
              onClick={() => onViewChange('portfolio')}
              className="group flex items-center space-x-2 bg-[#090909] hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] border border-white/10 px-6 py-3 rounded-none text-xs font-mono uppercase tracking-widest transition-all duration-300 text-left shrink-0 cursor-pointer"
              id="view-all-portfolio-btn"
            >
              <span>VIEW ALL PRODUCTIONS</span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((project) => (
              <div 
                key={project.id} 
                id={`featured-card-${project.id}`}
                className="bg-[#090909] border border-white/5 rounded-none overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  {/* Image Cover */}
                  <div className="relative aspect-video overflow-hidden bg-gray-950 rounded-none">
                    <img 
                      src={project.coverImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 z-10 bg-black/85 px-3 py-1 rounded-none text-[8px] font-mono uppercase tracking-widest text-[#D4AF37] border border-white/10">
                      {project.category}
                    </div>
                  </div>

                  {/* Info Block */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-gray-500 uppercase block">
                        CLIENT // {project.client.toUpperCase()}
                      </span>
                      <h3 className="text-lg font-display font-medium text-white group-hover:text-[#D4AF37] transition-all">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 font-light">
                      {project.snippet}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono leading-none">
                    <span className="text-gray-500">IMPACT INDICATOR:</span>
                    <span className="text-white font-bold">{project.impactMetric}</span>
                  </div>

                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="w-full py-2.5 rounded-none border border-white/10 hover:border-[#D4AF37]/55 hover:bg-[#D4AF37]/5 text-white font-mono text-[9px] uppercase tracking-widest transition-all duration-300 cursor-pointer"
                    id={`view-details-${project.id}`}
                  >
                    INVESTIGATE APPROACH & DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TRUST INDICATOR - PARTNER LOGOS */}
      <section className="py-16 bg-[#080808] border-y border-white/10 relative" id="partners-section">
        <div className="absolute inset-0 editorial-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8 relative z-10">
          <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-gray-505 text-gray-400 font-semibold block">
            ESTABLISHED TRACK RECORD & TRUSTED BY EXECUTIVE GROUPS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border-l border-white/5 border-t border-white/5">
            {mockPartnerLogos.map((logo, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 border-r border-b border-white/5 hover:bg-[#0A0A0A] transition-colors">
                <span className="text-xs sm:text-sm font-display font-semibold tracking-wider text-gray-300 hover:text-[#D4AF37] transition-colors">{logo.name}</span>
                <span className="text-[8px] font-mono text-gray-550 text-gray-500 tracking-widest uppercase mt-1">{logo.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#0A0A0A] border-b border-white/10 px-4 text-left relative" id="testimonials-section">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] block font-bold">
              [ CLIENT COGNITION ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white">
              Endorsements of Excellence
            </h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-[#090909] rounded-none border border-white/5 p-8 flex flex-col justify-between hover:border-white/15 transition-all duration-300 relative"
                id={`testimonial-card-${testimonial.id}`}
              >
                <div className="absolute top-6 right-6 opacity-5">
                  <MessageSquareQuote className="w-12 h-12 text-[#D4AF37]" />
                </div>
                
                <div className="space-y-4 relative z-10 text-left">
                  {/* Stars indicators */}
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-[#D4AF37] text-[10px]">★</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed italic pr-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-none overflow-hidden bg-gray-900 border border-white/10 shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-widest uppercase block font-display">{testimonial.name}</h4>
                    <span className="text-[9px] font-mono text-gray-550 text-gray-500 block leading-tight mt-1">{testimonial.role}, {testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. BROADCAST NEWSLETTER SIGNUP */}
      <section className="py-20 bg-black relative px-4 text-center border-t border-white/10" id="newsletter-section">
        {/* Abstract background elements */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3B82F6]/5 filter blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#D4AF37]/5 filter blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <div className="w-12 h-12 rounded-none bg-black border border-white/10 mx-auto flex items-center justify-center">
            <Radio className="w-5 h-5 text-[#D4AF37] animate-pulse" />
          </div>
          
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] block font-bold">
              [ THE UNIVERSE8 BROADCAST ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white tracking-tight">
              Get Strategic Storytelling Insights
            </h2>
            <p className="text-gray-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed font-light">
              Join elite executive leaders, founders, and media experts receiving bi-weekly intelligence digests dissecting global brand algorithms, video lighting aesthetics, and content funnel optimization.
            </p>
          </div>

          {newsSubmitted ? (
            <div className="bg-[#090909] border border-[#3B82F6]/30 text-[#60A5FA] p-4 rounded-none max-w-md mx-auto text-[9px] font-mono tracking-widest uppercase">
              ✓ Subscribed to UNIVERSE8 Intelligence Broadcast
            </div>
          ) : (
            <form onSubmit={handleNewsSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Secure email coordinates (e.g. CEO@venture.com)"
                className="flex-1 px-4 py-3 bg-black border border-white/10 rounded-none text-xs font-mono text-white placeholder-gray-650 focus:outline-none focus:border-[#D4AF37] transition"
              />
              <button
                type="submit"
                id="newsletter-subscribe-btn"
                className="px-6 py-3 bg-white text-black hover:bg-[#D4AF37] transition duration-300 rounded-none text-xs font-mono font-bold tracking-widest uppercase shrink-0 cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </form>
          )}

          <div className="text-[9px] font-mono text-gray-550 text-gray-500 tracking-wider">
            Secure delivery guaranteed. Zero junk, absolute tactical value only.
          </div>
        </div>
      </section>

    </div>
  );
}
