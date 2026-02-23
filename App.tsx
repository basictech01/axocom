import React, { useState, useEffect } from 'react';
import Prologue from './components/Prologue';
import Chapter1 from './components/Chapter1';
import Chapter2 from './components/Chapter2';
import Chapter5 from './components/Chapter5';
import Chapter3 from './components/Chapter3';
import Chapter4 from './components/Chapter4';
import Chapter6 from './components/Chapter6';
import Finale from './components/Finale';
import './index.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('prologue');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['prologue', 'chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6', 'finale'];
      
      // We look for the section that occupies the middle of the screen
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-background-dark min-h-screen w-full relative">
      
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background-dark/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="flex items-center cursor-pointer group select-none" onClick={() => scrollTo('prologue')}>
           <img 
             src="/images/logo.png" 
             alt="AxoCom Logo" 
             className="h-10 md:h-12 drop-shadow-lg group-hover:opacity-80 transition-opacity"
           />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {['About Us', 'Services', 'Mote', 'Media', 'Why', 'Team'].map((title, num) => (
            <button
              key={num+1}
              onClick={() => scrollTo(`chapter${num+1}`)}
              className={`px-3 py-1 text-sm font-mono font-bold transition-all rounded-md ${
                activeSection === `chapter${num+1}` 
                  ? 'text-primary bg-primary/10' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {title}
            </button>
          ))}
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <button 
            onClick={() => scrollTo('finale')}
            className="bg-primary-accent hover:bg-yellow-500 text-background-dark px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary-accent/20"
          >
            Partner Up
          </button>
          <a 
            href="/careers.html"
            className="bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
          >
            Careers
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="material-symbols-outlined text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-background-dark transition-transform duration-300 lg:hidden flex flex-col pt-24 px-8 gap-6 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {['About Us', 'Services', 'Mote', 'Media', 'Why', 'Team'].map((title, num) => (
          <button
            key={title}
            onClick={() => scrollTo(`chapter${num+1}`)}
            className="text-2xl font-mono font-bold text-left text-gray-400 hover:text-white border-b border-white/5 pb-4 flex justify-between items-center"
          >
            <span>{title}</span>
          </button>
        ))}
        <button 
          onClick={() => scrollTo('finale')}
          className="mt-4 bg-primary-accent text-background-dark py-4 rounded-xl text-xl font-bold shadow-lg shadow-primary-accent/30 text-center"
        >
          Partner Up
        </button>
        <a 
          href="/careers.html"
          className="bg-primary text-white py-4 rounded-xl text-xl font-bold shadow-lg shadow-primary/30 text-center"
        >
          Careers
        </a>
      </div>

      {/* Main Content Sections */}
      <main>
        <section id="prologue" className="min-h-[100dvh] relative">
          <Prologue onNext={() => scrollTo('chapter1')} />
        </section>

        <section id="chapter1" className="min-h-[100dvh] relative">
          <Chapter1 onNext={() => scrollTo('chapter2')} />
        </section>

        <section id="chapter2" className="min-h-[100dvh] relative">
          <Chapter2 />
        </section>

        <section id="chapter3" className="min-h-[100dvh] relative">
          <Chapter3 onNext={() => scrollTo('chapter4')} />
        </section>

        <section id="chapter4" className="min-h-[100dvh] relative">
          <Chapter4 />
        </section>

        <section id="chapter5" className="min-h-[100dvh] relative overflow-hidden">
          <Chapter5 />
        </section>

        <section id="chapter6" className="min-h-[100dvh] relative">
          <Chapter6 onPrev={() => scrollTo('chapter5')} onNext={() => scrollTo('finale')} />
        </section>

        <section id="finale" className="min-h-[100dvh] relative">
          <Finale />
        </section>
      </main>

    </div>
  );
};

export default App;