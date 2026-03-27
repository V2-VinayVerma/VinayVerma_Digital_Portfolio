import { motion } from 'framer-motion';
import { 
  SiCplusplus, SiPython, SiC, SiJavascript, 
  SiGit, SiGithub, SiVercel, 
  SiMongodb, SiMysql, SiPostgresql, SiMongodb as SiMongo
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  
  const skills = [
    { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
    { name: 'C', icon: <SiC className="text-[#A8B9CC]" /> },
    { name: 'Java', icon: <span className="font-bold text-[#f89820]">Java</span> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <SiGithub className="text-white" /> },
    { name: 'Vercel', icon: <SiVercel className="text-white" /> },
    { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> },
    { name: 'MongoDB', icon: <SiMongo className="text-[#47A248]" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
  ];

  const softSkills = ['Problem-Solving', 'Team Player', 'Adaptability', 'Quick Learner', 'Agile Methodologies'];

  
  return (
    <section id="skills" className="py-24 relative border-t border-[#071A2C] bg-[#020D1D] overflow-hidden min-h-screen">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[150px] animate-pulse [animation-duration:8s]" />
        <div className="absolute bottom-20 right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse [animation-duration:12s]" />
        <div className="absolute inset-0 bg-[#020D1D]/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Skills Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-[#00E5FF] text-sm font-mono-custom font-bold tracking-[0.2em] uppercase mb-4">Technical Arsenal</h3>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Skills</span>
          </h2>
          <p className="text-[#8BA3B8] max-w-2xl mx-auto text-lg md:text-xl font-light">
            Languages, frameworks, tools, and databases I utilize to engineer robust digital solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-24">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-gradient-to-br from-[#0C2A3F]/80 to-[#020D1D]/90 backdrop-blur-xl px-6 py-4 rounded-2xl flex items-center gap-4 border border-[#0A2033] hover:border-[#00E5FF]/40 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300 group"
            >
              <div className="text-3xl group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
                {skill.icon}
              </div>
              <span className="font-bold font-mono-custom text-sm text-slate-200 uppercase tracking-wider group-hover:text-[#00E5FF] transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col items-center mb-32 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#071A2C] to-transparent -z-10" />
          <h3 className="text-lg font-mono-custom font-bold text-[#8BA3B8] mb-8 bg-[#020D1D] px-4 uppercase tracking-widest border border-[#0A2033] rounded-full py-1">Soft Skills Modules</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-2.5 bg-[#00E5FF]/5 rounded-full text-[#00E5FF] font-bold font-mono-custom uppercase tracking-wider text-xs border border-[#00E5FF]/20 hover:border-[#00E5FF]/60 hover:bg-[#00E5FF]/10 transition-colors shadow-inner"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
