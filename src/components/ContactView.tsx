import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, ExternalLink, Send, CheckCircle2, ShieldAlert, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';
import AiBrandAssistant from './AiBrandAssistant';
import { StrategyResponse, ContactFormData } from '../types';

export default function ContactView() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    organization: '',
    email: '',
    projectType: 'Brand Storytelling',
    budgetRange: '$15,000 - $30,000',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Mock schedule dates for pseudo Calendly integration
  const [selectedMeetingTime, setSelectedMeetingTime] = useState<string | null>(null);
  const mockTimes = [
    'Mon, June 8 @ 10:00 AM (UTC)',
    'Mon, June 8 @ 2:00 PM (UTC)',
    'Tue, June 9 @ 11:30 AM (UTC)',
    'Wed, June 10 @ 4:00 PM (UTC)'
  ];

  const handleApplyStrategyToForm = (strategy: StrategyResponse) => {
    setFormData((prev) => ({
      ...prev,
      organization: strategy.projectName || prev.organization,
      projectDetails: `AI-Generated Strategic Hook: "${strategy.coreHook}"\nCreative Visual Concept: ${strategy.creativeConcept}\nSuggested Bundle: ${strategy.suggestedServices.join(', ')}\n\nObjective detail: `
    }));

    // Scroll directly to the bottom form segment
    const targetEl = document.getElementById('manual-contact-form');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMsg('Name and Email coordinate fields are mandatory.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const payload = {
        name: formData.name,
        organization: formData.organization,
        email: formData.email,
        projectType: formData.projectType,
        budgetRange: formData.budgetRange,
        projectDetails: formData.projectDetails + (selectedMeetingTime ? `\nRequested Consultation Slot: ${selectedMeetingTime}` : '')
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Failure submitting form content.');
      }

      const data = await response.json();
      setSubmitResult(data.message || 'Your inquiry was processed successfully.');
      
      // Reset inputs
      setFormData({
        name: '',
        organization: '',
        email: '',
        projectType: 'Brand Storytelling',
        budgetRange: '$15,000 - $30,000',
        projectDetails: ''
      });
      setSelectedMeetingTime(null);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Sync disruption. Unable to catalog lead submission.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen pt-28 pb-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 editorial-grid opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header copy */}
        <div className="text-left space-y-4 max-w-3xl">
          <span className="text-xs font-mono uppercase text-[#D4AF37] tracking-[0.3em] block font-bold">
            [ SECURE TRANSMISSION CHANNEL ]
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-white leading-tight">
            Let's Create Something Meaningful
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm max-w-2xl leading-relaxed font-light">
            Whether you represent a global energy conglomerate, an elite academic institution, or are a creator ready to build your personal empire, our strategic studio is ready to deploy.
          </p>
        </div>

        {/* Dual Layout Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: Direct Details, Mock Calendly & standard form */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-8 text-left">
            
            {/* Coordinate Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              
              <div className="bg-[#090909] border border-white/5 rounded-none p-5 space-y-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[9px] font-mono text-gray-500 uppercase block tracking-wider">DIRECT EMAIL</span>
                <a href="mailto:office@universe8.media" className="text-xs font-bold text-white hover:text-[#D4AF37] transition truncate block font-mono">
                  office@universe8.media
                </a>
              </div>

              <div className="bg-[#090909] border border-white/5 rounded-none p-5 space-y-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-[9px] font-mono text-gray-500 uppercase block tracking-wider">DIRECT TELEPHONE</span>
                <span className="text-xs font-bold text-white block font-mono">
                  +82 (0)10-8888-8888
                </span>
              </div>

              <div className="bg-[#090909] border border-white/5 rounded-none p-5 space-y-2">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span className="text-[9px] font-mono text-gray-500 uppercase block tracking-wider">STUDIO COORDS</span>
                <span className="text-xs font-bold text-white block">
                  Seoul, Republic of Korea
                </span>
              </div>

            </div>

            {/* Calendly Integration Simulation */}
            <div className="bg-[#090909] border border-white/5 rounded-none p-6 space-y-4">
              <div className="flex items-center space-x-2 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>INTEGRATION // SCHEDULER PILOT</span>
              </div>
              <h3 className="text-md font-display font-bold uppercase tracking-tight text-white block">Direct Executive Calendly Booking</h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Skip the back-and-forth email scheduling. Select a strategic coordination slot directly below to attach the meeting invitation directly to your submission.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {mockTimes.map((t, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedMeetingTime(selectedMeetingTime === t ? null : t)}
                    className={`p-3 text-left rounded-none text-[10px] font-mono border transition cursor-pointer ${
                      selectedMeetingTime === t 
                        ? 'bg-[#D4AF37]/5 border-[#D4AF37] text-[#D4AF37] font-bold' 
                        : 'bg-black border-white/5 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    <span>{selectedMeetingTime === t ? '✓ SELECTING: ' : '• '} {t}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Standard manual Form */}
            <div className="bg-[#090909] border border-white/5 p-6 sm:p-8 rounded-none space-y-6" id="manual-contact-form">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-gray-500 uppercase block">// COMMERCIAL INTAKE MODULE</span>
                <h3 className="text-lg font-display font-medium text-white uppercase tracking-wider">Strategic Project Brief</h3>
              </div>

              {submitResult ? (
                <div className="bg-emerald-950/20 border border-emerald-900/60 p-6 rounded-none text-left space-y-3">
                  <div className="flex items-center space-x-1 px-2.5 py-1 bg-emerald-500/10 rounded-none text-emerald-400 font-mono text-[9px] w-fit font-bold uppercase">
                    <span>✓ RECEIVED SECURE</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Transmission Completed</h4>
                  <p className="text-gray-300 text-xs leading-relaxed font-light">
                    {submitResult}
                  </p>
                  <button
                    onClick={() => setSubmitResult(null)}
                    className="mt-2 text-[10px] font-mono uppercase text-[#D4AF37] hover:underline cursor-pointer"
                  >
                    SUBMIT ANOTHER BRIEF
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-[9px] font-mono uppercase text-gray-500 block">Name Coordinate (Required):</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormInputChange}
                        placeholder="Your full name"
                        className="w-full bg-black border border-white/10 p-3 rounded-none text-xs font-mono text-white placeholder-gray-700 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div className="space-y-1 text-left">
                      <label className="text-[9px] font-mono uppercase text-gray-500 block">Organization Name:</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleFormInputChange}
                        placeholder="e.g. Acme Corp"
                        className="w-full bg-black border border-white/10 p-3 rounded-none text-xs font-mono text-white placeholder-gray-700 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[9px] font-mono uppercase text-gray-500 block">Secure Email Coordinate (Required):</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleFormInputChange}
                      placeholder="e.g. director@acme.com"
                      className="w-full bg-black border border-white/10 p-3 rounded-none text-xs font-mono text-white placeholder-gray-700 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-[9px] font-mono uppercase text-gray-500 block">Project Category Focus:</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleFormInputChange}
                        className="w-full bg-black border border-white/10 p-3 rounded-none text-xs font-mono text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Brand Storytelling">Brand Storytelling</option>
                        <option value="Corporate Content">Corporate Content</option>
                        <option value="Educational Programs">Educational Programs</option>
                        <option value="Creator Development">Creator Development</option>
                        <option value="Public Sector Projects">Public Sector Projects</option>
                        <option value="Documentary Production">Documentary Production</option>
                      </select>
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="text-[9px] font-mono uppercase text-gray-505 text-gray-500 block">Allocated Retainer Budget Range:</label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleFormInputChange}
                        className="w-full bg-black border border-white/10 p-3 rounded-none text-xs font-mono text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="$5,000 - $12,000">$5,000 - $12,000 (Consulting/Coaching)</option>
                        <option value="$12,000 - $30,000">$12,000 - $30,000 (Corporate Training/Micro-Films)</option>
                        <option value="$30,000 - $75,000">$30,000 - $75,000 (Full Cinematic Storytelling)</option>
                        <option value="Enterprise / Over $75,000">Enterprise / Over $75,000 (Full Rollout)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[9px] font-mono uppercase text-gray-500 block">Integrated Brief & Context Detail:</label>
                    <textarea
                      name="projectDetails"
                      rows={5}
                      value={formData.projectDetails}
                      onChange={handleFormInputChange}
                      placeholder="Outline target deadlines, communication challenges, or corporate objectives here..."
                      className="w-full bg-black border border-white/10 p-3 rounded-none text-xs font-mono text-white placeholder-gray-700 focus:outline-none focus:border-[#D4AF37] resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-red-550 text-red-500 font-mono text-[10px] uppercase flex items-center space-x-1 bg-red-955/20 bg-red-950/25 px-3 py-2 rounded-none border border-red-900/30">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{errorMsg}</span>
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="manual-form-submit-btn"
                      className="w-full py-4 rounded-none bg-white text-black hover:bg-[#D4AF37] font-mono font-bold tracking-widest text-xs uppercase transition duration-300 flex items-center justify-center space-x-2 cursor-pointer border border-white/10 hover:border-transparent"
                    >
                      <span>{isSubmitting ? 'SECURELY SAVING...' : 'START YOUR JOURNEY'}</span>
                      <Send className="w-4 h-4 text-black" />
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* Social handles */}
            <div className="flex justify-center sm:justify-start items-center space-x-6 text-gray-500 pt-2 pl-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] block font-bold text-gray-450 text-gray-400">UNIVERSE8 PROFILES:</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Linkedin className="w-4 h-4" /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Youtube className="w-4 h-4" /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Instagram className="w-4 h-4" /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition"><Twitter className="w-4 h-4" /></a>
            </div>

          </div>

          {/* RIGHT SIDE: Interactive Brand Strategy consultant (Gemini SDK powered) */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-6">
            <AiBrandAssistant onApplyStrategyToForm={handleApplyStrategyToForm} />
          </div>

        </div>

      </div>
    </div>
  );
}
