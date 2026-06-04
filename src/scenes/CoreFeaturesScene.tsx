import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FloatingCard } from "../components/Effects";

const features = [
  {
    icon: "⚡",
    title: "实时处理",
    description: "毫秒级响应，支持高并发实时数据处理",
    color: "#3b82f6",
  },
  {
    icon: "🧠",
    title: "智能推理",
    description: "先进的AI模型推理引擎，支持多种模型格式",
    color: "#8b5cf6",
  },
  {
    icon: "🔄",
    title: "动态扩展",
    description: "弹性伸缩架构，按需分配计算资源",
    color: "#06b6d4",
  },
  {
    icon: "🛡️",
    title: "安全可靠",
    description: "企业级安全防护，数据加密传输存储",
    color: "#10b981",
  },
];

export const CoreFeaturesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const titleProgress = spring({
    frame: frame - 30,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  
  return (
    <AbsoluteFill
      style={{
        padding: 80,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginBottom: 60,
          opacity: titleProgress,
          transform: `translateY(${(1 - titleProgress) * -50}px)`,
        }}
      >
        核心功能
      </div>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          flex: 1,
        }}
      >
        {features.map((feature, index) => (
          <FloatingCard key={index} delay={60 + index * 40} index={index}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
              <div
                style={{
                  fontSize: 48,
                  width: 80,
                  height: 80,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${feature.color}33 0%, ${feature.color}11 100%)`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: `1px solid ${feature.color}44`,
                }}
              >
                {feature.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: 12,
                  }}
                >
                  {feature.title}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </div>
              </div>
            </div>
          </FloatingCard>
        ))}
      </div>
    </AbsoluteFill>
  );
};
