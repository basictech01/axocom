import React from 'react';

const Planet = ({ 
  size, 
  distanceCSS, 
  duration, 
  direction = 'normal',
  image,
  label,
  positionClass 
}: { 
  size: number, 
  distanceCSS: string, 
  duration: string, 
  direction?: 'normal' | 'reverse',
  image: string,
  label: string,
  positionClass: string
}) => {
  return (
    <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ 
          width: distanceCSS, 
          height: distanceCSS, 
          animation: `orbit-rotate ${duration} linear infinite`,
          animationDirection: direction
        }}
    >
      <div className={`absolute ${positionClass} pointer-events-auto group cursor-pointer`}>
        <div 
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-cover bg-center border-2 border-white/10 shadow-[0_0_20px_0_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.3)] group-hover:border-white/50"
          style={{ 
            backgroundImage: `url("${image}")`,
            animation: `orbit-rotate ${duration} linear infinite reverse`, // Counter-rotate to keep image upright
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
    <div className="min-h-[100dvh] w-full relative bg-background-dark overflow-hidden flex flex-col items-center justify-center font-space py-20 px-4">
      
      {/* Background Gradients & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,89,242,0.15),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>

      {/* Content Text */}
      <div className="relative z-20 text-center max-w-4xl px-4 mb-12 pointer-events-none mt-10 md:mt-0 flex flex-col items-center">
        <span className="text-white/70 font-mono text-sm tracking-[0.3em] uppercase mb-4 border border-white/10 px-3 py-1 rounded-full">Phase 05</span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 text-white drop-shadow-lg">
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

           {/* Orbit Rings - Responsive Sizes utilizing CSS min() */}
           <div className="absolute border border-dashed border-white/5 rounded-full w-[160px] h-[160px] md:w-[280px] md:h-[280px]"></div>
           <div className="absolute border border-dashed border-white/5 rounded-full w-[240px] h-[240px] md:w-[440px] md:h-[440px]"></div>
           <div className="absolute border border-dashed border-white/5 rounded-full w-[340px] h-[340px] md:w-[600px] md:h-[600px]"></div>
           <div className="absolute border border-dashed border-white/5 rounded-full w-[440px] h-[440px] md:w-[760px] md:h-[760px]"></div>

           {/* Planets */}
           <Planet 
             size={16} distanceCSS="min(760px, 90vw)" duration="70s" direction="reverse"
             image="https://lh3.googleusercontent.com/aida-public/AB6AXuCecd394l5PLk37IsiuahGjOsxYvsc37P2t-cKmRc_IBZGGKFTGtD8IWRn0qJGZqdgzrxS73vgOec-tXhpThqS_mzvW5mURYeE2cDvav-aoAsis6h_dcsg0sX0EMBq5bx_TqsDb15uyqQqrgHDE5Y2Yq-E4ctz-vAmcFXeBqP-bU2SqcXsFFfDS2jRrM0AvVj0HjheZicr4utbo0tmq21Vf60RBdPLN0yeO4yLkHJR6Cd2k9cZuogFvjHVtkqIX2zrZeaDAmN1WJcTy"
             label="Lawmedy"
             positionClass="bottom-1/2 left-8 -translate-y-1/2"
           />

           <Planet 
             size={16} distanceCSS="min(600px, 70vw)" duration="55s"
             image="https://lh3.googleusercontent.com/aida-public/AB6AXuCTg-a0Uk-JvVkLfMFkrNPlQBPzwWLo5_I8Po7VEbv7I1gejGbUb81A_D6npCvcqEkIS_5CMbNdqhNptBTWJru0U3PTWsPFyoBZyqMHB-cCSYbae1cvGbz9tyNihKWQL8KGH1OW9To12LUBqJR4VH0dWFatN5eBnJLnMMyKt7RRGuteC_9kKcSCnzS8bqvQHH39mtbk9YzNyWmGlwVOBxRQf87UqAplD5AcdnF2CdDQCQbhfMiLlCCxvEvzJ3gVIIYpoR5VFS8NufVC"
             label="Tehelka India"
             positionClass="bottom-1/2 -left-6 translate-y-1/2"
           />

            <Planet 
             size={16} distanceCSS="min(440px, 50vw)" duration="40s" direction="reverse"
             image="https://lh3.googleusercontent.com/aida-public/AB6AXuC1h9oex_tNDIO7KQyiFoM0BJb1ZIY7JqfkJ9QmeeHSPDLW6kkaa1GDrN3DQkmqFAO9NAZWoFp2wcXcLCEOpdnsSHO9z6zgCGYzSE_ZcMNDx0CLh809vPrm2lpGHkYU_q97jnpe93Ip1sEgQm8MslsXUc09G6MFS5Mbf7lOGctYBnHCdfxEWmOBxcDw0rEatLk-oGXsVk4fBU6m-gc49AC9SgTbm1WBoiItxYGsOcS4VUVqEW6si3dW3OBmHdeXbEF_1aKJErXLiO5Y"
             label="India7Live"
             positionClass="top-1/2 -right-6 -translate-y-1/2"
           />
           
           <Planet 
             size={16} distanceCSS="min(280px, 32vw)" duration="25s" 
             image="https://lh3.googleusercontent.com/aida-public/AB6AXuDu5dvPEqFwitHjRZwcorDkVJtPAJtjLbjc5imiJf8KTt11FBi8JsFuxoMua19m9uvHjbmbcjUOaWggorYyNTOhAlyZwP3OJgKPnZAF6TMksSFtKIZo5t3T_eCbYnXwdEIqbTuBtkgFs0_LtzAkBwAVyNKwvFTe9M26HVPCMzX8IFtGG2m-F53JTIPqpfGJtlThNY1E28uLKkbVlfYrg26cCmXz_viZ3kKbwGzuxC1akxXoAvrDIgPL3jLZZ_1d-t1WHtN_CDF_g5QZ"
             label="Hillsquills"
             positionClass="-top-6 left-1/2 -translate-x-1/2"
           />
      </div>

    </div>
  );
};

export default Chapter5;