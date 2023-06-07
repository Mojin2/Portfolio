import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { clickedstate, themeModestate } from "../atoms";
import { darkTheme, lightTheme } from "../theme";

const Wrapper = styled.div`
  width: 100px;
  height: 50px;
  background-color: ${(props) => props.theme.textColor};
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition-duration: 0.2s;
`;
const Circle = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.bgColor};
  cursor: pointer;
`;
interface Iid {
  Id: string;
}
function ToggleButton({ Id }: Iid) {
  const [clicked, setClicked] = useRecoilState(clickedstate);
  return (
    <AnimatePresence>
      <Wrapper>
        {!clicked ? (
          <Circle
            style={{ marginLeft: "5px" }}
            onClick={() => {
              setClicked((prev) => !prev);
            }}
            layoutId={Id}
          />
        ) : null}
        {clicked ? (
          <Circle
            style={{ marginLeft: "55px" }}
            onClick={() => {
              setClicked((prev) => !prev);
            }}
            layoutId={Id}
          />
        ) : null}
      </Wrapper>
    </AnimatePresence>
  );
}
export default ToggleButton;
