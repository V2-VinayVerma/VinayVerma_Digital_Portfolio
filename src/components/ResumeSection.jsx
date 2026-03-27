import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ExternalLink, FileText, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const ResumeSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // Define standard resume variable path referencing the public directory
  const Vinay_Resume = "/Vinay_Resume.pdf";

  const education = [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology, Computer Science and Engineering",
      score: "CGPA: 8.31",
      duration: "Aug '23 - Present"
    },
    {
      institution: "Saraswati Sr. Sec. School",
      location: "Fatehabad, Haryana",
      degree: "Intermediate",
      score: "Percentage: 89",
      duration: "Mar '21 - May '22"
    },
    {
      institution: "Saraswati Sr. Sec. School",
      location: "Fatehabad, Haryana",
      degree: "Matriculation",
      score: "Percentage: 88",
      duration: "Mar '19 - May '20"
    }
  ];

  const training = [
    {
      company: "Cipher Schools (Edtech Company)",
      role: "User Interface & User Experience | Product Management",
      duration: "Jun '23 - Jul '23",
      bullets: [
        "Learnt to conduct user research and analyze learner behavior to identify problem statements.",
        "Practiced designing intuitive UI flows and high-fidelity screens in Figma.",
        "Developed the ability to evaluate designs through feedback loops and iterate on prototypes."
      ]
    }
  ];

  return (
    <section id="resume" ref={containerRef} className="py-24 bg-[#020D1D] border-t border-[#071A2C] relative overflow-hidden min-h-screen">
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Abstract Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
        
        {/* Animated Glow Orbs */}
        <motion.div style={{ y: y1 }} className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-[#00E5FF]/10 rounded-full blur-[120px]" />
        <motion.div style={{ y: y2 }} className="absolute bottom-40 left-[10%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-[#00E5FF] text-sm font-mono-custom font-bold tracking-[0.2em] uppercase mb-4">Experience & Academics</h3>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Journey</span>
          </h2>
        </motion.div>

        {/* Education & Training Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Education Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0C2A3F] to-[#020D1D] flex items-center justify-center border border-[#00E5FF]/30 shadow-[0_0_20px_rgba(0,229,255,0.15)] relative group">
                <div className="absolute inset-0 bg-[#00E5FF]/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <GraduationCap className="text-[#00E5FF] relative z-10" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white tracking-wide">Education</h3>
            </motion.div>
            
            <div className="relative border-l-2 border-[#071A2C] ml-7 space-y-10 pb-4">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                  className="relative pl-10 group"
                >
                  {/* Glowing Timeline Dot */}
                  <div className="absolute -left-[11px] top-6 w-5 h-5 rounded-full bg-[#020D1D] border-4 border-[#071A2C] group-hover:border-[#00E5FF] transition-all duration-500 z-10 group-hover:shadow-[0_0_15px_#00E5FF]" />
                  
                  {/* Glassmorphic Event Card */}
                  <div className="bg-gradient-to-br from-[#0C2A3F]/80 to-[#020D1D]/90 backdrop-blur-md border border-[#0A2033] hover:border-[#00E5FF]/40 rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.15)] transform hover:-translate-y-1 cursor-crosshair">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">{edu.degree}</h4>
                      <span className="text-[#00E5FF] text-xs font-mono-custom bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/20">{edu.duration}</span>
                    </div>
                    <div className="text-slate-300 font-medium mb-3 flex items-center gap-2">
                      <ChevronRight size={14} className="text-[#00E5FF]" /> {edu.institution}
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#071A2C]">
                      <span className="text-[#8BA3B8] text-sm flex items-center gap-1.5"><strong className="text-white font-mono-custom">{edu.score}</strong></span>
                      <span className="text-[#8BA3B8] text-xs font-mono-custom uppercase tracking-wider">{edu.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Training Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0C2A3F] to-[#020D1D] flex items-center justify-center border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] relative group">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Briefcase className="text-blue-400 relative z-10" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white tracking-wide">Training</h3>
            </motion.div>

            <div className="relative border-l-2 border-[#071A2C] ml-7 space-y-10 pb-4">
              {training.map((train, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                  className="relative pl-10 group"
                >
                  {/* Glowing Timeline Dot */}
                  <div className="absolute -left-[11px] top-6 w-5 h-5 rounded-full bg-[#020D1D] border-4 border-[#071A2C] group-hover:border-blue-400 transition-all duration-500 z-10 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                  
                  {/* Glassmorphic Event Card */}
                  <div className="bg-gradient-to-br from-[#0C2A3F]/80 to-[#020D1D]/90 backdrop-blur-md border border-[#0A2033] hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)] transform hover:-translate-y-1 cursor-crosshair">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{train.role}</h4>
                      <span className="text-blue-400 text-xs font-mono-custom bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">{train.duration}</span>
                    </div>
                    <div className="text-slate-300 font-medium mb-5 flex items-center gap-2 pb-4 border-b border-[#071A2C]">
                      <ChevronRight size={14} className="text-blue-400" /> {train.company}
                    </div>
                    <ul className="space-y-3">
                      {train.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-sm bg-blue-500/50 mt-2 shrink-0 group-hover:bg-blue-400 transition-colors" />
                          <span className="text-[#8BA3B8] text-sm leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Hi-Tech Download Section */}
        <div className="max-w-4xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 0 80px -20px rgba(0,229,255,0.3)" }}
            className="relative p-[1px] rounded-3xl bg-gradient-to-b from-[#00E5FF]/40 to-transparent overflow-hidden group"
          >
            {/* Animated border line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="bg-[#020D1D]/95 backdrop-blur-2xl rounded-[23px] p-10 md:p-14 text-center relative z-10">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-[#00E5FF] blur-2xl opacity-20 rounded-full animate-pulse" />
                <div className="w-24 h-24 mx-auto rounded-full bg-[#0C2A3F] flex items-center justify-center border border-[#00E5FF]/40 relative z-10 shadow-xl shadow-[#00E5FF]/10 overflow-hidden">
                  <div className="absolute inset-0 border-t-2 border-[#00E5FF] rounded-full animate-spin [animation-duration:3s]" />
                  <FileText size={42} className="text-[#00E5FF]" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
                Detailed <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Curriculum Vitae</span>
              </h2>
              <p className="text-[#8BA3B8] max-w-2xl mx-auto text-lg md:text-xl mb-12 font-light">
                Explore a comprehensive overview of my technical skills, academic background, and professional timeline.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a 
                  href={Vinay_Resume} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group px-8 py-4 bg-transparent border border-[#00E5FF]/50 text-[#00E5FF] rounded-xl font-bold overflow-hidden transition-all hover:border-[#00E5FF] flex items-center justify-center gap-3 min-w-[200px]"
                >
                  <div className="absolute inset-0 bg-[#00E5FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <ExternalLink size={20} className="relative z-10 group-hover:text-[#020D1D] transition-colors duration-300" />
                  <span className="relative z-10 group-hover:text-[#020D1D] transition-colors duration-300">Preview CV</span>
                </a>
                
                <a 
                  href={Vinay_Resume} 
                  download="Vinay_Resume.pdf"
                  className="relative group px-8 py-4 bg-[#00E5FF] text-[#020D1D] rounded-xl font-bold overflow-hidden flex items-center justify-center gap-3 min-w-[200px] shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.5)] transition-shadow"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <Download size={20} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
                  <span className="relative z-10">Download PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
