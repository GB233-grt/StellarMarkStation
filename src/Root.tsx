import { Composition } from "remotion";
import { RTAEVideo } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="RTAEVideo"
        component={RTAEVideo}
        durationInFrames={4500}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
