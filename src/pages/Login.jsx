import React, { useState } from "react";
import styled from "styled-components";
import NoBG from "../assets/NoBG.png";
import Fab from "@mui/material/Fab";
import FingerprintRoundedIcon from "@mui/icons-material/FingerprintRounded";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 2rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Logo = styled.img`
  height: 120px;
`;

const SecTitle = styled.h2`
  font-size: 15px;
  padding: 0.5em;
  cursor: pointer;
`;
const Form = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;
`;
const Input = styled.input`
  color: black;
  font-size: 18px;
  font-weight: 500;
  margin: 5px;
  text-align: center;
  flex: 1;
  border: 1.5px solid lightgray;
  direction: rtl;
  height: 30px;
  width: 200px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const ButtonContainer = styled.div`
display: flex;
align-items: flex;end;
width: 100%;
color: white;
padding: 2px;
cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return !user ? (
    <Container>
      <Wrapper>
        <Logo src={NoBG} />
        <Form>
          <Input
            placeholder="דואר אלקטרוני"
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="סיסמא"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <LinkContainer>
          <Link
            to="/retreivePass"
            style={{
              color: "rgb(255, 255, 255)",
              textDecoration: "inherit",
              textAlign: "left",
            }}
          >
            <SecTitle>שכחתי ססמא</SecTitle>
          </Link>{" "}
        </LinkContainer>
        <ButtonContainer>
          <Fab>
            <FingerprintRoundedIcon fontSize={"large"} onClick={handleClick} />
          </Fab>
        </ButtonContainer>
        {/* {error && <Error>Wrong username/password</Error>} */}
      </Wrapper>
    </Container>
  ) : (
    <Navigate to="/" />
  );
};

export default Login;
