import styled from "styled-components";
import AgentUserPaymentDetail from "../../components/forAgent/AgentUserPaymentDetail";
import Input from "../../components/Input";
import Button from "../../components/in/Button";

const A = styled.div`
  padding: 1rem;
  width: 100%;
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
const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.widthLg};
  margin: 0px auto;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    max-width: ${({ theme }) => theme.sizes.widthTablet};
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    max-width: ${({ theme }) => theme.sizes.widthPhone};
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

// ===============================
const Top = styled.div`
  margin-top: 1rem;
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

// =======================
const Down = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding-top: 1.5rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const ButtonContainer = styled.div`
  margin-top: 1rem;
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

const AgentFindPaymentDetailPage = () => {
  return (
    <A>
      <Container>
        <Top>
          <AgentUserPaymentDetail />
        </Top>
        <Down>
          <InputContainer>
            <Input T="text" P="find a tenant" LN="find your tenant" W="16" />
            <Input T="text" P="payment id" LN="enter payment id" W="16" />
            <Input T="text" P="payment id" LN="enter payment id" W="16" />
            <ButtonContainer>
              <Button text="search" paT="0.5" paB="0.5" />
            </ButtonContainer>
          </InputContainer>
        </Down>
        {/* <Right>
          <AgentUserPaymentDetail />
        </Right> */}
      </Container>
    </A>
  );
};

export default AgentFindPaymentDetailPage;
