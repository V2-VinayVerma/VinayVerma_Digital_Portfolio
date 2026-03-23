import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Responsive Web Design',
      platform: 'freeCodeCamp',
      date: 'May 2024',
      image: '/cert_fcc.png',
      description: 'Certified in building fully responsive websites using modern HTML5 & CSS3 techniques.',
      skills: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Media Queries'],
      color: 'cyan'
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      platform: 'Oracle',
      date: 'Apr 2024',
      image: '/cert_oracle.png',
      description: 'Certified in foundational AI and cloud infrastructure concepts on Oracle Cloud platform.',
      skills: ['Oracle Cloud', 'AI Foundations', 'Machine Learning', 'OCI Services'],
      color: 'red'
    },
    {
      title: 'User Interface & User Experience Design',
      platform: 'CipherSchools',
      date: 'Mar 2023',
      image: '/cert_cipher.png', 
      description: 'Trained in designing user-centric interfaces with Figma and product management methodologies.',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Product Management'],
      color: 'purple'
    },
    {
      title: 'Computational Theory: Language Principal & Finite Automata',
      platform: 'Infosys SpringBoard',
      date: 'Nov 2025',
      image: '/cert_infosys.png',
      description: 'Comprehensive study of formal languages, automata theory, and computational logic principles.',
      skills: ['Automata Theory', 'Turing Machines', 'Regex', 'Computational Logic'],
      color: 'blue'
    }
  ];

  const colorThemes = {
    cyan: {
      dot: 'bg-[#00E5FF]',
      buttonSrc: 'border border-[#00E5FF]/50 text-[#00E5FF] hover:bg-[#00E5FF]/30 shadow-[0_0_15px_rgba(34,211,238,0.1)]',
      shadow: 'hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]'
    },
    red: {
      dot: 'bg-red-500',
      buttonSrc: 'border border-red-800/80 text-red-500 hover:bg-red-900/30 shadow-[0_0_15px_rgba(239,68,68,0.1)]',
      shadow: 'hover:shadow-[0_0_40px_rgba(239,68,68,0.08)]'
    },
    purple: {
      dot: 'bg-purple-500',
      buttonSrc: 'border border-purple-800/80 text-purple-400 hover:bg-purple-900/30 shadow-[0_0_15px_rgba(168,85,247,0.1)]',
      shadow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]'
    },
    blue: {
      dot: 'bg-blue-500',
      buttonSrc: 'border border-blue-800/80 text-blue-400 hover:bg-blue-900/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]',
      shadow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]'
    }
  };

  return (
    <section id="certifications" className="py-24 bg-[#020D1D] relative border-t border-[#071A2C]/50 min-h-screen">
      <div className="absolute overflow-hidden inset-0 pointer-events-none -z-10">
        <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h3 className="text-[#00E5FF] text-sm font-mono-custom font-bold tracking-[0.2em] uppercase mb-4">Credentials</h3>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            My <span className="text-[#00E5FF]">Certifications</span>
          </h2>
          <p className="text-[#8BA3B8] max-w-2xl text-lg md:text-xl leading-relaxed mb-8">
            Verified credentials from industry-leading platforms demonstrating continuous learning and expertise.
          </p>

          {/* Certificates Earned Pill */}
          <div className="inline-flex items-center gap-3 bg-[#0C2A3F] border border-[#071A2C]/80 px-6 py-3 rounded-2xl shadow-xl">
            <Award className="text-[#00E5FF]" size={24} />
            <span className="text-[#00E5FF] font-bold font-mono-custom text-xl">4</span>
            <span className="text-[#8BA3B8] font-mono-custom text-sm font-semibold">Certificates Earned</span>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const theme = colorThemes[cert.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-[#0C2A3F] rounded-[2rem] overflow-hidden border border-[#071A2C]/80 hover:border-[#0C2A3F] transition-all duration-500 group flex flex-col h-full ${theme.shadow}`}
              >
                {/* Image block */}
                <div className="w-full aspect-[4/3] bg-[#020D1D] p-6 relative flex items-center justify-center border-b border-[#071A2C]/80">
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 ${theme.dot} blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700`} />
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-contain relative z-10 group-hover:scale-[1.03] transition-transform duration-700 delay-75" />
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow bg-[#0C2A3F]">
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full ${theme.dot} shadow-[0_0_8px_currentColor]`}></div>
                      <span className="text-white font-bold text-[13px] tracking-wide">{cert.platform}</span>
                    </div>
                    <span className="text-[#8BA3B8] text-[11px] font-mono-custom bg-[#0C2A3F]/60 px-2.5 py-1 rounded border border-[#071A2C]/50">{cert.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-slate-200 transition-colors">{cert.title}</h3>
                  <p className="text-[#8BA3B8] text-[13px] mb-6 leading-relaxed flex-grow">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 text-[10.5px] font-mono-custom text-[#8BA3B8] bg-[#0C2A3F]/40 border border-[#071A2C]/60 rounded flex items-center justify-center">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a href={cert.image} target="_blank" rel="noreferrer" className={`w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all ${theme.buttonSrc}`}>
                    <ExternalLink size={16} /> View Certificate
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
