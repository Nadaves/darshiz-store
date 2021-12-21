import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Products from "../components/Products";
import About from "../components/About/About";
import "./Home.css";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  const [annState, setAnnState] = useState(true);

  const Container = styled.div`
    @media (max-width: 900px) {
      display: none;
    }
    @media (min-width: 900px) {
      height: 30px;
      background-color: rgb(255, 77, 0);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
    }
  `;
  const ButtonContainer = styled.span``;
  const handleClose = () => {
    setAnnState(!annState);
  };
  return (
    <>
      {annState ? (
        <Container>
          מבצע: משלוח חינם בקנייה מעל 250 ש"ח
          <ButtonContainer>
            <Button onClick={handleClose}>X</Button>
          </ButtonContainer>
        </Container>
      ) : null}
      <Navbar />
      {isMobile ? <About /> : <Slider />}
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default Home;
