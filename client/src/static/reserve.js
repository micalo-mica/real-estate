import styled from "styled-components";
import { useState } from "react";
import Slide from "../components/Slide";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import PropertyMoreInfo from "../components/forPropertyDetail/PropertyMoreInfo";
import Reserve from "../components/forPropertyDetail/Reserve";

const P = styled.div`
  margin-top: 5rem;
  padding: 1.5rem;
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
const Container = styled.div`
  padding-bottom: 5rem;
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

const ImgAndDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  /* to center the right side i added the code */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  padding: 1rem;
`;
const HouseType = styled.h4`
  font-size: 1.9rem;
  font-weight: bold;
`;
const HouseName = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
`;
const HouseDesc = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
  font-weight: 500;
`;
const HouseLocationContainer = styled.div`
  color: ${({ theme }) => theme.colors.orange};
  display: flex;
  gap: 0.2rem;
  font-size: 1rem;
  font-weight: 500;
`;
const HouseLocation = styled.span`
  color: ${({ theme }) => theme.colors.blue2};
`;
const HousePrice = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1rem;
  font-weight: bold;
`;
const HouseRatingAndContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HouseLikesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
const HouseRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
const LikeText = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
`;
const SterText = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
`;

const LocationIcon = styled(CiLocationOn)`
  color: ${({ theme }) => theme.colors.orange};
`;
const LikeIcon = styled(AiOutlineHeart)`
  color: ${({ theme }) => theme.colors.orange};
`;
const StarIcon = styled(AiOutlineStar)`
  color: ${({ theme }) => theme.colors.orange};
`;

// =======More info======

const MoreInfoContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 1rem;
  /* padding: 2rem;
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38); */
  /* padding: 1rem; */
`;
const MoreInfoRight = styled.div`
  flex: 3;
  /* display did not work out here */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* padding: 2rem; */
  /* max-height: 15rem; */
  /* margin-top: 3rem;
  padding: 0.6rem; */
  /* -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38); */
`;
const MoreInfoLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38); */
`;

// ============pay===========

const PayAndGetContainer = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  /* margin: 1rem; */
  /* flex: 1; */
  /* max-height: 15rem; */
  /* padding: 0.6rem;  */
  /* -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38); */
  /* padding: 1rem; */
`;

const Top = styled.div`
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
`;
const ChooseRoomBtn = styled.button`
  border: none;
  padding: 0.8rem 3rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.btn};
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.2rem;
`;

const Down = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  background-color: #ebf3ff;
`;
const ChooseRoomText = styled.h4`
  font-size: 1rem;
`;
const Conditions = styled.p`
  /* line-height: 1rem; */
  font-size: 1rem;
  font-weight: 5000;
`;
const PaymentBtn = styled.button`
  border: none;
  padding: 0.8rem 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.btn};
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.2rem;
`;
const PaymentAmount = styled.h2`
  font-size: 1rem;
  font-weight: 300;
`;
const Bod = styled.b`
  color: ${({ theme }) => theme.colors.orange};
`;

const PropertyDetailPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  ];

  return (
    <P>
      <Container>
        <ImgAndDetails>
          <Left>
            <Slide images={images} />
          </Left>
          <Right>
            <RightContainer>
              <HouseType>Self con</HouseType>
              <HouseName>California lodge</HouseName>
              <HouseDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, veniam placeat quas nisi saepe fugit tempora minima at
                in expedita. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Pariatur, veniam placeat quas nisi saepe fugit tempora
                minima at in expedita.
              </HouseDesc>
              <HouseLocationContainer>
                <LocationIcon />
                <HouseLocation>Enugu</HouseLocation>
              </HouseLocationContainer>
              <HousePrice>19900</HousePrice>
              <HouseRatingAndContainer>
                <HouseLikesContainer>
                  <LikeIcon />
                  <LikeText>124</LikeText>
                </HouseLikesContainer>
                <HouseRatingContainer>
                  <SterText>5</SterText>
                  <StarIcon />
                </HouseRatingContainer>
              </HouseRatingAndContainer>
            </RightContainer>
            {/* seller info */}
          </Right>
        </ImgAndDetails>
        {/* more info container */}
        <MoreInfoContainer>
          <MoreInfoRight>
            <PropertyMoreInfo />
          </MoreInfoRight>
          <MoreInfoLeft>
            <PayAndGetContainer>
              <Top>
                <ChooseRoomBtn onClick={() => setOpenModal(true)}>
                  Choose a Room
                </ChooseRoomBtn>
              </Top>
              <Down>
                <ChooseRoomText>Payment for room 1 2 for 1 year</ChooseRoomText>
                <Conditions>
                  Continue with the payment only if you have agreed with the
                  terms and conditions and to renew your rent{" "}
                </Conditions>
                <PaymentAmount>
                  <Bod>$299900</Bod> for 1 year
                </PaymentAmount>
                <PaymentBtn>Pay and reserve room</PaymentBtn>
              </Down>
            </PayAndGetContainer>
          </MoreInfoLeft>
        </MoreInfoContainer>
        {openModal && <Reserve setOpen={setOpenModal} />}
      </Container>
    </P>
  );
};

export default PropertyDetailPage;
