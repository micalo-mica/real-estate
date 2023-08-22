import styled from "styled-components";
// import Navbar from "../components/Layout/Navbar";
import Hero from "../components/Layout/Hero";
// import Card from "../components/Card";
import Cards from "../components/Cards";
// import Navbar from "../components/Layout/Navbar";
// import Footer from "../components/Layout/Footer";

const Container = styled.div``;

const HomePage = () => (
  <Container>
    {/* <Navbar /> */}
    <Hero />
    <Cards type="big" />
    {/* <Footer /> */}
  </Container>
);

export default HomePage;
