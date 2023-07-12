import { Input } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { WorkProps, worksState } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Title = styled.div`
  margin-bottom: 10px;
  font-size: 32px;
`;
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputForm = styled.input`
  margin-bottom: 10px;
`;
const CreateButton = styled.button`
  border: 2px solid black;
`;

function WorksInputForm() {
  const { register, handleSubmit, setValue } = useForm<WorkProps>();
  const [works, setWorks] = useRecoilState(worksState);
  const onValid = (data: WorkProps) => {
    setWorks((cur) => [
      ...cur,
      {
        id: String(parseInt(max) + 1),
        title: data.title,
        content: data.content,
      },
    ]);
    setValue("id", "");
    setValue("title", "");
    setValue("content", "");
  };
  let max = works[works.length - 1].id;
  useEffect(() => {
    max = works[works.length - 1].id;
    console.log(works);
  }, [works]);
  return (
    <Wrapper>
      <Title>Create Work</Title>
      <FormWrapper onSubmit={handleSubmit(onValid)}>
        <InputForm {...register("title")} placeholder="Write a title" />
        <InputForm {...register("content")} placeholder="Write a Detail" />
        <CreateButton>Add</CreateButton>
      </FormWrapper>
    </Wrapper>
  );
}

export default WorksInputForm;
