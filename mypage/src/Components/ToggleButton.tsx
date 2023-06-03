import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { clickedstate } from "../atoms";

const Wrapper = styled.div`
  width: 100px;
  height: 50px;
  background-color: whitesmoke;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Circle = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: tomato;
  cursor: pointer;
`;
function ToggleButton() {
  const [clicked, setClicked] = useRecoilState(clickedstate);
  return (
    <AnimatePresence>
      <Wrapper>
        {!clicked ? (
          <Circle
            style={{ marginLeft: "5px" }}
            onClick={() => setClicked((prev) => !prev)}
            layoutId="Circle"
          />
        ) : null}
        {clicked ? (
          <Circle
            style={{ marginLeft: "55px" }}
            onClick={() => setClicked((prev) => !prev)}
            layoutId="Circle"
          />
        ) : null}
      </Wrapper>
    </AnimatePresence>
  );
}
export default ToggleButton;
