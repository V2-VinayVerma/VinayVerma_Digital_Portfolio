import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  
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
    <section id="experience" className="py-24 relative border-t border-[#071A2C] bg-[#020D1D] overflow-hidden min-h-screen">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[150px] animate-pulse [animation-duration:8s]" />
        <div className="absolute bottom-20 right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse [animation-duration:12s]" />
        <div className="absolute inset-0 bg-[#020D1D]/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Experience / Internship Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-[#00E5FF] text-sm font-mono-custom font-bold tracking-[0.2em] uppercase mb-4">Professional Timeline</h3>
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto pb-20">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0C2A3F]/80 to-[#020D1D]/90 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border-l-4 border-[#00E5FF] border-r border-t border-b border-t-[#0A2033] border-r-[#0A2033] border-b-[#0A2033] relative shadow-2xl overflow-hidden group/card"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00E5FF]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="absolute top-10 -left-[27px] w-12 h-12 bg-[#020D1D] rounded-full border border-[#0A2033] flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                <span className="w-3 h-3 bg-[#00E5FF] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,229,255,1)]"></span>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-2 ml-4 md:ml-8 leading-tight">{internship.role}</h3>
              <h4 className="text-[#00E5FF] text-lg mb-8 ml-4 md:ml-8 font-mono-custom">{internship.company} <span className="text-[#8BA3B8] ml-2 text-sm">| {internship.duration}</span></h4>
              
              <div className="ml-4 md:ml-8 flex flex-col md:flex-row gap-8 relative z-10">
                {/* Thumbnail Preview Area */}
                <div className="w-full md:w-64 aspect-[4/3] rounded-xl overflow-hidden border border-[#0A2033] bg-[#020D1D] p-3 flex items-center justify-center shrink-0 group-hover/card:border-[#00E5FF]/50 transition-colors shadow-lg relative cursor-pointer" onClick={() => setSelectedInternship(internship)}>
                    <div className="absolute inset-0 bg-[#00E5FF]/10 opacity-0 group-hover/card:opacity-100 transition-opacity z-10 hover:animate-[scan_2s_ease-in-out_infinite]" />
                    <img src={internship.image} alt="Internship Certificate" className="w-full h-full object-contain group-hover/card:scale-105 transition-transform duration-700 relative z-0" />
                </div>

                <div className="flex-1 flex flex-col">
                  <p className="text-[#8BA3B8] leading-relaxed mb-8 flex-grow">
                    {internship.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a href={internship.image} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-[#071A2C] hover:bg-[#0C2A3F] text-[#00E5FF] border border-[#0A2033] hover:border-[#00E5FF]/50 text-xs font-mono-custom uppercase tracking-widest font-bold rounded-lg transition-all">
                      View Certificate 
                    </a>
                    <button 
                      onClick={() => setSelectedInternship(internship)}
                      className="flex items-center justify-center gap-2 px-5 py-3 bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 hover:bg-[#00E5FF] hover:text-[#020D1D] text-xs font-mono-custom uppercase tracking-widest font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(0,229,255,0.1)]"
                    >
                      Read Details  {'>'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal for Details */}
      <AnimatePresence>
        {selectedInternship && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInternship(null)}
              className="absolute inset-0 bg-[#020D1D]/90 backdrop-blur-md cursor-pointer"
            />
            
            <motion.div
              initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-full max-w-xl bg-gradient-to-br from-[#0C2A3F]/95 to-[#020D1D]/95 border border-[#00E5FF]/40 rounded-3xl shadow-[0_0_50px_rgba(0,229,255,0.2)] p-8 md:p-10 z-10 overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#00E5FF] to-blue-500"></div>
              
              <button 
                onClick={() => setSelectedInternship(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#020D1D] border border-[#0A2033] text-[#8BA3B8] hover:text-white hover:border-red-500 hover:bg-red-500/20 transition-all font-mono-custom"
              >
                ✕
              </button>

              <h4 className="text-3xl font-black text-white mb-2 pr-12">{selectedInternship.role}</h4>
              <p className="text-[#00E5FF] font-mono-custom text-sm mb-8">{selectedInternship.company} <span className="text-[#8BA3B8] ml-2">| {selectedInternship.duration}</span></p>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse"></span>
                <h5 className="text-[#00E5FF] font-bold uppercase tracking-wider text-xs font-mono-custom">
                  Key Learnings & Impact
                </h5>
              </div>
              
              <ul className="list-disc list-inside text-[#8BA3B8] text-base space-y-4 leading-relaxed marker:text-[#00E5FF]">
                <li>Mastered user-centric design principles, ensuring seamless navigational onboarding journeys for neobank clients.</li>
                <li>Developed high-level proficiency in creating rapid high-fidelity prototypes and wireframing using Figma.</li>
                <li>Collaborated actively with cross-functional development teams to iterate on client feedback and reduce friction points in product flow.</li>
              </ul>
              
              <div className="mt-10 pt-6 border-t border-[#0A2033] flex justify-end">
                <button 
                  onClick={() => setSelectedInternship(null)}
                  className="px-8 py-3 bg-[#020D1D] hover:bg-[#071A2C] border border-[#0A2033] hover:border-red-500/50 rounded-xl text-red-400 hover:text-red-300 text-xs font-mono-custom uppercase tracking-widest font-bold transition-all shadow-lg"
                >
                  Terminate Process
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Experience;
