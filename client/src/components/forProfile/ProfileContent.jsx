import styled from "styled-components";
import { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Cover from "../../assets/cover.jpg";
import ListInput from "../in/ListInput";
import Button from "../in/Button";
import AgentUserPaymentDetail from "../forAgent/AgentUserPaymentDetail";

const P = styled.div`
  color: ${({ theme }) => theme.colors.blue2};
  margin-top: 5rem;
  padding-top: 2rem;
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
    padding-top: 6rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Container = styled.div`
  /* background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38); */
  /* display: flex;
  flex-direction: column;
  gap: 2rem; */
  /* padding: 1.5rem; */
  border-radius: 0.5rem;
  /* min-height: 330px; */
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

const ActiveContainer = styled.div`
  display: flex;
  /* i changed below */
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  gap: 4rem;
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

const ProfileContainer = styled.div`
  position: relative;
`;
const ProfileImage = styled.img`
  height: 90px;
  width: 90px;
  object-fit: cover;
  border-radius: 50%;
  /* border-width: 3px; */
  border: 1px solid ${({ theme }) => theme.colors.whitesmoke};
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

const LabelContainer = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.whitesmoke};
  cursor: pointer;
  bottom: 5px;
  right: 5px;
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
const CameraInput = styled.input`
  display: none;
`;
const CameraLabel = styled.label``;
const CameraIcon = styled(AiOutlineCamera)``;

const UserDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  /* width: 90%; */
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    grid-template-columns: 1fr;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    /* width: 100px; */
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const UserDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 90%; */
  gap: 0.3rem;
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
const UserDetailLabel = styled.label``;
const UserDetailInput = styled.input`
  background-color: ${({ theme }) => theme.colors.lightGray};
  height: 2rem;
  width: 100%;
  border: none;
  appearance: none;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  &:focus {
    outline: none;
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
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

// for 2
const ActiveContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 1rem;
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
    width: 18rem;
    max-width: 18rem;
  }
`;
const Text = styled.h4`
  text-align: center;
  margin-bottom: 1rem;
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

const TextArea = styled.textarea`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  &:focus {
    outline: none;
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
    width: 22rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    width: 18rem;
  }
`;

// for active 4
const PaymentContainer = styled.div`
  padding-right: 1rem;
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
// for active 5
const CountDownContainer = styled.div`
  padding-right: 1rem;
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

const ProfileContent = ({ active }) => {
  return (
    <P>
      <Container>
        {/* for profile */}
        {active === 1 && (
          <ActiveContainer>
            <ProfileContainer>
              <ProfileImage src={Cover} />
              <LabelContainer>
                <CameraInput type="file" id="image" />
                <CameraLabel htmlFor="image">
                  <CameraIcon />
                </CameraLabel>
              </LabelContainer>
            </ProfileContainer>
            {/* inputs */}
            <UserDetailsContainer>
              {/* start of one */}
              <UserDetailContainer>
                <ListInput
                  FSLabel="1"
                  FWLabel="700"
                  label="Full Name "
                  placeholder="write your amount here"
                  // BG="whitesmoke"
                  W="26"
                />
              </UserDetailContainer>
              {/* start of one */}
              <UserDetailContainer>
                <ListInput
                  FSLabel="1"
                  FWLabel="700"
                  label="Email "
                  placeholder="micalo@gmail.com"
                  // BG="whitesmoke"
                  W="26"
                />
              </UserDetailContainer>
              {/* start of one */}
              <UserDetailContainer>
                <ListInput
                  FSLabel="1"
                  FWLabel="700"
                  label="Phone contact "
                  placeholder="07066445709"
                  // BG="whitesmoke"
                  W="26"
                />
              </UserDetailContainer>
              {/* start of one */}
              <UserDetailContainer>
                <ListInput
                  FSLabel="1"
                  FWLabel="700"
                  label="city "
                  placeholder="Enugu"
                  // BG="whitesmoke"
                  W="26"
                />
              </UserDetailContainer>
              {/* start of one */}
              <UserDetailContainer>
                <ListInput
                  FSLabel="1"
                  FWLabel="700"
                  label="State "
                  placeholder="Enugu"
                  // BG="whitesmoke"
                  W="26"
                />
              </UserDetailContainer>
              {/* start of one */}
              <UserDetailContainer>
                <ListInput
                  FSLabel="1"
                  FWLabel="700"
                  label="Country "
                  placeholder="Nigeria"
                  // BG="whitesmoke"
                  W="26"
                />
              </UserDetailContainer>
              {/* to be removed after */}
              {/* <UserDetailContainer>
                <UserDetailLabel>Full Name</UserDetailLabel>
                <UserDetailInput />
              </UserDetailContainer> */}
            </UserDetailsContainer>
          </ActiveContainer>
        )}
        {active === 2 && (
          <ActiveContainerInput>
            {/* <ActiveInput> */}
            <Text>Tell us about your problem, we are here for you </Text>
            <TextArea
              name="description"
              placeholder="property description"
              cols="30"
              rows="10"
            ></TextArea>
            <ListInput
              FSLabel="1"
              FWLabel="700"
              label="Amount "
              placeholder="write your amount here"
              // BG="whitesmoke"
              W="4rem"
            />
            <Button text="Submit" />
          </ActiveContainerInput>
        )}
        {active === 3 && (
          <PaymentContainer>
            <AgentUserPaymentDetail />
          </PaymentContainer>
        )}
        {active === 4 && (
          <CountDownContainer>
            <Text>Your payment ends on</Text>
          </CountDownContainer>
        )}
      </Container>
    </P>
  );
};

export default ProfileContent;
