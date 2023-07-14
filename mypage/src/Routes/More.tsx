import { BsFacebook, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const IconText = styled.div`
  color: black;
  font-weight: 500;
  font-size: 26px;
  background-color: #eeeeee;
  border-radius: 50px;
  padding: 5px 15px;
  position: absolute;
  top: 0px;
  opacity: 0;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  ::before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    background: #eeeeee;
    bottom: -8px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;
const IconWrapper = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover ${IconText} {
    opacity: 1;
    pointer-events: auto;
    top: -80px;
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
    background-color: ${(props) => props.bg};
    color: #eeeeee;
  }
  &:hover ${IconText}::before {
    background-color: ${(props) => props.bg};
  }
`;
const IconImage = styled.div<{ bg: string }>`
  font-size: 64px;
  background-color: #eeeeee;
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  z-index: 2;
  position: relative;
  :hover {
    background-color: ${(props) => props.bg};
    color: #eeeeee;
  }
`;

function More() {
  return (
    <Wrapper>
      <IconContainer>
        <IconWrapper bg="#3B5999">
          <IconText>Facebook</IconText>
          <IconImage bg="#3B5999" onClick={() => alert("Sorry I'm not ready")}>
            <BsFacebook />
          </IconImage>
        </IconWrapper>
        <IconWrapper bg="#e1306c">
          <IconText>Instagram</IconText>
          <Link to="https://www.instagram.com/wlsrbbb">
            <IconImage bg="#e1306c">
              <BsInstagram />
            </IconImage>
          </Link>
        </IconWrapper>
        <IconWrapper bg="#333">
          <IconText>Github</IconText>
          <Link to="https://github.com/Mojin2">
            <IconImage bg="#333">
              <BsGithub />
            </IconImage>
          </Link>
        </IconWrapper>
        <IconWrapper bg="red">
          <IconText>Youtube</IconText>
          <IconImage bg="red" onClick={() => alert("Sorry I'm not ready")}>
            <BsYoutube />
          </IconImage>
        </IconWrapper>
      </IconContainer>
    </Wrapper>
  );
}

export default More;
