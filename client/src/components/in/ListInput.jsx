import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ G }) => (G ? G : 0.2)}rem;
`;
const Label = styled.label`
  /* font-size: 0.8rem; */
  /* font-weight: 400; */
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

const Inpu = styled.input`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  height: ${({ H }) => (H ? H : 2)}rem;
  width: ${({ W }) => (W ? W : 25)}rem;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.blue3};
  background-color: ${({ BG }) => BG && BG};
  /* display: ${(prop) => prop.dis}; */
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
    width: 22rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    width: 19rem;
  }
`;

const ListInput = (props) => {
  const {
    label,
    placeholder,
    name,
    type,
    value,
    onChange,
    min,
    max,
    W,
    H,
    G,
    BG,
    FSLabel,
    FWLabel,
  } = props;
  return (
    <InputContainer>
      <Label FSLabel={FSLabel} FWLabel={FWLabel}>
        {label}
      </Label>
      <Inpu
        type={type}
        name={name}
        placeholder={placeholder}
        min={min}
        max={max}
        W={W}
        H={H}
        G={G}
        BG={BG}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default ListInput;
