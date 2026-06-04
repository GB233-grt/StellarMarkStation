import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const techStack = [
  { name: "TensorFlow", category: "ML框架" },
  { name: "PyTorch", category: "ML框架" },
  { name: "ONNX", category: "模型格式" },
  { name: "CUDA", category: "GPU加速" },
  { name: "Docker", category: "容器化" },
  { name: "Kubernetes", category: "编排" },
  { name: "Redis", category: "缓存" },
  { name: "Kafka", category: "消息队列" },
];

const stats = [
  { value: "10M+", label: "日处理请求" },
  { value: "99.99%", label: "系统可用性" },
  { value: "<50ms", label: "平均延迟" },
  { value: "100+", label: "支持模型数" },
];

export const TechnicalScene: React.FC = () => {
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
        padding: 60,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          marginBottom: 50,
          opacity: titleProgress,
          transform: `translateY(${(1 - titleProgress) * -50}px)`,
        }}
      >
        技术特点
      </div>
      
      <div
        style={{
          display: "flex",
          gap: 60,
          flex: 1,
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: 30,
              opacity: spring({
                frame: frame - 60,
                fps,
                config: { damping: 12, stiffness: 100 },
              }),
            }}
          >
            技术栈
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            {techStack.map((tech, index) => {
              const techProgress = spring({
                frame: frame - 90 - index * 15,
                fps,
                config: { damping: 12, stiffness: 100 },
              });
              
              return (
                <div
                  key={index}
                  style={{
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    borderRadius: 12,
                    padding: "16px 24px",
                    opacity: techProgress,
                    transform: `scale(${techProgress})`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {tech.name}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "rgba(255, 255, 255, 0.5)",
                      marginTop: 4,
                    }}
                  >
                    {tech.category}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: 30,
              opacity: spring({
                frame: frame - 60,
                fps,
                config: { damping: 12, stiffness: 100 },
              }),
            }}
          >
            性能指标
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}
          >
            {stats.map((stat, index) => {
              const statProgress = spring({
                frame: frame - 120 - index * 20,
                fps,
                config: { damping: 12, stiffness: 100 },
              });
              
              const pulseScale = 1 + Math.sin(frame * 0.08 + index) * 0.02;
              
              return (
                <div
                  key={index}
                  style={{
                    background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                    border: "1px solid rgba(6, 182, 212, 0.3)",
                    borderRadius: 16,
                    padding: 24,
                    textAlign: "center",
                    opacity: statProgress,
                    transform: `scale(${statProgress * pulseScale})`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 42,
                      fontWeight: "bold",
                      color: "#06b6d4",
                      marginBottom: 8,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
