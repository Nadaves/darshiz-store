import React from 'react'
import styled from "styled-components"
import NoBG from "../assets/NoBG.png"

const Container = styled.div`
height: 100vh;
width: 100vw;
background-image: url("https://images.pexels.com/photos/821735/pexels-photo-821735.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 65%;
width: 50%;
background-color: rgba(255,255,255,0.65);
border: 1px solid black;
border-radius: 15px;
box-shadow: 5px 5px 5px black;
`
const Logo = styled.img`
height: 120px;
`

const Title = styled.div`
font-size: 30px;
`
const Form = styled.div`
display: flex;
flex-direction: row-reverse;
flex-wrap: wrap;
width: 100%;
`
const Input = styled.input`
color: black;
font-size: 15px;
margin: 5px;
text-align: center;
flex: 1;
border: 1.5px solid lightgray;
direction: rtl;
height: 35px;
min-width: 40%;
`
const Terms = styled.div`
display: flex;
direction: rtl;
font-size: 15px;
font-weight: 500;
`
const Link = styled.div`
margin-right: 5px;
font-weight: bold;
cursor: pointer;
`
const Button = styled.button`
cursor: pointer;
height: 10%;
width: 40%;
font-size: 15px;
background-color: white;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={NoBG}/>
                <Title>יצירת משתמש חדש</Title>
                <Form>
                    <Input placeholder="שם פרטי"/>
                    <Input placeholder="שם משפחה"/>
                    <Input placeholder="שם משתמש"/>
                    <Input placeholder="דואר אלקטרוני"/>
                    <Input placeholder="סיסמא"/>
                    <Input placeholder="אימות סיסמא"/>
                </Form>
                <Terms> ביצירת המשתמש אתם מביעים הסכמתכם<Link>לתנאי השימוש באתר </Link></Terms>
                <Button>הרשמה</Button>
            </Wrapper>
        </Container>
    )
}

export default Register
