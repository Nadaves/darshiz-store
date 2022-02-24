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
  box-shadow: 0.1em 0.1em 0.5em rgba(237, 148, 144, 0.7);
`;
const Wrapper = styled.div`
  display: flex;
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
  padding-top: 1em;
  @media (min-width: 900px) {
    flex-grow: 15;
    flex-direction: column;
    justify-content: flex-start;
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
  width: 100%;
  margin-top: 1em;
  justify-content: space-evenly;
  background-color: rgba(237, 148, 144, 0.7);
  // box-shadow: 0px -5px 15px 2px rgba(237, 148, 144, 0.7);
  padding: 10px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Title = styled.h1``;

const DropDown = styled.div``;

const DropButton = styled.button``;

const DropDownContent = styled.div``;

const DropDownLink = styled.div``;

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
            <DropDown className="dropdown">
              <DropButton className="dropbtn">
                <Link
                  to="/"
                  style={{
                    color: "rgb(46, 51, 51)",
                    textDecoration: "inherit",
                  }}
                >
                  <Title className="title">מוצרים</Title>
                </Link>
              </DropButton>
              <DropDownContent className="dropdown-content">
                <DropDownLink className="dropdown-link">
                  קוביות משחק
                </DropDownLink>
                <DropDownLink className="dropdown-link">
                  מחזיקי מוצצים
                </DropDownLink>
                <DropDownLink className="dropdown-link">
                  ארגוניות כיסים
                </DropDownLink>
                <DropDownLink className="dropdown-link">שמיכות</DropDownLink>
                <DropDownLink className="dropdown-link">סלסלות</DropDownLink>
                <DropDownLink className="dropdown-link">
                  נחשושים - מגן ראש
                </DropDownLink>
                <DropDownLink className="dropdown-link">שם התינוק</DropDownLink>
                <DropDownLink className="dropdown-link">
                  מארזים ליולדת
                </DropDownLink>
              </DropDownContent>
            </DropDown>
            <DropDown className="dropdown">
              <DropButton className="dropbtn">
                <Link
                  to="/"
                  style={{
                    color: "rgb(46, 51, 51)",
                    textDecoration: "inherit",
                  }}
                >
                  <Title className="title">מבצעים</Title>
                </Link>
              </DropButton>
              <DropDownContent className="dropdown-content">
                <DropDownLink className="dropdown-link">
                  הנחות החודש
                </DropDownLink>
                <DropDownLink className="dropdown-link">קופונים</DropDownLink>{" "}
                <DropDownLink className="dropdown-link">גיפטקארד </DropDownLink>
              </DropDownContent>
            </DropDown>
            <Link
              to="/Shipping"
              style={{
                color: "rgb(46, 51, 51)",
                textDecoration: "inherit",
                fontWeight: "100",
              }}
            >
              <Title className="title">משלוחים</Title>
            </Link>{" "}
            <Link
              to="/FAQ"
              style={{
                color: "rgb(46, 51, 51)",
                textDecoration: "inherit",
              }}
            >
              <Title className="title">שאלות נפוצות</Title>
            </Link>
            <Link
              to="/Testimonials"
              style={{
                color: "rgb(46, 51, 51)",
                textDecoration: "inherit",
              }}
            >
              <Title className="title">צור קשר</Title>
            </Link>
            <Link
              to="/Testimonials"
              style={{
                color: "rgb(46, 51, 51)",
                textDecoration: "inherit",
              }}
            >
              <Title className="title">לקוחות מספרים</Title>
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
