import React, { useMemo } from 'react';
import { Feather as FeatherIcon } from '@phosphor-icons/react';

const FloatingFeather = ({ delay, duration, startX, scale, rotation }: { delay: number, duration: number, startX: number, scale: number, rotation: number }) => {
  return (
    <div 
      className="fixed z-0 pointer-events-none animate-float-down opacity-0 flex items-center justify-center"
      style={{
        left: `${startX}%`,
        top: '-10%',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
      }}
    >
      <FeatherIcon 
        weight="thin"
        className="text-white"
        style={{ 
          transform: `scale(${scale}) rotate(${rotation}deg)`,
          width: '100px',
          height: '100px',
          opacity: 0.1 + (scale * 0.15), 
          filter: `blur(${scale < 0.5 ? '4px' : scale < 0.8 ? '2px' : '0px'})`
        }}
      />
    </div>
  );
};

export const FeatherBackground = () => {
  const feathers = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 30,
      startX: Math.random() * 100,
      scale: 0.6 + Math.random() * 0.6,
      rotation: -90 + Math.random() * 180,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {feathers.map(f => (
        <FloatingFeather key={f.id} {...f} />
      ))}
    </div>
  );
};
