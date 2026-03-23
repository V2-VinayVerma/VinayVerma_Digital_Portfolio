import { motion } from 'framer-motion';

const Achievements = () => {
  const ACCOMPLISHMENTS = [
    {
      icon: '🏆',
      badgeText: 'HACKATHON',
      badgeColor: '#ef4444', 
      badgeBg: 'rgba(239,68,68,0.15)',
      year: '2025',
      title: "Infotsav'25 Hackathon Finalist",
      org: 'ABV-IIITM Gwalior',
      orgColor: '#eab308', 
      description: "Reached the finals of Infotsav'25 Hackathon organized by Atal Bihari Vajpayee — Indian Institute of Information Technology & Management, Gwalior, MP."
    },
    {
      icon: '🚀',
      badgeText: 'HACKATHON',
      badgeColor: '#ef4444', 
      badgeBg: 'rgba(239,68,68,0.15)',
      year: '2025',
      title: 'Smart India Hackathon 2025',
      org: 'Government of India Initiative',
      orgColor: '#ef4444', 
      description: "Selected and participated in the Prototype Round of the national-level Smart India Hackathon 2025 — one of the world's biggest open innovation contests."
    },
    {
      icon: '🥈',
      badgeText: 'CODING',
      badgeColor: '#f8fafc', 
      badgeBg: 'rgba(248,250,252,0.1)',
      year: '2024',
      title: 'HackerRank Silver Badge — C++',
      org: 'HackerRank',
      orgColor: '#94a3b8', 
      description: 'Earned Silver Badge in C++ on HackerRank for demonstrating advanced problem-solving and coding proficiency.'
    },
    {
      icon: '🥈',
      badgeText: 'CODING',
      badgeColor: '#f8fafc', 
      badgeBg: 'rgba(248,250,252,0.1)',
      year: '2024',
      title: 'HackerRank Silver Badge — Java',
      org: 'HackerRank',
      orgColor: '#94a3b8', 
      description: 'Earned Silver Badge in Java on HackerRank, validating object-oriented programming skills and algorithmic thinking.'
    },
    {
      icon: '🥈',
      badgeText: 'CODING',
      badgeColor: '#f8fafc', 
      badgeBg: 'rgba(248,250,252,0.1)',
      year: '2024',
      title: 'HackerRank Silver Badge — Python',
      org: 'HackerRank',
      orgColor: '#94a3b8', 
      description: 'Earned Silver Badge in Python on HackerRank, showcasing data structure and scripting proficiency in Python.'
    },
    {
      icon: '⭐',
      badgeText: 'ACADEMIC',
      badgeColor: '#3b82f6', 
      badgeBg: 'rgba(59,130,246,0.15)',
      year: 'Nov 2025',
      title: 'NPTEL Elite Certification',
      org: 'NPTEL — IIT/NIT Network',
      orgColor: '#3b82f6',
      description: 'Received Elite certification in "Privacy and Security in Online Social Media" with a commendable score of 71%, awarded by NPTEL (National Programme on Technology Enhanced Learning).'
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-[#020D1D] border-t border-[#071A2C] min-h-screen relative overflow-hidden">
      
      {/* Background Ambience from your provided structure */}
      <div className="absolute top-20 -right-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h3 className="text-[#00E5FF] font-bold tracking-[0.2em] text-xs uppercase mb-4 font-mono-custom">
            Milestones
          </h3>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Achievements & <span className="text-[#00E5FF]">Wins</span>
          </h2>
          <p className="text-[#8BA3B8] text-lg md:text-xl leading-relaxed">
            Hackathons conquered, badges earned, and competitions survived — here's my journey so far.
          </p>
        </motion.div>

        {/* Unified Grid from the Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACCOMPLISHMENTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0b101a] border border-[#0C2A3F] rounded-[1.5rem] p-8 flex flex-col group hover:border-[#00E5FF]/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.05)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  {/* Floating Emoji Icon */}
                  <div className="text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300 origin-bottom">
                    {item.icon}
                  </div>
                  
                  {/* Category Pill */}
                  <span 
                    className="text-[10px] font-bold px-3 py-1 rounded font-mono-custom uppercase tracking-[0.15em] border"
                    style={{ 
                      background: item.badgeBg, 
                      color: item.badgeColor, 
                      borderColor: `${item.badgeColor}30` 
                    }}
                  >
                    {item.badgeText}
                  </span>
                </div>
                
                {/* Year Marker */}
                <span className="text-xs text-[#8BA3B8] font-mono-custom rotate-0">
                  {item.year}
                </span>
              </div>
              
              <h4 className="text-[20px] font-bold text-white mb-2 leading-[1.4] pr-4 group-hover:text-[#00E5FF] transition-colors duration-300">
                {item.title}
              </h4>
              
              <p className="text-xs font-mono-custom font-bold mb-5 tracking-tight" style={{ color: item.orgColor }}>
                {item.org}
              </p>
              
              <p className="text-[#8BA3B8] text-[14px] leading-[1.8] flex-grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
