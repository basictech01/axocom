import React from 'react';

interface Chapter1Props {
  onNext: () => void;
}

const Chapter1: React.FC<Chapter1Props> = ({ onNext }) => {
  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center bg-cover bg-center bg-no-repeat pt-24 pb-8 px-4 text-white font-work"
         style={{
           backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.7) 0%, rgba(16, 22, 34, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDo1ArrXKt229p_BWx-4U6kSAIVbcos15GI6ocKBPKhrgaQY0UCQG5zpobgf5WF8moWF94fy0rlr9PPotkC9ZMlpExAfUTFUQ6g7HniWJgdiOmsuvbVfBYr1jBz5N0b1WlwYbr2i_zetvga98rdtyFuDvZvBC3K5Olx9rgUpCPuTBaSoAbkrN3RpDmCkaiv5fxUFSyh5E4x74BpSV5Z-X8F3m7-sNFKNF8KkL02YpQRsm17Ha9UACu4DTQcTqeX2Gi2LC6LSQgJ7h-P")`
         }}>
      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      
      {/* Main Content Area - Flex Grow to push button down */}
      <div className="flex-grow flex flex-col justify-center items-center z-10 w-full max-w-6xl text-center gap-8 md:gap-12">
        <div className="flex flex-col gap-6 animate-fade-in-up items-center">
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase bg-white/5 px-4 py-1 rounded-full border border-white/10">Phase 01</span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase drop-shadow-2xl">
             Who We Are
          </h1>
          <div className="h-1 w-32 bg-primary mx-auto"></div>
          <h2 className="text-lg md:text-2xl font-medium leading-relaxed text-gray-100 max-w-4xl mx-auto drop-shadow-lg">
            AxoCom is not just a media company. We are a <span className="text-primary font-black bg-white/5 px-2 rounded">Tech-First Media Company</span> building the future of communication. 
            A place where journalists, engineers, creators, strategists, lawyers, and researchers unite to reimagine how stories are built, spread, and scaled.
          </h2>
        </div>
      </div>
      
      {/* Footer Navigation Button */}
      <div 
        onClick={onNext}
        className="relative z-10 mt-12 flex flex-col items-center gap-3 cursor-pointer group opacity-80 hover:opacity-100 transition-all duration-300"
      >
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary-accent group-hover:text-white transition-colors">Scroll to Continue</span>
        <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all shadow-lg animate-bounce">
          <span className="material-symbols-outlined text-white">expand_more</span>
        </div>
      </div>
    </div>
  );
};

export default Chapter1;