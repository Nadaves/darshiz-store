import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../components/requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import Alert from "@mui/material/Alert";
import { Navigate } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  background-color: rgba(201, 40, 20, 0.15);
  display: flex;
  justify-content: center;
  height: 90vh;
  padding: 20px;
`;
const Image = styled.img``;
const InfoContainer = styled.div`
  padding: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Title = styled.div`
  font-size: 50px;
`;
const Desc = styled.div`
  margin-top: 20px;
  direction: rtl;
  font-size: 15px;
`;
const Price = styled.div`
  padding: 10px;
  font-size: 30px;
`;
const Filter = styled.div`
  display: flex;
  direction: rtl;
  justify-content: flex-start;
  align-items: flex-start;
  width: 25%;
  height: 25%;
`;
const Colors = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 20px;
`;
const Color = styled.span`
  cursor: pointer;
  height: 30px;
  width: 30px;
  margin: 3px;
  border: 1.5px solid black;
  box-shadow: 2px 2px 2px gray;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PurchaseControl = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
`;
const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 20px;
`;
const QuantitySign = styled.div`
  cursor: pointer;
  margin-top: 3px;
  padding: 2px;
`;
const QuantityDisplay = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 3px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  font-size: 20px;
  font-weight: 600;
`;
const Button = styled.button`
  cursor: pointer;
  height: 75%;
  background-color: white;
`;

const Products = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [productColors, setProductColors] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selColor, setSelColor] = useState();
  const [alert, setAlert] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (Sign) => {
    if (Sign === "add") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        setProductColors(res.data.pColors);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleButton = () => {
    if (!selColor) {
      setAlert(true);
    } else {
      setAlert(false);
      dispatch(
        addProduct({
          product: product,
          SelColor: selColor,
          SelQty: quantity,
          price: product.price,
        })
      );
      setRedirect(true);
    }
  };

  const handleColor = (color) => {
    setSelColor(color);
  };

  return !redirect ? (
    <Container>
      <Navbar />
      <Wrapper>
        <Image src={product.img} />
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>₪ {product.price}</Price>
          <Filter>
            <Desc>צבעים</Desc>
            <Colors>
              {productColors.map((item) => (
                <Color color={item} onClick={() => handleColor(item)}></Color>
              ))}
            </Colors>
          </Filter>
          <PurchaseControl>
            <QuantityContainer>
              <QuantitySign onClick={() => handleClick("remove")}>
                <RemoveOutlinedIcon />
              </QuantitySign>
              <QuantityDisplay>{quantity}</QuantityDisplay>
              <QuantitySign onClick={() => handleClick("add")}>
                <AddOutlinedIcon />
              </QuantitySign>
            </QuantityContainer>
            <Button onClick={handleButton}>הוסף לעגלה</Button>
          </PurchaseControl>
          {alert ? <Alert severity="error">בחר צבע</Alert> : null}
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  ) : (
    <Navigate to="/" />
  );
};

export default Products;
