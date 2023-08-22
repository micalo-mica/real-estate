import styled from "styled-components";
import { useState } from "react";
import PropertyForAgentDashB from "../../components/forAgent/PropertyForAgentDashB";

const D = styled.div`
  width: 100%;
  padding-top: 1rem;
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
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.widthLg};
  margin: 0px auto;
  padding: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    max-width: ${({ theme }) => theme.sizes.widthTablet};
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    max-width: ${({ theme }) => theme.sizes.widthPhone};
    padding: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const SmallBoxs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const SmallBox = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 22rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    width: 18rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: 19rem;
    /* gap: 1rem; */
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    /* width: 21.5rem; */
    width: 99%;
    padding: 1rem;
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    /* width: 19.3rem; */
  }
`;
const BoxText = styled.h4`
  color: ${({ theme }) => theme.colors.blue2};
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0.3rem;
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
const BoxNo = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
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
const BoxSmallText = styled.h2`
  font-size: 0.9rem;
  font-weight: 200;
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
const LatestPayedProperty = styled.div`
  padding: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    padding: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    padding: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    padding: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Property = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  /* place-items: center; */
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1rem;
    column-gap: 0.4rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1rem;
    column-gap: 0.4rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;
    column-gap: 0.4rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;
    column-gap: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const LatestPayedPropertyText = styled.h4`
  font-size: 1rem;
  margin-bottom: 1.5rem;
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
    /* padding-top: 1.5rem; */
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const DashboardPage = () => {
  return (
    <D>
      <Container>
        <SmallBoxs>
          <SmallBox>
            {/* i will put icon later */}
            <BoxText>Account Balance</BoxText>
            <BoxNo>$129564.86</BoxNo>
            <BoxSmallText>withdraw Money</BoxSmallText>
          </SmallBox>
          <SmallBox>
            {/* i will put icon later */}
            <BoxText>Last Withdraw</BoxText>
            <BoxNo>$129570</BoxNo>
            <BoxSmallText>withdraw Money</BoxSmallText>
          </SmallBox>
          <SmallBox>
            {/* i will put icon later */}
            <BoxText>All Property Listed</BoxText>
            <BoxNo>10</BoxNo>
            <BoxSmallText>List Now</BoxSmallText>
          </SmallBox>
          <SmallBox>
            {/* i will put icon later */}
            <BoxText>Account Balance</BoxText>
            <BoxNo>$129564.86</BoxNo>
            <BoxSmallText>withdraw Money</BoxSmallText>
          </SmallBox>
          <SmallBox>
            {/* i will put icon later */}
            <BoxText>Account Balance</BoxText>
            <BoxNo>$129564.86</BoxNo>
            <BoxSmallText>withdraw Money</BoxSmallText>
          </SmallBox>
          <SmallBox>
            {/* i will put icon later */}
            <BoxText>Account Balance</BoxText>
            <BoxNo>$129564.86</BoxNo>
            <BoxSmallText>withdraw Money</BoxSmallText>
          </SmallBox>
        </SmallBoxs>
        <LatestPayedProperty>
          <LatestPayedPropertyText>Latest Payment</LatestPayedPropertyText>
          <Property>
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
            <PropertyForAgentDashB />
          </Property>
        </LatestPayedProperty>
      </Container>
    </D>
  );
};

export default DashboardPage;
