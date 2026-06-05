import React, { useState } from 'react';
import { Sparkles, ArrowRight, Cpu, Film, Compass, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { StrategyResponse } from '../types';

interface AiBrandAssistantProps {
  onApplyStrategyToForm: (strategyData: StrategyResponse) => void;
}

export default function AiBrandAssistant({ onApplyStrategyToForm }: AiBrandAssistantProps) {
  const [clientName, setClientName] = useState('');
  const [marketNiche, setMarketNiche] = useState('');
  const [brandPitch, setBrandPitch] = useState('');
  const [targetObjective, setTargetObjective] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [strategyResult, setStrategyResult] = useState<StrategyResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const loadingStages = [
    'Reconnoitering market positioning grids...',
    'Formulating character-driven storyboard beats...',
    'Synthesizing editorial visual looks (Netflix Amber)...',
    'Calibrating targeted omnichannel rollout roadmap...',
    'Authoring final executive brief...'
  ];

  const handleGenerateStrategy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !marketNiche || !targetObjective) {
      setErrorMsg('Please specify your operational parameters first.');
      return;
    }

    setErrorMsg('');
    setIsLoading(true);
    setStrategyResult(null);

    // Dynamic loading interval simulation
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < loadingStages.length - 1 ? prev + 1 : prev));
    }, 1100);

    try {
      const response = await fetch('/api/strategy/consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName,
          marketNiche,
          brandPitch: brandPitch || 'An ambitious brand targeting global growth.',
          targetObjective
        })
      });

      if (!response.ok) {
        throw new Error('Service did not respond securely.');
      }

      const data = await response.json();
      setStrategyResult(data);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('A temporary sync disruption occurred. Please try submitting again.');
    } finally {
      clearInterval(interval);
      setIsLoading(false);
      setLoadingStep(0);
    }
  };

  return (
    <div className="bg-[#090909] border border-white/5 rounded-none p-6 sm:p-8 space-y-6 text-left relative overflow-hidden" id="ai-brand-assistant-panel">
      {/* Dynamic top badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 bg-transparent border border-white/10 px-3 py-1.5 rounded-none text-[10px] font-mono tracking-widest text-[#D4AF12] block">
          <Cpu className="w-4 h-4 animate-spin text-[#D4AF37]" />
          <span>UNIVERSE8 STRATEGY CORE // ACTIVE</span>
        </div>
        <span className="text-[9px] font-mono text-gray-500 uppercase">SYS V3.5</span>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-display font-bold uppercase text-white tracking-wider flex items-center space-x-1.5">
          <span>AI Story Strategy Blueprint Generator</span>
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed font-light">
          Input your commercial parameters below to have UNIVERSE8's algorithmic framework draft a premium, tailored cinematic treatment, core hook, and rollout checklist.
        </p>
      </div>

      {isLoading ? (
        /* Loading Screen UI */
        <div className="py-20 text-center space-y-6" id="ai-loader-container">
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-white/5" />
            <div className="absolute inset-0 rounded-full border-2 border-t-[#D4AF37] border-r-transparent animate-spin" />
            <Film className="w-5 h-5 text-[#D4AF37] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-mono uppercase tracking-widest text-white">
              {loadingStages[loadingStep]}
            </p>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
              COMMUNICATION MATRIX CALIBRATION // UTC RECON
            </span>
          </div>
        </div>
      ) : strategyResult ? (
        /* Strategy Output presentation Layer */
        <div className="space-y-6 animate-fade-in" id="strategy-result-output">
          
          <div className="p-4 bg-black border border-white/10 rounded-none space-y-2">
            <span className="text-[10px] font-mono text-gray-500 uppercase">PROPOSED PROJECT NAME</span>
            <h4 className="text-md font-display font-extrabold text-white uppercase tracking-tight">{strategyResult.projectName}</h4>
          </div>

          <div className="space-y-1.5 border-l-2 border-[#D4AF37] pl-4">
            <span className="text-[10px] font-mono text-gray-500 uppercase block">STRATEGIC ANCHOR HEADER // HOOK:</span>
            <span className="text-white text-xs sm:text-sm font-semibold italic block font-display">
              "{strategyResult.coreHook}"
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-gray-500 uppercase block">CREATIVE DIRECTING NOTES:</span>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              {strategyResult.creativeConcept}
            </p>
          </div>

          {/* Suggested bundled packages */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-gray-500 uppercase block">RECOMMENDED BUNDLE FOR SUCCESS:</span>
            <div className="flex flex-wrap gap-2">
              {strategyResult.suggestedServices.map((srv, idx) => (
                <span key={idx} className="bg-black px-2.5 py-1 border border-white/10 text-gray-300 rounded-none text-[9px] font-mono uppercase font-bold text-center">
                  {srv}
                </span>
              ))}
            </div>
          </div>

          {/* Roadmap visual representation */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-gray-500 uppercase block">3-PHASE LAUNCH BLUEPRINT:</span>
            <div className="space-y-2.5 relative pl-4 border-l border-white/5">
              {strategyResult.campaignRoadmap.map((item, key) => (
                <div key={key} className="relative text-left space-y-0.5">
                  <span className="absolute -left-[20.5px] top-1 w-2 h-2 rounded-none bg-[#D4AF37]" />
                  <span className="text-[9px] font-mono text-[#D4AF37] uppercase font-bold">{item.phase}</span>
                  <p className="text-gray-400 text-[11px] leading-relaxed font-light">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-[#D4AF37] rounded-none space-y-1">
            <span className="text-[9px] font-mono uppercase block font-bold">TACTICAL EXECUTIVE ADVICE:</span>
            <p className="text-[11px] leading-relaxed font-light">
              {strategyResult.strategicAdvice}
            </p>
          </div>

          {/* Action buttons to apply directly to manual form */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
            <button
              onClick={() => onApplyStrategyToForm(strategyResult)}
              id="apply-ai-strategy-to-form-btn"
              className="flex-1 py-3 bg-[#D4AF37] text-black hover:bg-[#B59124] rounded-none text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4 text-black" />
              <span>APPLY TO CONTACT FORM</span>
            </button>
            <button
              onClick={() => {
                setStrategyResult(null);
                setClientName('');
                setMarketNiche('');
                setBrandPitch('');
                setTargetObjective('');
              }}
              id="ai-consultant-reset-btn"
              className="py-3 px-5 border border-white/10 text-gray-400 hover:text-white rounded-none text-xs font-mono uppercase tracking-widest transition duration-300 text-center cursor-pointer"
            >
              REFRESH SESSION
            </button>
          </div>

        </div>
      ) : (
        /* Form inputs to invoke Gemini API */
        <form onSubmit={handleGenerateStrategy} className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 text-left">
              <label className="text-[9px] font-mono uppercase text-gray-500 block">
                1. Your Brand/Company Name:
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Apex Biotech Ventures"
                className="w-full bg-black border border-white/10 p-3 rounded-none text-xs font-mono text-white placeholder-gray-800 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
            <div className="space-y-1 text-left">
              <label className="text-[9px] font-mono uppercase text-gray-500 block">
                2. Market Sector/Niche:
              </label>
              <input
                type="text"
                required
                value={marketNiche}
                onChange={(e) => setMarketNiche(e.target.value)}
                placeholder="e.g. Green Hydrogen Storage"
                className="w-full bg-black border border-white/10 p-3 rounded-none text-xs font-mono text-white placeholder-gray-800 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div className="space-y-1 text-left">
            <label className="text-[9px] font-mono uppercase text-gray-500 block">
              3. Existing Brand Elevator Pitch (Optional):
            </label>
            <textarea
              rows={2}
              value={brandPitch}
              onChange={(e) => setBrandPitch(e.target.value)}
              placeholder="e.g. We build lightweight carbon fiber cells that operate at high pressure..."
              className="w-full bg-black border border-white/10 p-3 rounded-none text-xs font-mono text-white placeholder-gray-800 focus:outline-none focus:border-[#D4AF37] resize-none"
            />
          </div>

          <div className="space-y-1 text-left">
            <label className="text-[9px] font-mono uppercase text-gray-500 block">
              4. Immediate Strategic Objective for Media Block:
            </label>
            <select
              value={targetObjective}
              onChange={(e) => setTargetObjective(e.target.value)}
              className="w-full bg-black border border-white/10 p-3 rounded-none text-xs font-mono text-white focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="">-- CHOOSE CRITICAL FOCUS TARGET --</option>
              <option value="Secure Series B Institutional Capital Funding">Secure Series B Institutional Capital Funding</option>
              <option value="Boost high-quality organic B2B customer leads by 40%">Boost high-quality B2B client pipeline / conversion</option>
              <option value="Recruit elite digital-native creators to scholarship cohorts">Recruit elite content creators & personal brands</option>
              <option value="Position founders as absolute sector thoughts-leaders">Position founder as trusted executive authority</option>
              <option value="Unify massive employee ranks around corporate overhaul">Unify company staff around strategic overhaul</option>
            </select>
          </div>

          {errorMsg && (
            <p className="text-red-500 font-mono text-[9px] uppercase flex items-center space-x-1.5 pt-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{errorMsg}</span>
            </p>
          )}

          <div className="pt-4">
            <button
              type="submit"
              id="ai-generate-strategy-btn"
              className="w-full py-4 rounded-none bg-white font-mono font-bold tracking-widest text-[#090909] hover:bg-[#D4AF37] hover:text-black hover:border-transparent text-xs uppercase transition duration-300 flex items-center justify-center space-x-2 cursor-pointer border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-current animate-pulse" />
              <span>FORMULATE ACTIONABLE TREATMENT</span>
            </button>
          </div>

        </form>
      )}
    </div>
  );
}
