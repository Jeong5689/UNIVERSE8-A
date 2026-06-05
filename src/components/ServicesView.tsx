import React, { useState } from 'react';
import { Check, ArrowRight, Layers, Sliders, DollarSign, Calculator, ChevronRight, HelpCircle, FileText, Send, Calendar, Clock } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ServicesViewProps {
  onViewChange: (view: string) => void;
}

export default function ServicesView({ onViewChange }: ServicesViewProps) {
  const [activeTab, setActiveTab] = useState<string>(SERVICES_DATA[0].id);
  
  // Quote calculator states
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);
  const [projectScale, setProjectScale] = useState<number>(2); // 1 = Small, 2 = Medium, 3 = Enterprise
  const [hasAnamorphic, setHasAnamorphic] = useState<boolean>(true);
  const [hasScripting, setHasScripting] = useState<boolean>(true);
  const [numberOfCuts, setNumberOfCuts] = useState<number>(3);

  // Simple pricing calculation logic
  const calculateEstimate = () => {
    let basePrice = 8000;
    const selectedService = SERVICES_DATA.find(s => s.id === selectedServiceId);
    
    if (selectedServiceId === 's1') basePrice = 15000; // Media Production
    if (selectedServiceId === 's2') basePrice = 8000;  // Brand Strategy
    if (selectedServiceId === 's3') basePrice = 5000;  // Creator coaching
    if (selectedServiceId === 's4') basePrice = 12000; // Corporate Training

    // Multiplier for scale
    const scaleMultiplier = projectScale === 1 ? 0.7 : projectScale === 2 ? 1.0 : 2.5;
    let computed = basePrice * scaleMultiplier;

    // Adds-on
    if (hasAnamorphic) computed += 3500;
    if (hasScripting) computed += 1800;
    computed += (numberOfCuts - 1) * 1200;

    return Math.round(computed);
  };

  const estimatedPrice = calculateEstimate();
  const currentService = SERVICES_DATA.find(s => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen pt-28 pb-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 editorial-grid opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header copy */}
        <div className="text-left space-y-4 max-w-3xl">
          <span className="text-xs font-mono uppercase text-[#D4AF37] tracking-[0.3em] block font-bold">
            [ OUTCOMES GUARANTEED ]
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
            Solutions Designed for Growth
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-2xl leading-relaxed font-light">
            Every digital product, narrative guidebook, or corporate bootcamp is custom-engineered to transform raw visibility metrics into concrete brand conversion rates.
          </p>
        </div>

        {/* Dynamic Service tab layout block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tab buttons (Left Side) */}
          <div className="lg:col-span-12 xl:col-span-4 flex flex-col space-y-3">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest text-left pl-2 mb-2 block font-bold">
              // CHOOSE BUSINESS SECTOR
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
              {SERVICES_DATA.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-5 rounded-none border transition-all duration-300 relative group flex items-start space-x-4 cursor-pointer ${
                    activeTab === service.id 
                      ? 'bg-[#0E0E0E] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/5' 
                      : 'bg-[#090909] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-none shrink-0 border flex items-center justify-center ${
                    activeTab === service.id ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-white/10 text-gray-500'
                  }`}>
                    <span className="text-xs font-mono">{service.id.toUpperCase()}</span>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-display font-bold tracking-wide uppercase text-white block">
                      {service.title}
                    </h4>
                    <span className="text-[10px] font-mono text-gray-500 block mt-1 tracking-tight truncate max-w-[200px]">
                      {service.tagline}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tab content (Right Side Detail panel) */}
          <div className="lg:col-span-12 xl:col-span-8 bg-[#090909] border border-white/5 rounded-none p-6 sm:p-10 space-y-8 text-left relative overflow-hidden animate-fade-in" id="services-details-panel">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-gray-900/10 to-transparent pointer-events-none" />
            
            {/* Header description */}
            <div className="space-y-3">
              <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/5 border border-[#D4AF37]/20 px-3 py-1 rounded-none inline-block font-bold">
                INVESTMENT RANGE: {currentService.priceRange}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white tracking-tight">
                {currentService.title}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
                {currentService.description}
              </p>
            </div>

            {/* Core benefits block */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold">
                TRANSFORMATIONAL ADVANTAGES:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex space-x-2.5 items-start bg-black border border-white/5 p-4 rounded-none">
                    <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-xs leading-relaxed font-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timelined Strategic Process Flow */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold">
                DELIVERY PROTOCOL FLOW:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {currentService.process.map((step) => (
                  <div key={step.step} className="bg-black p-5 rounded-none border border-white/5 text-left relative space-y-2">
                    <div className="w-6 h-6 rounded-none bg-black border border-[#D4AF37]/45 flex items-center justify-center text-[10px] text-[#D4AF37] font-mono font-bold">
                      {step.step}
                    </div>
                    <h4 className="text-xs font-display font-bold text-white uppercase tracking-wider block">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-[11px] leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables lists */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold">
                FORMAL CONTRACTUAL DELIVERABLES:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono text-gray-300">
                {currentService.deliverables.map((deliv, key) => (
                  <li key={key} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-white/5">
              <button
                onClick={() => onViewChange('contact')}
                id={`onboard-${currentService.id}`}
                className="px-6 py-3.5 bg-white text-black hover:bg-[#D4AF37] rounded-none text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto cursor-pointer border border-white/10 hover:border-transparent"
              >
                <span>ONBOARD FOR THIS SOLUTION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* DYNAMIC CALCULATOR ZONE */}
        <div className="bg-[#090909] border border-white/5 rounded-none p-8 sm:p-12 space-y-10 text-left relative overflow-hidden" id="quote-calculator-container">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3B82F6]/5 filter blur-[100px] rounded-none pointer-events-none" />
          
          <div className="text-left space-y-2 border-b border-white/5 pb-6">
            <div className="flex items-center space-x-2 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
              <Calculator className="w-4 h-4" />
              <span>INTERACTIVE SCOPING LABORATORY</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-display font-bold uppercase text-white tracking-tight">
              Pre-Commission Estimation Board
            </h2>
            <p className="text-gray-450 text-xs font-light max-w-xl">
              Finetune parameters inside UNIVERSE8's delivery guidelines to generate instant budgetary approximations for strategic media integration contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            
            {/* Controls (Left Col) */}
            <div className="lg:col-span-12 xl:col-span-6 space-y-6">
              
              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block font-bold">
                  Select Core Solution:
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-black text-xs font-mono text-white p-3 border border-white/10 rounded-none focus:outline-none focus:border-[#D4AF37]"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title.toUpperCase()} (Base: {s.priceRange})
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Scale */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase text-gray-500 font-bold">
                  <span>Draft Scale & Volume:</span>
                  <span className="text-[#3B82F6] font-bold">
                    {projectScale === 1 ? 'LOCAL CAPTURE (STARTUP)' : projectScale === 2 ? 'CORE REGIONAL (GROWTH)' : 'GLOBAL SYNDICATION (ENTERPRISE)'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  value={projectScale}
                  onChange={(e) => setProjectScale(parseInt(e.target.value))}
                  className="w-full text-[#3B82F6] bg-[#0A0A0A] accent-[#D4AF37] h-1.5 rounded-none cursor-pointer"
                />
              </div>

              {/* Advanced Cinematic Options */}
              <div className="space-y-4 pt-2 text-left">
                <label className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block font-bold">
                  Technical Layer Selections:
                </label>
                
                <div className="flex items-center justify-between p-3 bg-black border border-white/5 rounded-none">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wide text-white block">ANAMORPHIC CINEMA LENS PACKAGE</span>
                    <span className="text-[10px] font-mono text-gray-550 uppercase tracking-widest text-gray-500 block mt-0.5">8K Ultra widescreen formatting</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={hasAnamorphic}
                    onChange={(e) => setHasAnamorphic(e.target.checked)}
                    className="w-4 h-4 bg-black border-white/10 rounded-none accent-[#D4AF37] cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-black border border-white/5 rounded-none">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wide text-white block">EXECUTIVE SCRIPTING & COMMUNICATIONS</span>
                    <span className="text-[10px] font-mono text-gray-550 uppercase tracking-widest text-gray-500 block mt-0.5">Full storyboard playbooks</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={hasScripting}
                    onChange={(e) => setHasScripting(e.target.checked)}
                    className="w-4 h-4 bg-black border-white/10 rounded-none accent-[#D4AF37] cursor-pointer"
                  />
                </div>
              </div>

              {/* Volume of deliverables */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase font-bold">
                  <span>Custom Short-Form Deliverables:</span>
                  <span className="text-white font-bold">{numberOfCuts} Cuts & Micro-formats</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 5].map((cuts) => (
                    <button
                      key={cuts}
                      type="button"
                      onClick={() => setNumberOfCuts(cuts)}
                      className={`py-2 text-[10px] font-mono rounded-none border transition cursor-pointer ${
                        numberOfCuts === cuts 
                          ? 'bg-[#D4AF37]/5 border-[#D4AF37] text-[#D4AF37] font-bold' 
                          : 'bg-black border-white/5 text-gray-400 hover:border-white/10'
                      }`}
                    >
                      {cuts} {cuts === 1 ? 'Cut' : 'Cuts'}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Estimates Board Output (Right Col) */}
            <div className="lg:col-span-12 xl:col-span-6 bg-black border border-white/10 p-8 rounded-none flex flex-col justify-between" id="calculator-result-panel">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block font-bold">
                    RECOMMENDED SCOPING FORMULA
                  </span>
                  <p className="text-gray-300 text-xs mt-2 italic font-light">
                    Based on your selected scale, we draft a custom narrative treatment designed to achieve instant trust with investors.
                  </p>
                </div>

                <div className="space-y-2 pl-4 border-l-2 border-[#D4AF37] text-left">
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">ESTIMATED LAUNCH BUDGET</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37] tracking-tight font-mono flex items-center">
                    <DollarSign className="w-5 h-5 mr-1 text-[#D4AF37]" />
                    <span>{estimatedPrice.toLocaleString()}+</span>
                  </div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase block tracking-wide">
                    (Standard retainer, custom payment schedules available)
                  </span>
                </div>

                <div className="text-left space-y-1.5 text-xs font-mono text-gray-400">
                  <div className="flex justify-between">
                    <span>Base Solution Cost:</span>
                    <span className="text-white">Active Range</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cinematic lenses:</span>
                    <span className="text-white">{hasAnamorphic ? '✓ INCLUDED' : '—'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Executive alignment:</span>
                    <span className="text-white">{hasScripting ? '✓ INCLUDED' : '—'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Multi-format cuts:</span>
                    <span className="text-white">{numberOfCuts} Editions</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onViewChange('contact')}
                  id="quote-callback-trigger"
                  className="w-full py-4 rounded-none bg-[#D4AF37] hover:bg-[#B59124] text-black text-xs font-mono font-bold tracking-widest uppercase transition duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>TRANSFER QUOTE TO DISCOVERY FORM</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
