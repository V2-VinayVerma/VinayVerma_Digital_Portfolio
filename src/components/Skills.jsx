import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  SiCplusplus, SiPython, SiC, SiJavascript, 
  SiGit, SiGithub, SiVercel, 
  SiMongodb, SiMysql, SiPostgresql, SiMongodb as SiMongo
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  
  const skills = [
    { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
    { name: 'C', icon: <SiC className="text-[#A8B9CC]" /> },
    { name: 'Java', icon: <span className="font-bold text-[#f89820]">Java</span> }, // No direct simple icon for java included in some versions, safer as text
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <SiGithub className="text-white" /> },
    { name: 'Vercel', icon: <SiVercel className="text-white" /> },
    { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> },
    { name: 'MongoDB', icon: <SiMongo className="text-[#47A248]" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
  ];

  const softSkills = ['Problem-Solving', 'Team Player', 'Adaptability', 'Quick Learner'];

  const internships = [
    {
      role: 'UI/UX Intern',
      company: 'Infyntrek Systemes',
      duration: "Sept '25 - Dec '25",
      image: '/cert_infyntrek.png',
      description: 'Crafted intuitive onboarding screens for a neobank mobile app, ensuring a seamless user journey. Leveraged Figma as the primary design tool to create high-fidelity prototypes and interactive mockups. Collaborated with cross-functional teams to iterate on user feedback and improve the onboarding flow.'
    }
  ];

  return (
    <section id="skills" className="py-20 relative border-t border-[#071A2C] bg-[#020D1D]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="heading-gradient">Skills</span></h2>
            <p className="text-[#8BA3B8] max-w-2xl mx-auto text-lg">Languages, tools, and databases I work with to bring ideas to life.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-panel px-6 py-4 rounded-xl flex items-center gap-4 border border-[#071A2C] hover:border-primary-500/50 transition-colors"
              >
                <div className="text-3xl">{skill.icon}</div>
                <span className="font-medium text-slate-200">{skill.name}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#C9D1D9] mb-6">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-5 py-2 glass-panel rounded-full text-primary-300 font-medium border border-primary-500/20"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Internship Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Work <span className="heading-gradient">Experience</span></h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {internships.map((internship, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-panel p-8 rounded-2xl border-l-4 border-[#00E5FF] border-r border-t border-b border-t-[#0C2A3F] border-r-[#0C2A3F] border-b-[#0C2A3F] bg-[#0b101a] relative group shadow-2xl"
                >
                  <div className="absolute top-8 -left-[26px] w-12 h-12 bg-[#020D1D] rounded-full border-4 border-[#00E5FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <span className="w-3 h-3 bg-[#00E5FF] rounded-full"></span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 ml-4 md:ml-8">{internship.role}</h3>
                  <h4 className="text-[#00E5FF] text-lg mb-6 ml-4 md:ml-8">{internship.company} <span className="text-[#8BA3B8] ml-2 text-sm">| {internship.duration}</span></h4>
                  
                  <div className="ml-4 md:ml-8 flex flex-col md:flex-row gap-8">
                    {/* Thumbnail Preview Area */}
                    <div className="w-full md:w-56 aspect-[4/3] rounded-xl overflow-hidden border border-[#071A2C] bg-[#020D1D] p-3 flex items-center justify-center shrink-0 group-hover:border-[#00E5FF]/50 transition-colors shadow-lg">
                       <img src={internship.image} alt="Internship Certificate" className="w-full h-full object-contain hover:scale-[1.03] transition-transform duration-500" />
                    </div>

                    <div className="flex-1">
                      <p className="text-[#C9D1D9] leading-relaxed mb-6">
                        {internship.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-4">
                        <a href={internship.image} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 apple-glass-hollow rounded-lg text-[#00E5FF] text-sm font-bold transition-all ">
                          View Certificate
                        </a>
                      </div>

                      <button 
                        onClick={() => setSelectedInternship(internship)}
                        className="flex items-center gap-2 px-5 py-2.5 apple-glass-neon rounded-lg text-white font-bold text-sm w-fit shadow-lg transition-all focus:outline-none"
                      >
                        Read Details & Learnings
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pop-up Modal for Details */}
      <AnimatePresence>
        {selectedInternship && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInternship(null)}
              className="absolute inset-0 bg-[#020D1D]/80 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Flip Card Modal */}
            <motion.div
              initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-lg bg-[#0b101a] border border-[#00E5FF]/40 rounded-2xl shadow-[0_0_50px_rgba(0,229,255,0.15)] p-8 z-10 overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4]"></div>
              
              <button 
                onClick={() => setSelectedInternship(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#020D1D] border border-[#071A2C] text-[#8BA3B8] hover:text-white hover:border-[#00E5FF] transition-all"
              >
                ✕
              </button>

              <h4 className="text-2xl font-bold text-white mb-2 pr-8">{selectedInternship.role}</h4>
              <p className="text-[#00E5FF] text-sm mb-6">{selectedInternship.company} <span className="text-[#8BA3B8] ml-2">| {selectedInternship.duration}</span></p>
              
              <h5 className="text-[#00E5FF] font-bold mb-4 uppercase tracking-wider text-xs font-mono-custom bg-[#020D1D] inline-block px-3 py-1 rounded border border-[#0C2A3F]">
                Key Learnings & Impact
              </h5>
              
              <ul className="list-disc list-inside text-[#8BA3B8] text-[15px] space-y-4 leading-relaxed">
                <li>Mastered user-centric design principles, ensuring seamless navigational onboarding journeys for neobank clients.</li>
                <li>Developed high-level proficiency in creating rapid high-fidelity prototypes and wireframing using Figma.</li>
                <li>Collaborated actively with cross-functional development teams to iterate on client feedback and reduce friction points in product flow.</li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[#0C2A3F] flex justify-end">
                <button 
                  onClick={() => setSelectedInternship(null)}
                  className="px-6 py-2.5 apple-glass-hollow rounded-lg text-[#00E5FF] text-sm font-bold transition-all shadow-lg"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Skills;
