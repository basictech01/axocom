import React from 'react';

const Chapter4: React.FC = () => {
  return (
    <div className="min-h-[100dvh] w-full bg-background-dark text-white font-space flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-[1400px] w-full px-4 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
           <span className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase bg-cyan-400/10 px-3 py-1 rounded-full mb-4">Phase 04</span>
           <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-4">
             The AI Core
           </h2>
           <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
             An interactive showcase of the AxoCom artificial intelligence engine, from data ingestion to narrative creation.
           </p>
        </div>

        {/* 
           Layout:
           - XL+ screens: 3 Columns (Left features, Center Brain, Right features)
           - Smaller screens: Stacked layout for readability
        */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4">
             <div className="p-4 xl:p-6 rounded-2xl border border-gray-700 bg-dark-surface/50 hover:border-cyan-400/50 transition-all group cursor-default">
               <div className="flex xl:flex-row flex-col xl:justify-between items-center xl:mb-2">
                  <div className="xl:text-right text-center flex-1 xl:mr-4 xl:order-1 order-2">
                    <h3 className="font-bold text-lg">Inputs</h3>
                    <p className="text-gray-400 text-sm">News, Social, Signals</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-cyan-400 group-hover:scale-110 transition-transform xl:order-2 order-1 mb-3 xl:mb-0">database</span>
               </div>
             </div>
             
             <div className="p-4 xl:p-6 rounded-2xl border border-gray-700 bg-dark-surface/50 hover:border-cyan-400/50 transition-all group cursor-default">
               <div className="flex xl:flex-row flex-col xl:justify-between items-center xl:mb-2">
                  <div className="xl:text-right text-center flex-1 xl:mr-4 xl:order-1 order-2">
                    <h3 className="font-bold text-lg">Pipelines</h3>
                    <p className="text-gray-400 text-sm">Processing, Tagging, Clustering</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-cyan-400 group-hover:scale-110 transition-transform xl:order-2 order-1 mb-3 xl:mb-0">filter_alt</span>
               </div>
             </div>

             {/* Knowledge Graph - Moved here for mobile/tablet stacked layout */}
             <div className="xl:hidden p-4 rounded-2xl border border-gray-700 bg-dark-surface/50 hover:border-purple-500/50 transition-all group cursor-default">
                <div className="flex flex-col items-center mb-2">
                   <span className="material-symbols-outlined text-4xl text-purple-500 group-hover:scale-110 transition-transform mb-3">share</span>
                   <div className="text-center flex-1">
                     <h3 className="font-bold text-lg">Knowledge Graph</h3>
                     <p className="text-gray-400 text-sm">Relationship Maps</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Center Brain */}
          <div className="relative flex justify-center items-center py-8 order-first xl:order-none">
             <div className="w-full aspect-square max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full animate-pulse"></div>
                <div className="w-full h-full bg-contain bg-center bg-no-repeat relative z-10 transition-transform hover:scale-105 duration-700"
                     style={{
                       backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjaO-klaQpx6b7-0-izaroBLGJslGX4ybgAJACw9hH7p2p2ZOPf6QSYiTHDokkJWljwlmufqaSBWFS3xm2t-yf-MYzvQC1IEEb9gISlgrjpW2FK-oQ6Yv0rXC55F6WRqpF-VnsS0SvHCTPgBhxGJMvH8eRFFuyahHZx0e51PcOqIEuuqm8lIkRqcsf2BTI9fpSzpRL9kJO9IXCo42Fyv9SwgZKXNMbn5U77bTNTh15Z1i0Y-3ZZvm7Sbkz7BK2bRyiPnKK_-i6tVYH")`
                     }}
                ></div>
             </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
             {/* Knowledge Graph - Visible only on XL+ */}
             <div className="hidden xl:block p-6 rounded-2xl border border-gray-700 bg-dark-surface/50 hover:border-purple-500/50 transition-all group cursor-default">
                <div className="flex items-center mb-2">
                   <span className="material-symbols-outlined text-4xl text-purple-500 mr-4 group-hover:scale-110 transition-transform">share</span>
                   <div className="text-left flex-1">
                     <h3 className="font-bold text-lg">Knowledge Graph</h3>
                     <p className="text-gray-400 text-sm">Relationship Maps</p>
                   </div>
                </div>
             </div>

             <div className="p-4 xl:p-6 rounded-2xl border border-gray-700 bg-dark-surface/50 hover:border-purple-500/50 transition-all group cursor-default">
                <div className="flex xl:flex-row flex-col items-center xl:mb-2">
                   <span className="material-symbols-outlined text-4xl text-purple-500 xl:mr-4 group-hover:scale-110 transition-transform mb-3 xl:mb-0">psychology</span>
                   <div className="xl:text-left text-center flex-1">
                     <h3 className="font-bold text-lg">AI Engines</h3>
                     <p className="text-gray-400 text-sm">Creative tools, Sentiment Analysis</p>
                   </div>
                </div>
             </div>

             <div className="p-4 xl:p-6 rounded-2xl border border-gray-700 bg-dark-surface/50 hover:border-cyan-400/50 transition-all group cursor-default">
                <div className="flex xl:flex-row flex-col items-center xl:mb-2">
                   <span className="material-symbols-outlined text-4xl text-cyan-400 xl:mr-4 group-hover:scale-110 transition-transform mb-3 xl:mb-0">dashboard</span>
                   <div className="xl:text-left text-center flex-1">
                     <h3 className="font-bold text-lg">Outputs</h3>
                     <p className="text-gray-400 text-sm">Assets, Dashboards, Campaigns</p>
                   </div>
                </div>
             </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Chapter4;