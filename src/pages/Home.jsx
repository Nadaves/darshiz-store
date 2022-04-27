// import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import styled from "styled-components";
// import { Button } from "@material-ui/core";
import Slider from "../components/Slider";
import ConstSlider from "../components/ConstSlider";
import Categories from "../components/Categories";
import Slideshow from "../components/Slideshow.jsx";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import MobileAccordion from "../components/MobileAccordion";
// import Products from "../components/Products";
import TopAbout from "../components/About/TopAbout";
import BottomAbout from "../components/About/BottomAbout";
import "./Home.css";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  // const [annState, setAnnState] = useState(true);

  // const Container = styled.div`
  //   @media (max-width: 900px) {
  //     display: none;
  //   }
  //   @media (min-width: 900px) {
  //     height: 30px;
  //     background-color: rgba(237, 148, 144, 0.7);
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     font-weight: 500;
  //   }
  // `;

  const HomeContainer = styled.div`
    width: 100%;
  `;

  // const ButtonContainer = styled.span``;
  // const handleClose = () => {
  //   setAnnState(!annState);
  // };
  return (
    <>
      <HomeContainer>
        {/* {annState ? (
          <Container>
            משלוחים לכל חלקי הארץ{" "}
            <ButtonContainer>
              <Button onClick={handleClose}>X</Button>
            </ButtonContainer>
          </Container>
        ) : null} */}
        <Navbar />
        {isMobile ? <TopAbout /> : <ConstSlider />}
        <Slideshow />
        <BottomAbout />
        {/* <Products /> */}
        {isMobile ? (
          <>
            <MobileAccordion />
            <MobileFooter />
          </>
        ) : (
          <Footer />
        )}
      </HomeContainer>
    </>
  );
}

export default Home;
