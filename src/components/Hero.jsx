import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SiReact, SiMongodb, SiNodedotjs, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { useState, useEffect } from 'react';

const Hero = () => {
  const titles = ["Full Stack Developer", "UI/UX Designer", "Product Manager", "Problem Solver"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500); // Change title every 2.5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-32 pb-16 bg-[#020D1D] relative overflow-hidden flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10 abstract-dots-bg">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col z-10"
          >
            <div className="inline-flex items-center gap-2 border border-[#00BBD4]/30 bg-[#00E5FF]/10 px-4 py-1.5 rounded-full mb-8 w-max shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] animate-pulse"></div>
              <span className="text-[#00E5FF] font-mono-custom text-sm font-medium">Available for opportunities</span>
            </div>
            
            <p className="text-[#C9D1D9] text-lg mb-2 font-mono-custom">Hello, I'm</p>
            
            <div className="flex flex-col mb-6">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
                Vinay
              </h1>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-outline-cyan leading-none tracking-tight">
                Verma
              </h1>
            </div>
            
            <h2 className="text-xl md:text-2xl font-mono-custom text-[#00E5FF] mb-6 font-semibold flex items-center gap-2 h-8">
              <span className="text-purple-400 shrink-0">{'>'}</span> 
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 15, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -15, rotateX: -90 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                  className="inline-block origin-bottom"
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
            </h2>
            
            <p className="text-[#8BA3B8] max-w-lg text-lg leading-relaxed mb-8 font-medium">
              CSE student at LPU crafting seamless digital experiences with modern web technologies & a product-first mindset.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {['MERN Stack', 'UI/UX', 'Product Management', 'Problem Solver'].map(tag => (
                <span key={tag} className="px-5 py-2 rounded-full border border-[#071A2C]/80 bg-[#071A2C] text-[#C9D1D9] text-sm font-semibold shadow-inner">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 mb-20 lg:mb-12">
              <Link to="/projects" className="apple-glass-neon px-8 py-4 rounded-xl text-white font-bold flex items-center gap-3 group">
                Explore Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="apple-glass-hollow px-8 py-4 rounded-xl text-white font-bold group">
                Get In Touch
              </Link>
            </div>
            
            {/* Stats Row */}
            <div className="flex gap-10 md:gap-16 pt-8 mt-auto">
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-[#00E5FF] text-outline-cyan-glow tracking-tighter mb-1">9+</span>
                <span className="text-xs font-bold text-[#8BA3B8] tracking-widest uppercase">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-[#00E5FF] text-outline-cyan-glow tracking-tighter mb-1">4+</span>
                <span className="text-xs font-bold text-[#8BA3B8] tracking-widest uppercase">Certifications</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-[#00E5FF] text-outline-cyan-glow tracking-tighter mb-1">8.31</span>
                <span className="text-xs font-bold text-[#8BA3B8] tracking-widest uppercase">CGPA</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center justify-center w-full relative z-10 lg:pl-10"
          >
            {/* Avatar Orbit System */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto mb-20">
              
              {/* Orbital Rings */}
              <div className="absolute inset-[-10%] border-2 border-[#071A2C]/60 rounded-full" />
              <div className="absolute inset-[-25%] border border-[#071A2C]/40 rounded-full border-dashed" />
              
              {/* Main Avatar */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-[#00BBD4]/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] bg-[#020D1D]">
                <img 
                  src="/vinay_profile.jpg" 
                  alt="Vinay Verma" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-12 sm:-right-20 glass-panel border border-indigo-500/40 bg-[#071A2C]/90 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
              >
                <GraduationCap size={16} className="text-indigo-400" />
                <span className="text-xs font-bold text-indigo-300 tracking-wide">LPU · CGPA 8.31</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-8 sm:-left-16 glass-panel border border-[#00BBD4]/40 bg-[#071A2C]/90 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <div className="w-2 h-2 rounded-full bg-[#00E5FF]"></div>
                <span className="text-xs font-bold text-[#00BBD4] tracking-wide">Open to Work</span>
              </motion.div>

              {/* Orbiting Tech Nodes */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-[-10%] z-0">
                <div className="absolute top-[10%] left-[10%] w-10 h-10 bg-[#0C2A3F] rounded-full flex items-center justify-center border border-[#0C2A3F] shadow-lg" style={{ transform: 'rotate(-360deg)' }}><SiReact className="text-[#61DAFB] text-xl" /></div>
                <div className="absolute bottom-[10%] right-[10%] w-10 h-10 bg-[#0C2A3F] rounded-full flex items-center justify-center border border-[#0C2A3F] shadow-lg" style={{ transform: 'rotate(-360deg)' }}><SiMongodb className="text-[#47A248] text-xl" /></div>
              </motion.div>
              
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute inset-[-25%] z-0">
                <div className="absolute top-[40%] -left-[5%] w-8 h-8 bg-[#0C2A3F] rounded-full flex items-center justify-center border border-[#0C2A3F] shadow-lg" style={{ transform: 'rotate(360deg)' }}><SiJavascript className="text-[#F7DF1E] text-sm" /></div>
                <div className="absolute top-[10%] right-[15%] w-12 h-12 bg-[#0C2A3F] rounded-full flex items-center justify-center border border-[#0C2A3F] shadow-lg" style={{ transform: 'rotate(360deg)' }}><SiNodedotjs className="text-[#339933] text-2xl" /></div>
                <div className="absolute bottom-[5%] left-[30%] w-9 h-9 bg-[#0C2A3F] rounded-full flex items-center justify-center border border-[#0C2A3F] shadow-lg" style={{ transform: 'rotate(360deg)' }}><SiTailwindcss className="text-[#06B6D4] text-lg" /></div>
              </motion.div>
            </div>

            {/* Code Snippet Window */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full max-w-md glass-panel rounded-xl overflow-hidden shadow-2xl border border-[#071A2C]/50 bg-[#071A2C]/80 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#071A2C]/50 bg-[#0C2A3F]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-[#8BA3B8] text-xs font-mono-custom ml-4">vinay.js</span>
              </div>
              <div className="p-5 font-mono-custom text-sm leading-8 overflow-x-auto text-[#C9D1D9]">
                {[
                  { num: 1, content: <><span className="text-[#00E5FF]">name</span>: <span className="text-amber-300">"Vinay Verma"</span>,</> },
                  { num: 2, content: <><span className="text-[#00E5FF]">role</span>: <span className="text-amber-300">"Full Stack Dev"</span>,</> },
                  { num: 3, content: <><span className="text-[#00E5FF]">stack</span>: [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node"</span>,<span className="text-amber-300">"MongoDB"</span>,<span className="text-amber-300">"Express"</span>],</> },
                  { num: 4, content: <><span className="text-[#00E5FF]">cgpa</span>: <span className="text-purple-400">8.31</span>,</> },
                  { num: 5, content: <><span className="text-[#00E5FF]">openTo</span>: <span className="text-amber-300">"opportunities"</span>,</> },
                  { num: 6, content: <><span>{'}'};</span></> }
                ].map((line, index) => (
                  <div key={line.num} className="flex">
                    <span className="text-slate-600 mr-4 select-none w-4 text-right">{line.num}</span> 
                    <motion.div
                      initial={{ width: 0, opacity: 0, borderRightWidth: 2 }}
                      whileInView={{ width: "100%", opacity: 1, borderRightColor: "transparent" }}
                      viewport={{ once: true }}
                      transition={{ 
                        width: { delay: 1.2 + (index * 0.6), duration: 0.5, ease: "linear" },
                        opacity: { delay: 1.2 + (index * 0.6), duration: 0.01 },
                        borderRightColor: { delay: 1.2 + (index * 0.6) + 0.5, duration: 0.01 }
                      }}
                      className="overflow-hidden whitespace-nowrap border-r-2 border-[#00E5FF]/80"
                    >
                      {line.content}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
