import {
  BsFillPersonLinesFill,
  BsPersonCheckFill,
  BsPersonCircle,
} from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FaReact, FaCalendarCheck, FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(motion.div)`
  height: 91%;
  width: 100%;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  width: 100%;
  height: 100%;
`;
//#222831;
//#393e46;
const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: #393e46;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerCircle = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  /* background-color: #00adb5; */
  background-color: #457b9d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
`;
const SvgWrapper = styled.div``;
const Box = styled.div`
  background-color: #1d3557;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover {
    /* background-color: #00adb5; */
    transition-duration: 1s;
  }
  :hover {
    ${InnerCircle} {
      background-color: #222831;
      color: #457b9d;
    }
    ${SvgWrapper} {
      transform: rotateY(360deg);
      transition-duration: 0.65s;
    }
  }
  cursor: pointer;
`;
const TextWrapper = styled.div`
  color: whitesmoke;
  font-size: 32px;
  font-family: var(--font-googleCarterOne);
`;
function StartMenu() {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      <Wrapper>
        <Grid>
          <Box onClick={() => navigate("/who")}>
            <Circle>
              <InnerCircle>
                <SvgWrapper>
                  <BsFillPersonLinesFill />
                </SvgWrapper>
              </InnerCircle>
            </Circle>
            <TextWrapper>WHO AM I</TextWrapper>
          </Box>
          <Box onClick={() => navigate("/works")}>
            <Circle>
              <InnerCircle>
                <SvgWrapper>
                  <MdWork />
                </SvgWrapper>
              </InnerCircle>
            </Circle>
            <TextWrapper>MY WORKS</TextWrapper>
          </Box>
          <Box
            onClick={() => navigate("/vision")}
            style={{ borderBottomLeftRadius: "40px" }}
          >
            <Circle>
              <InnerCircle>
                <SvgWrapper>
                  <FaCalendarCheck />
                </SvgWrapper>
              </InnerCircle>
            </Circle>
            <TextWrapper>MY VISION</TextWrapper>
          </Box>
          <Box
            onClick={() => navigate("/more")}
            style={{ borderBottomRightRadius: "40px" }}
          >
            <Circle>
              <InnerCircle>
                <SvgWrapper>
                  <FaSearch />
                </SvgWrapper>
              </InnerCircle>
            </Circle>
            <TextWrapper>MORE DETAILS</TextWrapper>
          </Box>
        </Grid>
      </Wrapper>
    </AnimatePresence>
  );
}

export default StartMenu;
