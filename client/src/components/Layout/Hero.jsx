import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";
import { MdOtherHouses } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/HeaderContext";

const H = styled.div`
  height: calc(80vh - 5rem);
  background: ${({ theme }) => theme.colors.blue1};
  color: ${({ theme }) => theme.colors.orange};
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
  height: 100%;
  /* height: calc(65vh - 5.5rem); */
  display: flex;
  justify-content: center;
  align-items: center;
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

// const P = styled.p``;

const InputContainers = styled.div`
  background-color: ${({ theme }) => theme.colors.orange};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0.5rem;
  border-radius: 0.4rem;
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
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.3rem;
  margin-top: 0.5rem;
  overflow: hidden;
  /* height: 37px; */
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

const Input = styled.input`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  height: 2.5rem;
  width: 350px;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.blue3};
  &:focus {
    outline: none;
  }
  color: ${({ theme }) => theme.colors.blue3};
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
    width: 300px;
  }
`;

const Button = styled.button`
  width: max-content;
  align-self: center;
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 0.3rem;
  margin-top: 1rem;
  padding: 0.5rem;
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

const LocationIcon = styled(CiLocationOn)`
  margin-left: 2px;
  margin-right: 3px;
`;

const HouseIcon = styled(MdOtherHouses)`
  margin-left: 2px;
  margin-right: 3px;
`;

const Select = styled.select`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  height: 2.5rem;
  width: 350px;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.blue3};
  background-color: ${({ theme }) => theme.colors.white};
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
    width: 300px;
  }
`;

const Options = styled.option``;

const Hero = () => {
  const [searchLocation, SetSearchLocation] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const { closeSubmenu } = useGlobalContext();

  // const [openOptions, setOpenOptions] = useState(false);

  const handleSearch = () => {
    navigate("/lists", { state: { searchLocation, neighborhood, type } });
  };

  return (
    <H onMouseOver={closeSubmenu}>
      <Container>
        <InputContainers
        // posi="relative"
        >
          <InputContainer>
            <LocationIcon />
            <Input
              placeholder="location"
              onChange={(e) => SetSearchLocation(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <LocationIcon />
            <Input
              placeholder="neighborhood"
              onChange={(e) => setNeighborhood(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <HouseIcon />
            {/* <Input placeholder="type of house" /> */}
            <Select onChange={(e) => setType(e.target.value)}>
              <Options>selfcon</Options>
              <Options>selfcon</Options>
              <Options>selfcon</Options>
            </Select>
          </InputContainer>
          <Button onClick={handleSearch}>Search</Button>
        </InputContainers>
      </Container>
    </H>
  );
};

export default Hero;
