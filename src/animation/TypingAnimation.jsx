import { TypeAnimation } from "react-type-animation";

const TypingAnimation = ({
  sequence,
  wrapper = "span",
  showCursor = true,
  style,
  speed,
}) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper={wrapper}
      cursor={showCursor}
      style={style}
      speed={speed}
    />
  );
};

export default TypingAnimation;
