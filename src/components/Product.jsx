import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 5px;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Img = styled.img`
  height: 100%;
  max-width: 300px;
  object-fit: cover;
`;
const IconContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
`;
const Icon = styled.div`
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  border-radius: 50%;
  margin: 3px 3px;
  opacity: 65%;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(120%);
    opacity: 90%;
  }
`;
const Product = ({ item }) => {

  return (
    <Container>
      <Img src={item.img} />
      <Info>
        <IconContainer>
          <Link to={`/productShowcase/${item._id}`}>
            <Icon>
              <SearchIcon />
            </Icon>
          </Link>
          <Icon>
            <FavoriteBorderIcon />
          </Icon>
          <Icon>
            <AddShoppingCartIcon />
          </Icon>
        </IconContainer>
      </Info>
    </Container>
  );
};

export default Product;
