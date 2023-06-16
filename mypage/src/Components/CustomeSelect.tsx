import { useState } from "react";
import styled from "styled-components";

const SelectBox = styled.div`
  position: relative;
  width: 110px;
  padding: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    color: #393e46;
    font-size: 20px;
    font-weight: 700;
  }
`;
const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
  text-align: center;
`;
const SelectOptions = styled.ul<{ show: boolean }>`
  position: absolute;
  list-style: none;
  top: 30px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 50px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;
const Option = styled.li`
  font-size: 14px;
  font-weight: 600;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

const CustomSelect = () => {
  const [currentValue, setCurrentValue] = useState("🇬🇧 English");
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    const {
      currentTarget: { innerHTML },
    } = event;
    setCurrentValue(innerHTML);
    console.log(innerHTML);
  };

  return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        <Option value="Engish" onClick={handleOnChangeSelectValue}>
          🇬🇧 English
        </Option>
        <Option value="한국어" onClick={handleOnChangeSelectValue}>
          🇰🇷 한국어
        </Option>
      </SelectOptions>
    </SelectBox>
  );
};

export default CustomSelect;
