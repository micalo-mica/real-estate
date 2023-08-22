import styled from "styled-components";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const R = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.418);
  position: fixed;
  top: 0;
  left: 0;
  /* align-items: center;
  justify-content: center; */
  z-index: 9999;
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
const RContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 90%;
  margin-left: auto;
  margin-right: auto;
`;
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  position: relative;
`;
const SelectRoomText = styled.h3`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;
const SelectRoomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
`;
const Left = styled.div``;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const RoomType = styled.h5`
  font-size: 1rem;
  font-weight: 400;
`;
const RoomDetail = styled.p`
  font-size: 1rem;
`;
const RoomMaxPeople = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
`;
const RoomPrice = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
`;
const Right = styled.div``;
const RightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;
const CheckContainer = styled.div``;
const RoomNo = styled.h6`
  font-size: 0.8rem;
`;
const InputCheckeBox = styled.input``;
const CloseIcon = styled(MdOutlineCancel)`
  color: ${({ theme }) => theme.colors.orange};
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
`;

// i will need room id as a prop
const Reserve = ({ setOpen }) => {
  return (
    <R>
      <RContainer>
        <Container>
          <CloseIcon onClick={() => setOpen(false)} />
          <SelectRoomText>Select your room</SelectRoomText>
          <SelectRoomContainer>
            <Left>
              <LeftContainer>
                <RoomType>Family room</RoomType>
                <RoomDetail>Very good room for family people</RoomDetail>
                <RoomMaxPeople>Max people is 2</RoomMaxPeople>
                <RoomPrice>$1233300</RoomPrice>
              </LeftContainer>
            </Left>
            <Right>
              <RightContainer>
                <CheckContainer>
                  <RoomNo>30</RoomNo>
                  <InputCheckeBox
                    type="checkbox"
                    name="bathroom"
                    id="bathroom"
                    //   checked={bathroom}
                  />
                </CheckContainer>
                <CheckContainer>
                  <RoomNo>30</RoomNo>
                  <InputCheckeBox
                    type="checkbox"
                    name="bathroom"
                    id="bathroom"
                    //   checked={bathroom}
                  />
                </CheckContainer>
              </RightContainer>
            </Right>
          </SelectRoomContainer>
        </Container>
      </RContainer>
    </R>
  );
};

export default Reserve;
