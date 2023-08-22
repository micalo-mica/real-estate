import styled from "styled-components";

const P = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue2};
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  height: 11rem;
  width: 14rem;
  border-radius: 0.3rem;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 14rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    width: 11.5rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    /* width: 11.5rem; */
    width: 19rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    width: 10.8rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const Image = styled.img`
  width: 100%;
  height: 5rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    height: 6rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Price = styled.h4`
  font-size: 0.8rem;
  font-weight: 300;
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
  color: ${({ theme }) => theme.colors.orange};
`;

const PName = styled.h5`
  font-size: 0.8rem;
  font-weight: 200;
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
`;

const PRoomNo = styled.h5`
  font-size: 0.8rem;
  font-weight: 200;
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
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

const PaymentDate = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  margin-left: 0.2rem;
`;

// i will take prop from dashboard bellow
const PropertyForAgentDashB = () => {
  return (
    // i will add link for the full detail of the payment page bellow
    <P>
      <Image src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <Price>$200000</Price>
      <PName>California</PName>
      <PRoomNo>Room: 30</PRoomNo>
      <PaymentDate> On: 29 June 2023</PaymentDate>
    </P>
  );
};

export default PropertyForAgentDashB;
