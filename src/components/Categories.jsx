import styled from "styled-components"
import { CategoriesData } from './data';
import CategoryItem from "./CategoryItem";

const Container = styled.div`
display: flex;
padding: 0;
top: 0;
`
const Categories = () => {
    return (
        <Container>
            {CategoriesData.map(item => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
