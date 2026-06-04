import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { IntroScene } from "./scenes/IntroScene";
import { CoreFeaturesScene } from "./scenes/CoreFeaturesScene";
import { ApplicationScene } from "./scenes/ApplicationScene";
import { TechnicalScene } from "./scenes/TechnicalScene";
import { OutroScene } from "./scenes/OutroScene";
import { Background } from "./components/Background";

export const RTAEVideo: React.FC = () => {
  return (
    <AbsoluteFill>
      <Background />
      <Sequence from={0} durationInFrames={900}>
        <IntroScene />
      </Sequence>
      <Sequence from={900} durationInFrames={1200}>
        <CoreFeaturesScene />
      </Sequence>
      <Sequence from={2100} durationInFrames={1200}>
        <ApplicationScene />
      </Sequence>
      <Sequence from={3300} durationInFrames={900}>
        <TechnicalScene />
      </Sequence>
      <Sequence from={4200} durationInFrames={300}>
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
