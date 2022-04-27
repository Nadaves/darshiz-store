import React, { useState } from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { SliderItems } from "./data";

const Container = styled.div`
  display: flex;
  height: 65vh;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 40%;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.75;
  z-index: 2;
`;
const Wrapper = styled.div`
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  width: 100vw;
  background-color: rgb(${(props) => props.bg});
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2em;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 80px;
  font-weight: 500;
  @media screen and (max-width: 1065px) {
    font-size: 50px;
  }
`;
const Desc = styled.p`
  letter-spacing: 3px;
  font-size: 20px;
`;
const Link = styled.button`
  font-size: 15px;
  margin: 10px;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
`;

const ImgContainer = styled.div``;
const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

const item = SliderItems;

const ConstSlider = () => {
  return (
    <Container>
      <Wrapper>
        <Slide bg={item[0].bg} key={item.id}>
          <ImgContainer>
            <Image src={item[0].img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item[0].title}</Title>
            <Desc>{item[0].desc}</Desc>
          </InfoContainer>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default ConstSlider;
