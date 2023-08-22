import styled from "styled-components";
import { useState } from "react";
import ProfileSidebar from "../components/forProfile/ProfileSidebar";
import ProfileContent from "../components/forProfile/ProfileContent";

const Container = styled.div`
  display: flex;
  gap: 1rem;
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

const Left = styled.div`
  flex: 1;
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
    flex: 0;
    width: 70px;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Right = styled.div`
  flex: 3;
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
    flex: 0;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const ProfilePage = () => {
  const [active, setActive] = useState(1);
  return (
    <Container>
      <Left>
        <ProfileSidebar active={active} setActive={setActive} />
      </Left>
      <Right>
        <ProfileContent active={active} />
      </Right>
    </Container>
  );
};

export default ProfilePage;
