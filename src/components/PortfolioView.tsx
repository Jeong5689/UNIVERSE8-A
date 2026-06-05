import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowLeft, Calendar, FileText, CheckCircle2, TrendingUp, HelpCircle, Trophy } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data';
import { PortfolioProject, Category } from '../types';

interface PortfolioViewProps {
  selectedProjectId: string | null;
  onClearSelectedProject: () => void;
  onSelectProject: (id: string | null) => void;
}

export default function PortfolioView({ 
  selectedProjectId, 
  onClearSelectedProject, 
  onSelectProject 
}: PortfolioViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: string[] = [
    'ALL',
    'Brand Storytelling',
    'Corporate Content',
    'Educational Programs',
    'Creator Development',
    'Public Sector Projects',
    'Documentary Production'
  ];

  // Filtering based on Active Tab and Search Keyword
  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    const matchesTab = activeCategory === 'ALL' || project.category === activeCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const activeProject = selectedProjectId 
    ? PORTFOLIO_PROJECTS.find(p => p.id === selectedProjectId)
    : null;

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen pt-28 pb-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 editorial-grid opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Detail Case Study View Modal Overlay */}
        {activeProject ? (
          <div className="space-y-8 animate-fade-in text-left bg-gradient-to-b from-[#0A0A0A] to-black" id="cases-study-detailed-view">
            
            {/* Back to list controller */}
            <div className="flex items-center justify-between border-b border-white/5 pb-6">
              <button
                onClick={onClearSelectedProject}
                id="back-to-portfolio-btn"
                className="flex items-center space-x-2 text-xs font-mono text-gray-400 hover:text-[#D4AF37] transition duration-300 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>BACK TO CASE ARCHIVE</span>
              </button>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                {activeProject.category} // CASE STUDY {activeProject.id.toUpperCase()}
              </span>
            </div>

            {/* Title / Hero Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-[0.2em] block font-bold">
                    CLIENT // {activeProject.client.toUpperCase()}
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
                    {activeProject.title}
                  </h1>
                </div>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed border-l-2 border-[#D4AF37] pl-4 italic font-light">
                  "{activeProject.snippet}"
                </p>

                {/* Micro Metadata Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-[#090909] border border-white/5 p-4 rounded-none">
                    <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                      PROJECT DURATION
                    </div>
                    <div className="text-sm font-semibold text-white mt-1 flex items-center space-x-1.5 font-mono">
                      <Calendar className="w-4 h-4 text-gray-450" />
                      <span>{activeProject.duration}</span>
                    </div>
                  </div>
                  <div className="bg-[#090909] border border-white/5 p-4 rounded-none">
                    <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                      MEASURABLE KEY RESULTS
                    </div>
                    <div className="text-sm font-semibold text-[#D4AF37] mt-1 flex items-center space-x-1.5 font-mono">
                      <TrendingUp className="w-4 h-4" />
                      <span>{activeProject.impactMetric}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Photo Visual */}
              <div className="relative rounded-none overflow-hidden aspect-video border border-white/10 shadow-xl bg-black">
                <img 
                  src={activeProject.coverImage} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Strategic Content Block (Challenge / Strategy / Execution) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
              
              {/* Challenge */}
              <div className="bg-[#090909] border border-white/5 p-8 rounded-none space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-red-500 font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-red-600" />
                  <span>CLIENT CHALLENGE</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                  {activeProject.challenge}
                </p>
              </div>

              {/* Approach */}
              <div className="bg-[#090909] border border-white/5 p-8 rounded-none space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-blue-400 font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-blue-500" />
                  <span>STRATEGIC APPROACH</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                  {activeProject.solution}
                </p>
              </div>

              {/* Execution */}
              <div className="bg-[#090909] border border-white/5 p-8 rounded-none space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
                  <span>CREATIVE EXECUTION</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                  {activeProject.execution}
                </p>
              </div>

            </div>

            {/* Results & Deliverables Showcase */}
            <div className="bg-[#090909] border border-white/5 p-8 sm:p-12 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                <Trophy className="w-4 h-4" />
                <span>CONFIRMED REAL WORLD IMPACT</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeProject.results.map((result, index) => (
                  <div key={index} className="flex space-x-3 items-start bg-black p-4 rounded-none border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-xs leading-relaxed font-light">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Gallery Images */}
            {activeProject.galleryImages && activeProject.galleryImages.length > 0 && (
              <div className="space-y-4 text-left">
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold">
                  CAMERA SETTING RECON ARCHIVE // LENS SELECTIONS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeProject.galleryImages.map((img, idx) => (
                    <div key={idx} className="aspect-video rounded-none overflow-hidden bg-black border border-white/5">
                      <img 
                        src={img} 
                        alt="Recon" 
                        className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Close actions */}
            <div className="text-center pt-8 border-t border-white/5">
              <button
                onClick={onClearSelectedProject}
                className="px-8 py-3 rounded-none border border-white/10 text-white hover:bg-white hover:text-black hover:border-transparent transition-all text-xs font-mono uppercase tracking-widest cursor-pointer"
              >
                CLOSE ACCOUNT DETAIL
              </button>
            </div>

          </div>
        ) : (
          <div className="space-y-12 animate-fade-in text-left">
            
            {/* Header copy */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-[#D4AF37] tracking-[0.3em] block font-bold">
                [ STRATEGY-DRIVEN PRODUCTIONS ]
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
                Cinematic Portfolio
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm max-w-2xl leading-relaxed font-light">
                Filter and explore high-concept media productions that deliver commercial utility. Click any campaign blueprint to inspect the actual target metrics, client challenges, and production approaches.
              </p>
            </div>

            {/* Filter and search layout controls */}
            <div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-center bg-[#090909] p-4 rounded-none border border-white/5">
              {/* Category tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[9px] sm:text-[10px] uppercase tracking-widest font-mono font-bold px-3 sm:px-4 py-2 rounded-none transition-all cursor-pointer ${
                      activeCategory === cat 
                        ? 'bg-[#D4AF37] text-black font-semibold' 
                        : 'text-gray-400 hover:text-white bg-black border border-white/5 hover:bg-[#111]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search entry widget */}
              <div className="relative w-full xl:w-72">
                <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Query brand or industry..."
                  className="w-full bg-black border border-white/10 rounded-none py-2.5 pl-9 pr-4 text-xs font-mono text-white placeholder-gray-650 focus:outline-none focus:border-[#D4AF37] transition"
                />
              </div>
            </div>

            {/* Portfolio Grid layout */}
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20 bg-[#090909] border border-dashed border-white/5 rounded-none">
                <HelpCircle className="w-10 h-10 text-gray-600 mx-auto mb-3" />
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  No productions matched key query parameters
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id} 
                    id={`portfolio-card-${project.id}`}
                    onClick={() => onSelectProject(project.id)}
                    className="bg-[#090909] border border-white/5 hover:border-[#D4AF37]/50 rounded-none overflow-hidden group cursor-pointer transition-all duration-300 transform text-left flex flex-col justify-between"
                  >
                    <div>
                      {/* Thumbnail frame */}
                      <div className="relative aspect-video overflow-hidden bg-black">
                        <img 
                          src={project.coverImage} 
                          alt={project.title} 
                          className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 z-10 bg-black px-3 py-1 rounded-none text-[8px] font-mono uppercase tracking-widest text-[#D4AF37] border border-white/5 font-bold">
                          {project.category}
                        </div>
                      </div>

                      {/* Summary copy */}
                      <div className="p-6 space-y-3">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono text-gray-500 block">
                            CLIENT // {project.client.toUpperCase()}
                          </span>
                          <h3 className="text-base font-display font-bold uppercase text-white group-hover:text-[#D4AF37] transition duration-200 font-bold">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 font-light">
                          {project.snippet}
                        </p>
                      </div>
                    </div>

                    {/* Footer alignment */}
                    <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-550 text-gray-500">
                      <span>METRIC IMPACT:</span>
                      <span className="text-white font-bold uppercase">{project.impactMetric}</span>
                    </div>

                  </div>
                ))}
              </div>
            )}

            {/* Aesthetic bottom indicator */}
            <div className="text-center pt-10 text-gray-550 text-gray-650 font-mono text-[9px] uppercase tracking-widest select-none font-bold">
              // NO REPRODUCTION AND USE ALLOWED WITHOUT EXPLICIT PERMISSION FROM UNIVERSE8 //
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
