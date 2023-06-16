import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  color: #eeeeee;
  font-size: 95px;
  line-height: 0.85;
  font-family: var(--font-googleCarterOne), cursive;
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
        <StartButton onClick={() => navigate("/menu")}>Get Start!</StartButton>
      </LeftWrapper>
      <RightWrapper></RightWrapper>
    </LowerWrapper>
  );
}

export default Default;
