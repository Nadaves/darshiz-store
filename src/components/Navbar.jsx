import styled from "styled-components";
import { Badge } from "@material-ui/core";
import Logo from "../assets/NoBG.png";
import MainMenu from "../components/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import FloatingWhatsApp from "react-floating-whatsapp";
import Darshiz from "../assets/Darshiz.jpg";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
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
  z-index: 100;
`;

const Left = styled.div`
  flex-grow: 1;
  display: flex;
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const UserContainer = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: flex;
  }
`;

const Center = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    flex-grow: 15;
    flex-direction: row-reverse;
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
const ShoppingIconsContainer = styled.span`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    margin-left: 2em;
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 75%;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  &:hover {
    color: grey;
  }
`;
const SecTitle = styled.h2`
  font-size: 15px;
  padding: 0.5em;
  cursor: pointer;
`;

const Divider = styled.div`
  width: 1px;
  background-color: rgb(46, 51, 51);
`;

const Navbar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      <Wrapper>
        {!isMobile ? (
          <WhatsappCont>
            <FloatingWhatsApp
              chatMessage="?היי! איך אפשר לעזור"
              accountName="דרשיז"
              avatar={Darshiz}
              phoneNumber="+972545442928"
              styles={{ zIndex: 100 }}
            />
          </WhatsappCont>
        ) : null}
        <Left>
          {!user && (
            <UserContainer>
              <Link
                to="/register"
                style={{ color: "rgb(46, 51, 51)", textDecoration: "inherit" }}
              >
                <SecTitle>הרשמה</SecTitle>
              </Link>
              <Divider />
              <Link
                to="/login"
                style={{ color: "rgb(46, 51, 51)", textDecoration: "inherit" }}
              >
                <SecTitle>התחברות</SecTitle>
              </Link>
            </UserContainer>
          )}
          <ShoppingIconsContainer>
            <Link
              className="ShoppingIcon"
              to="/cart"
              style={{ color: "rgb(46, 51, 51)", textDecoration: "inherit" }}
            >
              <Badge badgeContent={cart.quantity} color="secondary">
                <LocalMallIcon />
              </Badge>
            </Link>
          </ShoppingIconsContainer>
        </Left>
        <Center>
          <Link to="/">
            <img src={Logo} alt="Drashiz baby" height="100px" />
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
