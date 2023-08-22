import styled from "styled-components";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

const C = styled.div`
  width: 16.5rem;
  /* height: 19.5rem; */
  height: max-content;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue2};
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
`;
const Image = styled.img`
  width: 100%;
  height: 12.5rem;
  object-fit: cover;
`;

const LocationContainers = styled.div`
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const ProfileImg = styled.img`
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
`;
const Price = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.blue2};
  width: max-content;
  padding: 0.1rem;
  border-radius: 0.3rem;
`;

const TypeName = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
`;
const LodgeName = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
`;

const Desc = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.7rem;
  font-weight: 400;
`;
const LocationIcon = styled(CiLocationOn)`
  color: ${({ theme }) => theme.colors.orange};
`;
const Loca = styled.span``;

const LRContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.1rem;
  font-size: 0.9rem;
  font-weight: 400;
  padding-top: 0.2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.yellow2};
`;

const LikeIcon = styled(AiOutlineHeart)`
  color: ${({ theme }) => theme.colors.orange};
`;
const StarIcon = styled(AiOutlineStar)`
  color: ${({ theme }) => theme.colors.orange};
`;
const L = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  /* padding-top: 0.2rem; */
`;
const R = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  /* padding-top: 0.2rem; */
`;
const SpanL = styled.span``;
const SpanR = styled.span``;

const ListsCard = ({ items }) => {
  return (
    // <Link to={`/cats?category=${}`}>
    <C>
      <Image src={items.img} />
      <ProfileImg src={items.img} />
      <LocationContainers>
        <Price>$ {items.price}</Price>
        <TypeName>Self Corn</TypeName>
        <LodgeName>California Lodge</LodgeName>
        <Desc>
          {items.desc.length > 40
            ? items.desc.slice(0, 50) + "..."
            : items.desc}
        </Desc>
        <LocationContainer>
          <LocationIcon />
          <Loca>Enugu</Loca>
        </LocationContainer>
        <LRContainer>
          <L>
            <LikeIcon />
            <SpanL>20 likes</SpanL>
          </L>
          <R>
            <SpanR>{items.star}</SpanR>
            <StarIcon />
          </R>
        </LRContainer>
      </LocationContainers>
    </C>
    //  </Link>
  );
};

export default ListsCard;
