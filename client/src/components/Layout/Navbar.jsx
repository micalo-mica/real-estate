import styled from "styled-components";
// import logo from "../../assets/orentage.png";
import { MdOtherHouses } from "react-icons/md";

const N = styled.div`
  height: 2.4rem;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.colors.blue1};
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.yellow2};
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
`;

const HouseIcon = styled(MdOtherHouses)``;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  /* color: ${({ theme }) => theme.colors.orange}; */
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
`;

const Text = styled.span``;

const Navbar = () => {
  return (
    <N>
      <Container>
        <ButtonContainer>
          <HouseIcon />
          <Text>house</Text>
        </ButtonContainer>
        <ButtonContainer>
          <HouseIcon />
          <Text>house</Text>
        </ButtonContainer>
        <ButtonContainer>
          <HouseIcon />
          <Text>house</Text>
        </ButtonContainer>
        <ButtonContainer>
          <HouseIcon />
          <Text>house</Text>
        </ButtonContainer>
      </Container>
    </N>
  );
};

export default Navbar;
