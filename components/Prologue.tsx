import React from 'react';

interface PrologueProps {
  onNext: () => void;
}

const Prologue: React.FC<PrologueProps> = ({ onNext }) => {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col font-space pt-20 pb-10">
      <div className="flex flex-1 items-center justify-center p-4 md:p-6">
        <div className="relative flex h-full w-full min-h-[600px] flex-col gap-8 items-center justify-center rounded-3xl overflow-hidden text-center p-6 bg-cover bg-center bg-no-repeat shadow-2xl shadow-black/50 ring-1 ring-white/10"
             style={{
               backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.6) 0%, rgba(16, 22, 34, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDP_KLD7yF0XNM9uc6AuZ7ssTkWjSItQej30JFIsrvAVlDvpTNbOljwtIRqpDSxewmRHFyAycdrG7TjPRPV7rm7LfGqlr2iJlbp5UJkRYAHWreAgSNfoAGZVAQc2XhbGC_bykzE0ZNUZC1lIJRO9BBCYPdvaqwEoEHQiHaSFIWnGkUDYs5vJm1Qx8TQ4OZCZO0NHHdT8cfHQv4cBnovLYyjUZDmh9PxCyVSvv9cO3BMXdni0Wpallw_MZXQahutrEooMFu_l_8415Hm")`
             }}>
          
          <div className="flex flex-col gap-6 max-w-5xl z-10 animate-fade-in-up items-center">
            <div className="flex flex-col items-center">
              <h1 className="font-serif text-white text-6xl md:text-8xl lg:text-9xl font-medium leading-none tracking-tight drop-shadow-2xl">
                AXOCOM
              </h1>
              <p className="font-sans text-gray-300 text-sm md:text-xl uppercase tracking-[0.2em] mt-2 md:mt-4">
                Axolotl Communications
              </p>
            </div>
            
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-4"></div>
            
            <p className="mx-auto max-w-2xl text-lg md:text-2xl font-light text-gray-200 leading-relaxed drop-shadow-md">
              Media is changing. AI is rising. Narratives are evolving faster than ever. 
              Amidst this chaos, a new kind of media company is born.
            </p>
          </div>
          
          <button 
            onClick={onNext}
            className="z-10 mt-8 px-10 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_5px_rgba(13,89,242,0.3)] ring-1 ring-white/20"
          >
            Begin the Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prologue;