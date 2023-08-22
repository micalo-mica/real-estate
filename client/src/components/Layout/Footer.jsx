import styled from "styled-components";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

// import { navItems } from "../../static/data";

const F = styled.div`
  background-color: ${({ theme }) => theme.colors.blue1};
  padding-top: 5rem;
  font-size: 0.9rem;
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
  width: ${({ theme }) => theme.sizes.widthLg};
  margin-left: auto;
  margin-right: auto;
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

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 5rem;
`;
const FooterItem = styled.div``;
const H4 = styled.h4`
  margin-bottom: 1.6rem;
`;
const Link = styled.ul`
  display: ${({ dis }) => dis};
  gap: 0.5rem;
`;
const LinkItems = styled.li`
  margin-bottom: 1rem;
  transition: all 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
const Text = styled.p`
  margin-bottom: 1rem;
  transition: all 300ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
const TwitterIcon = styled(AiOutlineTwitter)`
  font-size: 1.4rem;
`;
const InstagramIcon = styled(AiOutlineInstagram)`
  font-size: 1.4rem;
`;
const LinkinIcon = styled(AiOutlineLinkedin)`
  font-size: 1.4rem;
`;
const CopyRight = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 1.2rem;
  color: ${({ theme }) => theme.colors.orange};
  border-top: 1px solid ${({ theme }) => theme.colors.orange};
`;
const Small = styled.small``;

const Footer = () => {
  return (
    <F>
      <Container>
        <ItemsContainer>
          <FooterItem>
            <H4>OrantageLinks</H4>
            <Link>
              <LinkItems>About</LinkItems>
              <LinkItems>About</LinkItems>
              <LinkItems>About</LinkItems>
              <LinkItems>About</LinkItems>
              <LinkItems>About</LinkItems>
            </Link>
          </FooterItem>
          <FooterItem>
            <H4>Privacy</H4>
            <Link>
              <LinkItems>About</LinkItems>
              <LinkItems>About</LinkItems>
              <LinkItems>About</LinkItems>
              <LinkItems>About</LinkItems>
              <LinkItems>About</LinkItems>
            </Link>
          </FooterItem>
          <FooterItem>
            <H4>Contact Us</H4>
            <Text>07066445709</Text>
            <Text>Orantage@mail.com</Text>
            <Link dis="flex">
              <LinkItems>
                <TwitterIcon />
              </LinkItems>
              <LinkItems>
                <InstagramIcon />
              </LinkItems>
              <LinkItems>
                <LinkinIcon />
              </LinkItems>
            </Link>
          </FooterItem>
        </ItemsContainer>
        <CopyRight>
          <Small>Copyright &copy, Orantage</Small>
        </CopyRight>
      </Container>
    </F>
  );
};

export default Footer;
