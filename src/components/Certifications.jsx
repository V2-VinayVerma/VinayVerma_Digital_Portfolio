import { motion } from 'framer-motion';
import { ExternalLink, Award, ShieldCheck } from 'lucide-react';

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
      title: 'Oracle Cloud Infrastructure AI Associate',
      platform: 'Oracle',
      date: 'Apr 2024',
      image: '/cert_oracle.png',
      description: 'Certified in foundational AI and cloud infrastructure concepts on Oracle Cloud platform.',
      skills: ['Oracle Cloud', 'AI', 'Machine Learning', 'OCI Services'],
      color: 'red'
    },
    {
      title: 'User Interface & User Experience Design',
      platform: 'CipherSchools',
      date: 'Mar 2023',
      image: '/cert_cipher.png', 
      description: 'Trained in designing user-centric interfaces with Figma and product management methodologies.',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'Product Management'],
      color: 'purple'
    },
    {
      title: 'Product Management Course',
      platform: 'CipherSchools',
      date: 'Aug 2025',
      image: '/cert_cipher_pm.png', 
      description: 'Completed comprehensive training in product management methodologies and strategies.',
      skills: ['Product Strategy', 'Market Research', 'Agile methodologies', 'Product Roadmap'],
      color: 'cyan'
    },
    {
      title: 'Language Principal & Finite Automata',
      platform: 'Infosys SpringBoard',
      date: 'Nov 2025',
      image: '/cert_infosys.png',
      description: 'Comprehensive study of formal languages, automata theory, and computational logic principles.',
      skills: ['Automata Theory', 'Turing Machines', 'Regex', 'Computational Logic'],
      color: 'blue'
    },
    {
      title: 'Java Programming',
      platform: 'iamneo (LPU)',
      date: 'May 2025',
      image: '/cert_iamneo_java.png',
      description: 'Completed a 72-hour comprehensive online course covering Java programming fundamentals.',
      skills: ['Java', 'OOP', 'Data Structures', 'Problem Solving'],
      color: 'red'
    },
    {
      title: 'Object Oriented Programming',
      platform: 'iamneo (LPU)',
      date: 'Dec 2024',
      image: '/cert_iamneo_oop.png',
      description: 'Completed a 72-hour online course focusing on core concepts and principles of OOP.',
      skills: ['OOP Concepts', 'Encapsulation', 'Polymorphism', 'Abstraction'],
      color: 'purple'
    },
    {
      title: 'Privacy and Security in Online Social Media',
      platform: 'NPTEL (Elite)',
      date: 'Oct 2025',
      image: '/cert_nptel.png',
      description: 'Completed an elite 12-week NPTEL course with a consolidated score of 71%.',
      skills: ['Online Security', 'Privacy', 'Social Media', 'Cybersecurity'],
      color: 'blue'
    }
  ];

  const colorThemes = {
    cyan: {
      dot: 'bg-[#00E5FF]',
      borderHover: 'hover:border-[#00E5FF]/50',
      shadowHover: 'hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.2)]',
      textHover: 'group-hover:text-[#00E5FF]',
      buttonSrc: 'border border-[#00E5FF]/40 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#020D1D]',
      tagBg: 'bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/20'
    },
    red: {
      dot: 'bg-red-500',
      borderHover: 'hover:border-red-500/50',
      shadowHover: 'hover:shadow-[0_10px_40px_-10px_rgba(239,68,68,0.2)]',
      textHover: 'group-hover:text-red-400',
      buttonSrc: 'border border-red-500/40 text-red-400 hover:bg-red-500 hover:text-[#020D1D]',
      tagBg: 'bg-red-500/10 text-red-400 border-red-500/20'
    },
    purple: {
      dot: 'bg-purple-500',
      borderHover: 'hover:border-purple-500/50',
      shadowHover: 'hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.2)]',
      textHover: 'group-hover:text-purple-400',
      buttonSrc: 'border border-purple-500/40 text-purple-400 hover:bg-purple-500 hover:text-[#020D1D]',
      tagBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    },
    blue: {
      dot: 'bg-blue-500',
      borderHover: 'hover:border-blue-500/50',
      shadowHover: 'hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)]',
      textHover: 'group-hover:text-blue-400',
      buttonSrc: 'border border-blue-500/40 text-blue-400 hover:bg-blue-500 hover:text-[#020D1D]',
      tagBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    }
  };

  return (
    <section id="certifications" className="py-24 bg-[#020D1D] relative border-t border-[#071A2C]/50 min-h-screen overflow-hidden">
      
      {/* Background Tech Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-70" />
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-[5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldCheck className="text-[#00E5FF]" size={24} />
            <h3 className="text-[#00E5FF] text-sm font-mono-custom font-bold tracking-[0.2em] uppercase mt-1">Credentials</h3>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Certifications</span>
          </h2>
          <p className="text-[#8BA3B8] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10 font-light">
            Verified achievements from industry-leading platforms demonstrating continuous learning and technical expertise.
          </p>

          {/* Certificates Earned Pill */}
          <div className="inline-flex items-center gap-3 bg-[#020D1D]/80 backdrop-blur-xl border border-[#00E5FF]/30 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(0,229,255,0.15)] relative group cursor-default">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF]/20 to-blue-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Award className="text-[#00E5FF] relative z-10" size={24} />
            <span className="text-white font-bold text-xl relative z-10">{certifications.length}</span>
            <span className="text-[#8BA3B8] text-sm font-semibold tracking-wide relative z-10">Certificates Earned</span>
          </div>
        </motion.div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const theme = colorThemes[cert.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                className={`bg-gradient-to-br from-[#0C2A3F]/80 to-[#020D1D]/90 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-[#0A2033] ${theme.borderHover} transition-all duration-500 group flex flex-col h-full transform hover:-translate-y-2 cursor-crosshair ${theme.shadowHover}`}
              >
                {/* Image block with glowing scanner effect */}
                <div className="w-full aspect-[4/3] bg-[#020D1D] p-6 relative flex items-center justify-center border-b border-[#0A2033] overflow-hidden">
                  {/* Background Blur Dot */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 ${theme.dot} blur-[80px] opacity-10 group-hover:opacity-40 transition-opacity duration-700`} />
                  
                  {/* Scanner Line Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-${cert.color}-500/20 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 hidden sm:block`} />
                  
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-contain relative z-10 group-hover:scale-[1.05] group-hover:rotate-1 transition-all duration-700 ease-out drop-shadow-2xl" />
                </div>
                
                {/* Content Block */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${theme.dot} shadow-[0_0_8px_currentColor] animate-pulse`}></div>
                      <span className="text-white font-bold text-xs tracking-wider uppercase">{cert.platform}</span>
                    </div>
                    <span className="text-[#8BA3B8] text-[10px] font-mono-custom bg-[#020D1D] px-2.5 py-1 rounded border border-[#0A2033] shrink-0">{cert.date}</span>
                  </div>
                  
                  <h3 className={`text-xl font-bold text-white mb-3 leading-tight transition-colors duration-300 ${theme.textHover}`}>{cert.title}</h3>
                  <p className="text-[#8BA3B8] text-sm mb-6 leading-relaxed flex-grow font-light">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className={`px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded border flex items-center justify-center ${theme.tagBg}`}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a href={cert.image} target="_blank" rel="noreferrer" className={`w-full py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 relative overflow-hidden group/btn ${theme.buttonSrc}`}>
                    <span className="relative z-10 flex items-center gap-2">
                      <ExternalLink size={16} /> View Certificate
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
