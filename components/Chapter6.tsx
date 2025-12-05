import React from 'react';

interface Chapter6Props {
  onPrev: () => void;
  onNext: () => void;
}

const Chapter6: React.FC<Chapter6Props> = ({ onPrev, onNext }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background-dark font-space relative py-10 md:py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJUFUL9HpcRVkKmCXVK9NE7W3116thAx7T3PweRUwUm6LmjKwyQ_zVIHGgomRuIW3rMydNI6qnWWRrUjE9HKHgsrvl22V1xBhV7Jmz584nfD1qTZIB9CY5leWmVK3MkEPTUJ7JmtkuOWCFHgvoLWpLFSNAoDk8JlVuA15aljtHfa_N4QuRow00QTvkWVW6WBFLvJO_lYNpBSpEZzvFjSYMN-AxhbQfYGKXh0NIdX0NctaCdZNkufJ1m8_NkHImNgMsZre6TQm-mJdc")`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-background-dark/90"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <span className="text-white/60 font-mono text-sm tracking-[0.3em] uppercase mb-4 border-b border-white/20 pb-2">Phase 06</span>
        <h2 className="text-5xl md:text-7xl font-black leading-tight text-white mb-6 tracking-tighter">
          Why We Matter
        </h2>
        
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>

        <p className="text-xl md:text-3xl text-gray-200 font-light leading-relaxed mb-8">
          Because stories shape decisions. Decisions shape society. And society shapes the future. 
          <br/><br/>
          <span className="font-bold text-white">AxoCom</span> stands at the intersection of tech, policy, culture, and creativity.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
           <button 
             onClick={onPrev}
             className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all font-bold flex items-center gap-2"
           >
             <span className="material-symbols-outlined">arrow_back</span> Previous
           </button>
           <button 
             onClick={onNext}
             className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-blue-600 transition-all font-bold flex items-center gap-2 shadow-lg shadow-primary/30"
           >
             Next Phase <span className="material-symbols-outlined">arrow_forward</span>
           </button>
        </div>
      </div>
    </div>
  );
};

export default Chapter6;