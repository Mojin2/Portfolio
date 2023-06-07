import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { clickedstate, themeModestate } from "../atoms";
import ToggleButton from "../Components/ToggleButton";
import { darkTheme, lightTheme } from "../theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  height: 100vh;
`;
const CardWrapper = styled.div`
  border: 4px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
  width: 500px;
  height: 500px;
  margin-top: 70px;
  margin-bottom: 30px;
  background-color: ${(props) => props.theme.bgColor};
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const Title = styled.div`
  font-size: 48px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.textColor};
`;
const Subtitle = styled.div`
  font-size: 28px;
  color: ${(props) => props.theme.textColor};
`;
const TextWrapper = styled.div`
  background-color: ${(props) => props.theme.textColor};
  height: 250px;
  margin-top: 80px;
  margin-left: 30px;
  margin-right: 30px;
  position: relative;
`;
const Text = styled.div`
  color: ${(props) => props.theme.bgColor};
`;
const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: tomato;
  position: absolute;
  left: 166px;
  top: -50px;
`;
const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  flex-direction: column;
`;

function Who() {
  const clicked = useRecoilValue(clickedstate);
  const setThemeMode = useSetRecoilState(themeModestate);
  useEffect(() => {
    !clicked ? setThemeMode(lightTheme) : setThemeMode(darkTheme);
  }, [clicked]);
  return (
    <Wrapper>
      <CardWrapper>
        <TitleWrapper>
          <Title>Title</Title>
          <Subtitle>Sub Title</Subtitle>
        </TitleWrapper>

        <TextWrapper>
          <Circle
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Photo
          </Circle>
          <NameWrapper>
            <Text style={{ fontSize: "32px", paddingBottom: "5px" }}>Name</Text>
            <Text style={{ fontSize: "18px" }}>Detail course</Text>
          </NameWrapper>
        </TextWrapper>
      </CardWrapper>
      <ToggleButton Id="Circle2" />
    </Wrapper>
  );
}

export default Who;
