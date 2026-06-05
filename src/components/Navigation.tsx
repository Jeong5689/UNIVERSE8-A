import React, { useState } from 'react';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Navigation({ currentView, onViewChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'HOME' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'services', label: 'SERVICES' },
    { id: 'about', label: 'ABOUT FOUNDER' },
    { id: 'contact', label: 'STRATEGY TERMINAL' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/95 border-b border-gray-900 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => onViewChange('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
            id="nav-logo-container"
          >
            <div className="w-10 h-10 rounded-none bg-gradient-to-tr from-[#D4AF37] to-[#3B82F6] p-[1.5px] transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full bg-[#0A0A0A] rounded-none flex items-center justify-center">
                <span className="text-white font-mono text-sm font-extrabold tracking-widest">U8</span>
              </div>
            </div>
            <div>
              <span className="text-white font-serif font-bold text-lg tracking-[0.2em] block leading-none">UNIVERSE8</span>
              <span className="text-[9px] text-gray-500 font-mono tracking-[0.3em] uppercase block mt-1">MEDIA STRATEGY</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => onViewChange(item.id)}
                className={`text-xs font-medium tracking-widest uppercase transition-all duration-300 relative py-2 ${
                  currentView === item.id 
                    ? 'text-[#D4AF37]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {currentView === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37]" />
                )}
              </button>
            ))}
          </div>

          {/* Contact Quick Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => onViewChange('contact')}
              id="nav-cta-button"
              className="px-5 py-2.5 rounded-none border border-[#D4AF37]/50 text-xs font-mono tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center space-x-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>START PROJECT</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-gray-900 transition-all duration-300" id="mobile-menu-container">
          <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 text-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => {
                  onViewChange(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full px-3 py-3 rounded-md text-sm font-medium tracking-widest uppercase transition-all duration-250 ${
                  currentView === item.id 
                    ? 'text-[#D4AF37] bg-gray-950/70 border border-gray-900' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-950/30'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <button
                onClick={() => {
                  onViewChange('contact');
                  setIsOpen(false);
                }}
                id="mobile-nav-cta"
                className="w-full py-3 rounded-none bg-[#D4AF37] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B59124] text-black text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300"
              >
                START YOUR JOURNEY
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
