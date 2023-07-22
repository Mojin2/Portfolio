import { useEffect, useRef, useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaPeopleArrows, FaReact } from "react-icons/fa";
import { MdJavascript, MdOutlineJavascript } from "react-icons/md";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { clickedstate, themeModestate } from "../atoms";
import ToggleButton from "../Components/ToggleButton";
import { darkTheme, lightTheme } from "../theme";
import Typist from "react-text-typist";
import {
  SiCplusplus,
  SiDjango,
  SiJavascript,
  SiPython,
  SiSpring,
  SiTypescript,
} from "react-icons/si";
import {
  motion,
  useAnimate,
  useAnimation,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import ScrollVelocity from "../Components/ScrollVelocity";
import { Button, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import { BsFire } from "react-icons/bs";

const Wrapper = styled.div`
  width: 100%;
  height: 91%;
  color: #e3dede;
  background-color: #222831;
  /* margin-top: 10px; */
  overflow: auto;
  border: 13px solid #222831;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-top: none;
  z-index: 10;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
const Title = styled(motion.div)`
  font-size: 38px;
  color: whitesmoke;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 10px;
  font-weight: 800;
`;

const FillBox = styled.div`
  width: 70%;
  height: 80%;
  background-color: #282f3a;
  border-radius: 10px;
`;
const CustomText = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  font-size: 24px;
`;
const LogoImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-top: 10%;
  /* filter: brightness(70%);
  :hover {
    filter: brightness(100%);
  } */
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 10%;
`;
const CardWrapper = styled.div`
  filter: brightness(70%);
  :hover {
    filter: brightness(100%);
    scale: 1.1;
    transition-duration: 0.7s;
  }
`;
const ScrollBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScrollBox = styled(motion.div)`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
  font-size: 50px;
  font-weight: 600;
`;

const Mouse = styled.div`
  margin-top: 140px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  width: 30px;
  height: 50px;
  border: 2px solid #eee;
  border-radius: 20px;
  ::before {
    content: "SCROLL";
    position: absolute;
    top: -35px;
    left: 50%;
    margin-left: -29px;
    width: 60px;
    font-size: 14px;
    color: #eee;
    letter-spacing: 0px;
    font-weight: 600;
  }
`;
const MouseBall = styled.span`
  position: absolute;
  top: 8px;
  left: 11px;
  width: 4px;
  height: 4px;
  background-color: #eee;
  border-radius: 50%;
  @keyframes Mouse_act {
    0% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(5px);
    }
  }
  animation: Mouse_act 1s ease-out infinite;
`;
function Who() {
  const refContainer = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({ container: refContainer });
  const refTitleTwo = useRef(null);
  const refFillTwo = useRef(null);
  const refTitleThree = useRef(null);
  const refFillThree = useRef(null);
  const refTitleFour = useRef(null);
  const refFillFour = useRef(null);
  const isInViewTitleTwo = useInView(refTitleTwo);
  const isInViewFillTwo = useInView(refFillTwo);
  const isInViewTitleThree = useInView(refTitleThree);
  const isInViewFillThree = useInView(refFillThree);
  const isInViewTitleFour = useInView(refTitleFour);
  const isInViewFillFour = useInView(refFillFour);

  const refimgone = useRef(null);
  const isInViewimgone = useInView(refimgone);
  const refimgtwo = useRef(null);
  const isInViewimgtwo = useInView(refimgtwo);
  const refimgthree = useRef(null);
  const isInViewimgthree = useInView(refimgthree);
  const reftextone = useRef(null);
  const isInViewtextone = useInView(reftextone);

  const refCardOne = useRef(null);
  const refCardTwo = useRef(null);
  const refCardThree = useRef(null);
  const isInViewCardOne = useInView(refCardOne);
  const isInViewCardTwo = useInView(refCardTwo);
  const isInViewCardThree = useInView(refCardThree);

  const refBox = useRef(null);
  const { scrollY: scrollYBox, scrollYProgress: scrollYProgressBox } =
    useScroll({ target: refContainer, offset: ["end end", "start start"] });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(scrollYProgress);
  // });
  const scaleone = useTransform(scrollYProgress, [0.6, 0.72], [1, 0.8]);
  const yone = useTransform(scrollYProgress, [0.6, 0.72], [0, -90]);

  const scaletwo = useTransform(scrollYProgress, [0.72, 0.85], [1.1, 0.9]);
  const ytwo = useTransform(scrollYProgress, [0.72, 0.85], [120, -360]);

  const scalethree = useTransform(scrollYProgress, [0.85, 0.97], [1.3, 1]);
  const ythree = useTransform(scrollYProgress, [0.85, 0.97], [240, -630]);
  return (
    <Wrapper ref={refContainer}>
      <Box
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box style={{ height: "350px" }}>
          <Title
            style={{
              marginRight: "20px",
              color: "teal",
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
        <Box>
          <Mouse>
            <MouseBall />
          </Mouse>
        </Box>
        <Box />
      </Box>
      {/* Second Page (Team) */}
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#29303b",
        }}
      >
        <div style={{ width: "70%" }}>
          <Title
            ref={refTitleTwo}
            style={{
              transform: isInViewTitleTwo ? "none" : "translateY(30px)",
              opacity: isInViewTitleTwo ? 1 : 0,
              transition: "all 0.9s",
              float: "left",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            Many Team Project Experiences
          </Title>
        </div>
        <FillBox
          ref={refFillTwo}
          style={{
            height: "80%",
            transform: isInViewFillTwo ? "none" : "translateY(30px)",
            opacity: isInViewFillTwo ? 1 : 0,
            transition: "all 1s",
            backgroundColor: "#222831",
          }}
        >
          <ImageWrapper>
            <CardWrapper>
              <Card
                maxW="sm"
                ref={refCardOne}
                style={{
                  transform: isInViewCardOne ? "none" : "translateY(50px)",
                  opacity: isInViewCardOne ? 1 : 0,
                  transition: isInViewCardOne ? "all 0.9s" : "0s",
                  transitionDelay: isInViewCardOne ? "0.15s" : "0s",
                }}
              >
                <CardBody>
                  <LogoImg src="./images/logo1.jpeg" />
                  <Stack mt={6} spacing={3}>
                    <Heading size={"md"}>Major</Heading>
                    <Text>Smart System Software</Text>
                  </Stack>
                </CardBody>
              </Card>
            </CardWrapper>
            <CardWrapper>
              <Card
                maxW="sm"
                ref={refCardTwo}
                style={{
                  transform: isInViewCardTwo ? "none" : "translateY(50px)",
                  opacity: isInViewCardTwo ? 1 : 0,
                  transition: isInViewCardTwo ? "all 0.9s" : "0s",
                  transitionDelay: isInViewCardTwo ? "0.25s" : "0s",
                }}
              >
                <CardBody>
                  <LogoImg src="./images/logo3.png" />
                  <Stack mt={6} spacing={3}>
                    <Heading size={"md"}>Outside Activity</Heading>
                    <Text>Likelion 9th</Text>
                  </Stack>
                </CardBody>
              </Card>
            </CardWrapper>
            <CardWrapper>
              <Card
                maxW="sm"
                ref={refCardThree}
                style={{
                  transform: isInViewCardThree ? "none" : "translateY(50px)",
                  opacity: isInViewCardThree ? 1 : 0,
                  transition: isInViewCardThree ? "all 0.9s" : "0s",
                  transitionDelay: isInViewCardThree ? "0.35s" : "0s",
                }}
              >
                <CardBody>
                  <LogoImg src="./images/logo4.png" />
                  <Stack mt={6} spacing={3}>
                    <Heading size={"md"}>Contest</Heading>
                    <Text>Idea & Coding Hackathon</Text>
                  </Stack>
                </CardBody>
              </Card>
            </CardWrapper>
          </ImageWrapper>
        </FillBox>
      </Box>
      {/* Thrid Page (Trend) */}
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "70%",
          }}
        >
          <Title
            ref={refTitleThree}
            style={{
              transform: isInViewTitleThree ? "none" : "translateY(30px)",
              opacity: isInViewTitleThree ? 1 : 0,
              transition: "all 0.9s",
              float: "left",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            Be Passionate, Follow Trends
            <div style={{ width: "100px" }}>
              <BsFire size={38} style={{ marginLeft: "10px" }} color="red" />
            </div>{" "}
          </Title>
        </div>
        <FillBox
          ref={refFillThree}
          style={{
            height: "80%",
            transform: isInViewFillThree ? "none" : "translateY(30px)",
            opacity: isInViewFillThree ? 1 : 0,
            transition: "all 1s",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "55%",
                height: "100%",
                position: "relative",
              }}
            >
              <img
                ref={refimgone}
                src="./images/trend2.png"
                width={"900px"}
                height={"100%"}
                style={{
                  borderRadius: "20px",
                  position: "absolute",
                  bottom: "0px",
                  transform: isInViewimgone ? "none" : "translateY(30px)",
                  opacity: isInViewimgone ? 1 : 0,
                  transition: isInViewimgone ? "all 0.9s" : "0s",
                  transitionDelay: isInViewimgone ? "0.15s" : "0s",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
              }}
            >
              <div
                ref={reftextone}
                style={{
                  height: "200px",
                  color: "black",
                  paddingTop: "40px",
                  transform: isInViewtextone ? "none" : "translateY(30px)",
                  opacity: isInViewtextone ? 1 : 0,
                  transition: isInViewtextone ? "all 0.9s" : "0s",
                  transitionDelay: isInViewtextone ? "0.25s" : "0s",
                }}
              >
                <Button
                  colorScheme="white"
                  borderRadius={"20px"}
                  padding="0px 10px"
                  border="2px"
                  cursor={"initial"}
                  fontSize={"18px"}
                  fontWeight="800"
                >
                  New FrameWorks ∙ Trends
                </Button>
                <div
                  style={{
                    paddingLeft: "20px",
                    marginTop: "10px",
                    color: "#eeeeee",
                  }}
                >
                  <CustomText>Always exploring</CustomText>
                  <CustomText>new technologies,</CustomText>
                  <CustomText>trying to apply</CustomText>
                  <CustomText>trendy technologies.</CustomText>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <img
                  ref={refimgtwo}
                  src="./images/trend3.png"
                  width={"300"}
                  height={"200"}
                  style={{
                    position: "absolute",
                    borderRadius: "20px",
                    // transform: "translateY(80px)",
                    bottom: "-350px",
                    left: "10px",
                    transform: isInViewimgtwo ? "none" : "translateY(30px)",
                    opacity: isInViewimgtwo ? 1 : 0,
                    transition: isInViewimgtwo ? "all 0.9s" : "0s",
                    transitionDelay: isInViewimgtwo ? "0.4s" : "0s",
                  }}
                />
                <img
                  ref={refimgthree}
                  src="./images/trend4.png"
                  width={"300"}
                  height={"200"}
                  style={{
                    borderRadius: "20px",
                    bottom: "-400px",
                    position: "absolute",
                    left: "80px",
                    transform: isInViewimgthree ? "none" : "translateY(30px)",
                    opacity: isInViewimgthree ? 1 : 0,
                    transition: isInViewimgthree ? "all 0.9s" : "0s",
                    transitionDelay: isInViewimgthree ? "0.5s" : "0s",
                  }}
                />
              </div>
            </div>
          </div>
        </FillBox>
      </Box>
      {/* Scroll Velocity */}
      <div style={{ width: "70%", margin: "0 auto" }}>
        <ScrollVelocity scrollY={scrollY} baseVelocity={-5}>
          Creative FrontEnd Developer
        </ScrollVelocity>
        <ScrollVelocity scrollY={scrollY} baseVelocity={5}>
          Follow Trends
        </ScrollVelocity>
      </div>
      {/* Fourth Page (Conclusion) */}
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#29303b",
          position: "sticky",
          top: "0",
        }}
      >
        <div style={{ width: "70%" }}>
          <Title
            ref={refTitleFour}
            style={{
              paddingBottom: "10px",
              transform: isInViewTitleFour ? "none" : "translateY(30px)",
              opacity: isInViewTitleFour ? 1 : 0,
              transition: "all 0.9s",
              float: "left",
            }}
          ></Title>
        </div>
        <FillBox
          ref={refFillFour}
          style={{
            height: "80%",
            transform: isInViewFillFour ? "none" : "translateY(30px)",
            opacity: isInViewFillFour ? 1 : 0,
            transition: "all 1s",
            backgroundColor: "#29303b",
          }}
        >
          <ScrollBoxWrapper
            ref={refBox}
            style={{ height: "300vh", paddingTop: "10px" }}
          >
            <div
              style={{
                width: "90%",
                height: "400px",
                overflow: "hidden",
                paddingTop: "80px",
              }}
            >
              <ScrollBox
                style={{
                  // border: "2px solid #eeeeee",
                  backgroundColor: "#222831",
                  y: yone,
                  scale: scaleone,
                }}
              >
                Optimized for team projects,
              </ScrollBox>
              <ScrollBox
                style={{
                  // border: "2px solid #eeeeee",
                  backgroundColor: "#222831",
                  y: ytwo,
                  scale: scaletwo,
                }}
              >
                Aim for continuous learning,
              </ScrollBox>
              <ScrollBox
                style={{
                  // border: "2px solid #eeeeee",
                  backgroundColor: "#222831",
                  scale: scalethree,
                  y: ythree,
                }}
              >
                Hello, I'm MoJin!
              </ScrollBox>
            </div>
          </ScrollBoxWrapper>
        </FillBox>
        <Box style={{ position: "absolute", bottom: "55px" }}>
          <Mouse>
            <MouseBall />
          </Mouse>
        </Box>
      </Box>
    </Wrapper>
  );
}

export default Who;
