import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import FloatingChat from './components/FloatingChat';
import CustomCursor from './components/CustomCursor';
import ProjectDetails from './pages/ProjectDetails';
import BackgroundAnimations from './components/BackgroundAnimations';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const Home = () => (
  <>
    <Hero />
    <div className="flex justify-center pb-24 pt-10 relative z-10 bg-[#020D1D]">
      <Link to="/projects" className="px-8 py-4 apple-glass-neon text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:scale-105 text-xl text-center border border-[#00E5FF]/30">
        Explore Portfolio
      </Link>
    </div>
  </>
);

const SkillsPage = () => <Skills />;
const ProjectsPage = () => <Projects />;
const CertificationsPage = () => <Certifications />;
const AchievementsPage = () => <Achievements />;
const ResumePage = () => <ResumeSection />;
const ContactPage = () => <Contact />;

function App() {
  return (
    <Router>
      <div className="bg-[#020D1D] min-h-screen text-slate-50 selection:bg-[#00E5FF]/30 selection:text-white font-sans overflow-x-hidden relative">
        <BackgroundAnimations />
        
        <div className="relative z-10 w-full h-full">
          <ThemeToggle />
          <CustomCursor />
          <Navbar />
          
          <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <FloatingChat />

        <footer className="py-8 border-t border-[#071A2C] text-center relative z-10 bg-transparent backdrop-blur-sm">
          <p className="text-[#8BA3B8] font-mono-custom text-sm">© {new Date().getFullYear()} Vinay Verma. Initialized and deployed successfully.</p>
        </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
