import React from 'react';

interface Chapter3Props {
  onNext: () => void;
}

const Chapter3: React.FC<Chapter3Props> = ({ onNext }) => {
  const items = [
    { icon: 'hub', title: 'Strategy' },
    { icon: 'monitoring', title: 'Data insights' },
    { icon: 'share', title: 'Knowledge Graphs' },
    { icon: 'auto_awesome', title: 'AI Generated Content' },
    { icon: 'groups', title: 'Social Media Management' },
    { icon: 'campaign', title: 'Public Relation Communication' },
    { icon: 'history_edu', title: 'Brand Building' },
    { icon: 'rocket_launch', title: 'Campaign Management' },
  ];

  return (
    <div className="min-h-[100dvh] w-full bg-background-dark flex flex-col items-center justify-center p-4 md:p-10 font-space py-20">
      <div className="max-w-[1400px] w-full flex flex-col gap-8">
        
        {/* Hero Card */}
        <div className="relative w-full overflow-hidden rounded-2xl min-h-[300px] md:min-h-[400px] shadow-2xl shadow-primary/20 flex flex-col justify-end group">
           <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(13, 89, 242, 0.4) 0%, rgba(0, 0, 0, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQ89hlhzi9_G8_IxAh2Aty9M_YzDCOdxmBHAUo2LjCC4T1FSg_HqIJ3KSrWsUGdhWkV20UkFQz1j8oVGgxV8BUkXtbxKovWflZ3gfW6y0ntEQ7he7ZWi_pWs_BBOd2fok7zFyKbODywsLV1IG-B-SpW6PoCxNcCkEa54I36HUAfrnZ50PhQ8sErXVE8gEBM7QfHtCel23mH-04m-xFhwWu9yUUIml_Wx3LS8qAupmWdUHMc3PKOc_QcInHKpVTbcrHIrm4_l4WmEZ_")`
                }}
           ></div>
           <div className="relative z-10 p-6 md:p-10">
             <h2 className="text-5xl md:text-7xl font-work font-black leading-tight tracking-tighter uppercase drop-shadow-2xl">Our Services</h2>
           </div>
        </div>

        {/* Grid 
            Scales from 1 -> 2 -> 3 -> 4 columns to avoid squashed cards
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-5 md:p-6 rounded-xl border border-primary/20 bg-primary/10 hover:bg-primary/20 transition-all cursor-default shadow-lg shadow-black/20">
              <span className="material-symbols-outlined text-primary text-3xl shrink-0">{item.icon}</span>
              <h3 className="text-white text-base md:text-lg font-bold leading-tight">{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Chapter3;