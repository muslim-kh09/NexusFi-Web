import React, { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '../utils/hooks';
import { Feather as FeatherIcon } from '@phosphor-icons/react';

export const Feather = () => {
  const mousePosition = useMousePosition();
  const featherRef = useRef<HTMLDivElement>(null);
  const currentPos = useRef({ x: -100, y: -100 });
  const targetPos = useRef({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  // Update the target position whenever mouse moves
  useEffect(() => {
    targetPos.current = { x: mousePosition.x, y: mousePosition.y };
    if (!isVisible && (mousePosition.x > 0 || mousePosition.y > 0)) {
      setIsVisible(true);
      currentPos.current = { x: mousePosition.x, y: mousePosition.y };
    }
  }, [mousePosition, isVisible]);

  // Buttery smooth tracking loop outside of React state
  useEffect(() => {
    let animationFrameId: number;

    const render = () => {
      // Linear Interpolation (Lerp) for smooth spring effect
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.08;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.08;

      if (featherRef.current) {
        // Velocity-based rotation: The faster you move horizontally, the more it tilts
        const velocityX = targetPos.current.x - currentPos.current.x;
        const rotation = velocityX * 0.3; // multiplier for tilt strength

        featherRef.current.style.transform = `translate(calc(${currentPos.current.x}px - 50%), calc(${currentPos.current.y}px - 50%)) rotate(${rotation}deg)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div 
      ref={featherRef}
      className={`pointer-events-none fixed top-0 left-0 z-40 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ willChange: 'transform' }}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 blur-3xl opacity-30 bg-champagne rounded-full scale-150"></div>
        <FeatherIcon 
          size={80} 
          weight="thin" 
          className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        />
      </div>
    </div>
  );
};
