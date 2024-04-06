import { ReactNode, useState, useEffect } from "react";

const styles = {
  fontSize: "14px",
  position: "absolute",
  left: "0",
  right: "0",
  marginTop: "20px",
  textAlign: "center",
};

const Delayed: React.FC<{ wait: number; children: ReactNode }> = ({
  wait = 1000,
  children,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShow(true);
    }, wait);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [wait]);

  return show ? <>{children}</> : null;
};

const Loading: React.FC<{ text?: string; speed?: number }> = ({
  text = "Loading",
  speed = 300,
}) => {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setContent((prevContent) =>
        prevContent === text + "..." ? text : prevContent + "."
      );
    }, speed);

    return () => {
      window.clearInterval(interval);
    };
  }, [speed, text]);

  return (
    <Delayed wait={speed}>
      {/* @ts-ignore */}
      <p style={styles}>{content}</p>
    </Delayed>
  );
};

export default Loading;
