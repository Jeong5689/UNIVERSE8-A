import React, { useState } from 'react';
import { Camera, Calendar, Award, Star, Quote, ChevronRight, GraduationCap, Compass, HelpCircle, FileText, Globe } from 'lucide-react';

export default function AboutView() {
  const [activeTab, setActiveTab] = useState<'story' | 'philosophy' | 'experience' | 'expertise'>('story');

  const experienceTimeline = [
    {
      year: '2022 - Present',
      role: 'Founder & Principal Creative',
      institution: 'UNIVERSE8 Strategic Media',
      description: 'Consulting for venture capital firms, heavy industrial manufacturing networks, and digital-native academies on strategic narrative design programs.'
    },
    {
      year: '2019 - 2022',
      role: 'Director of Brand Documentaries',
      institution: 'Metropolis Cinematic Agency',
      description: 'Directed 40+ brand films alongside industrial storytelling playbooks, yielding a cumulative 220% increase in investor leads for software partnerships.'
    },
    {
      year: '2016 - 2019',
      role: 'Senior Strategist & Screenwriter',
      institution: 'Global Narrative Labs',
      description: 'Constructed corporate positioning and executive communications playbooks for Series-A technology startups across Geneva, Tokyo, and San Francisco.'
    },
    {
      year: '2014 - 2016',
      role: 'Film Editor & Color Master',
      institution: 'Independent Creative Labs',
      description: 'Studied digital workflows, camera arrays, ambient sound synthesis, and calibrated luxury color grading pipelines.'
    }
  ];

  const expertSkills = [
    { name: 'STRATEGIC STORYBOARD DESIGN', level: '100%' },
    { name: 'ANAMORPHIC CAMERA ARRAYS & DIRECTION', level: '95%' },
    { name: 'EXECUTIVE COMMUNICATION COACHING', level: '100%' },
    { name: 'ALGORITHMIC AUDIENCE POSITIONING', level: '90%' },
    { name: 'POST-Grading LUXURY REDMOND WORKFLOWS', level: '95%' }
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen pt-28 pb-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 editorial-grid opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header copy */}
        <div className="text-left space-y-4">
          <span className="text-xs font-mono uppercase text-[#D4AF37] tracking-[0.3em] block font-bold">
            [ MEET THE CREATIVE ]
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
            The Mind Behind UNIVERSE8
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-2xl leading-relaxed font-light">
            The intersection of cinematic beauty and tactical investment strategy. We analyze company matrices to build media campaigns that produce measurable impact.
          </p>
        </div>

        {/* Brand identity split screen layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Direct Quote CARD */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <div className="bg-[#090909] border border-white/5 rounded-none p-6 relative overflow-hidden group">
              <div className="absolute top-4 right-4 z-20 bg-black/80 px-2.5 py-1 rounded-none text-[8px] font-mono uppercase tracking-widest text-[#D4AF37] border border-white/10">
                // PRINCIPAL FOUNDER
              </div>
              
              {/* Portrait frame */}
              <div className="aspect-[4/5] rounded-none overflow-hidden bg-gray-950 relative mb-6 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                  alt="UNIVERSE8 Founder Portrait" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vintage camera glass lens overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-transparent p-6 text-left">
                  <span className="text-[10px] font-mono text-gray-450 text-gray-300 tracking-widest uppercase font-semibold">DIRECTOR / STRATEGIST</span>
                  <h3 className="text-xl font-display font-bold text-white block mt-1">S. J. PARK</h3>
                </div>
              </div>

              {/* Founder signature core credentials quote */}
              <div className="space-y-4 text-left">
                <div className="flex text-[#D4AF37] opacity-60">
                  <Quote className="w-8 h-8 shrink-0" />
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic font-light pr-4">
                  "Traditional marketing models are flat-out broken because they prioritize style over commercial intent. At UNIVERSE8, we begin with deep market alignment, extracting narrative beats that move viewers post-investment."
                </p>
                
                {/* Micro tech specs */}
                <div className="pt-4 border-t border-white/5 grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-gray-500 uppercase">
                  <div>
                    <span className="text-[#D4AF37] block font-bold">ARRI RED</span>
                    <span>CAMERA</span>
                  </div>
                  <div>
                    <span className="text-[#D4AF37] block font-bold font-display">140+</span>
                    <span>PRODUCTIONS</span>
                  </div>
                  <div>
                    <span className="text-[#D4AF37] block font-bold font-display">90+</span>
                    <span>WORKSHOPS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tabs Content */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8 text-left bg-[#090909] border border-white/5 p-6 sm:p-10 rounded-none">
            {/* Tabs Controller */}
            <div className="flex border-b border-white/5 gap-2 flex-wrap pb-4">
              {([
                { id: 'story', label: 'FOUNDER STORY' },
                { id: 'philosophy', label: 'PHILOSOPHY & MISSION' },
                { id: 'experience', label: 'EXPERIENCE INDEX' },
                { id: 'expertise', label: 'CORE COMPETENCY' }
              ] as const).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-[9px] sm:text-xs font-mono uppercase tracking-widest px-4 py-2.5 rounded-none transition cursor-pointer ${
                    activeTab === tab.id 
                      ? 'bg-[#D4AF37]/5 text-[#D4AF37] border border-[#D4AF37]/30 font-bold' 
                      : 'text-gray-500 hover:text-white hover:bg-[#111]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB 1: FOUNDER STORY */}
            {activeTab === 'story' && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    The Genesis of UNIVERSE8
                  </h3>
                  <div className="w-12 h-[1px] bg-[#D4AF37]" />
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                  Before formulating UNIVERSE8, I operated inside conventional media firms where the ultimate metric was simply "how pretty is this frame?". We would construct breathtakingly styled pieces that, unfortunately, delivered zero transactional utility to the corporations funding them.
                </p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                  I realized true media mastery isn't simply visual — it is transactional. I launched UNIVERSE8 to bridge the absolute divide between creative cinema production and rigorous business strategy. By integrating corporate positioning, customer empathy frameworks, and high-fidelity video playbooks, we enable organizations to capture B2B interest on a massive scale.
                </p>
                <div className="p-4 bg-black border border-white/5 rounded-none flex items-center space-x-3 text-xs font-mono text-gray-400">
                  <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Serving global businesses across Zurich, Tokyo, Seoul, and San Francisco.</span>
                </div>
              </div>
            )}

            {/* TAB 2: PHILOSOPHY */}
            {activeTab === 'philosophy' && (
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    Mission, Vision & Core Positioning
                  </h3>
                  <div className="w-12 h-[1px] bg-[#D4AF37]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2 p-5 bg-black border border-white/5 rounded-none">
                    <span className="text-[10px] font-mono text-[#D4AF37] font-bold block uppercase tracking-widest">// THE CORE MISSION:</span>
                    <p className="text-gray-300 text-xs leading-relaxed font-light">
                      To empower companies and elite personal creators with strategic storytelling framework and high-concept video executions that command authority and fuel B2B growth.
                    </p>
                  </div>
                  <div className="space-y-2 p-5 bg-black border border-white/5 rounded-none">
                    <span className="text-[10px] font-mono text-emerald-450 font-bold block uppercase tracking-widest text-[#3B82F6]">// THE FUTURE VISION:</span>
                    <p className="text-gray-300 text-xs leading-relaxed font-light">
                      Establishing a globally distributed production framework where visual excellence directly integrates with commercial models, reducing narrative garbage worldwide.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold">
                    OUR CORE BRAND VALUES:
                  </h4>
                  <ul className="text-xs font-mono text-gray-400 space-y-2.5">
                    <li className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-[#D4AF37]" />
                      <span><strong>Strategy First:</strong> Narrative outlines are validated against financial objectives first.</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-[#D4AF37]" />
                      <span><strong>Storytelling Excellence:</strong> Character-driven arcs with extreme lighting calibrations.</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-[#D4AF37]" />
                      <span><strong>Creator Empowerment:</strong> Training modern builders to build sustainable businesses.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 3: EXPERIENCE */}
            {activeTab === 'experience' && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    The Strategic Journey
                  </h3>
                  <div className="w-12 h-[1px] bg-[#D4AF37]" />
                </div>

                <div className="relative border-l border-white/5 pl-4 ml-2 space-y-6">
                  {experienceTimeline.map((item, key) => (
                    <div key={key} className="space-y-1 relative text-left">
                      {/* Interactive dot */}
                      <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-[#D4AF37] rounded-none border border-black" />
                      <span className="text-[10px] font-mono text-[#D4AF37] font-bold">{item.year}</span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">{item.role}</h4>
                      <span className="text-[10px] font-mono text-gray-500 uppercase">{item.institution}</span>
                      <p className="text-gray-400 text-xs leading-relaxed pt-1 font-light">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: EXPERTISE STATS */}
            {activeTab === 'expertise' && (
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">
                    Core Competency Index
                  </h3>
                  <div className="w-12 h-[1px] bg-[#D4AF37]" />
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                  My technical capability spans high-fidelity cinematic equipment setups (RED, ARRI, anamorphic glass primes), script screenplay frameworks (hero pathing structures), structural company funnels, and creator system pipelines.
                </p>

                <div className="space-y-4">
                  {expertSkills.map((skill, key) => (
                    <div key={key} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono uppercase text-gray-400">
                        <span>{skill.name}</span>
                        <span className="text-[#D4AF37] font-bold">{skill.level}</span>
                      </div>
                      <div className="w-full h-1 bg-black rounded-none overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#D4AF37] to-[#3B82F6]" 
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-black border border-white/5 text-[10px] font-mono text-gray-500">
                  ⚡ ALL AUDITS COMPLIANT WITH COGNITIVE SCIENCE ENGAGEMENT BEATS.
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
