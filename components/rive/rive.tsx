import { useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";

type Props = {
  src: string;
  hovered?: boolean;
  animation: string;
};

/**
 * RiveIcon component
 */
const RiveIcon = (props: Props) => {
  const { rive, RiveComponent } = useRive({
    src: props.src,
  });

  useEffect(() => {
    if (props.hovered) {
      rive?.play(props.animation);
    }
  }, [props.hovered]);

  return <RiveComponent className="z-50 size-5" />;
};

export default RiveIcon;
