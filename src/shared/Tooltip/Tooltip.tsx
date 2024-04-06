import { ReactNode } from "react";
import Hover from "../../entities/Hover/Hover";

const container = {
  position: "relative",
  display: "flex",
};

const Tooltip: React.FC<{ element: ReactNode; children: ReactNode }> = ({
  children,
  element,
}) => {
  return (
    <Hover>
      {(hovering) => {
        return (
          //@ts-ignore
          <div style={container}>
            {hovering && element}
            {children}
          </div>
        );
      }}
    </Hover>
  );
};

export default Tooltip;
