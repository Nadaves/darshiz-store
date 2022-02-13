import styled from "styled-components";
import { CategoriesData } from "./data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 3px;

  @media screen and (max-width: 1065px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: auto;
  }
`;
const Categories = () => {
  return (
    <Container>
      {CategoriesData.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
