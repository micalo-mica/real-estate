import { Link } from "react-router-dom";
import styled from "styled-components";

const P = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blue2};
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  height: 17.5rem;
  width: 16rem;
  border-radius: 0.3rem;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    width: 13.6rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: 12.7rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
    width: 12rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    width: 12rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    width: 10rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 9rem;
`;
const PType = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
`;

const PName = styled.h5`
  font-size: 0.8rem;
  font-weight: 200;
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
`;

const PRooms = styled.h5`
  font-size: 0.8rem;
  font-weight: 200;
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
`;
const PRoomsAvailable = styled.h5`
  font-size: 0.8rem;
  font-weight: 200;
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
`;

const ListDate = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  margin-left: 0.2rem;
`;

const AddRoomBtn = styled.button`
  border: none;
  padding: 0.3rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.btn};
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.2rem;
  align-self: center;
  margin-left: 0.2rem;
  margin-top: 0.5rem;
`;

// i will take prop from dashboard bellow
const AllAgentPropertyDashB = () => {
  return (
    // i will add link for the full detail of the detail page bellow
    <P>
      <Image src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <PType>Self Corn</PType>
      <PName>California</PName>
      <PRooms>Rooms: 30</PRooms>
      <PRoomsAvailable>Rooms Available: 30</PRoomsAvailable>
      <ListDate> List On: 29 June 2023</ListDate>
      <Link to="/agentDashboard/addRoom/345">
        <AddRoomBtn>Add Room</AddRoomBtn>
      </Link>
    </P>
  );
};

export default AllAgentPropertyDashB;
