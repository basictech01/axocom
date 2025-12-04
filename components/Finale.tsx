import React from 'react';

const Finale: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-[#221a10] font-space flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        
        <div className="w-full max-w-[960px] relative rounded-3xl overflow-hidden min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-cover bg-center shadow-2xl"
             style={{
                backgroundImage: `linear-gradient(rgba(10, 14, 26, 0.5) 0%, rgba(10, 14, 26, 0.8) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDS6COT7vvahqxV2lcPHOr6OFWda5LtdJXHAqWp-KbiCO-gF1Xt3I0tFpilQmH0TF4cDE8VFzq2qYUTqTw9PRHfpDdRtK6jZfHWBhb588C4YhHt9kcQUcM6omgpp-0HV8g9omJAOKoT66LuAXXsmTaeebHBJxhwA0cP8IlVFG0pwma7x80gJ1S98WbdEbOgKSxCxOuzZxFXi7HLzwTs85J59pPzG0xUwNjtS-JWRehJYySQpbpEJ56s_kzb-C5-x3_dka1JuJgutDmH')`
             }}
        >
           <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tight">
             Join the revolution.
           </h1>
           <h2 className="text-white/90 text-lg md:text-2xl max-w-2xl font-light mb-10">
             Let’s build the future of media together. AxoCom. Where campaigns meet code.
           </h2>

           <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
             <button className="px-8 py-4 bg-primary-accent text-[#221a10] font-bold rounded-lg text-lg hover:scale-105 transition-transform">
               Collaborate With Us
             </button>
             <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg text-lg border border-white/20 backdrop-blur-md hover:bg-white/20 hover:scale-105 transition-all">
               Partner for Internships
             </button>
           </div>
        </div>
      </div>

      <footer className="w-full py-10 px-6 border-t border-white/5 bg-[#221a10] text-gray-400">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
               <a href="#" className="hover:text-primary-accent transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-primary-accent transition-colors">Terms of Service</a>
            </div>
            
            <div className="flex gap-6">
               {/* LinkedIn */}
               <a href="#" className="hover:text-primary-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
               </a>
               {/* Twitter */}
               <a href="#" className="hover:text-primary-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9s-1.4-.4-2.8-.8c-.2 2.3-2.3 4.2-4.5 4.5s-4.7-1.6-5.2-3.9c-1.4 1-3.3.8-3.3.8s-1.1-1.4.1-3.3c-1.2-1.3-1.1-2.8-1.1-2.8s.1-.6.6-.9c.8-.5 1.8-.4 2.5-.2s1.4-.8 1.4-.8-1.2-1.9-1.2-4.2c0-1.6.8-2.6 2.3-3.2s2.7-.2 3.3.2c.3-.2 1.1-.5 1.6-.5s1.3.2 1.3.2z"/></svg>
               </a>
               {/* Instagram */}
               <a href="#" className="hover:text-primary-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
               </a>
            </div>

            <p className="text-sm">© 2024 AxoCom</p>
         </div>
      </footer>
    </div>
  );
};

export default Finale;