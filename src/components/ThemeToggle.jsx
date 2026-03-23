import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sync initial state if needed
    if (document.documentElement.classList.contains('light-theme')) {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = (e) => {
    // If browser doesn't support Document Transitions API, instantly toggle classes
    if (!document.startViewTransition) {
      document.documentElement.classList.toggle('light-theme');
      setIsDark(!isDark);
      return;
    }

    // Capture coordinates for the expanding circle center
    const x = e.clientX;
    const y = e.clientY;
    
    // Calculate the maximum radius required to cover the whole window from exactly the click spot
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const isFlippingToLight = isDark;

    const transition = document.startViewTransition(() => {
      document.documentElement.classList.toggle('light-theme');
      setIsDark(!isDark);
    });

    transition.ready.then(() => {
      // Force clip path animation over the transition pseudo-elements
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      document.documentElement.animate(
        {
          clipPath: isFlippingToLight ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 700,
          easing: 'ease-in-out',
          pseudoElement: isFlippingToLight 
            ? '::view-transition-new(root)'
            : '::view-transition-old(root)',
        }
      );
    });
  };

  return (
    <button 
      onClick={toggleTheme}
      className="fixed z-[9999] top-4 right-16 md:right-24 lg:right-28 w-10 h-10 rounded-full bg-[#020D1D] hover:bg-[#0C2A3F] border border-[#00E5FF]/40 text-[#00E5FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all hover:scale-110 focus:outline-none"
      title="Toggle Interface Theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
