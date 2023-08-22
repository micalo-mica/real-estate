import styled from "styled-components";
import { useState } from "react";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { FaCoins } from "react-icons/fa";
import { BsBuildingDown } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

const P = styled.div`
  color: ${({ theme }) => theme.colors.blue2};
  height: calc(100vh - 5rem);
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
  margin-top: 5rem;
  position: sticky;
  top: 0rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
  gap: 4rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
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
    padding: 1.5rem 0.8rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const UserIcon = styled(AiOutlineUser)``;
const RefundIcon = styled(HiOutlineReceiptRefund)``;
const CoinIcon = styled(FaCoins)``;
const CountDownIcon = styled(BsBuildingDown)``;
const LogoutIcon = styled(AiOutlineLogout)``;

const SmallContainer = styled.div`
  color: ${(prop) => prop.active === Number(prop.no) && "orange"};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: ${(prop) => (prop.active === Number(prop.no) ? 1.2 : 1)}rem;
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
const Text = styled.span`
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
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const ProfileSidebar = ({ active, setActive }) => {
  const navigate = useNavigate();

  const openMessage = () => {
    setActive(4);
    navigate("/inbox");
  };

  return (
    <P>
      <Container>
        <SmallContainer onClick={() => setActive(1)} active={active} no="1">
          <UserIcon />
          <Text>Profile</Text>
        </SmallContainer>
        <SmallContainer onClick={() => setActive(2)} active={active} no="2">
          <UserIcon />
          <Text>Dispute</Text>
        </SmallContainer>
        <SmallContainer onClick={() => setActive(3)} active={active} no="">
          <CoinIcon />
          <Text>Payments</Text>
        </SmallContainer>
        <SmallContainer onClick={() => setActive(4)} active={active} no="4">
          <CountDownIcon />
          <Text>CountDown</Text>
        </SmallContainer>
        <SmallContainer onClick={() => setActive(5)} active={active} no="5">
          <AiOutlineLogout />
          <Text>Log out</Text>
        </SmallContainer>
      </Container>
    </P>
  );
};

export default ProfileSidebar;
