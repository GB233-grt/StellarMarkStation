import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const AnimatedText: React.FC<{
  children: string;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const words = children.split(" ");
  
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.3em", ...style }}>
      {words.map((word, i) => {
        const wordDelay = delay + i * 5;
        const progress = spring({
          frame: frame - wordDelay,
          fps,
          config: {
            damping: 12,
            stiffness: 100,
            mass: 0.5,
          },
        });
        
        const opacity = interpolate(progress, [0, 1], [0, 1]);
        const translateY = interpolate(progress, [0, 1], [50, 0]);
        
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: frame < wordDelay ? 0 : opacity,
              transform: `translateY(${frame < wordDelay ? 50 : translateY}px)`,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export const GlowingText: React.FC<{
  children: string;
  style?: React.CSSProperties;
  glowColor?: string;
}> = ({ children, style, glowColor = "#3b82f6" }) => {
  const frame = useCurrentFrame();
  
  const glowIntensity = interpolate(
    Math.sin(frame * 0.05),
    [-1, 1],
    [10, 30]
  );
  
  return (
    <div
      style={{
        textShadow: `0 0 ${glowIntensity}px ${glowColor}, 0 0 ${glowIntensity * 2}px ${glowColor}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const TypewriterText: React.FC<{
  text: string;
  speed?: number;
  style?: React.CSSProperties;
}> = ({ text, speed = 2, style }) => {
  const frame = useCurrentFrame();
  const charsToShow = Math.min(Math.floor(frame / speed), text.length);
  const displayText = text.slice(0, charsToShow);
  
  return (
    <div style={{ fontFamily: "monospace", ...style }}>
      {displayText}
      {charsToShow < text.length && (
        <span style={{ opacity: frame % 10 < 5 ? 1 : 0 }}>|</span>
      )}
    </div>
  );
};
