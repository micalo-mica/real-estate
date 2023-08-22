import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ G }) => (G ? G : 0.2)}rem;
`;

const Label = styled.label`
  font-size: ${({ FSLabel }) => (FSLabel ? FSLabel : 0.8)}rem;
  font-weight: ${({ FWLabel }) => (FWLabel ? FWLabel : 400)}rem;
  margin-top: 0.5rem;
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

const TextArea = styled.textarea`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  background-color: ${({ BG }) => BG && BG};
  &:focus {
    outline: none;
  }
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
    /* width: 5rem; */
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function TextInput(props) {
  const { label, name, placeholder, FSLabel, FWLabel, Cols, Rows, BG, G } =
    props;
  return (
    <InputContainer G={G}>
      <Label FSLabel={FSLabel} FWLabel={FWLabel}>
        {label}
      </Label>
      <TextArea
        name={name}
        placeholder={placeholder}
        cols={Cols}
        rows={Rows}
        BG={BG}
      ></TextArea>
    </InputContainer>
  );
}

export default TextInput;
