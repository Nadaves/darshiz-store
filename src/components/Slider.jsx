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
`;
const Desc = styled.p`
  letter-spacing: 3px;
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

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link>{item.link}</Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
