import styled from "styled-components";

const S = styled.div`
  margin-right: 0.2rem;
  overflow: hidden;
  border-radius: 0.3rem;
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
  width: 20rem;
  height: 20rem;
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    width: 80vw;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

function SliderCard({ image }) {
  return (
    <S>
      <Image src={image} />
    </S>
  );
}

export default SliderCard;
