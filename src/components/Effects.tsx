import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const ParticleEffect: React.FC = () => {
  const frame = useCurrentFrame();
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.sin(i * 0.5) * 100 + Math.cos(frame * 0.02 + i) * 200,
    y: Math.cos(i * 0.7) * 100 + Math.sin(frame * 0.03 + i) * 200,
    size: 2 + Math.sin(i) * 2,
    opacity: 0.3 + Math.sin(frame * 0.05 + i) * 0.2,
  }));
  
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            left: `calc(50% + ${particle.x}px)`,
            top: `calc(50% + ${particle.y}px)`,
            width: particle.size,
            height: particle.size,
            borderRadius: "50%",
            backgroundColor: `rgba(59, 130, 246, ${particle.opacity})`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(59, 130, 246, 0.5)`,
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

export const FloatingCard: React.FC<{
  children: React.ReactNode;
  delay?: number;
  index?: number;
}> = ({ children, delay = 0, index = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const progress = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 15,
      stiffness: 80,
      mass: 0.8,
    },
  });
  
  const scale = interpolate(progress, [0, 1], [0.8, 1]);
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [100, 0]);
  
  const floatY = Math.sin(frame * 0.03 + index) * 5;
  
  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)",
        border: "1px solid rgba(59, 130, 246, 0.3)",
        borderRadius: 16,
        padding: 24,
        backdropFilter: "blur(10px)",
        transform: `scale(${scale}) translateY(${translateY + floatY}px)`,
        opacity: frame < delay ? 0 : opacity,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)",
      }}
    >
      {children}
    </div>
  );
};

export const TransitionOverlay: React.FC<{
  type: "in" | "out";
}> = ({ type }) => {
  const frame = useCurrentFrame();
  
  const progress = type === "in" 
    ? interpolate(frame, [0, 15], [1, 0])
    : interpolate(frame, [0, 15], [0, 1]);
  
  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 100%)",
        opacity: Math.max(0, Math.min(1, progress)),
      }}
    />
  );
};
