import styled from "styled-components";
import { useState } from "react";
import { VscPass } from "react-icons/VSC";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";

const P = styled.div`
  height: 23rem;
  padding: 1rem;
  /* color: ${({ theme }) => theme.colors.blue2}; */
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
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

// top
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${({ theme }) => theme.colors.blue2};
`;
const InfoTitle = styled.span`
  color: ${(prop) => prop.act === Number(prop.no) && "orange"};
  cursor: pointer;
`;

// down
const Down = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: calc(23rem - 6rem);
  overflow-y: scroll;
  padding: 1rem;
  /* set later */
  /* min-height: 10rem; */
`;
const DownContent = styled.div`
  /* -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38); */
`;

const ActiveContainer = styled.div``;
const ActiveText = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* gap: 2rem; */
  place-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
const FeatureL = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  /* line-height: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem; */
`;
const FeatureR = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1rem;
  font-size: 0.9rem;
`;
const Good = styled(VscPass)``;
const Bad = styled(MdOutlineCancel)``;

// for agent

const AgentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AgentLeft = styled.div`
  flex: 3;
`;
const AgentLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* line-height: 0.5rem; */
`;
const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  gap: 0.5rem;
`;
const Avatar = styled.img``;
const AvatarNRContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const AgentName = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;
const Rating = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
`;
const FromContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;
const FromText = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
`;
const AgentDisc = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  width: 70%;
  font-weight: 400;
`;
const Us = styled(AiOutlineUser)`
  font-size: 2rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.whitesmoke};
`;
// right
const AgentRight = styled.div`
  flex: 1;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const RightTextContainer = styled.div``;
const RightText = styled.span``;

// Rev
const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 0.5rem;
`;
const AvatarReviewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const AvatarReviewImage = styled.img``;
const AvatarReviewNSContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
const AvatarReviewName = styled.p`
  font-size: 1rem;
  font-weight: 5000;
`;
const AvatarReviewState = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;
const ReviewStarContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`;
const Star = styled(BsFillStarFill)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.orange};
`;
const ReviewDesc = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
`;
const ReviewHr = styled.hr`
  height: 0;
  border: 0.5px solid ${({ theme }) => theme.colors.lightGray};
  margin: 30px 0px;
`;

const PropertyMoreInfo = () => {
  const [active, setActive] = useState(1);

  return (
    <P>
      <Container>
        <Top>
          <InfoTitle onClick={() => setActive(1)} act={active} no="1">
            More on
          </InfoTitle>
          <InfoTitle onClick={() => setActive(2)} act={active} no="2">
            Features
          </InfoTitle>
          <InfoTitle onClick={() => setActive(3)} act={active} no="3">
            Review
          </InfoTitle>
          <InfoTitle onClick={() => setActive(4)} act={active} no="4">
            Agent
          </InfoTitle>
        </Top>
        <Down>
          <DownContent>
            {active === 1 ? (
              <ActiveContainer>
                <ActiveText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem, vel? Dignissimos modi atque optio dolorem
                  praesentium blanditiis obcaecati quia fugit! Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Exercitationem,
                  vel? Dignissimos modi atque optio dolorem praesentium
                  blanditiis obcaecati quia fugit! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Exercitationem, vel? Dignissimos
                  modi atque optio dolorem praesentium blanditiis obcaecati quia
                  fugit!
                </ActiveText>
                <ActiveText>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem, vel? Dignissimos modi atque optio dolorem
                  praesentium blanditiis obcaecati quia fugit! Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Exercitationem,
                  vel? Dignissimos modi atque optio dolorem praesentium
                  blanditiis obcaecati quia fugit! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Exercitationem, vel? Dignissimos
                  modi atque optio dolorem praesentium blanditiis obcaecati quia
                  fugit!
                </ActiveText>
              </ActiveContainer>
            ) : null}
            {active === 2 ? (
              <ActiveContainer>
                <FeatureContainer>
                  <FeatureL>Toilet</FeatureL>
                  <FeatureR>
                    <Good />
                  </FeatureR>
                </FeatureContainer>
                <FeatureContainer>
                  <FeatureL>Toilet</FeatureL>
                  <FeatureR>Yes</FeatureR>
                </FeatureContainer>
              </ActiveContainer>
            ) : null}
            {active === 3 ? (
              <ActiveContainer>
                <Review>
                  {/* avatar */}
                  <AvatarReviewContainer>
                    <Us />
                    {/* <AvatarReviewImage /> */}
                    <AvatarReviewNSContainer>
                      <AvatarReviewName>Micalo</AvatarReviewName>
                      <AvatarReviewState>Anambra</AvatarReviewState>
                    </AvatarReviewNSContainer>
                  </AvatarReviewContainer>
                  {/* the desc and star */}
                  <ReviewStarContainer>
                    <Star />
                    <Star />
                    <Star />
                  </ReviewStarContainer>
                  <ReviewDesc>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eveniet modi, dolores eos minima doloremque placeat
                    perspiciatis ducimus officia iure corporis!
                  </ReviewDesc>
                </Review>
                <ReviewHr />
              </ActiveContainer>
            ) : null}
            {active === 4 ? (
              <ActiveContainer>
                <AgentContainer>
                  {/* left */}
                  <AgentLeft>
                    <AgentLeftContainer>
                      <AvatarContainer>
                        <Us />
                        {/* <Avatar src="" /> */}
                        <AvatarNRContainer>
                          <AgentName>Micalo</AgentName>
                          <Rating>(3.5) Ratings</Rating>
                        </AvatarNRContainer>
                      </AvatarContainer>
                      {/* ppppppppp */}
                      <FromContainer>
                        <FromText>Country</FromText>
                        <FromText>Nigeria</FromText>
                      </FromContainer>
                      <FromContainer>
                        <FromText>State</FromText>
                        <FromText>Anamabra</FromText>
                      </FromContainer>
                      <AgentDisc>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Non perspiciatis sint quis doloribus cumque
                        aspernatur minus debitis, at distinctio itaque.
                      </AgentDisc>
                    </AgentLeftContainer>
                  </AgentLeft>
                  {/* right */}
                  <AgentRight>
                    <RightContainer>
                      <RightText>Joined On</RightText>
                      <RightText>Joined On</RightText>
                      {/* <RightTextContainer>
                        <RightText>Joined On</RightText>
                        <RightText>29 July, 2000</RightText>
                      </RightTextContainer>
                      <RightTextContainer>
                        <RightText>Language</RightText>
                        <RightText>English</RightText>
                      </RightTextContainer> */}
                    </RightContainer>
                  </AgentRight>
                </AgentContainer>
              </ActiveContainer>
            ) : null}
          </DownContent>
        </Down>
      </Container>
    </P>
  );
};

export default PropertyMoreInfo;
