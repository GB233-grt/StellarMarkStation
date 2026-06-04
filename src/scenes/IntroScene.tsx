import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { GlowingText } from "../components/AnimatedText";
import { ParticleEffect } from "../components/Effects";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const titleProgress = spring({
    frame: frame - 30,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  
  const subtitleProgress = spring({
    frame: frame - 90,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  
  const logoScale = interpolate(titleProgress, [0, 1], [0.5, 1]);
  const logoRotation = interpolate(frame, [0, 900], [0, 360]);
  
  const pulseScale = 1 + Math.sin(frame * 0.1) * 0.02;
  
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 40,
      }}
    >
      <ParticleEffect />
      
      <div
        style={{
          transform: `scale(${logoScale * pulseScale}) rotate(${logoRotation * 0.1}deg)`,
          opacity: titleProgress,
        }}
      >
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: 40,
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 60px rgba(59, 130, 246, 0.5), 0 0 100px rgba(139, 92, 246, 0.3)",
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: "bold",
              color: "white",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            }}
          >
            RT
          </span>
        </div>
      </div>
      
      <GlowingText
        style={{
          fontSize: 120,
          fontWeight: "bold",
          color: "white",
          opacity: titleProgress,
          transform: `translateY(${interpolate(titleProgress, [0, 1], [50, 0])}px)`,
        }}
        glowColor="#3b82f6"
      >
        RTAE
      </GlowingText>
      
      <div
        style={{
          fontSize: 36,
          color: "rgba(255, 255, 255, 0.8)",
          opacity: subtitleProgress,
          transform: `translateY(${interpolate(subtitleProgress, [0, 1], [30, 0])}px)`,
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        Real-Time AI Engine
      </div>
      
      <div
        style={{
          fontSize: 24,
          color: "rgba(255, 255, 255, 0.6)",
          opacity: spring({
            frame: frame - 150,
            fps,
            config: { damping: 12, stiffness: 100 },
          }),
          marginTop: 20,
        }}
      >
        新一代实时AI处理引擎
      </div>
    </AbsoluteFill>
  );
};
