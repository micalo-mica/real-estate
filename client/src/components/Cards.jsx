import styled from "styled-components";
// import { Link } from "react-router-dom";
import { gigs } from "../static/data.js";
import Card from "./Card.jsx";

const Container = styled.div`
  padding: 1.5rem 1rem;
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
    padding: 1.5rem 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

// `;
const C = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 0.9rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    grid-template-columns: 1fr;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const Cards = ({ type }) => {
  return (
    <Container>
      <C>
        {gigs &&
          gigs.map((i) => {
            return <Card key={i.id} items={i} type={type} />;
          })}
      </C>
    </Container>
  );
};

export default Cards;
