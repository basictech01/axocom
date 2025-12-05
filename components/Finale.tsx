import React from 'react';

const Finale: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-[#0a0e1a] font-space flex flex-col">
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

           <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-10">
             <a 
               href="mailto:pranav.pandey@axocom.in?subject=Collaboration%20Inquiry%20-%20AxoCom&body=Hello%20AxoCom%20Team%2C%0D%0A%0D%0AI%20am%20interested%20in%20collaborating%20with%20AxoCom.%0D%0A%0D%0AName%3A%20%0D%0AOrganization%2FCompany%3A%20%0D%0AEmail%3A%20%0D%0APhone%3A%20%0D%0A%0D%0ACollaboration%20Interest%3A%0D%0A%5BPlease%20describe%20your%20collaboration%20idea%20or%20inquiry%5D%0D%0A%0D%0ABest%20regards"
               className="px-10 py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/30 inline-block text-center"
             >
               Partner With Us
             </a>
             <a 
               href="/careers.html"
               className="px-10 py-4 bg-primary-accent hover:bg-yellow-500 text-[#0a0e1a] font-bold rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary-accent/30 inline-block text-center"
             >
               Join Our Team
             </a>
           </div>

           <div className="text-white/60 text-sm max-w-2xl">
             <p>Want to transform your brand's narrative? Build cutting-edge media tech? Shape the future of communication? Let's talk.</p>
           </div>
        </div>
      </div>

      <footer className="w-full py-10 px-6 border-t border-white/5 bg-[#0a0e1a] text-gray-400">
         <div className="max-w-7xl mx-auto flex flex-col gap-8">
            {/* Top Section: Branding and Social Links */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col items-center md:items-start">
                <h2 className="font-serif text-2xl text-white mb-1">AXOCOM</h2>
                <span className="text-xs uppercase tracking-widest text-gray-500">Axolotl Communications</span>
              </div>
              
              <div className="flex gap-6">
                 <a href="https://www.youtube.com/@AxoComTechXMedia" target="_blank" rel="noopener noreferrer" className="hover:text-primary-accent transition-colors" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                 </a>
                 <a href="https://instagram.com/axocom" target="_blank" rel="noopener noreferrer" className="hover:text-primary-accent transition-colors" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                 </a>
                 <a href="https://linkedin.com/company/axocom" target="_blank" rel="noopener noreferrer" className="hover:text-primary-accent transition-colors" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                 </a>
              </div>
            </div>

            {/* Middle Section: Media Entities */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-white text-sm font-bold uppercase tracking-wider">Our Media Entities</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="https://www.hillsquills.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-accent transition-colors">Hillsquills</a>
                <span className="text-gray-600">•</span>
                <a href="https://india7live.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-accent transition-colors">India7Live</a>
                <span className="text-gray-600">•</span>
                <a href="https://tehelkaindianews.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-accent transition-colors">Tehelka India News</a>
                <span className="text-gray-600">•</span>
                <a href="https://www.youtube.com/@Lawmedy_yt" target="_blank" rel="noopener noreferrer" className="hover:text-primary-accent transition-colors">Lawmedy</a>
                <span className="text-gray-600">•</span>
                <span className="text-gray-400">Cyber Youth India</span>
              </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="text-center pt-4 border-t border-white/5">
              <p className="text-sm">© 2024 AxoCom. All rights reserved.</p>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default Finale;