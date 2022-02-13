import React from "react";
import styled from "styled-components";
import Darshiz from "../../assets/Darshiz.jpg";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  background-image: url(${Darshiz});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;
const Description = styled.p``;
const Title = styled.h1`
  justify-content: center;
`;
const Button = styled.button`
  background-color: white;
  font-weight: 500;
  opacity: 95%;
  height: 55px;
  width: 120px;
  cursor: pointer;
`;

function About() {
  return (
    <Container>
      <ImageContainer />
      <InfoContainer>
        <Title>קצת עליי</Title>
        <Description>
          סוף סוף, מקום קטן משלי. נעים להכיר, קוראים לי אשליז ואני שמחה שהגעתם
          לבקר. המקום הזה, שאני קוראת לו בית, שלכם בדיוק כפי שהוא שלי. אני יותר
          מאשמח אם תכנסו ותשוטטו, תסתכלו ותקנו ובעיקר תרוצו לספר לכל הדודות
          שלכם, כי הן הלקוחות הכי טובות. מבטיחה לכם הנאה גדולה וטונות של סיפוק.
        </Description>
      </InfoContainer>
      <Button>קראו עוד</Button>
    </Container>
  );
}

export default About;
