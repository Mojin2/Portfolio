import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { clickedstate, themeModestate } from "../atoms";
import ToggleButton from "../Components/ToggleButton";
import { darkTheme, lightTheme } from "../theme";

const Wrapper = styled.div`
  width: 100%;
  height: 300vh;
  color: whitesmoke;
  margin-top: 10px;
  overflow: auto;
`;
const Box = styled.div`
  background-color: green;
  height: 100px;
  width: 100%;
`;
function Who() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default Who;
