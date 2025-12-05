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

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-work font-black leading-tight tracking-tighter uppercase drop-shadow-2xl">
          Why Us
        </h2>
        
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

        <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-12 max-w-4xl">
          In an industry defined by disruption, AxoCom offers more than just content—we offer a competitive, future-proof approach to communication built on engineering and insight.
        </p>

        {/* Three Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mb-12">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 text-left group">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-xl mb-6 group-hover:bg-primary/30 transition-all">
              <span className="material-symbols-outlined text-primary text-4xl">psychology</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">The Power of the AI Core</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              While others integrate third-party tools, we own the technology that drives our narratives. Our proprietary AI Core is not an add-on; it is the engine that generates, refines, and distributes our content. This provides an unmatched speed-to-market advantage and ensures our media entities are always at the technological forefront. We don't adapt to the AI revolution—we are its architects.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 text-left group">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-xl mb-6 group-hover:bg-primary/30 transition-all">
              <span className="material-symbols-outlined text-primary text-4xl">diversity_3</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Deep Tech Meets Deep Stories</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              We eliminate the traditional gap between creative vision and technological execution. Our strength lies in our unified team: a diverse collection of journalists, engineers, strategists, and researchers who collaborate to solve complex communication problems. This integrated, high-caliber talent pool guarantees media that is both creatively compelling and technically resilient.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 text-left group">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-xl mb-6 group-hover:bg-primary/30 transition-all">
              <span className="material-symbols-outlined text-primary text-4xl">insights</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Data-Driven, Future-Proof Scale</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              We don't rely on guesswork. Every strategy is informed by advanced data pipelines and deep analytics, providing high-fidelity audience insights and continuous research. This AI-first, data-backed approach allows us to scale our media universe efficiently and intelligently, ensuring that our content remains relevant and impactful, no matter how fast the media landscape evolves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter6;