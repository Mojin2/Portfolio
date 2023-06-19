import { useEffect, useRef } from "react";
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
import {
  motion,
  useAnimate,
  useAnimation,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import ScrollVelocity from "../Components/ScrollVelocity";
import { Button } from "@chakra-ui/react";

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
  background-color: #eeeeee;
  border-radius: 10px;
`;
const Text = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 24px;
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

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll:", latest);
  });
  return (
    <Wrapper ref={refContainer}>
      <Box style={{ height: "400px" }}>
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
      <Box />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Title
          ref={refTitleTwo}
          style={{
            paddingBottom: "10px",
            transform: isInViewTitleTwo ? "none" : "translateY(30px)",
            opacity: isInViewTitleTwo ? 1 : 0,
            transition: "all 0.9s",
          }}
        >
          Many Team Project Experiences
        </Title>
        <FillBox
          ref={refFillTwo}
          style={{
            height: "80%",
            transform: isInViewFillTwo ? "none" : "translateY(30px)",
            opacity: isInViewFillTwo ? 1 : 0,
            transition: "all 1s",
          }}
        ></FillBox>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Title
          ref={refTitleThree}
          style={{
            paddingBottom: "10px",
            transform: isInViewTitleThree ? "none" : "translateY(30px)",
            opacity: isInViewTitleThree ? 1 : 0,
            transition: "all 0.9s",
          }}
        >
          Interest in new Tech & Learning Fast Ability
        </Title>
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
                src="/images/trend2.png"
                width={"900px"}
                height={"100%"}
                style={{
                  borderRadius: "20px",
                  position: "absolute",
                  bottom: "0px",
                  transform: isInViewimgone ? "none" : "translateY(30px)",
                  opacity: isInViewimgone ? 1 : 0,
                  transition: "all 0.9s",
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
                  transition: "all 0.9s",
                }}
              >
                <Button
                  variant={"outline"}
                  colorScheme="teal"
                  borderRadius={"20px"}
                  padding="0px 10px"
                  border="2px"
                  cursor={"initial"}
                  fontSize={"18px"}
                  fontWeight="800"
                >
                  New FrameWorks ∙ Trends
                </Button>
                <div style={{ paddingLeft: "20px", marginTop: "10px" }}>
                  <Text>Always exploring</Text>
                  <Text>new technologies,</Text>
                  <Text>trying to apply</Text>
                  <Text>trendy technologies.</Text>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <img
                  ref={refimgtwo}
                  src="/images/trend3.png"
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
                    transition: "all 0.9s",
                    transitionDelay: "0.8s",
                  }}
                />
                <img
                  ref={refimgthree}
                  src="/images/trend3.png"
                  width={"300"}
                  height={"200"}
                  style={{
                    borderRadius: "20px",
                    bottom: "-400px",
                    position: "absolute",
                    left: "80px",
                    transform: isInViewimgthree ? "none" : "translateY(30px)",
                    opacity: isInViewimgthree ? 1 : 0,
                    transition: "all 0.9s",
                    transitionDelay: "1.2s",
                  }}
                />
              </div>
            </div>
          </div>
        </FillBox>
      </Box>
      <div style={{ width: "70%", margin: "0 auto" }}>
        <ScrollVelocity scrollY={scrollY} baseVelocity={-5}>
          Framer motion
        </ScrollVelocity>
        <ScrollVelocity scrollY={scrollY} baseVelocity={5}>
          Scroll Velocity
        </ScrollVelocity>
      </div>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Title
          ref={refTitleFour}
          style={{
            paddingBottom: "10px",
            transform: isInViewTitleFour ? "none" : "translateY(30px)",
            opacity: isInViewTitleFour ? 1 : 0,
            transition: "all 0.9s",
          }}
        >
          Following the Trends
        </Title>
        <FillBox
          ref={refFillFour}
          style={{
            height: "80%",
            transform: isInViewFillFour ? "none" : "translateY(30px)",
            opacity: isInViewFillFour ? 1 : 0,
            transition: "all 1s",
          }}
        ></FillBox>
      </Box>
    </Wrapper>
  );
}

export default Who;
