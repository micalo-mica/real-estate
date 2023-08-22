import styled from "styled-components";

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: ${({ theme }) => theme.colors.orange}; */
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const OptionText = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
`;

const InputCheckeBox = styled.input`
  border: none;
  outline: none;
  height: 1.4rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  /* color: ${({ theme }) => theme.colors.orange}; */
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const CheckBox = (props) => {
  const { type, name, value, handleCheck } = props;
  return (
    <Option>
      <OptionText>Personal Meter</OptionText>
      <InputCheckeBox
        type={type}
        name={name}
        id={name}
        checked={name}
        value={value}
        handleCheck={handleCheck}
      />
    </Option>
  );
};

export default CheckBox;
