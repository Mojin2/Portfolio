import { useEffect } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { MdJavascript, MdOutlineJavascript } from "react-icons/md";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { clickedstate, themeModestate } from "../atoms";
import ToggleButton from "../Components/ToggleButton";
import { darkTheme, lightTheme } from "../theme";
import {
  SiCplusplus,
  SiDjango,
  SiJavascript,
  SiPython,
  SiSpring,
  SiTypescript,
} from "react-icons/si";

const Wrapper = styled.div`
  width: 100%;
  height: 91%;
  color: #e3dede;
  background-color: #eee;
  /* margin-top: 10px; */
  overflow: auto;
  border: 13px solid #222831;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-top: none;
`;
const Box = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const TechUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  /* transform: translate(-50%, -50%); */
  /* flex-direction: row; */
`;
const TechLi = styled.li`
  list-style: none;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SvgWrapper = styled.div<{ cor: string }>`
  padding-top: 3px;
  margin-left: 30px;
  font-size: 36px;
  position: relative;
  display: block;
  /* justify-content: center;
  align-items: center; */
  width: 60px;
  height: 60px;
  line-height: 63px;
  background: #333;
  border-radius: 50%;
  text-align: center;
  color: #666;
  transition: 0.5s;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.cor};
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
    top: 0;
    left: 0;
    border-radius: 50%;
  }
  :hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px ${(props) => props.cor};
  }
  :hover {
    /* color: ${(props) => props.cor};
    box-shadow: 0 0 5px 5px ${(props) => props.cor};
    text-shadow: 0 0 5px 5px ${(props) => props.cor}; */
  }
  color: ${(props) => props.cor};
  box-shadow: 0 0 5px 5px ${(props) => props.cor};
  text-shadow: 0 0 5px 5px ${(props) => props.cor};
`;
const Title = styled.div`
  font-size: 38px;
  color: #222831;
  font-family: var(--font-googleCarterOne);
  margin-bottom: 10px;
`;

const FillBox = styled.div`
  width: 90%;
  height: 80%;
  background-color: #eeeeee;
  border-radius: 10px;
`;

function Who() {
  return (
    <Wrapper>
      <Box style={{ height: "400px" }}>
        <Title
          style={{
            marginRight: "20px",
            color: "#00adb5",
          }}
        >
          Be Creative,
        </Title>
        <Title>FrontEnd Developer.</Title>
      </Box>
      <Box>
        <Title>My Skills</Title>
        <TechUl>
          <TechLi>
            <SvgWrapper
              cor="#e34f26"
              style={{ paddingTop: "4px", fontSize: "40px" }}
            >
              <AiFillHtml5 />
            </SvgWrapper>
            <SvgWrapper
              cor="#1572b6"
              style={{ paddingTop: "5px", fontSize: "40px" }}
            >
              <FaCss3Alt />
            </SvgWrapper>
            <SvgWrapper cor="#f7df1e">
              <SiJavascript />
            </SvgWrapper>
            <SvgWrapper cor="#3178c6">
              <SiTypescript />
            </SvgWrapper>
            <SvgWrapper cor="#61dafb">
              <FaReact />
            </SvgWrapper>
          </TechLi>
        </TechUl>
      </Box>
      <Box>
        <Title>My Experiences</Title>
        <TechUl>
          <TechLi>
            <SvgWrapper cor="#00599c">
              <SiCplusplus />
            </SvgWrapper>
            <SvgWrapper cor="#3776ab">
              <SiPython />
            </SvgWrapper>
            <SvgWrapper
              cor="#105d40"
              style={{
                paddingTop: "4px",
                paddingRight: "5px",
                fontSize: "36px",
              }}
            >
              <SiDjango />
            </SvgWrapper>
            <SvgWrapper cor="#6db33f">
              <SiSpring />
            </SvgWrapper>
          </TechLi>
        </TechUl>
      </Box>
      <Box />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#e6e6e6",
        }}
      >
        <Title style={{ paddingBottom: "10px" }}>
          Many Team Project Experiences
        </Title>
        <FillBox style={{ height: "80%" }}></FillBox>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Title style={{ paddingBottom: "10px" }}>Learning Fast Ability</Title>
        <FillBox style={{ backgroundColor: "#e6e6e6" }}></FillBox>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#e6e6e6",
        }}
      >
        <Title style={{ paddingBottom: "10px" }}>Following the Trends</Title>
        <FillBox></FillBox>
      </Box>
    </Wrapper>
  );
}

export default Who;
