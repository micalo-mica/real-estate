import styled from "styled-components";
import AllAgentPropertyDashB from "../../components/forAgent/AllAgentPropertyDashB";
import { Link } from "react-router-dom";

const A = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    padding: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    padding: 1.5rem 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    /* margin-left: 0.3rem; */
  }
`;
const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.widthLg};
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 0.7rem;
    column-gap: 0.3rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    max-width: ${({ theme }) => theme.sizes.widthTablet};
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    max-width: ${({ theme }) => theme.sizes.widthPhone};
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0.7rem;
    column-gap: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const AllPropertyPage = () => {
  return (
    <A>
      <Container>
        <Link to="/agentSinglePropertyDetail/45">
          <AllAgentPropertyDashB />
        </Link>
        <Link to="/agentSinglePropertyDetail/78">
          <AllAgentPropertyDashB />
        </Link>
        <Link to="/agentSinglePropertyDetail/566">
          <AllAgentPropertyDashB />
        </Link>
        <Link to="/agentSinglePropertyDetail/e3">
          <AllAgentPropertyDashB />
        </Link>
        <Link to="/agentSinglePropertyDetail/466">
          <AllAgentPropertyDashB />
        </Link>
        <Link to="/agentSinglePropertyDetail/6788">
          <AllAgentPropertyDashB />
        </Link>
      </Container>
    </A>
  );
};

export default AllPropertyPage;
