import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  useSpring,
  animated as anim,
  SpringValues,
  SpringValue,
} from "react-spring";
import styled from "styled-components";
import "./styles.css";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 120, friction: 50 };
const trans = (x: any, y: any) => {
  return `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
function Vision() {
  const [{ pos1 }, set] = useSpring(() => ({ pos1: [0, 0], config: fast }));
  const [{ pos2 }] = useSpring(() => ({ pos2: pos1, config: slow }));
  const [{ pos3 }] = useSpring(() => ({ pos3: pos2, config: slow }));
  const [{ pos4 }] = useSpring(() => ({ pos4: pos3, config: slow }));
  const [{ pos5 }] = useSpring(() => ({ pos5: pos4, config: slow }));
  useEffect(() => {
    const handler = ({ clientX, clientY }: any) =>
      set({ pos1: [clientX, clientY] });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <>
      <Wrapper>
        <div className="hooks-main">
          <div className="hooks-filter">
            <anim.div
              className="b1"
              style={{ transform: pos3.interpolate(trans) }}
            >
              Node.js
            </anim.div>
            <anim.div
              className="b2"
              style={{ transform: pos2.interpolate(trans) }}
            >
              FULL STACK
            </anim.div>
            <anim.div
              className="b3"
              style={{ transform: pos1.interpolate(trans) }}
            >
              Nest.js
            </anim.div>
            <anim.div
              className="b4"
              style={{ transform: pos4.interpolate(trans) }}
            >
              Next.js
            </anim.div>
            <anim.div
              className="b5"
              style={{ transform: pos5.interpolate(trans) }}
            >
              ReactNative
            </anim.div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Vision;
