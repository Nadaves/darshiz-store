import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  top: 0;
  position: relative;
  margin: 3px auto;
  max-width: 355px;
  max-height: 380px;
  @media screen and (min-width: 900px) {
    margin: 3px;
    max-width: none;
    max-height: 450px;
  }
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 80px;
  text-shadow: 1.5px 1.5px #000000;
`;
const Button = styled.button`
  background-color: white;
  font-weight: 500;
  opacity: 95%;
  height: 55px;
  width: 120px;
  cursor: pointer;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  padding: 25%;
  color: white;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Link to={`/products/${item.category}`}>
          <Button>{item.categoryBtn}</Button>
        </Link>
      </InfoContainer>
      <Img src={item.img} />
    </Container>
  );
};

export default CategoryItem;
