import styled from "styled-components";
import { useState } from "react";
import { categoryForInput, features } from "../../static/data";

const L = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
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
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Container = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  max-width: ${({ theme }) => theme.sizes.widthLg};
  margin: 0px auto;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    flex-direction: column;
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    max-width: ${({ theme }) => theme.sizes.widthTablet};
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    max-width: ${({ theme }) => theme.sizes.widthPhone};
    flex-direction: column;
    align-items: center;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
`;
const Right = styled.form`
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
    row-gap: 0.5rm;
    column-gap: 0rm;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Left = styled.form`
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
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
    row-gap: 0.2rem;
    column-gap: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 0.5rem;
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
const LabelImage = styled.label`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 0.5rem;
  cursor: pointer;
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
    width: 22rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    width: 19rem;
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
    width: 22rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    width: 19rem;
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
    width: 22rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    width: 19rem;
  }
`;

const FeatureContainers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
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
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;
    column-gap: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
  }
`;
const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 0.5rem;
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
const FeatureText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
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
  font-size: 1.5rem;
  font-weight: bold;
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

// const Button = styled.button`
//   border: none;
//   padding: 0.8rem 3rem;
//   color: ${({ theme }) => theme.colors.white};
//   background-color: ${({ theme }) => theme.colors.btn};
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 0.2rem;
//   margin-top: 0.6rem;
//   @media (max-width: ${({ theme }) => theme.screens.xl}) {
//   }
//   @media (max-width: ${({ theme }) => theme.screens.lg2}) {
//   }
//   @media (max-width: ${({ theme }) => theme.screens.lg1}) {
//   }
//   @media (max-width: ${({ theme }) => theme.screens.md}) {
//   }
//   @media (max-width: ${({ theme }) => theme.screens.sm3}) {
//   }
//   @media (max-width: ${({ theme }) => theme.screens.sm2}) {
//   }
//   @media (max-width: ${({ theme }) => theme.screens.sm1}) {
//   }
// `;

const ListPropertyFormPage = () => {
  const handleImage = (e) => {
    e.preventDefault();
  };
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

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
        <Left>
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
          <InputContainer>
            <LabelImage htmlFor="upload">Upload picture</LabelImage>
            <Input
              dis="none"
              type="file"
              name=""
              id="upload"
              multiple
              onChange={handleImage}
            />
          </InputContainer>
        </Left>
      </Container>
      {/* <Button>Create</Button> */}
    </L>
  );
};

export default ListPropertyFormPage;
