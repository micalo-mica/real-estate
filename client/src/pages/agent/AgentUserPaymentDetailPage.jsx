import { Link } from "react-router-dom";
import AgentUserPaymentDetail from "../../components/forAgent/AgentUserPaymentDetail";
import styled from "styled-components";
import Button from "../../components/in/Button";

const A = styled.div`
  padding: 1.5rem;
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
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
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

const AgentUserPaymentDetailPage = () => {
  return (
    <A>
      <AgentUserPaymentDetail />
      <Link to="/agentSinglePropertyDetail/1">
        <BtnContainer>
          <Button text="back" />
        </BtnContainer>
      </Link>
    </A>
  );
};

export default AgentUserPaymentDetailPage;
