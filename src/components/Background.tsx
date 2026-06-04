import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  
  const gradientRotation = interpolate(frame, [0, 4500], [0, 360]);
  
  return (
    <AbsoluteFill>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(${gradientRotation}deg, 
            #0a0a1a 0%, 
            #1a1a3a 25%, 
            #0f0f2f 50%, 
            #1f1f4f 75%, 
            #0a0a1a 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)
          `,
        }}
      />
    </AbsoluteFill>
  );
};
