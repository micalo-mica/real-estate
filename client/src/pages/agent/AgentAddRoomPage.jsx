import styled from "styled-components";
import { useState } from "react";
import { categoryForInput, features } from "../../static/data";

const L = styled.div`
  /* margin-top: 5.5rem; */
  /* background-color: ${({ theme }) => theme.colors.white}; */
  padding: 1rem;
  display: flex;
  flex-direction: column;
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
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  padding: 1rem;
  display: flex;
  gap: 1rem;
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
const Right = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Left = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;
const LabelImage = styled.label`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0.5rem;
  cursor: pointer;
`;
const Input = styled.input`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  height: 2rem;
  width: 25rem;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.blue3};
  display: ${(prop) => prop.dis};
  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  height: 2rem;
  width: 25rem;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.blue3};
  &:focus {
    outline: none;
  }
`;
const Option = styled.option``;
const TextArea = styled.textarea`
  border: none;
  border: none;
  appearance: none;
  font-size: 1rem;
  border-radius: 0.3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  &:focus {
    outline: none;
  }
`;

const FeatureContainers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 0.5rem;
  /* color: ${({ theme }) => theme.colors.orange}; */
`;
const FeatureText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const InputCheckeBox = styled.input`
  border: none;
  outline: none;
  height: 1.4rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.white};
  /* color: ${({ theme }) => theme.colors.orange}; */
`;

const Button = styled.button`
  border: none;
  padding: 0.8rem 3rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.btn};
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.2rem;
  margin-top: 0.6rem;
`;

const AgentAddRoomPage = () => {
  return (
    <L>
      <Container>
        <Right>
          <InputContainer>
            <Label>Lodge Name</Label>
            <Input type="text" name="name" placeholder="lodge name" />
          </InputContainer>
          <InputContainer>
            <Label>title</Label>
            <Input type="text" name="title" placeholder="title" />
          </InputContainer>
          <InputContainer>
            <Label>Category</Label>
            <Select>
              <Option value="Choose a category">Choose a category</Option>
              {categoryForInput &&
                categoryForInput.map((c) => {
                  return (
                    <Option key={c.id} value={c.cat}>
                      {c.cat}
                    </Option>
                  );
                })}
            </Select>
          </InputContainer>

          <InputContainer>
            <Label>Description</Label>
            <TextArea
              name="description"
              placeholder="property description"
              cols="30"
              rows="10"
            ></TextArea>
          </InputContainer>
          <InputContainer>
            <Label>Lowest Price</Label>
            <Input
              type="number"
              name="price"
              placeholder="property lowest price"
            />
          </InputContainer>
          <InputContainer>
            <Label>totalRomes</Label>
            <Input type="number" name="totalRomes" placeholder="totalRomes" />
          </InputContainer>

          <InputContainer>
            <Label>Address</Label>
            <Input type="text" name="address" placeholder="address" />
          </InputContainer>
          <InputContainer>
            <Label>city</Label>
            <Input type="text" name="city" placeholder="city" />
          </InputContainer>
          <InputContainer>
            <Label>State</Label>
            <Input type="text" name="state" placeholder="state" />
          </InputContainer>
          <InputContainer>
            <Label>zipCode</Label>
            <Input type="text" name="zipCode" placeholder="zipCode" />
          </InputContainer>
          <InputContainer>
            <Label>distanceFromCity</Label>
            <Input
              type="text"
              name="distanceFromCity"
              placeholder="distanceFromCity"
            />
          </InputContainer>
          <InputContainer>
            <Label>Country</Label>
            <Input type="text" name="country" placeholder="country" />
          </InputContainer>
        </Right>

        <FeatureContainers>
          {features &&
            features.map((f) => {
              return (
                <FeatureContainer key={f.id}>
                  <FeatureText>{f.text}</FeatureText>
                  <InputCheckeBox
                    type="checkbox"
                    name={f.text}
                    id="gateMan"
                    // checked={gateMan}
                    // onChange={(e) => setGateMan(e.target.checked)}
                  />
                </FeatureContainer>
              );
            })}
        </FeatureContainers>
      </Container>
      <Button>Create</Button>
    </L>
  );
};

export default AgentAddRoomPage;
