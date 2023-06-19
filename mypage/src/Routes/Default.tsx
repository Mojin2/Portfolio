import { Button } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import CustomAccordion from "../Components/CustomAccordion";
import CustomButton from "../Components/CustomAccordion";

const LowerWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: row;
`;
const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  color: #eeeeee;
  font-size: 95px;
  line-height: 0.85;
  font-weight: 800;
  /* font-family: var(--font-googleCarterOne), cursive; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
function Default() {
  const navigate = useNavigate();
  return (
    <LowerWrapper>
      <LeftWrapper>
        <TextWrapper>
          <Text>WHAT'S</Text>
          <Text>IN MY</Text>
          <Text>CAREER</Text>
          <Text>2023</Text>
        </TextWrapper>
      </LeftWrapper>
      <RightWrapper>
        <CustomAccordion />
      </RightWrapper>
    </LowerWrapper>
  );
}

export default Default;
