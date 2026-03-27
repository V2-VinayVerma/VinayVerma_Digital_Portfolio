import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics for different trail elements
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  
  const cursorXSpring1 = useSpring(cursorX, { ...springConfig, damping: 20 });
  const cursorYSpring1 = useSpring(cursorY, { ...springConfig, damping: 20 });
  
  const cursorXSpring2 = useSpring(cursorX, { ...springConfig, damping: 25 });
  const cursorYSpring2 = useSpring(cursorY, { ...springConfig, damping: 25 });

  const cursorXSpring3 = useSpring(cursorX, { ...springConfig, damping: 30 });
  const cursorYSpring3 = useSpring(cursorY, { ...springConfig, damping: 30 });
  
  const ringXSpring = useSpring(cursorX, { ...springConfig, damping: 25, mass: 0.8 });
  const ringYSpring = useSpring(cursorY, { ...springConfig, damping: 25, mass: 0.8 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const updateHoverState = (e) => {
      const target = e.target;
      // We look for any interactive element
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
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
  }, [cursorX, cursorY]);

  return (
    <div className="block pointer-events-none select-none z-[9999]">
      
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full border border-[#00E5FF]/40"
        animate={{
          scale: isHovering ? 1.6 : 1,
          backgroundColor: isHovering ? 'rgba(0, 229, 255, 0.15)' : 'transparent',
          borderColor: isHovering ? 'rgba(0, 229, 255, 0.8)' : 'rgba(0, 229, 255, 0.4)',
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: ringXSpring,
          y: ringYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: '36px',
          height: '36px',
          zIndex: 9996,
          boxShadow: isHovering ? '0 0 25px rgba(0, 229, 255, 0.5)' : '0 0 10px rgba(0, 229, 255, 0.2)',
        }}
      />

      {/* Trail Dot 3 */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full bg-[#00E5FF]/30"
        animate={{ scale: isHovering ? 0 : 1 }}
        style={{
          x: cursorXSpring3,
          y: cursorYSpring3,
          translateX: '-50%',
          translateY: '-50%',
          width: '4px',
          height: '4px',
          zIndex: 9997,
        }}
      />

      {/* Trail Dot 2 */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full bg-[#00E5FF]/60"
        animate={{ scale: isHovering ? 0 : 1 }}
        style={{
          x: cursorXSpring2,
          y: cursorYSpring2,
          translateX: '-50%',
          translateY: '-50%',
          width: '6px',
          height: '6px',
          zIndex: 9998,
        }}
      />

      {/* Trail Dot 1 */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
        animate={{ scale: isHovering ? 0 : 1 }}
        style={{
          x: cursorXSpring1,
          y: cursorYSpring1,
          translateX: '-50%',
          translateY: '-50%',
          width: '8px',
          height: '8px',
          zIndex: 9999,
        }}
      />

      {/* Main Cursor Center */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full bg-white shadow-[0_0_8px_white]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: '3px',
          height: '3px',
          zIndex: 10000,
        }}
      />
      
    </div>
  );
};

export default CustomCursor;
