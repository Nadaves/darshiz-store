import React from "react";
// import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
// import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/cartRedux";

const Container = styled.div``;

const ProductLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-right: 30px;
`;
const ProductRightInfo = styled.div`
  padding-left: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const ProductName = styled.div`
  font-size: 40px;
  font-weight: 500;
`;
const ProductImg = styled.img`
  max-width: 300px;
  height: 300px;
`;
const ProductDesc = styled.div``;
const ProductColor = styled.div`
  cursor: pointer;
  height: 30px;
  width: 30px;
  margin: 3px;
  border: 1.5px solid black;
  box-shadow: 2px 2px 2px gray;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const QuantityContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
`;
// const QuantitySign = styled.div`
//   cursor: pointer;
//   margin-top: 3px;
//   padding: 2px;
// `;
const QuantityDisplay = styled.div`
  font-size: 20px;
`;
// const ProductAvailable = styled.div`
//   font-size: 20px;
// `;
const ProductPrice = styled.div`
  padding-top: 30px;
  font-size: 30px;
`;
const HrContainer = styled.div`
  diplay: flex;
  widht: 100%;
  height: 100%;
  padding: 5px;
`;

const DeleteContainer = styled.span`
  color: grey;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
const Hr = styled.hr``;

const CartProduct = ({ item, index }) => {
  const productIndex = index;
  const Cart = useSelector((state) => state.cart);

  console.log(productIndex);
  console.log(Cart.products.length);
  const handleDelete = () => {
    if (window.confirm("?האם להסיר את המוצר מהעגלה")) {
      dispatch(removeProduct(index));
    }
  };
  const dispatch = useDispatch();
  // const [qty, setQty] = useState(item.SelQty);
  // const handleClick = (type, item) => {
  //   if (type === "remove") {
  //     if (qty > 0) {
  //       setQty(qty - 1);
  //     }
  //   } else {
  //     setQty(qty + 1);
  //   }
  // };
  return (
    <Container>
      <ProductLayout>
        <ProductRightInfo>
          <ProductName>{item.product.title}</ProductName>
          <ProductDesc>{item.product.description}</ProductDesc>
          <ProductColor color={item.SelColor}></ProductColor>
          <QuantityContainer>
            <QuantityDisplay>כמות:</QuantityDisplay>
            {/* <QuantitySign onClick={() => handleClick("remove", item._id)}>
              <RemoveOutlinedIcon />
            </QuantitySign> */}
            <QuantityDisplay>{item.SelQty}</QuantityDisplay>
            {/* <QuantitySign onClick={() => handleClick("add", item._id)}>
              <AddOutlinedIcon />
            </QuantitySign> */}
          </QuantityContainer>
          <ProductPrice>₪{item.price * item.SelQty}</ProductPrice>
        </ProductRightInfo>
        <ProductImg src={item.product.img} />
      </ProductLayout>
      <DeleteContainer>
        <DeleteIcon onClick={handleDelete} />
      </DeleteContainer>
      {productIndex + 1 === Cart.products.length ? null : (
        <HrContainer>
          <Hr />
        </HrContainer>
      )}
    </Container>
  );
};

export default CartProduct;
