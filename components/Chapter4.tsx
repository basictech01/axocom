import React from 'react';

const Planet = ({ 
  sizeClass,
  duration, 
  direction = 'normal',
  image,
  label,
  positionClass 
}: { 
  sizeClass: string,
  duration: string, 
  direction?: 'normal' | 'reverse',
  image: string,
  label: string,
  positionClass: string
}) => {
  return (
    <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${sizeClass}`}
        style={{ 
          animation: `orbit-rotate ${duration} linear infinite`,
          animationDirection: direction
        }}
    >
      <div className={`absolute ${positionClass} pointer-events-auto group cursor-pointer`}>
        <div 
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cover bg-center border-2 border-white/10 shadow-[0_0_20px_0_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.3)] group-hover:border-white/50"
          style={{ 
            backgroundImage: `url("${image}")`,
            animation: `orbit-rotate ${duration} linear infinite`, // Counter-rotate to keep image upright
            animationDirection: direction === 'normal' ? 'reverse' : 'normal'
          }}
        ></div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 z-20">
          {label}
        </div>
      </div>
    </div>
  );
};

const Chapter5: React.FC = () => {
  return (
    <div className="min-h-[100dvh] w-full relative bg-background-dark overflow-hidden flex flex-col items-center justify-center font-space py-6 md:py-10 px-4">
      
      {/* Background Gradients & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,89,242,0.15),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>

      {/* Content Text */}
      <div className="relative z-20 text-center max-w-4xl px-4 mb-6 md:mb-8 pointer-events-none flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-work font-black leading-tight tracking-tighter uppercase drop-shadow-2xl">
          Our Media Universe
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 font-light drop-shadow-md">
          We operate stories. We shape narratives. We run media ecosystems.
        </p>
      </div>

      {/* Solar System */}
      <div className="relative w-full max-w-[90vw] md:max-w-[800px] aspect-square flex items-center justify-center z-10">
           
           {/* Sun */}
           <div className="absolute z-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-primary/20 shadow-[0_0_50px_10px_rgba(13,89,242,0.4)] flex items-center justify-center backdrop-blur-sm border border-primary/30">
              <span className="font-serif text-3xl md:text-5xl text-primary font-bold animate-pulse">A</span>
           </div>

           {/* Orbit Rings - Responsive Sizes */}
           <div className="absolute border border-dashed border-white/20 rounded-full w-[160px] h-[160px] md:w-[280px] md:h-[280px]"></div>
           <div className="absolute border border-dashed border-white/20 rounded-full w-[240px] h-[240px] md:w-[440px] md:h-[440px]"></div>
           <div className="absolute border border-dashed border-white/20 rounded-full w-[340px] h-[340px] md:w-[600px] md:h-[600px]"></div>
           <div className="absolute border border-dashed border-white/20 rounded-full w-[440px] h-[440px] md:w-[760px] md:h-[760px]"></div>

           {/* Planets - Each on its own orbit, matching the ring sizes */}
           {/* Hillsquills - Innermost orbit (280px desktop / 160px mobile) */}
           <Planet 
             sizeClass="w-[160px] h-[160px] md:w-[280px] md:h-[280px]"
             duration="25s" 
             image="./images/hillsQuills.png"
             label="Hillsquills"
             positionClass="top-0 left-1/2"
           />

           {/* India7Live - Second orbit (440px desktop / 240px mobile) */}
            <Planet 
             sizeClass="w-[240px] h-[240px] md:w-[440px] md:h-[440px]"
             duration="40s" 
             direction="reverse"
             image="./images/india7.png"
             label="India7Live"
             positionClass="top-0 left-1/2"
           />
           
           {/* Tehelka India - Third orbit (600px desktop / 340px mobile) */}
           <Planet 
             sizeClass="w-[340px] h-[340px] md:w-[600px] md:h-[600px]"
             duration="55s"
             image="./images/tehalka.png"
             label="Tehelka India"
             positionClass="top-0 left-1/2"
           />

           {/* Lawmedy - Outermost orbit (760px desktop / 440px mobile) */}
           <Planet 
             sizeClass="w-[440px] h-[440px] md:w-[760px] md:h-[760px]"
             duration="70s" 
             direction="reverse"
             image="./images/lawmeady.png"
             label="Lawmedy"
             positionClass="top-0 left-1/2"
           />
      </div>

    </div>
  );
};

export default Chapter5;