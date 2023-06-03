import styled from "styled-components";
import ToggleButton from "../Components/ToggleButton";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: linear-gradient(360deg, #30cfd0, #330867);
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
  color: whitesmoke;
  font-size: 101px;
  line-height: 0.8;
`;

function Home() {
  return (
    <Wrapper>
      <TextWrapper>
        <Text style={{ fontWeight: "500", fontSize: "80px" }}>WHAT'S</Text>
        <Text style={{ fontWeight: "500", fontSize: "90px" }}>IN MY</Text>
        <Text style={{ fontWeight: "700", fontSize: "100px" }}>CAREER</Text>
        <Text style={{ fontWeight: "700", fontSize: "100px" }}>2023</Text>
      </TextWrapper>
      <ToggleButton />
    </Wrapper>
  );
}

export default Home;
