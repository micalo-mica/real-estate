import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import Cover from "../../assets/cover.jpg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/HeaderContext";
import { AiOutlineMessage } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

// import { navItems } from "../../static/data";

const H = styled.div`
  height: 5rem;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.blue1};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.yellow2};
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.orange};
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
  margin-left: 0.5rem;
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

const Center = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
    gap: 0.7rem;
    margin-right: 0.3rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 0.5rem;
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
const Logo = styled.h4`
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.orange};
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
    font-size: 2.4rem;
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

const ListItems = styled.ul`
  display: flex;
  gap: 0.7rem;
  font-weight: 500;

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
const ListItems2 = styled.ul`
  display: flex;
  gap: 0.7rem;
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
    gap: 0.5rem;
    font-weight: 400;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm3}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm2}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.sm1}) {
    display: none;
  }
`;
const ListItem = styled.li`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
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
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const ToggleContainerBtn = styled.button`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.orange};
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
    display: block;
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
const ToggleBtn = styled(AiOutlineMenu)`
  font-size: 2rem;
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

const MsgIcon = styled(AiOutlineMessage)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
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

// deal with later
const UserImage = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.whitesmoke};
  @media (max-width: ${({ theme }) => theme.screens.xl}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg2}) {
  }
  @media (max-width: ${({ theme }) => theme.screens.lg1}) {
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

const LinkButton = styled.button`
  height: 100%;
  background: transparent;
  border-color: transparent;
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  width: 10rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
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
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

// profile options
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  /* position: relative; */
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
const ProfileOptions = styled.div`
  position: absolute;
  right: 5px;
  top: 65px;
  padding: 1rem;
  background-color: white;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
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
const Options = styled.span`
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
const DropDownIcon = styled(MdArrowDropDown)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
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

const Header = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const [open, setOpen] = useState(false);

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 1;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  const currentUser = {
    id: 1,
    userName: "Micah",
    isSeller: true,
  };

  return (
    <H onMouseOver={handleSubmenu}>
      <Container>
        <Left>
          <Link to="/">
            <Logo>Orantage</Logo>
          </Link>
        </Left>
        <Center>
          <ListItems>
            <ListItem>
              <LinkButton className="link-btn" onMouseOver={displaySubmenu}>
                house for rent
              </LinkButton>
            </ListItem>
            <ListItem>
              <LinkButton className="link-btn" onMouseOver={displaySubmenu}>
                house for sell
              </LinkButton>
            </ListItem>
            <ListItem>
              <LinkButton className="link-btn" onMouseOver={displaySubmenu}>
                company
              </LinkButton>
            </ListItem>
          </ListItems>
        </Center>
        <Right>
          <ListItems2>
            <Link to="/login">
              <ListItem>becomes a seller</ListItem>
            </Link>
          </ListItems2>
          {/* dropdwon */}
          {/* <Link> */}
          <ProfileContainer>
            <DropDownIcon onClick={() => setOpen(!open)} />
            {open && (
              <ProfileOptions>
                <Link to="/agentDashboard/dashboard">
                  <Options>Dashboard</Options>
                </Link>
                <Link to="/agentDashboard/allProperty">
                  <Options>All Property</Options>
                </Link>
                <Link to="/agentDashboard/listPropertyForm">
                  <Options>List Property</Options>
                </Link>
                <Link to="/agentDashboard/withdraw">
                  <Options>Withdraw</Options>
                </Link>
                <Link to="/agent/findPaymentDetail">
                  <Options>Search</Options>s
                </Link>
              </ProfileOptions>
            )}
          </ProfileContainer>
          {/* </Link> */}
          <Link to="/profile">
            <UserImage src={Cover} />
          </Link>
          <ToggleContainerBtn onClick={openSidebar}>
            <ToggleBtn />
          </ToggleContainerBtn>
        </Right>
      </Container>
    </H>
  );
};

export default Header;

// install -g expo-cli
