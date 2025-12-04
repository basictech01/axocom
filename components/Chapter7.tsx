import React from 'react';

const Card = ({ title, image }: { title: string, image: string }) => (
  <div 
    className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-2"
  >
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{ backgroundImage: `url("${image}")` }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-primary-accent transition-colors">{title}</h3>
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
        <span>Learn More</span>
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </div>
    </div>
  </div>
);

const Chapter7: React.FC = () => {
  return (
    <div className="min-h-[100dvh] w-full bg-white dark:bg-background-dark font-space py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-center items-center text-center p-8 bg-cover bg-center"
             style={{
               backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.7) 0%, rgba(16, 22, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAR6wM-qqLlxTR-nazPNNZPUX_nexREOWJjlD4s18IrUZl9N9DlvFvXv8fi39UWvmQyc7Kx883dQIQTJbH5HtTmmQJs9jCsjGqUGQv66CO8OTXYQWkq_IwOfhh08Bmsb9oXVl6Erq1dHJBhq7H9RzoE8O0x6gvdojVeeDFOLlUNjHaIyVPkZ1ky9bc5VBMKmxkrEpwfBqVBlUxb3jn1GX9MwZggA8RrVEu9U_qphvGmHuQAH9MRApOSmu5Xfeacib4qjydVvXtgW9B")`
             }}
        >
          <span className="text-white font-mono text-sm tracking-[0.3em] uppercase bg-white/10 px-4 py-1 rounded-full mb-6 border border-white/20">Phase 07</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            The Internship That Changes Everything
          </h2>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            We’re opening our doors to the next generation. Learn from journalists, engineers, PR experts, and creative directors. Build real campaigns. Use real AI tools.
          </p>
          <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20">
            Explore Opportunities
          </button>
        </div>

        {/* Roles Grid */}
        <div>
           <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-8 px-2 border-l-4 border-primary pl-4">Find Your Path</h3>
           {/* 
              Responsive Grid:
              - Mobile: 1 col
              - Tablet: 2 cols
              - Laptop+: 3 cols
           */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             <Card 
               title="Strategy & Research" 
               image="https://lh3.googleusercontent.com/aida-public/AB6AXuDMhe5JsMzjBOcDNctqc-o8gh7VHHmlGdJcDl4poN1MjOC5HpmD52q5u9sMcmmj7WcVBZ-6ESegaZPiPdoLl1o4kzkBJbkTfVJPN0q1ERzp5l_LwHSxTeH5z0YwE-mHuFQAxNr6HG6ZUetW_LCDGe4RutlcxzF624yt3jYuFB1rLSv0lJXvibk32QBr7Gef9Giv4b8eAy2RgMJ9IoxHH2f8qccItoerUgNOM2THQig9P3YSxnFjYgLew7lA4jPBDcOdLesrE0h0aJgJ"
             />
             <Card 
               title="Creative & Generative Production" 
               image="https://lh3.googleusercontent.com/aida-public/AB6AXuAEUg5IiwvNwZs_3LUwyI1DaauQl_ReN38dn33VYyvPKE-BTYc2ZYJUqoRcI0jMpJTGq5CtJtRYnd_cs-WYSuY98x_nLETLIVmxHTskI_T1-BsQynYlyDl1eezYMVSkhRX55LDaRH79F1gE60kaf--1f6BqsPGzDkzubzmMfktdqdnua5Xmvtbq9pGmWQt1Ex8EZHAlucm2BudO_fIa4mhh7Ido-ckG4y9qVfCXLnWVllTflcCH_wiHEy_ZGsdRq947ENrpTfrL3DdE"
             />
             <Card 
               title="Client Service & Account Management" 
               image="https://lh3.googleusercontent.com/aida-public/AB6AXuCLkBLL1pweRHOMDWqM1TrxQxcEcWA98XwRecgAJr72BnsROGMVkhxHhDj7gC_9zBt_ER-qhDMVoojxS1lOTllziWrz8PHAlLksD8pyOGug7MkY9KGvTAJDwTALRTHPyd1_uXJzm5IyEP2d51_9bY43anHkk6Fsf6M-qLEkW-4fGVmyGRCJL8xGswg245RbJKxpQ7lZdedfFYDFmV65zsfCMf0zomF15oSIIMUsWv9es1KuzUhwPfWw_y6u9U9QvoJuSUZIrIu35sOR"
             />
           </div>
        </div>

      </div>
    </div>
  );
};

export default Chapter7;