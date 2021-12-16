import React, { useState } from "react";
import styled from "styled-components";
import NoBG from "../assets/NoBG.png";
import Fab from "@mui/material/Fab";
import FingerprintRoundedIcon from "@mui/icons-material/FingerprintRounded";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.65);
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Logo = styled.img`
  height: 120px;
`;
const Title = styled.div`
  font-size: 30px;
  color: white;
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
        <Title>התחברות לאתר</Title>
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
