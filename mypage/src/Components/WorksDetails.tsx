import { Grid, GridItem } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { WorkProps, worksState } from "../atoms";

interface IdProps {
  id: string;
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
const LeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`;
const Title = styled.div`
  font-size: 48px;
  font-weight: 500;
`;
const Content = styled.div`
  font-size: 24px;
`;
const Image = styled.img`
  border-radius: 20px;
  width: 300px;
  height: 300px;
`;
function WorksDetails({ id }: IdProps) {
  const [works, setWorks] = useRecoilState(worksState);
  const findWork = (): WorkProps => {
    let result: WorkProps = { id: "tmp", title: "tmp", content: "tmp" };
    works?.forEach((work) => {
      if (work.id === id) {
        result = { id: work.id, title: work.title, content: work.content };
      }
    });
    return result;
  };
  const work = findWork();
  return (
    <Wrapper>
      <LeftWrapper>
        <Image src={`/images/${work.id}.PNG`} />
      </LeftWrapper>
      <RightWrapper>
        <Title>{work.title}</Title>
        <Content>{work.content}</Content>
      </RightWrapper>
    </Wrapper>
  );
}

export default WorksDetails;
