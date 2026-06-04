import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const applications = [
  {
    title: "智能客服",
    description: "7x24小时智能对话服务",
    icon: "💬",
    metrics: "响应时间 < 100ms",
  },
  {
    title: "内容审核",
    description: "实时内容安全检测",
    icon: "🔍",
    metrics: "准确率 99.9%",
  },
  {
    title: "推荐系统",
    description: "个性化推荐引擎",
    icon: "🎯",
    metrics: "点击率提升 40%",
  },
  {
    title: "数据分析",
    description: "实时数据洞察",
    icon: "📊",
    metrics: "处理量 10M+/s",
  },
  {
    title: "智能监控",
    description: "异常检测预警",
    icon: "🚨",
    metrics: "误报率 < 0.1%",
  },
  {
    title: "语音识别",
    description: "多语言语音转写",
    icon: "🎤",
    metrics: "准确率 98%",
  },
];

export const ApplicationScene: React.FC = () => {
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
        应用场景
      </div>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 30,
          flex: 1,
        }}
      >
        {applications.map((app, index) => {
          const cardProgress = spring({
            frame: frame - 60 - index * 30,
            fps,
            config: { damping: 15, stiffness: 80 },
          });
          
          const scale = interpolate(cardProgress, [0, 1], [0.8, 1]);
          const opacity = interpolate(cardProgress, [0, 1], [0, 1]);
          const translateY = interpolate(cardProgress, [0, 1], [50, 0]);
          
          const hoverY = Math.sin(frame * 0.05 + index * 0.5) * 3;
          
          return (
            <div
              key={index}
              style={{
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                borderRadius: 20,
                padding: 30,
                transform: `scale(${scale}) translateY(${translateY + hoverY}px)`,
                opacity: frame < 60 + index * 30 ? 0 : opacity,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 56,
                  marginBottom: 16,
                }}
              >
                {app.icon}
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: 10,
                }}
              >
                {app.title}
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: 16,
                }}
              >
                {app.description}
              </div>
              <div
                style={{
                  fontSize: 16,
                  color: "#3b82f6",
                  background: "rgba(59, 130, 246, 0.1)",
                  padding: "8px 16px",
                  borderRadius: 20,
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                }}
              >
                {app.metrics}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
