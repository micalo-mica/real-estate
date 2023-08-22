import styled from "styled-components";
import AgentAccountSetUp from "../../components/forAgent/AgentAccountSetUp";

const A = styled.div`
  /* margin-top: 5.5rem; */
  /* background-color: ${({ theme }) => theme.colors.orange}; */
  color: ${({ theme }) => theme.colors.blue2};
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

const AgentAccountSetUpPage = () => {
  return (
    <A>
      <AgentAccountSetUp />
    </A>
  );
};

export default AgentAccountSetUpPage;
