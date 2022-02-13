import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import Logo from "../assets/NoBG.png";
import MainMenu from "../components/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Container = styled.div`
box-shadow:
             0 0  0 2px rgb(255,255,255),
             0.1em 0.1em 0.5em rgba(0,0,0,0.3);
}`;
const Wrapper = styled.div`
  display: flex;
  padding: 10px 10px 10px 10px;
`;

const Left = styled.div`
  flex-grow: 1;
  display: flex;
  margin-left: 0.5em;
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
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
  flex-direction: column;
  align-items: center;
  @media (min-width: 900px) {
    flex-grow: 2;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    margin-right: 2em;
  }
`;
const LogoContainer = styled.span`
  flex-grow: 2;
`;

const Right = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (min-width: 900px) {
    display: none;
  }
`;
const ShoppingIconsContainer = styled.span`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-evenly;
    margin-top: 0em;
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

const LoginRegContainer = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const Divider = styled.div`
  width: 1px;
  background-color: rgb(46, 51, 51);
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const wishList = useSelector((state) => state.wishList);
  return (
    <Container>
      <Wrapper>
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
            <Link
              className="ShoppingIcon"
              to="/favorites"
              style={{ color: "rgb(46, 51, 51)", textDecoration: "inherit" }}
            >
              <Badge badgeContent={wishList.quantity} color="secondary">
                <FavoriteIcon />
              </Badge>
            </Link>
          </ShoppingIconsContainer>
        </Left>
        <Center>
          <LogoContainer>
            <Link to="/">
              <img src={Logo} alt="Drashiz baby" height="100px" />
            </Link>
          </LogoContainer>
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
                fontWeight: "100",
              }}
            >
              <Title>משלוחים</Title>
            </Link>{" "}
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
              to="/"
              style={{
                color: "rgb(46, 51, 51)",
                textDecoration: "inherit",
              }}
            >
              <Title>שאלות נפוצות</Title>
            </Link>
            <Link
              to="/"
              style={{
                color: "rgb(46, 51, 51)",
                textDecoration: "inherit",
              }}
            >
              <Title>צור קשר</Title>
            </Link>
          </Titles>
          <LoginRegContainer>
            <SecTitle>הרשמה</SecTitle>
            <SecTitle>|</SecTitle>
            <SecTitle>התחברות</SecTitle>
          </LoginRegContainer>
        </Center>
        <Right>
          <MainMenu />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
