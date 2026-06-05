import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomeView from './components/HomeView';
import PortfolioView from './components/PortfolioView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import { Sparkles, ArrowRight, Video, Mail, Phone, ExternalLink } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Automatically scroll back to top of page on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  const handleSelectProjectFromHome = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('portfolio');
  };

  const handleSelectPortfolioProject = (projectId: string | null) => {
    setSelectedProjectId(projectId);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      
      {/* Dynamic Header Navigation */}
      <Navigation currentView={currentView} onViewChange={setCurrentView} />

      {/* Main View Outlet */}
      <main className="transition-all duration-300">
        {currentView === 'home' && (
          <HomeView 
            onViewChange={setCurrentView} 
            onSelectProject={handleSelectProjectFromHome} 
          />
        )}
        
        {currentView === 'portfolio' && (
          <PortfolioView 
            selectedProjectId={selectedProjectId}
            onClearSelectedProject={() => setSelectedProjectId(null)}
            onSelectProject={handleSelectPortfolioProject}
          />
        )}

        {currentView === 'services' && (
          <ServicesView onViewChange={setCurrentView} />
        )}

        {currentView === 'about' && (
          <AboutView />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Luxury Footer component */}
      <footer className="bg-[#050505] border-t border-gray-900 pt-20 pb-12 px-4 md:px-8 text-left" id="footer-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gray-950 pb-16">
          
          {/* Col 1: Brand & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-[#D4AF37] to-[#3B82F6] p-[1.5px]">
                <div className="w-full h-full bg-[#050505] rounded flex items-center justify-center">
                  <span className="text-white font-mono text-[11px] font-bold tracking-widest">U8</span>
                </div>
              </div>
              <span className="text-white font-semibold text-md tracking-wider">UNIVERSE8</span>
            </div>
            
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-sm">
              An elite strategic media production, brand storytelling consultant, and creator incubator brand. We merge corporate commercial targets with breathtaking cinema direction.
            </p>

            <div className="text-[10px] font-mono text-gray-600">
              ESTABLISHED IN REPUBLIC OF KOREA // BROADCASTING GLOBAL IMPRESSION
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">STUDIO MAP</h4>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { id: 'home', label: 'Home Entrance' },
                { id: 'portfolio', label: 'Production Portfolio' },
                { id: 'services', label: 'Services Catalogue' },
                { id: 'about', label: 'Director Story & Resumes' },
                { id: 'contact', label: 'Strategy Consultation Terminal' }
              ].map((lnk) => (
                <button
                  key={lnk.id}
                  onClick={() => setCurrentView(lnk.id)}
                  className={`text-xs text-left transition ${
                    currentView === lnk.id ? 'text-[#D4AF37] font-semibold' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {lnk.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Coordinates Summary */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold">ACTIVE CHANNELS</h4>
            <div className="space-y-3 text-xs font-mono text-gray-500">
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gray-600" />
                <a href="mailto:office@universe8.media" className="text-gray-400 hover:text-white transition">office@universe8.media</a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-gray-455">+82 (0)10-8888-8888</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Video className="w-4 h-4 text-[#D4AF12] animate-pulse" />
                <span className="text-gray-455">ARRI anamorphic active grid</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal copyright elements */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-gray-650 text-gray-600 gap-4">
          <div>
            © {new Date().getFullYear()} UNIVERSE8 Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <span>REGISTRATION ID: 888-88-88888</span>
            <span>SPEC: ARRI ALEXA MINI // RED DEEPMIND GEN-AI CORE</span>
            <span className="text-[#D4AF37]/80 hover:underline cursor-pointer">PRIVACY SYSTEM SECURITY</span>
          </div>
        </div>

      </footer>

    </div>
  );
}
