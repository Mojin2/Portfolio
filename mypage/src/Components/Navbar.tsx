import styled from "styled-components";
import { AiOutlineMenu, AiOutlineGithub, AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import CustomSelect from "./CustomeSelect";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { menuclickedstate } from "../atoms";
const Wrapper = styled.div`
  width: 97%;
  height: 70px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom: 5px solid #393e46;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 7px;
  /* margin-bottom: 10px; */
`;
const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  font-family: var(--font-googleRighteous);

  color: white;
  font-size: 25px;
  cursor: pointer;
`;
const Menu = styled.div`
  color: white;
  margin-left: 10px;
  cursor: pointer;
`;
const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const OptionsUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;
const OptionsLi1 = styled.li`
  color: white;
  :hover {
    scale: 1.1;
    color: orange;
  }
`;
const OptionsLi2 = styled.li`
  color: white;
  :hover {
    scale: 1.1;
    color: red;
  }
`;
const OptionsLi3 = styled.li`
  color: white;
  :hover {
    scale: 1.1;
    color: green;
  }
`;
const OptionsLi4 = styled.li`
  color: white;
  :hover {
    scale: 1.1;
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useRecoilState(menuclickedstate);
  const handleMenu = () => {
    setClicked((prev) => !prev);
  };
  return (
    <Wrapper>
      <Left>
        <Logo onClick={() => navigate("/")}>Mojin2</Logo>
        <Menu>Overview</Menu>
        <Menu>About</Menu>
      </Left>

      <Right>
        <Options>
          <CustomSelect />
          <OptionsUl>
            <OptionsLi1>
              <BsInstagram
                size={32}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </OptionsLi1>
            <OptionsLi2>
              <AiFillYoutube
                size={38}
                style={{ marginLeft: "8px", cursor: "pointer" }}
              />
            </OptionsLi2>
            <OptionsLi3>
              <AiOutlineGithub
                size={32}
                style={{ marginLeft: "8px", cursor: "pointer" }}
              />
            </OptionsLi3>
            <OptionsLi4>
              <AiOutlineMenu
                size={32}
                style={{ marginLeft: "8px", cursor: "pointer" }}
                onClick={handleMenu}
              />
            </OptionsLi4>
          </OptionsUl>
        </Options>
      </Right>
    </Wrapper>
  );
}

export default Navbar;
