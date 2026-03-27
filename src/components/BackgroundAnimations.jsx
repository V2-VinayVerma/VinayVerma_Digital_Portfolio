import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const CanvasNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    let mouse = { x: null, y: null, radius: 180 };

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);

      // Area based dynamic scaling for responsive particle count across all devices
      let targetParticles = Math.floor((width * height) / 15000);
      targetParticles = Math.max(30, Math.min(targetParticles, 120)); // min 30 (mobile), max 120 (large screens)
      
      particles = [];
      for (let i = 0; i < targetParticles; i++) {
        let size = Math.random() * 1.5 + 0.5;
        let x = Math.random() * (width - size * 2) + size;
        let y = Math.random() * (height - size * 2) + size;
        let directionX = (Math.random() - 0.5) * 0.8;
        let directionY = (Math.random() - 0.5) * 0.8;
        let color = '#00E5FF';

        particles.push({ x, y, directionX, directionY, size, color });
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        // Move particles
        p.x += p.directionX;
        p.y += p.directionY;

        // Bounce off canvas edges smoothly
        if (p.x < 0 || p.x > width) p.directionX = -p.directionX;
        if (p.y < 0 || p.y > height) p.directionY = -p.directionY;

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Check distance between mouse/touch and particle
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - p.x;
          let dy = mouse.y - p.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            // Draw connecting line to mouse/finger
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, ${1 - distance / mouse.radius})`;
            ctx.lineWidth = 1.2;
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();

            // Techy interactive gravity: slight pull towards interaction point
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            p.x += forceDirectionX * force * 1.5;
            p.y += forceDirectionY * force * 1.5;
          }
        }

        // Check distance between particles (Draw Connections)
        for (let j = i; j < particles.length; j++) {
          let p2 = particles[j];
          let dx2 = p.x - p2.x;
          let dy2 = p.y - p2.y;
          let distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance2 < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, ${(1 - distance2 / 120) * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    // Responsive interaction handlers for Mouse & Touch Devices
    const handleMove = (e) => {
      // Handle both mouse and touch
      if (e.touches && e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      } else {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    };

    const handleLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('mouseout', handleLeave);
    window.addEventListener('touchend', handleLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseout', handleLeave);
      window.removeEventListener('touchend', handleLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full pointer-events-none z-10 opacity-70" />;
};

const BackgroundAnimations = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#020D1D]">
      
      {/* 1. Moving Cyber Grid Layer */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00E5FF 1px, transparent 1px),
            linear-gradient(to bottom, #00E5FF 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 10%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 10%, transparent 100%)'
        }}
      />

      {/* 2. Interactive Canvas Network (Responsive on Touch/Mouse/Resize) */}
      <CanvasNetwork />

      {/* 3. Floating Volumetric Deep Light Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[5%] left-[5%] w-[30vh] md:w-[40vw] max-w-[400px] aspect-square bg-[#4F46E5] rounded-full blur-[100px] md:blur-[160px] opacity-20 mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] right-[0%] w-[35vh] md:w-[45vw] max-w-[500px] aspect-square bg-[#00E5FF] rounded-full blur-[120px] md:blur-[150px] opacity-10 mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -50, 120, 0],
          scale: [1, 1.3, 0.8, 1]
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] left-[20%] w-[40vh] md:w-[50vw] max-w-[600px] aspect-square bg-[#4F46E5] rounded-full blur-[140px] md:blur-[220px] opacity-15 mix-blend-screen"
      />
    </div>
  );
};

export default BackgroundAnimations;
