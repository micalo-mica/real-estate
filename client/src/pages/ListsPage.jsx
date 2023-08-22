import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { gigs } from "../static/data";
import { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import SelectInput from "../components/in/SelectInput";
import { categoryInput } from "../static/listInputData";
import Card from "../components/Card";
import Button from "../components/in/Button";
const L = styled.div`
  padding: 0.5rem;
`;
const Container = styled.div`
  color: ${({ theme }) => theme.colors.blue2};
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
const Cover = styled.div`
  transition: ${({ theme }) => theme.trans};
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

const Left = styled.div`
  overflow-y: scroll;
  position: fixed;
  padding: 0.9rem;
  top: 5rem;
  left: 0;
  height: calc(100vh - 5rem);
  width: 35%;
  background-color: ${({ theme }) => theme.colors.whitesmoke};
  /* transition: ${({ theme }) => theme.trans}; */
  transform: ${({ click }) =>
    click === true ? "translate(0)" : "translate(-100%)"};
  z-index: 995;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: 60%;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;

const LeftContainer = styled.div`
  border-radius: 0.5rem;
  padding: 0.9rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 1rem;
  /* overflow-y: scroll; */
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
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

const SearchText = styled.h4`
  color: ${({ theme }) => theme.colors.orange};
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: bold;
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
const ListSearchItem = styled.div`
  display: flex;
  flex-direction: column;
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
const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-right: 0.3rem;
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
  padding-left: 0.5rem;
  font-size: 1rem;
  border: none;
  outline: none;
  /* width: ${({ w }) => w}rem; */
  /* width: 25rem; */
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  /* color: ${({ theme }) => theme.colors.orange}; */
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
const InputMinMax = styled.input`
  padding-left: 0.5rem;
  font-size: 1rem;
  border: none;
  outline: none;
  height: 2.5rem;
  width: 6.7rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  /* color: ${({ theme }) => theme.colors.orange}; */
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
const InputSmall = styled.input`
  padding-left: 0.5rem;
  font-size: 1rem;
  border: none;
  outline: none;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  /* color: ${({ theme }) => theme.colors.orange}; */
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
const InputCheckeBox = styled.input`
  border: none;
  outline: none;
  height: 1.4rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  /* color: ${({ theme }) => theme.colors.orange}; */
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
const Filters = styled.div`
  /* color: ${({ theme }) => theme.colors.orange}; */
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
const FilterText = styled.h6`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
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
const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: ${({ theme }) => theme.colors.orange}; */
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
const OptionText = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
`;

// =========================
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  z-index: 1;
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

// ===========filter==============
const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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
const Filter = styled(BsFilterLeft)`
  font-size: 2rem;
  align-items: flex-end;
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

const RightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
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

const ListsPage = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const [searchLocation, SetSearchLocation] = useState(
    location.state.searchLocation
  );
  const [neighborhood, setNeighborhood] = useState(location.state.neighborhood);
  const [type, setType] = useState(location.state.type);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [rooms, setRoom] = useState(null);
  const [rating, setRating] = useState(null);
  const [storyBuilding, setStoryBuilding] = useState(null);
  const [bathroom, setBathroom] = useState(false);
  const [toilet, setToilet] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [privateBathroom, setPrivateBathroom] = useState(false);
  const [privateToilet, setPrivateToilet] = useState(false);
  const [water, setWater] = useState(false);
  const [privateMeter, setPrivateMeter] = useState(false);
  const [gateMan, setGateMan] = useState(false);

  console.log(click);

  return (
    <L>
      <Container>
        {click && (
          <Cover>
            <Left click={click}>
              <LeftContainer>
                <SearchText>Search</SearchText>
                <ListSearchItem>
                  <Label>Location</Label>
                  <Input
                    placeholder={searchLocation}
                    type="text"
                    onChange={(e) => SetSearchLocation(e.target.value)}
                  />
                </ListSearchItem>
                <ListSearchItem>
                  <Label>Neighborhood</Label>
                  <Input
                    placeholder={neighborhood}
                    type="text"
                    onChange={(e) => setNeighborhood(e.target.value)}
                  />
                </ListSearchItem>
                <SelectInput categoryInput={categoryInput} />
                {/* <ListSearchItem>
              <Label>Type</Label>
              <Input
                placeholder={type}
                type="text"
                onChange={(e) => setType(e.target.value)}
              />
            </ListSearchItem> */}
                {/* filters */}
                <Filters>
                  <FilterText>Filter more</FilterText>
                  <Option>
                    <OptionText>Min price</OptionText>
                    <InputMinMax
                      type="text"
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Max price</OptionText>
                    <InputMinMax
                      type="text"
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Rooms</OptionText>
                    <InputSmall
                      type="number"
                      min="1"
                      max="5"
                      onChange={(e) => setRoom(e.target.value)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Rating</OptionText>
                    <InputSmall
                      type="number"
                      min="1"
                      max="5"
                      onChange={(e) => setRating(e.target.value)}
                    />
                  </Option>
                  <Option>
                    <OptionText>How many story</OptionText>
                    <InputSmall
                      type="number"
                      min="1"
                      max="5"
                      onChange={(e) => setStoryBuilding(e.target.value)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Bathroom</OptionText>
                    <InputCheckeBox
                      type="checkbox"
                      name="bathroom"
                      id="bathroom"
                      checked={bathroom}
                      onChange={(e) => setBathroom(e.target.checked)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Toilet</OptionText>
                    <InputCheckeBox
                      type="checkbox"
                      name="toilet"
                      id="toilet"
                      checked={toilet}
                      onChange={(e) => setToilet(e.target.checked)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Balcony</OptionText>
                    <InputCheckeBox
                      type="checkbox"
                      name="balcony"
                      id="balcony"
                      checked={balcony}
                      onChange={(e) => setBalcony(e.target.checked)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Private Bathroom</OptionText>
                    <InputCheckeBox
                      type="checkbox"
                      name="privateBathroom"
                      id="privateBathroom"
                      checked={privateBathroom}
                      onChange={(e) => setPrivateBathroom(e.target.checked)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Bathroom</OptionText>
                    <InputCheckeBox
                      type="checkbox"
                      name="privateToilet"
                      id="privateToilet"
                      checked={privateToilet}
                      onChange={(e) => setPrivateToilet(e.target.checked)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Water</OptionText>
                    <InputCheckeBox
                      type="checkbox"
                      name="water"
                      id="water"
                      checked={water}
                      onChange={(e) => setWater(e.target.checked)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Personal Meter</OptionText>
                    <InputCheckeBox
                      type="checkbox"
                      name="privateMeter"
                      id="privateMeter"
                      checked={privateMeter}
                      onChange={(e) => setPrivateMeter(e.target.checked)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Gate Man</OptionText>
                    <InputCheckeBox
                      type="checkbox"
                      name="gateMan"
                      id="gateMan"
                      checked={gateMan}
                      onChange={(e) => setGateMan(e.target.checked)}
                    />
                  </Option>
                  {/* test */}
                  <Option>
                    <OptionText>Gate Man</OptionText>
                    <InputCheckeBox
                      type="checkbox"
                      name="gateMan"
                      id="gateMan"
                      checked={gateMan}
                      onChange={(e) => setGateMan(e.target.checked)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Gate Man</OptionText>
                    <InputCheckeBox
                      type="checkbox"
                      name="gateMan"
                      id="gateMan"
                      checked={gateMan}
                      onChange={(e) => setGateMan(e.target.checked)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Gate Man</OptionText>
                    <InputCheckeBox
                      type="checkbox"
                      name="gateMan"
                      id="gateMan"
                      checked={gateMan}
                      onChange={(e) => setGateMan(e.target.checked)}
                    />
                  </Option>
                  <Option>
                    <OptionText>Gate Man</OptionText>
                    <InputCheckeBox
                      type="checkbox"
                      name="gateMan"
                      id="gateMan"
                      checked={gateMan}
                      onChange={(e) => setGateMan(e.target.checked)}
                    />
                  </Option>
                </Filters>
                {/* ======button component========== */}
                <Button text="Search" />
              </LeftContainer>
            </Left>
          </Cover>
        )}
        {/* ======================gggg==================== */}
        <Right>
          <FilterContainer onClick={() => setClick(!click)}>
            <Filter />
          </FilterContainer>
          <RightContainer>
            {gigs &&
              gigs.map((i) => {
                return (
                  <Link to="/property/:id" key={i.id}>
                    <Card items={i} type="big" />;
                  </Link>
                );
              })}
          </RightContainer>
        </Right>
      </Container>
    </L>
  );
};

export default ListsPage;
