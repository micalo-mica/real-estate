import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;

const Select = styled.select`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  height: 2.5rem;
  /* width: 25rem; */
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.blue3};
  &:focus {
    outline: none;
  }
`;
const Option = styled.option``;

const SelectInput = ({ categoryInput }) => {
  return (
    <InputContainer>
      <Label>Category</Label>
      <Select>
        <Option value="Choose a category">Choose a category</Option>
        {categoryInput &&
          categoryInput.map((c) => {
            return (
              <Option key={c.id} value={c.cat}>
                {c.cat}
              </Option>
            );
          })}
      </Select>
    </InputContainer>
  );
};

export default SelectInput;
