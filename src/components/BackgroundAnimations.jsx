import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BackgroundAnimations = () => {
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setMounted(true);
    // Safe dynamic window dimensions reading
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  const particles = Array.from({ length: 40 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020D1D]">
      
      {/* 1. Moving Cyber Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00E5FF 1px, transparent 1px),
            linear-gradient(to bottom, #00E5FF 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 10%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 10%, transparent 100%)'
        }}
      />

      {/* 2. Floating Volumetric Deep Light Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[5%] left-[5%] w-[400px] h-[400px] bg-[#4F46E5] rounded-full blur-[160px] opacity-20 mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] right-[0%] w-[500px] h-[500px] bg-[#00E5FF] rounded-full blur-[150px] opacity-10 mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -50, 120, 0],
          scale: [1, 1.3, 0.8, 1]
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] left-[20%] w-[600px] h-[600px] bg-[#4F46E5] rounded-full blur-[220px] opacity-15 mix-blend-screen"
      />

      {/* 3. Ascending Data Particles */}
      {particles.map((_, i) => {
        // Distribute dots randomly based on window boundaries
        const randomX = Math.random() * dimensions.width;
        const randomY = Math.random() * dimensions.height;
        const duration = Math.random() * 15 + 15;
        const delay = Math.random() * -20; // negative delay to pre-populate board so it's not empty on load
        
        return (
          <motion.div
            key={i}
            initial={{
              x: randomX,
              y: randomY,
              opacity: 0,
              scale: Math.random() * 0.4 + 0.3
            }}
            animate={{
              y: [randomY, randomY - (Math.random() * 300 + 200)],
              opacity: [0, Math.random() * 0.5 + 0.2, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: delay
            }}
            className="absolute w-[3px] h-[3px] bg-[#00E5FF] rounded-full shadow-[0_0_10px_rgba(0,229,255,1)]"
          />
        );
      })}
    </div>
  );
};

export default BackgroundAnimations;
