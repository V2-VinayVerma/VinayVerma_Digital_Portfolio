import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Info } from 'lucide-react';
import { SiFigma } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { mernProjects, uiuxProjects, pmProjects, allProjects } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = [
    { id: 'All', name: 'All', count: allProjects.length },
    { id: 'Full Stack', name: 'Full Stack', count: mernProjects.length },
    { id: 'UI/UX', name: 'UI/UX', count: uiuxProjects.length },
    { id: 'Product Management', name: 'Product Management', count: pmProjects.length },
  ];

  const filteredProjects = allProjects.filter(project => {
    if (filter === 'All') return true;
    if (filter === 'Full Stack' && project.category === 'Full Stack') return true;
    if (filter === 'UI/UX' && project.category === 'UI/UX') return true;
    if (filter === 'Product Management' && project.category === 'Product Management') return true;
    return false;
  });

  return (
    <section id="projects" className="py-24 bg-[#020D1D] relative border-t border-[#071A2C]/50 min-h-screen">
      <div className="absolute overflow-hidden inset-0 pointer-events-none -z-10">
        <div className="absolute top-40 right-10 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h3 className="text-[#00E5FF] text-sm font-mono-custom font-bold tracking-[0.2em] uppercase mb-4">My Work</h3>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Featured <span className="text-[#00E5FF]">Projects</span>
          </h2>
          <p className="text-[#8BA3B8] max-w-2xl text-lg md:text-xl leading-relaxed">
            Full-stack apps, Figma designs, and product teardowns — a complete showcase across engineering and product thinking.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-3 px-6 py-2.5 rounded-full font-mono-custom text-sm font-bold transition-all duration-300 border ${
                filter === cat.id 
                  ? 'border-[#00BBD4] bg-[#00E5FF]/20 text-[#00E5FF] shadow-[0_0_15px_rgba(0,240,255,0.15)]' 
                  : 'border-[#071A2C] bg-[#071A2C] text-[#8BA3B8] hover:border-[#0C2A3F] hover:text-white'
              }`}
            >
              {cat.name}
              <span className={`px-2 py-0.5 rounded-full text-xs transition-colors ${
                filter === cat.id ? 'bg-[#00BBD4]/20 text-[#00BBD4]' : 'bg-[#0C2A3F] text-[#8BA3B8]'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full border border-[#071A2C]/80 bg-[#0C2A3F] hover:border-[#0C2A3F] hover:shadow-2xl transition-all group"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`}></div>
                
                {/* Visual Trailers based on Category */}
                {project.category === "Full Stack" && project.image && (
                  <div className="w-full aspect-video overflow-hidden relative border-b border-[#071A2C] bg-[#020D1D]">
                    <div className="absolute inset-0 bg-[#020D1D]/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}

                {project.category === "UI/UX" && project.figmaIframe && (
                  <div className="relative w-full overflow-hidden border-b border-[#071A2C] bg-[#020D1D]" style={{ paddingTop: '56.25%' }}>
                     <iframe src={project.figmaIframe} allowFullScreen className="absolute top-0 left-0 w-full h-full border-0 pointer-events-none group-hover:pointer-events-auto"></iframe>
                  </div>
                )}

                {project.category === "Product Management" && project.embed && (
                  <div className="relative w-full overflow-hidden border-b border-[#071A2C] bg-[#020D1D]" style={{ paddingTop: '56.25%' }}>
                     <iframe src={project.embed} allowFullScreen scrolling="no" className="absolute top-0 left-0 w-full h-full border-0 pointer-events-none group-hover:pointer-events-auto"></iframe>
                  </div>
                )}

                {/* Card Content Data */}
                <div className="p-6 md:p-8 flex flex-col h-full bg-[#0C2A3F]">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-[#1DE9B6]/90 font-mono-custom font-semibold mb-5 text-xs tracking-[0.1em] uppercase leading-relaxed">{project.tech}</p>
                  <p className="text-[#8BA3B8] mb-8 flex-grow text-sm leading-relaxed">{project.description}</p>

                  {/* Buttons Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {project.category === "Full Stack" && project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-3 py-2.5 bg-[#071A2C] hover:bg-[#0C2A3F] text-[#C9D1D9] text-sm font-semibold rounded-lg transition-colors border border-[#071A2C] hover:border-slate-500">
                        <Github size={16} /> Code
                      </a>
                    )}
                    {project.category === "Full Stack" && project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-3 py-2.5 bg-[#00E5FF]/20 hover:bg-[#00E5FF]/40 text-[#00E5FF] text-sm font-semibold rounded-lg transition-colors border border-[#00E5FF]/50 hover:border-[#00BBD4] shadow-[0_0_10px_rgba(0,240,255,0.05)]">
                        <ExternalLink size={16} /> Demo
                      </a>
                    )}

                    {project.category === "UI/UX" && project.figmaLink && (
                      <a href={project.figmaLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-3 py-2.5 bg-[#071A2C] hover:bg-[#0C2A3F] text-[#C9D1D9] text-sm font-semibold rounded-lg transition-colors border border-[#071A2C] hover:border-slate-500">
                        <SiFigma size={16} /> Figma
                      </a>
                    )}

                    {project.category === "Product Management" && project.link && (
                       <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-3 py-2.5 bg-[#071A2C] hover:bg-[#0C2A3F] text-[#C9D1D9] text-sm font-semibold rounded-lg transition-colors border border-[#071A2C] hover:border-slate-500">
                         <ExternalLink size={16} /> Slides
                       </a>
                    )}

                    {/* Make details span across if uneven buttons for UIUX / PM or Fullstack missing Demo */}
                    <Link 
                      to={`/projects/${project.id}`} 
                      className={`flex items-center justify-center gap-2 px-3 py-2.5 bg-purple-900/20 hover:bg-purple-900/40 text-purple-400 text-sm font-semibold rounded-lg transition-colors border border-purple-800/80 hover:border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.05)] ${
                        (project.category === "Full Stack" && !project.demo) || 
                        project.category === "UI/UX" || 
                        project.category === "Product Management" 
                          ? "" 
                          : ""
                      }`}
                    >
                      <Info size={16} /> Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
