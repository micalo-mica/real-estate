import styled from "styled-components";
import pro from "../../assets/cover.jpg";

const A = styled.div`
  color: ${({ theme }) => theme.colors.blue2};
  display: flex;
  justify-content: center;
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
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  padding: 1rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
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
    align-items: center;
    padding: 1rem 0.5rem;
    column-gap: 0;
  }
`;
const HeaderText = styled.h3`
  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
`;
const UserProfileImg = styled.img`
  width: 5rem;
  height: 5rem;
  align-self: center;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
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
    column-gap: 0;
  }
`;
const DetailContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: space-between;
  gap: 7rem;
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
    row-gap: 0.5rem;
    column-gap: 5rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    row-gap: 0.5rem;
    column-gap: 4rem;
  }
`;
const DetailText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
`;
const DetailTextValue = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

const AgentUserPaymentDetail = () => {
  return (
    <A>
      <Container>
        {/* <HeaderText>Detail</HeaderText> */}
        <UserProfileImg src={pro} />
        <DetailsContainer>
          <DetailContainer>
            <DetailText>Name:</DetailText>
            <DetailTextValue>Nwafor Chukwuka</DetailTextValue>
          </DetailContainer>
          {/* single ends */}
          <DetailContainer>
            <DetailText>Email:</DetailText>
            <DetailTextValue>micalo@gmail.com</DetailTextValue>
          </DetailContainer>
          {/* single ends */}
          <DetailContainer>
            <DetailText>Room:</DetailText>
            <DetailTextValue>26</DetailTextValue>
          </DetailContainer>
        </DetailsContainer>
      </Container>
    </A>
  );
};

export default AgentUserPaymentDetail;
