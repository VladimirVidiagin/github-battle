import { useState, ReactNode } from "react";

interface HoverProps {
  children: (hovering: boolean) => ReactNode;
}

const Hover: React.FC<HoverProps> = ({ children }) => {
  const [hovering, setHovering] = useState(false);

  const mouseOver = () => {
    setHovering(true);
  };

  const mouseOut = () => {
    setHovering(false);
  };

  return (
    <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
      {children(hovering)}
    </div>
  );
};

export default Hover;
