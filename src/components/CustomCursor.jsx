import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      // Small delay on the mouse position for smooth effect is handled by framer motion spring
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full bg-primary-400 hidden md:block mix-blend-screen"
        animate={{
          x: mousePosition.x - 4, // Center main dot
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", duration: 0 }}
        style={{
          width: '8px',
          height: '8px',
          zIndex: 9999,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full border-2 border-primary-500 hidden md:block"
        animate={{
          x: mousePosition.x - 20, // Center ring
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.6 }}
        style={{
          width: '40px',
          height: '40px',
          zIndex: 9998,
        }}
      />
    </>
  );
};

export default CustomCursor;
