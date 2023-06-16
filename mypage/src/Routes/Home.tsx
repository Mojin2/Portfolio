import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useMatch,
  useNavigate,
} from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  clickedstate,
  menuclickedstate,
  navimenustate,
  themeModestate,
} from "../atoms";
import ToggleButton from "../Components/ToggleButton";
import { darkTheme, lightTheme } from "../theme";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import Navbar from "../Components/Navbar";
import Default from "./Default";
import Who from "./Who";
import Vision from "./Vision";
import Works from "./Works";
import More from "./More";
import StartMenu from "./StartMenu";

const Container = styled.div<{ clicked: boolean }>`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => (!props.clicked ? "#eeeeee" : "#393e46")};
  transition-duration: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div<{ clicked: boolean }>`
  width: 90vw;
  height: 90vh;
  /* background: ${(props) => props.theme.bgColor}; */
  background: #222831;
  transition-duration: 0.5s;
  display: flex;
  flex-direction: row;
  position: absolute;
  margin: 10px 10px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.clicked ? "translateX(-200px)" : null)};
  scale: ${(props) => (props.clicked ? "0.8" : null)};
`;
const LowerWrapper = styled.div`
  position: relative;
  width: 97%;
  height: 500px;
  margin: 0 auto;
  margin-bottom: 10%;
`;
const LeftWrapper = styled.div``;
const RightWrapper = styled.div``;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 300px;
  margin-top: 150px;
  margin-left: 20px;
`;
const Text = styled.div`
  /* color: ${(props) => props.theme.textColor}; */
  color: #eeeeee;
  font-size: 95px;
  line-height: 0.85;
  font-family: var(--font-googleCarterOne), cursive;
  /* text-shadow: -4px 0 #000, 0 4px #000, 4px 0 #000, 0 -4px #000; */
`;
const ToggleButtonWrapper = styled.div`
  margin-top: 100px;
  margin-left: 250px;
`;
interface INaviWrapperProps {
  isDragginOver: boolean;
  isDraggingFromThis: boolean;
}
const NaviWrapper = styled.div<INaviWrapperProps>`
  margin-top: 0px;
`;
const NaviMenu = styled.div<{ bg: string; isDragging: boolean }>`
  font-size: 24px;
  font-weight: 800;
  color: ghostwhite;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 20px;
  width: 250px;
  /* background: ${(props) =>
    props.bg === "WHO AM I"
      ? "linear-gradient(90deg,#f093fb,#f5576c)"
      : props.bg === "MY WORKS"
      ? "linear-gradient(90deg,#f6d365,#fda085)"
      : props.bg === "MY VISION"
      ? "linear-gradient(90deg,#5ee7de,#4facfe)"
      : props.bg === "MORE DETAILS"
      ? "linear-gradient(90deg,#38f9d7,#43e97b)"
      : null}; */
  background: #00adb5;
  margin-bottom: 10px;
  border-radius: 20px;
  cursor: pointer;
`;
const StartButton = styled.div`
  cursor: pointer;
  width: 160px;
  height: 60px;
  border-radius: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 24px;
  font-family: var(--font-googleCarterOne);
`;
const HiddenMenu = styled.div<{ clicked: boolean }>`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 3%;
  transition-delay: ${(props) => (props.clicked ? "0.15s" : null)};
  justify-content: center;
  align-items: center;
  transition-duration: ${(props) => (props.clicked ? "1s" : null)};

  opacity: ${(props) => (props.clicked ? 1 : 0)};
`;
const HiddenMenuList = styled.div`
  font-size: 36px;
  font-family: var(--font-googleCarterOne);
`;

function Home() {
  const clicked = useRecoilValue(clickedstate);
  const setThemeMode = useSetRecoilState(themeModestate);
  const navigate = useNavigate();
  const [navimenus, setNavimenus] = useRecoilState(navimenustate);
  const menuclicked = useRecoilValue(menuclickedstate);
  useEffect(() => {
    !clicked ? setThemeMode(lightTheme) : setThemeMode(darkTheme);
  }, [clicked]);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
      setNavimenus((prev) => {
        const prevCopy = [...prev];
        prevCopy.splice(source.index, 1);
        prevCopy.splice(destination.index, 0, draggableId);
        return [...prevCopy];
      });
    }
  };
  const defaultMatch = useMatch("/");
  const whoMatch = useMatch("/who");
  const worksMath = useMatch("/works");
  const visionMath = useMatch("/vision");
  const moreMath = useMatch("/more");
  const menuMath = useMatch("/menu");
  return (
    <Container clicked={menuclicked}>
      <Wrapper clicked={menuclicked}>
        <Navbar />
        {defaultMatch ? (
          <Default />
        ) : whoMatch ? (
          <Who />
        ) : worksMath ? (
          <Works />
        ) : visionMath ? (
          <Vision />
        ) : moreMath ? (
          <More />
        ) : menuMath ? (
          <StartMenu />
        ) : null}
      </Wrapper>
      <HiddenMenu clicked={menuclicked}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(magic, snapshot) => (
              <NaviWrapper
                isDragginOver={snapshot.isDraggingOver}
                isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
                {...magic.droppableProps}
                ref={magic.innerRef}
              >
                {navimenus.map((menu, idx) => (
                  <Draggable key={menu} draggableId={menu} index={idx}>
                    {(magic, snapshot) => (
                      <NaviMenu
                        isDragging={snapshot.isDragging}
                        {...magic.dragHandleProps}
                        {...magic.draggableProps}
                        ref={magic.innerRef}
                        bg={menu}
                        onClick={() =>
                          menu === "WHO AM I"
                            ? navigate("/who")
                            : menu === "MY WORKS"
                            ? navigate("/works")
                            : menu === "MY VISION"
                            ? navigate("/vision")
                            : menu === "MORE DETAILS"
                            ? navigate("/more")
                            : null
                        }
                      >
                        {menu}
                      </NaviMenu>
                    )}
                  </Draggable>
                ))}
                {magic.placeholder}
              </NaviWrapper>
            )}
          </Droppable>
        </DragDropContext>
      </HiddenMenu>
    </Container>
  );
}

export default Home;
