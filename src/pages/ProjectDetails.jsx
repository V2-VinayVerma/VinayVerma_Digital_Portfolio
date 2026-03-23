import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { SiFigma } from 'react-icons/si';
import { allProjects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = allProjects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-[#00E5FF] hover:text-primary-300">Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link to="/projects" className="inline-flex items-center gap-2 text-[#8BA3B8] hover:text-white mb-8 transition-colors">
        <ArrowLeft size={20} /> Back to Projects
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-2xl p-8 md:p-12 border border-[#071A2C] relative overflow-hidden"
      >
        <div className={`h-2 w-full bg-gradient-to-r ${project.color} absolute top-0 left-0`}></div>
        
        {project.image && (
          <div className="w-full aspect-video overflow-hidden rounded-xl mb-8 border border-[#071A2C]/50 mt-4 shadow-2xl bg-black">
            <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-2">{project.title}</h1>
        {project.tech && <p className="text-[#00E5FF] font-semibold mb-6">{project.tech}</p>}
        
        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-lg text-[#C9D1D9] leading-relaxed mb-6">{project.description}</p>
          
          {project.bullets && (
            <ul className="list-disc list-inside text-[#C9D1D9] space-y-3 mb-8">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>

        {project.category === 'uiux' && (
          <div className="relative w-full overflow-hidden rounded-lg shadow-xl mb-10 bg-[#0C2A3F]" style={{ paddingTop: '56.25%' }}>
            <iframe src={project.figmaIframe} allowFullScreen className="absolute top-0 left-0 w-full h-full border-0"></iframe>
          </div>
        )}

        {project.category === 'pm' && (
          <div className="relative w-full overflow-hidden rounded-lg shadow-xl mb-10 bg-[#0C2A3F]" style={{ paddingTop: '56.25%' }}>
            <iframe src={project.embed} allowFullScreen scrolling="no" className="absolute top-0 left-0 w-full h-full border-0"></iframe>
          </div>
        )}

        <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-[#071A2C]">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#0C2A3F] hover:bg-slate-700 text-white rounded-lg transition-colors border border-[#0C2A3F]">
              <Github size={20} /> View Source Code
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 apple-glass-neon text-white rounded-lg transition-colors shadow-lg shadow-primary-500/20">
              <ExternalLink size={20} /> Live Demo
            </a>
          )}
          {project.figmaLink && (
            <a href={project.figmaLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#0C2A3F] hover:bg-slate-700 text-white rounded-lg transition-colors border border-[#0C2A3F]">
              <SiFigma size={20} /> View Figma Design
            </a>
          )}
          {project.link && project.category === 'pm' && (
             <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#0C2A3F] hover:bg-slate-700 text-white rounded-lg transition-colors border border-[#0C2A3F]">
             <ExternalLink size={20} /> View Slides
           </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
