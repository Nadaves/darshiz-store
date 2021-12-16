import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const Wrapper = styled.div`
  min-height: 65vh;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const Filter = styled.div`
  padding: 20px;
  margin-right: 10px;
  direction: rtl;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
const Select = styled.select`
  height: 30px;
  margin: 5px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <FilterContainer>
          <Filter>
            <FilterText>סדר מוצרים</FilterText>
            <Select name="price" onChange={(e) => setSort(e.target.value)}>
              <Option disabled defaultValue>
                סדר מוצרים
              </Option>
              <Option value="newest">החדשים ביותר</Option>
              <Option value="bestsellers">הנמכרים ביותר</Option>
              <Option value="price-des">מהיקר לזול</Option>
              <Option value="price-asc">מהזול ליקר</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>מיין מוצרים</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled defaultValue>
                צבע
              </Option>
              <Option>סגול</Option>
              <Option>תכלת</Option>
              <Option>ורוד</Option>
              <Option>לבן</Option>
              <Option>צהוב</Option>
              <Option>כחול</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled defaultValue>
                מידה
              </Option>
              <Option>קטנטנים</Option>
              <Option>חצי שנה-שנה</Option>
              <Option>שנה-שנתיים</Option>
              <Option>גדולים</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort} />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProductList;
