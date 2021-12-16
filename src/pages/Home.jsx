import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import NewNav from "../components/Navbar/NewNav";

function Home() {
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
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
