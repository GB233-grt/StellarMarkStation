import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ParticleEffect } from "../components/Effects";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const logoProgress = spring({
    frame: frame - 30,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  
  const textProgress = spring({
    frame: frame - 60,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  
  const ctaProgress = spring({
    frame: frame - 100,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  
  const pulseScale = 1 + Math.sin(frame * 0.1) * 0.03;
  const glowIntensity = interpolate(Math.sin(frame * 0.05), [-1, 1], [20, 40]);
  
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 30,
      }}
    >
      <ParticleEffect />
      
      <div
        style={{
          transform: `scale(${logoProgress * pulseScale})`,
          opacity: logoProgress,
        }}
      >
        <div
          style={{
            width: 150,
            height: 150,
            borderRadius: 30,
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: `0 0 ${glowIntensity}px rgba(59, 130, 246, 0.6), 0 0 ${glowIntensity * 2}px rgba(139, 92, 246, 0.4)`,
          }}
        >
          <span
            style={{
              fontSize: 60,
              fontWeight: "bold",
              color: "white",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            }}
          >
            RT
          </span>
        </div>
      </div>
      
      <div
        style={{
          fontSize: 80,
          fontWeight: "bold",
          color: "white",
          opacity: textProgress,
          transform: `translateY(${interpolate(textProgress, [0, 1], [30, 0])}px)`,
          textShadow: `0 0 ${glowIntensity}px rgba(59, 130, 246, 0.5)`,
        }}
      >
        RTAE
      </div>
      
      <div
        style={{
          fontSize: 32,
          color: "rgba(255, 255, 255, 0.8)",
          opacity: textProgress,
          marginTop: 10,
        }}
      >
        Real-Time AI Engine
      </div>
      
      <div
        style={{
          marginTop: 40,
          padding: "20px 50px",
          background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
          borderRadius: 50,
          opacity: ctaProgress,
          transform: `scale(${ctaProgress})`,
          boxShadow: "0 10px 40px rgba(59, 130, 246, 0.4)",
        }}
      >
        <span
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "white",
          }}
        >
          开始使用 RTAE
        </span>
      </div>
      
      <div
        style={{
          position: "absolute",
          bottom: 60,
          fontSize: 18,
          color: "rgba(255, 255, 255, 0.5)",
          opacity: ctaProgress,
        }}
      >
        © 2024 RTAE. All rights reserved.
      </div>
    </AbsoluteFill>
  );
};
