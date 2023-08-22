import styled from "styled-components";
import { useState } from "react";
import PropertyForAgentDashB from "../../components/forAgent/PropertyForAgentDashB";
import { CiLocationOn } from "react-icons/ci";
import { VscPass } from "react-icons/VSC";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/in/Button";

const A = styled.div`
  /* margin-top: 5.5rem; */
  /* background-color: ${({ theme }) => theme.colors.white}; */
  color: ${({ theme }) => theme.colors.blue2};
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
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem;
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
    align-items: center;
    margin-left: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Top = styled.div`
  display: flex;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  padding: 1rem;
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
    flex-direction: column;
    align-items: center;
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
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 0.5rem;
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
const Image = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 0.3rem;
  overflow: hidden;
`;

const Detail = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
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

const ForText = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`;
const PriceText = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`;

const FAndPContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 3rem; */
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
const TARoomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 3rem; */
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    flex-direction: column;
    row-gap: 0.5rem;
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

const PType = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
`;
const PName = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
`;

const LContainer = styled.div`
  display: flex;
  gap: 0.1rem;
`;
const LocationText = styled.span`
  display: flex;
  gap: 0.6rem;
`;

const Good = styled(VscPass)``;
const Bad = styled(MdOutlineCancel)``;

const AminitiContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;
const Aminiti = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-size: 1rem;
  font-weight: 400;
`;
const AminitiText = styled.span``;
const Bold = styled.b`
  font-size: 1rem;
  font-weight: 600;
`;
const Text = styled.h4`
  font-size: 1rem;
  font-weight: 400;
`;

const DescText = styled.p`
  font-size: 0.9rem;
  font-weight: 200;
`;

const LocationIcon = styled(CiLocationOn)`
  margin-left: 2px;
  margin-right: 3px;
`;

const Down = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
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
const ListOfTenantsTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
`;
const Tenants = styled.div`
  display: flex;
  flex-direction: column;
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
const Tenant = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.whitesmoke};
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
    padding: 0.4rem 0.1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const TenantTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    display: ${({ no }) => (no ? "none" : "flex")};
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
const TenantTextLeft = styled.span`
  font-size: 1rem;
  font-weight: 200;
`;
const TenantTextRight = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AgentSinglePropertyDetailPage = () => {
  return (
    <A>
      <Container>
        <Top>
          <Left>
            <Image src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600" />
          </Left>
          <Right>
            {/* i will add delete and update button bellow  */}
            <Detail>Details</Detail>
            <FAndPContainer>
              <ForText>For sale</ForText>
              <PriceText>$30000</PriceText>
            </FAndPContainer>
            <PType>flat</PType>
            <PName>California lodge</PName>
            <TARoomContainer>
              <Text>
                Total rooms: <Bold>50</Bold>
              </Text>
              <Text>
                Available rooms: <Bold>10</Bold>
              </Text>
              <Text>
                Rating: <Bold>3/5</Bold>
              </Text>
            </TARoomContainer>
            <LContainer>
              <LocationIcon />
              <LocationText>
                Lorem ipsum dolor sit amet consectetur
              </LocationText>
            </LContainer>
            <DescText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis est earum inventore nisi quia dicta ex aperiam
              perferendis recusandae voluptates?
            </DescText>
            <AminitiContainer>
              <Aminiti>
                <AminitiText>Water</AminitiText>
                <Good />
              </Aminiti>
              <Aminiti>
                <AminitiText>Water</AminitiText>
                <Good />
              </Aminiti>
            </AminitiContainer>
          </Right>
        </Top>
        <Down>
          <ListOfTenantsTitle>Tenants</ListOfTenantsTitle>
          <Tenants>
            {/* a tenant detail start */}
            {/* <Link to="userPaymentDetail/1234"> */}
            <Link to="/agentUserPaymentDetail/1">
              <Tenant>
                <TenantTextContainer>
                  <TenantTextLeft>Name:</TenantTextLeft>
                  <TenantTextRight>Nwafor Chukwuka</TenantTextRight>
                </TenantTextContainer>
                <TenantTextContainer no="no">
                  <TenantTextLeft>UserName:</TenantTextLeft>
                  <TenantTextRight>Micalo</TenantTextRight>
                </TenantTextContainer>
                <TenantTextContainer>
                  <TenantTextLeft>Room:</TenantTextLeft>
                  <TenantTextRight>27</TenantTextRight>
                </TenantTextContainer>
                <TenantTextContainer>
                  <TenantTextLeft>Payed:</TenantTextLeft>
                  <Good />
                </TenantTextContainer>
              </Tenant>
            </Link>
            {/* a tenant detail end */}
            {/* a tenant detail start */}
            <Link to="/agentUserPaymentDetail/1">
              <Tenant>
                <TenantTextContainer>
                  <TenantTextLeft>Name:</TenantTextLeft>
                  <TenantTextRight>Nwafor Chukwuka</TenantTextRight>
                </TenantTextContainer>
                <TenantTextContainer no="no">
                  <TenantTextLeft>UserName:</TenantTextLeft>
                  <TenantTextRight>Micalo</TenantTextRight>
                </TenantTextContainer>
                <TenantTextContainer>
                  <TenantTextLeft>Room:</TenantTextLeft>
                  <TenantTextRight>27</TenantTextRight>
                </TenantTextContainer>
                <TenantTextContainer>
                  <TenantTextLeft>Payed:</TenantTextLeft>
                  <Good />
                </TenantTextContainer>
              </Tenant>
            </Link>
            {/* a tenant detail end */}
          </Tenants>
        </Down>
      </Container>
      <ButtonContainer>
        <Link to="/agentDashboard/allProperty">
          <Button text="back" />
        </Link>
      </ButtonContainer>
    </A>
  );
};

export default AgentSinglePropertyDetailPage;
