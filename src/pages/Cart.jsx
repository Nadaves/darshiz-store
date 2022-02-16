import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import MobileFooter from "../components/MobileFooter";
import Footer from "../components/Footer";
import CartProduct from "../components/CartProduct";
import { useSelector, useDispatch } from "react-redux";
import { CartReset } from "../redux/cartRedux";
import { Link } from "react-router-dom";
import ShoppingBag from "../assets/Bag.png";
import { useMediaQuery } from "react-responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  direction: rtl;
  width: 100%;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  direction: rtl;
  justify-content: space-evenly;
  padding: 30px;
`;

const Hr = styled.hr`
  height: 1px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: gray;
`;

const TopText = styled.div`
  font-size: 25;
  font-weight: 400;
  text-decoration: underline;
`;
const TopButton = styled.button`
  height: 50px;
  width: 150px;
  border: ${(props) =>
    props.type === "filled" ? "none" : "solid 1.5px black"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  direction: rtl;
`;
const BottomRight = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  // overflow-y: scroll;
  // -ms-overflow-style: none;
  // &::-webkit-scrollbar {
  //   display: none;
  //   border: none;
  // }
`;

const BottomLeft = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 4%;
  margin-left: 4%;
  width: 100%;
  top: 0;
  bottom: 0;
`;

const Form = styled.div``;
const SecTitle = styled.div`
  font-size: 30px;
  font-weight: 300;
`;
const Money = styled.div`
  font-size: 30px;
  font-weight: 300;
  margin-right: 35px;
`;
const SecTotal = styled.div`
  font-size: 30px;
  font-weight: 300;
  margin-left: 20px;
`;
const LineItem = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  justify-content: space-between;
`;
const CheckoutLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 1px solid grey;
  border-radius: 15px;
  padding: 15px;
`;
const CheckOutButton = styled.button`
  height: 50px;
  width: 100%;
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
`;

// const CartResetBtn = styled.button`
//   width: 100px;
//   height: 50px;
//   background-color: red;
//   color: white;
// `;

const Img = styled.img`
  max-height: 300px;
`;

const EmptyCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Cart = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  const Delivery = 25;
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart);
  const handleReset = () => {
    dispatch(CartReset());
  };
  return Cart.quantity > 0 ? (
    <Container>
      <Navbar />
      <Wrapper>
        <Top>
          <Link to="/">
            <TopButton>המשיכו בקניות</TopButton>
          </Link>
          <TopText>מוצרים בעגלה ({Cart.quantity})</TopText>
          <TopButton type={"filled"}>מעבר לתשלום</TopButton>
          {/* <CartResetBtn onClick={handleReset}>איפוס עגלה</CartResetBtn> */}
        </Top>
        <Bottom>
          <BottomRight>
            {Cart.products.map((item, index) => (
              <CartProduct item={item} index={index} key={item._id} />
            ))}
          </BottomRight>
          <BottomLeft>
            <CheckoutLayout>
              <Form>
                <Title>הסל שלכם</Title>
                <LineItem>
                  <SecTitle>סיכום ביניים</SecTitle>
                  <Money>₪{Cart.total}</Money>
                </LineItem>
                <LineItem>
                  <SecTitle>משלוח</SecTitle>
                  <Money>₪{Delivery}</Money>
                </LineItem>
                <LineItem>
                  <SecTotal>סך הכל</SecTotal>
                  <Money>₪{Cart.total + Delivery}</Money>
                </LineItem>
                <CheckOutButton>מעבר לתשלום</CheckOutButton>
              </Form>
            </CheckoutLayout>
          </BottomLeft>
        </Bottom>
      </Wrapper>
      {isMobile ? <MobileFooter /> : <Footer />}
    </Container>
  ) : (
    <Container>
      <Navbar />
      <Wrapper>
        <Top>
          <Link to="/">
            <TopButton>המשיכו בקניות</TopButton>
          </Link>
          <TopText>מוצרים בעגלה ({Cart.quantity})</TopText>
          {/* <CartResetBtn onClick={handleReset}>איפוס עגלה</CartResetBtn> */}
        </Top>
        <Hr />
        <Bottom>
          <EmptyCartContainer>
            <Title>הסל שלכם ריק</Title>
            <Img alt="lost" src={ShoppingBag} />
          </EmptyCartContainer>
        </Bottom>
      </Wrapper>
      {isMobile ? <MobileFooter /> : <Footer />}
    </Container>
  );
};

export default Cart;
