import styled from "styled-components";
import Logo from "../assets/Peach.jpg";
import WhatsappLogo from "../assets/NoBG.png";
import MainMenu from "../components/Menu";
import { Link } from "react-router-dom";
import "./Navbar.css";
import FloatingWhatsApp from "react-floating-whatsapp";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
    position: relative;
    z-index: 100;
box-shadow:
             0 0  0 2px rgb(255,255,255),
             0.1em 0.1em 0.5em rgba(0,0,0,0.3);
}`;
const Wrapper = styled.div`
  display: flex;
  padding: 10px 10px 10px 10px;
`;

const WhatsappCont = styled.div`
  display: flex;
  font-weight: 100;
  z-index: 100;
`;

const Center = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    flex-grow: 15;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 2em;
  }
`;

const Right = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    display: none;
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 75%;
  justify-content: space-between;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 21px;
  font-weight: 100;
  &:hover {
    color: grey;
  }
`;

const Navbar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  return (
    <Container>
      <Wrapper>
        {!isMobile ? (
          <WhatsappCont>
            <FloatingWhatsApp
              chatMessage="?היי! איך אפשר לעזור"
              accountName="דרשיז"
              avatar={WhatsappLogo}
              phoneNumber="+972545442928"
              styles={{ zIndex: 100 }}
            />
          </WhatsappCont>
        ) : null}
        <Center>
          <Link to="/">
            <img src={Logo} alt="Drashiz baby" height="130px" />
          </Link>
          <Titles>
            <Link
              to="/"
              style={{
                color: "rgb(46, 51, 51)",
                textDecoration: "inherit",
              }}
            >
              <Title>מוצרים</Title>
            </Link>
            <Link
              to="/"
              style={{
                color: "rgb(46, 51, 51)",
                textDecoration: "inherit",
              }}
            >
              <Title>מבצעים</Title>
            </Link>
            <Link
              to="/Shipping"
              style={{
                color: "rgb(46, 51, 51)",
                textDecoration: "inherit",
                fontWeight: "100",
              }}
            >
              <Title>משלוחים</Title>
            </Link>{" "}
            <Link
              to="/FAQ"
              style={{
                color: "rgb(46, 51, 51)",
                textDecoration: "inherit",
              }}
            >
              <Title>שאלות נפוצות</Title>
            </Link>
            <Link
              to="/Testimonials"
              style={{
                color: "rgb(46, 51, 51)",
                textDecoration: "inherit",
              }}
            >
              <Title>לקוחות מספרים</Title>
            </Link>
            <Link
              to="/Testimonials"
              style={{
                color: "rgb(46, 51, 51)",
                textDecoration: "inherit",
              }}
            >
              <Title>צור קשר</Title>
            </Link>
          </Titles>
        </Center>
        <Right>
          <MainMenu />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
