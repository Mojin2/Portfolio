import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { clickedstate, navimenustate, themeModestate } from "../atoms";
import ToggleButton from "../Components/ToggleButton";
import { darkTheme, lightTheme } from "../theme";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: ${(props) => props.theme.bgColor}; */
  background: tomato;
  transition-duration: 0.5s;
  display: flex;
  flex-direction: row;
  position: absolute;
`;
const Forest = styled.div`
  position: absolute;
  /* background-image: url("/images/forest2.png"); */
  background-size: contain;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 200px;
`;
const Backgroud = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-45deg, #1d2c41, #b7c9d9, #4fa3f0, #22131a);
  background-repeat: no-repeat;
  background-size: 400% 400%;
  animation: backgroundChange 20s ease-in-out infinite;
  z-index: -1;
  @keyframes backgroundChange {
    0% {
      background-position: 0 50%;
    }
    90% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;
const LeftWrapper = styled.div`
  z-index: 1;
`;
const RightWrapper = styled.div`
  z-index: 1;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 600px;
  padding-top: 250px;
  margin-left: 250px;
`;
const Text = styled.div`
  /* color: ${(props) => props.theme.textColor}; */
  color: white;
  font-size: 101px;
  line-height: 0.85;
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
  margin-top: 210px;
`;
const NaviMenu = styled.div<{ bg: string; isDragging: boolean }>`
  font-size: 48px;
  font-weight: 800;
  color: ghostwhite;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 20px;
  width: 450px;
  background: ${(props) =>
    props.bg === "WHO AM I"
      ? "linear-gradient(90deg,#f093fb,#f5576c)"
      : props.bg === "MY WORKS"
      ? "linear-gradient(90deg,#f6d365,#fda085)"
      : props.bg === "MY VISION"
      ? "linear-gradient(90deg,#5ee7de,#4facfe)"
      : props.bg === "MORE DETAILS"
      ? "linear-gradient(90deg,#38f9d7,#43e97b)"
      : null};
  margin-bottom: 10px;
  border-radius: 20px;
  cursor: pointer;
`;

function Home() {
  const clicked = useRecoilValue(clickedstate);
  const setThemeMode = useSetRecoilState(themeModestate);
  const navigate = useNavigate();
  const [navimenus, setNavimenus] = useRecoilState(navimenustate);
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
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Wrapper>
        <Backgroud />
        <LeftWrapper>
          <TextWrapper>
            <Text style={{ fontWeight: "500", fontSize: "80px" }}>WHAT'S</Text>
            <Text style={{ fontWeight: "500", fontSize: "90px" }}>IN MY</Text>
            <Text style={{ fontWeight: "700", fontSize: "100px" }}>CAREER</Text>
            <Text style={{ fontWeight: "700", fontSize: "100px" }}>2023</Text>
          </TextWrapper>
          {/* <ToggleButtonWrapper>
            <ToggleButton Id="Circle1" />
          </ToggleButtonWrapper> */}
        </LeftWrapper>
        <RightWrapper>
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
        </RightWrapper>
      </Wrapper>
      <Forest />
    </div>
  );
}

export default Home;
