import styled from "styled-components";
import { CategoriesData } from "./data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: row;
    padding: 0;
    top: 0;
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
