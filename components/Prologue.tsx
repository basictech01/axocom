import React from 'react';

interface PrologueProps {
  onNext: () => void;
}

const Prologue: React.FC<PrologueProps> = ({ onNext }) => {
  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.6) 0%, rgba(16, 22, 34, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDP_KLD7yF0XNM9uc6AuZ7ssTkWjSItQej30JFIsrvAVlDvpTNbOljwtIRqpDSxewmRHFyAycdrG7TjPRPV7rm7LfGqlr2iJlbp5UJkRYAHWreAgSNfoAGZVAQc2XhbGC_bykzE0ZNUZC1lIJRO9BBCYPdvaqwEoEHQiHaSFIWnGkUDYs5vJm1Qx8TQ4OZCZO0NHHdT8cfHQv4cBnovLYyjUZDmh9PxCyVSvv9cO3BMXdni0Wpallw_MZXQahutrEooMFu_l_8415Hm")`
         }}>
      
      <div className="flex flex-col gap-8 items-center justify-center text-center px-6 max-w-5xl z-10 animate-fade-in-up">
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-white text-6xl md:text-8xl lg:text-9xl font-medium leading-none tracking-tight drop-shadow-2xl" style={{ fontFamily: 'HelloParis' }}>
            AxoCom
          </h1>
          <p className="font-sans text-gray-300 text-sm md:text-l uppercase tracking-[0.2em] mt-1 md:mt-2">
            Axolotl Communications
          </p>
        </div>
        
        <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-4"></div>
        
        <p className="mx-auto max-w-2xl text-lg md:text-2xl font-light text-gray-200 leading-relaxed drop-shadow-md">
         <span className="italic">“The medium is the message” </span>—and AI is taking over the pen<br></br>
AI is reshaping the entire media universe.
AxoCom isn’t adapting to this future—we’re engineering it.
        </p>
      </div>
      
      <button 
        onClick={onNext}
        className="z-10 mt-8 px-10 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_5px_rgba(13,89,242,0.3)] ring-1 ring-white/20"
      >
        Begin the Story
      </button>
    </div>
  );
};

export default Prologue;