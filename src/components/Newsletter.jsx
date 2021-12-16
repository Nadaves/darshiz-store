import React from 'react'
import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
background-color: rgb(46,51,51);
color: white;
height: 30vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 40px;
font-weight: 500;
`
const Desc = styled.p`
font-size: 14px;
letter-spacing: 2.5px;
`
const FormContainer = styled.div`
margin: 10px;
height: 30px;
width: 80%;
display: flex;
justify-content: space-between;
align-items: space-evenly;
border: 1px solid lightgray;
`
const Input = styled.input`
flex: 8;
height: 90%;
border: none;
text-align: center;
padding-left: 20px;
`
const Button = styled.button`
flex: 1;
height: 100%;
cursor: pointer;
background-color: white;
color: gray;
`
const Aligner = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Newsletter = () => {
    return (
        <Container>
            <Aligner>
            <Title>הירשמו לקבלת עדכונים</Title>
            <Desc>ותהיו הראשונים לדעת על מוצרים חדשים מאת דרשיז</Desc>
            <FormContainer>
            <Input placeholder="Email"/>
            <Button>
            <SendIcon>הרשמה</SendIcon>
            </Button>
            </FormContainer>
            </Aligner>
        </Container>
    )
}

export default Newsletter
