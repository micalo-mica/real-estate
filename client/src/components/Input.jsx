import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.2rem; */
  gap: ${({ ga }) => (ga ? ga : 0.2)}rem;
`;
const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;

const Inpu = styled.input`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  /* height: 2rem;
  width: 25rem; */
  height: ${({ hi }) => (hi ? hi : 2)}rem;
  width: ${({ wi }) => (wi ? wi : 25)}rem;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.blue3};
  display: ${(prop) => prop.dis};
  &:focus {
    outline: none;
  }
`;

const Input = (props) => {
  const { T, P, W, H, N, LN, Ga } = props;
  return (
    <InputContainer>
      <Label>{LN}</Label>
      <Inpu type={T} name={N} placeholder={P} wi={W} hi={H} ga={Ga} />
    </InputContainer>
  );
};

export default Input;
