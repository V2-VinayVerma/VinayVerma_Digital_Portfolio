import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, GraduationCap, Briefcase } from 'lucide-react';

const ResumeSection = () => {
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
        "Learnt to conduct user research and analyze learner behavior to identify problem statements and prioritize features from a product perspective.",
        "Practiced designing intuitive UI flows and high-fidelity screens in Figma while applying core product management concepts like usability and feasibility.",
        "Developed the ability to evaluate designs through feedback loops, iterate on prototypes, and align solutions with user needs and product goals."
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-[#020D1D] border-t border-[#071A2C] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Education & Training Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#0C2A3F] flex items-center justify-center border border-primary-500/30">
                <GraduationCap className="text-[#00E5FF]" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>
            
            <div className="relative border-l border-[#071A2C] ml-6 pl-8 space-y-12">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#020D1D] border-2 border-primary-500" />
                  <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                  <div className="text-[#00E5FF] font-semibold mb-2">{edu.institution} <span className="text-[#8BA3B8] font-normal">| {edu.duration}</span></div>
                  <div className="text-[#8BA3B8] text-sm">{edu.location}</div>
                  <div className="text-[#C9D1D9] mt-2 italic">{edu.score}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Training Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#0C2A3F] flex items-center justify-center border border-primary-500/30">
                <Briefcase className="text-[#00E5FF]" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white">Training</h3>
            </div>

            <div className="relative border-l border-[#071A2C] ml-6 pl-8 space-y-12">
              {training.map((train, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#020D1D] border-2 border-primary-500" />
                  <h4 className="text-xl font-bold text-white mb-1">{train.role}</h4>
                  <div className="text-[#00E5FF] font-semibold mb-4">{train.company} <span className="text-[#8BA3B8] font-normal">| {train.duration}</span></div>
                  <ul className="list-disc list-outside ml-4 text-[#C9D1D9] text-sm space-y-2 leading-relaxed">
                    {train.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Box */}
        <div className="max-w-4xl mx-auto text-center mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-12 rounded-3xl border border-primary-500/30 shadow-[0_0_50px_rgba(37,99,235,0.1)]"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-[#0C2A3F] flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20 border border-primary-500/50">
              <FileText size={40} className="text-[#00E5FF]" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Full <span className="heading-gradient">Resume</span></h2>
            <p className="text-[#C9D1D9] max-w-2xl mx-auto text-lg mb-10">
              Get to know more about my profile by reviewing my complete curriculum vitae.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={Vinay_Resume} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 apple-glass-neon text-white rounded-full font-bold transition-all duration-300  hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] w-full sm:w-auto justify-center"
              >
                <ExternalLink size={20} />
                View CV 
              </a>
              
              <a 
                href={Vinay_Resume} 
                download="Vinay_Resume.pdf"
                className="flex items-center gap-2 px-8 py-4 apple-glass-hollow text-white rounded-full font-bold w-full sm:w-auto justify-center group"
              >
                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                Download PDF
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
