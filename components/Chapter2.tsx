import React from 'react';

interface LeaderProps {
  name: string;
  role: string;
  description: string;
  image: string;
  alt: string;
}

const LeaderCard: React.FC<LeaderProps> = ({ name, role, description, image, alt }) => (
  <div 
    className="group relative flex flex-col justify-end overflow-hidden rounded-2xl aspect-[3/4] bg-cover bg-center transition-transform duration-500 hover:scale-[1.02]"
    style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0,0,0,0) 100%), url("${image}")` }}
    role="img"
    aria-label={alt}
  >
    <div className="relative z-10 p-6 md:p-8">
      <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight text-white mb-1">{name}</h3>
      <p className="font-sans text-primary text-xs font-bold uppercase tracking-widest mb-4">{role}</p>
      <div className="h-0.5 w-12 bg-primary mb-4 transition-all duration-300 group-hover:w-full"></div>
      <p className="font-sans text-gray-300 text-sm leading-relaxed opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        {description}
      </p>
    </div>
  </div>
);

const Chapter2: React.FC = () => {
  const leaders: LeaderProps[] = [
    {
      name: "Basant Rawat",
      role: "The Visionary",
      description: "With a storyteller's heart, Basant crafts the narratives that define our future, seeing the world not as it is, but as it could be.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkKrqmDVeSWYWagweLYzW60RLO4W6Z9iqTbVcF8o6wnzFZUVMTutb4qLSE7BX1hPhpCoaTu5kWgKxsGu5m3TU2kpwWkB0_ajbPuDowzmZZUIsHydCBJultICp-Uukcn9XLmVuKge7O87oDFkSvJYhO5kSlPIdXCX2Gbn5fqoknA_C4SB7cQ_FSOla1hA0WxeOgZRC6Np1UZbO4cGuZHG7X6sdTZ3I_PTxym81iHXhi5Oupftw6KVnMfwVCbF4Oj4XI4mbGJdPANXwv",
      alt: "Portrait of Basant Rawat"
    },
    {
      name: "Parantap Bhatt",
      role: "The Strategist",
      description: "Parantap architects our path forward, piece by piece, turning abstract ideas into tangible, market-defining realities.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmwXEWsCtVvQNVb2pAc3n2_9tVhDsif6xxpMf6C6T1b0EL5D4jU2XGpnucEjCr3Y1Zv35vpts2FgfWE1FucxxXkX_MYC0JfSwdXhXMLW9vQCGqmOJPb1dCsfLpdHhFFPEUtZJ7kJi9V9k4Vjip0Clbr31Rcg6jyBKViQpmZLa3paRZEvzg8RPOmYQKom5xX40J789C7j8mJIvROq3dOALYi8OPfcrxXIuNA6fxo7pv0KRYTi71_3UoIs7nh4ZhR9LrhkocPLK9n6Ys",
      alt: "Portrait of Parantap Bhatt"
    },
    {
      name: "Akash Sharma",
      role: "The Advocate",
      description: "Akash champions our mission with unwavering integrity, ensuring every decision is made with purpose and principle.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAklA22a0kQV6DU3tKNhNT2f9Y4_BLuIuOf7R0yVpTFN9oezJhWqLFvtd8amABIeVbR9qHmyh9QQzvBLVgjMvPcpy4v62mJigrCaY-vZDrD2PJYrCp_sWM4EdeoqeHpFNhGr4YShmHZhMMMTlh31qdO3X6eFbUkaOz8B-51bR488w6AENHngegB8QXkwwTnRKVPy1JgtKxJ3FhAJIbz659c8kHyZbVcc-xneGIV0FDNiykODj69OKE-jHI-AsusHkd03D682iW4Kxt",
      alt: "Portrait of Akash Sharma"
    },
    {
      name: "Pranav Pandey",
      role: "The Analyst",
      description: "Finding clarity in chaos, Pranav deciphers the complex data that guides our every move, revealing the stories hidden in the numbers.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7FapDQwd9Rc7gnR0Bg1RflhZpOjrh2PS_MZUbn4T8azw-1kPTHpLdC9BFOi5FYA9-npLU1xA5-npPob1t9ebxGBCC6Lub3-Fw4M7_PRme1Hl8LXdJDXbAjUta-3f6hoQEbkje_L5E2TJQRSsbrEG7qtosZoU_lqWe6Ab3cijN7y5TOTSO2l9v4uNwliCoTjvxWkL1x6TmiXk9O5cjlHfYPYVzocWzeBuGRGXaCqFuumvqY2RjIx3ouQmQxBQylRQFY7zu3PYiNiTM",
      alt: "Portrait of Pranav Pandey"
    }
  ];

  return (
    <div className="min-h-[100dvh] w-full bg-background-light dark:bg-background-dark py-20 px-4 md:px-10 lg:px-20 xl:px-40 flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col gap-6 text-center mb-16 items-center">
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase bg-primary/10 px-3 py-1 rounded-full">Phase 02</span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-black dark:text-white">
            The Spark
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Meet the visionaries who ignited the spark and continue to fuel the fire of innovation at AxoCom. 
            Each a master in their own right, together they form the core of our narrative.
          </p>
        </div>

        {/* 
          Grid Response Strategy:
          - Mobile: 1 col
          - Tablet/Small Laptop (sm/md/lg): 2 cols for readability
          - Large Desktop (xl): 4 cols
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {leaders.map((leader) => (
            <LeaderCard 
              key={leader.name} 
              name={leader.name}
              role={leader.role}
              description={leader.description}
              image={leader.image}
              alt={leader.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapter2;