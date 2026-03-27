import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Info, X } from 'lucide-react';
import { SiFigma } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { mernProjects, uiuxProjects, pmProjects, allProjects } from '../data/projects';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const cardRef = useRef(null);

  // Handle click outside to unlock the flip
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsLocked(false);
        setIsHovered(false);
      }
    };
    if (isLocked) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLocked]);

  const isFlipped = isHovered || isLocked;

  const handleCardClick = () => {
    // Only lock it if it isn't locked yet.
    // If it's already locked, clicking inside the card (except specific buttons) won't unlock it, the user must click outside or the X button.
    if (!isLocked) setIsLocked(true);
  };

  return (
    <div 
      ref={cardRef}
      className="relative w-full aspect-[3/4] [perspective:1500px] z-10"
      onMouseEnter={() => !isLocked && setIsHovered(true)}
      onMouseLeave={() => !isLocked && setIsHovered(false)}
      onClick={handleCardClick}
      style={{ zIndex: isFlipped ? 50 : 1 }}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d] cursor-pointer"
        animate={{ 
          rotateY: isFlipped ? 180 : 0, 
          scale: isFlipped ? 1.05 : 1,
          y: isFlipped ? -10 : 0
        }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* FRONT FACE (Visuals) */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] glass-panel rounded-2xl overflow-hidden flex flex-col border border-[#071A2C] bg-[#0C2A3F] shadow-lg">
          <div className={`h-1.5 w-full bg-gradient-to-r ${project.color} shrink-0`}></div>
          
          <div className="flex-1 overflow-hidden relative border-b border-[#071A2C] bg-[#020D1D]">
            <div className="absolute inset-0 bg-[#020D1D]/20 z-10 pointer-events-none" />
            
            {project.category === "Full Stack" && project.image && (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            )}
            
            {project.category === "UI/UX" && project.figmaIframe && (
              <div className="absolute inset-0 pointer-events-none">
                <iframe src={project.figmaIframe} allowFullScreen className="w-full h-full border-0 object-cover scale-110 origin-top-left" />
              </div>
            )}

            {project.category === "Product Management" && project.embed && (
              <div className="absolute inset-0 pointer-events-none">
                <iframe src={project.embed} allowFullScreen scrolling="no" className="w-full h-full border-0 object-cover scale-110 origin-top-left" />
              </div>
            )}
            
            {/* Interactive Badge on Front */}
            <div className="absolute bottom-4 right-4 bg-[#020D1D]/80 backdrop-blur border border-[#00E5FF]/30 text-[#00E5FF] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-lg z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse"></span>
              Details
            </div>
          </div>
          
          <div className="p-6 shrink-0 bg-gradient-to-t from-[#020D1D] to-[#0C2A3F]">
            <h4 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h4>
            <p className="text-[#1DE9B6]/90 font-mono-custom font-semibold text-[11px] tracking-[0.1em] uppercase truncate">{project.tech}</p>
          </div>
        </div>

        {/* BACK FACE (Details & Actions) */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] glass-panel rounded-2xl overflow-hidden flex flex-col border border-[#00E5FF]/40 bg-gradient-to-br from-[#0C2A3F]/95 to-[#020D1D]/95 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,229,255,0.15)]">
          <div className={`h-1.5 w-full bg-gradient-to-r ${project.color} shrink-0`}></div>
          <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
            
            {/* Header & Close for Mobile */}
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8BA3B8] leading-tight">{project.title}</h4>
              {isLocked && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsLocked(false); setIsHovered(false); }}
                  className="w-8 h-8 rounded-full bg-[#071A2C] border border-[#0A2033] flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 transition-all shrink-0 ml-4"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <p className="text-[#8BA3B8] text-sm leading-relaxed mb-6 overflow-y-auto custom-scrollbar flex-grow pr-2 font-light">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2 shrink-0">
              {project.tech.split(' | ').slice(0, 4).map((techItem, i) => (
                <span key={i} className="px-2 py-1 text-[10px] font-mono-custom font-bold text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded uppercase tracking-wider">
                  {techItem}
                </span>
              ))}
            </div>

            {/* Actions Grid */}
            <div className="grid grid-cols-2 gap-3 mt-auto shrink-0 z-20">
              {project.category === "Full Stack" && project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center justify-center gap-2 px-3 py-3 bg-[#071A2C] hover:bg-[#0C2A3F] text-[#C9D1D9] text-sm font-bold rounded-xl transition-all border border-[#071A2C] hover:border-white/20">
                  <Github size={16} /> Code
                </a>
              )}
              {project.category === "Full Stack" && project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center justify-center gap-2 px-3 py-3 bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 text-[#00E5FF] text-sm font-bold rounded-xl transition-all border border-[#00E5FF]/30 hover:border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                  <ExternalLink size={16} /> Demo
                </a>
              )}

              {project.category === "UI/UX" && project.figmaLink && (
                <a href={project.figmaLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center justify-center gap-2 px-3 py-3 bg-[#071A2C] hover:bg-[#0C2A3F] text-[#C9D1D9] text-sm font-bold rounded-xl transition-all border border-[#071A2C] hover:border-white/20">
                  <SiFigma size={16} /> Figma File
                </a>
              )}

              {project.category === "Product Management" && project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center justify-center gap-2 px-3 py-3 bg-[#071A2C] hover:bg-[#0C2A3F] text-[#C9D1D9] text-sm font-bold rounded-xl transition-all border border-[#071A2C] hover:border-white/20">
                  <ExternalLink size={16} /> View Slides
                </a>
              )}

              <Link 
                to={`/projects/${project.id}`} 
                onClick={(e) => e.stopPropagation()}
                className={`flex items-center justify-center gap-2 px-3 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 text-sm font-bold rounded-xl transition-all border border-purple-500/30 hover:border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)] ${
                  (project.category === "Full Stack" && !project.demo) || 
                  project.category === "UI/UX" || 
                  project.category === "Product Management" 
                    ? "col-span-1" 
                    : ""
                }`}
              >
                <Info size={16} /> Details Page
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


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
        <div className="absolute top-40 right-10 w-[600px] h-[600px] bg-[#00E5FF]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-40 left-10 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h3 className="text-[#00E5FF] text-sm font-mono-custom font-bold tracking-[0.2em] uppercase mb-4">My Portfolio</h3>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-500">Projects</span>
          </h2>
          <p className="text-[#8BA3B8] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Full-stack apps, Figma designs, and product teardowns — hover or click a card to reveal the technical details beneath the surface.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-mono-custom text-xs md:text-sm font-bold transition-all duration-300 border ${
                filter === cat.id 
                  ? 'border-[#00E5FF]/50 bg-[#00E5FF]/10 text-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.2)] scale-105' 
                  : 'border-[#071A2C] bg-[#0C2A3F]/50 text-[#8BA3B8] hover:border-[#00E5FF]/30 hover:text-white hover:bg-[#0C2A3F]'
              }`}
            >
              {cat.name}
              <span className={`px-2.5 py-1 rounded-full text-[10px] md:text-xs transition-colors border ${
                filter === cat.id ? 'bg-[#00E5FF]/20 text-[#00E5FF] border-[#00E5FF]/30' : 'bg-[#020D1D] text-[#8BA3B8] border-[#071A2C]'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pb-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
