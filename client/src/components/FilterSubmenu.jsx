// import React from "react";

// const FilterSubmenu = () => {
//   return (
//     <Left click={click}>
//           <LeftContainer>
//             <SearchText>Search</SearchText>
//             <ListSearchItem>
//               <Label>Location</Label>
//               <Input
//                 placeholder={searchLocation}
//                 type="text"
//                 onChange={(e) => SetSearchLocation(e.target.value)}
//               />
//             </ListSearchItem>
//             <ListSearchItem>
//               <Label>Neighborhood</Label>
//               <Input
//                 placeholder={neighborhood}
//                 type="text"
//                 onChange={(e) => setNeighborhood(e.target.value)}
//               />
//             </ListSearchItem>
//             <SelectInput categoryInput={categoryInput} />
//             {/* <ListSearchItem>
//               <Label>Type</Label>
//               <Input
//                 placeholder={type}
//                 type="text"
//                 onChange={(e) => setType(e.target.value)}
//               />
//             </ListSearchItem> */}
//             {/* filters */}
//             <Filters>
//               <FilterText>Filter more</FilterText>
//               <Option>
//                 <OptionText>Min price</OptionText>
//                 <InputMinMax
//                   type="text"
//                   onChange={(e) => setMaxPrice(e.target.value)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Max price</OptionText>
//                 <InputMinMax
//                   type="text"
//                   onChange={(e) => setMinPrice(e.target.value)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Rooms</OptionText>
//                 <InputSmall
//                   type="number"
//                   min="1"
//                   max="5"
//                   onChange={(e) => setRoom(e.target.value)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Rating</OptionText>
//                 <InputSmall
//                   type="number"
//                   min="1"
//                   max="5"
//                   onChange={(e) => setRating(e.target.value)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>How many story</OptionText>
//                 <InputSmall
//                   type="number"
//                   min="1"
//                   max="5"
//                   onChange={(e) => setStoryBuilding(e.target.value)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Bathroom</OptionText>
//                 <InputCheckeBox
//                   type="checkbox"
//                   name="bathroom"
//                   id="bathroom"
//                   checked={bathroom}
//                   onChange={(e) => setBathroom(e.target.checked)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Toilet</OptionText>
//                 <InputCheckeBox
//                   type="checkbox"
//                   name="toilet"
//                   id="toilet"
//                   checked={toilet}
//                   onChange={(e) => setToilet(e.target.checked)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Balcony</OptionText>
//                 <InputCheckeBox
//                   type="checkbox"
//                   name="balcony"
//                   id="balcony"
//                   checked={balcony}
//                   onChange={(e) => setBalcony(e.target.checked)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Private Bathroom</OptionText>
//                 <InputCheckeBox
//                   type="checkbox"
//                   name="privateBathroom"
//                   id="privateBathroom"
//                   checked={privateBathroom}
//                   onChange={(e) => setPrivateBathroom(e.target.checked)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Bathroom</OptionText>
//                 <InputCheckeBox
//                   type="checkbox"
//                   name="privateToilet"
//                   id="privateToilet"
//                   checked={privateToilet}
//                   onChange={(e) => setPrivateToilet(e.target.checked)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Water</OptionText>
//                 <InputCheckeBox
//                   type="checkbox"
//                   name="water"
//                   id="water"
//                   checked={water}
//                   onChange={(e) => setWater(e.target.checked)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Personal Meter</OptionText>
//                 <InputCheckeBox
//                   type="checkbox"
//                   name="privateMeter"
//                   id="privateMeter"
//                   checked={privateMeter}
//                   onChange={(e) => setPrivateMeter(e.target.checked)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Gate Man</OptionText>
//                 <InputCheckeBox
//                   type="checkbox"
//                   name="gateMan"
//                   id="gateMan"
//                   checked={gateMan}
//                   onChange={(e) => setGateMan(e.target.checked)}
//                 />
//               </Option>
//               {/* test */}
//               <Option>
//                 <OptionText>Gate Man</OptionText>
//                 <InputCheckeBox
//                   type="checkbox"
//                   name="gateMan"
//                   id="gateMan"
//                   checked={gateMan}
//                   onChange={(e) => setGateMan(e.target.checked)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Gate Man</OptionText>
//                 <InputCheckeBox
//                   type="checkbox"
//                   name="gateMan"
//                   id="gateMan"
//                   checked={gateMan}
//                   onChange={(e) => setGateMan(e.target.checked)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Gate Man</OptionText>
//                 <InputCheckeBox
//                   type="checkbox"
//                   name="gateMan"
//                   id="gateMan"
//                   checked={gateMan}
//                   onChange={(e) => setGateMan(e.target.checked)}
//                 />
//               </Option>
//               <Option>
//                 <OptionText>Gate Man</OptionText>
//                 <InputCheckeBox
//                   type="checkbox"
//                   name="gateMan"
//                   id="gateMan"
//                   checked={gateMan}
//                   onChange={(e) => setGateMan(e.target.checked)}
//                 />
//               </Option>
//             </Filters>
//           </LeftContainer>
//         </Left>
//   )
// };

// export default FilterSubmenu;
