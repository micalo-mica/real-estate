import styled from "styled-components";

const P = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  height: 400px;
  width: 520px;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
    height: 350px;
    width: 285px;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    height: 350px;
    width: 330px;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const PropertyDetailCard = ({ image }) => {
  return (
    <P>
      <Image src={image} full />
    </P>
  );
};

export default PropertyDetailCard;
