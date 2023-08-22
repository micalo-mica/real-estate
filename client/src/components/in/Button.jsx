import styled from "styled-components";

const B = styled.button`
  /* padding: ${({ pa }) => (pa ? pa : 1)}rem; */
  border: none;
  /* padding: 0.8rem 3rem; */
  padding-top: ${({ paT }) => (paT ? paT : 0.8)}rem;
  padding-bottom: ${({ paB }) => (paB ? paB : 0.8)}rem;
  padding-left: ${({ paL }) => (paL ? paL : 3)}rem;
  padding-right: ${({ paR }) => (paR ? paR : 3)}rem;
  /* height: ${({ hi }) => hi}rem; */
  width: ${({ wi }) => (wi ? wi : "max-content")};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, col }) => (col ? col : theme.colors.btn)};
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.2rem;
  text-transform: capitalize;
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

const Button = ({ text, type, color, width, height, paT, paB, paL, paR }) => {
  return (
    <B
      type={type}
      col={color}
      wi={width}
      paT={paT}
      paB={paB}
      paL={paL}
      paR={paR}
    >
      {text}
    </B>
  );
};

export default Button;
