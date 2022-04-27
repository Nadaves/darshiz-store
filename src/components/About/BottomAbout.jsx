import React from "react";
import styled from "styled-components";
import Background from "../../assets/BottomAbout.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: 3px;
  background-image: url(${Background});
  background-position: 58%;
  background-size: cover;
  @media screen and (min-width: 900px) {
    margin-top: 0;
  }
`;

const InfoContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  width: 50%;
  direction: rtl;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

const Description = styled.p`
  font-weight: 100;
  font-size: 18px;
  margin: 10px auto;
`;

const Title = styled.h1`
  font-weight: 100;
  justify-content: center;
  direction: rtl;
`;

const Fader = styled.div`
  height: 50px;
  width: 100%;
  background: rgb(223, 215, 213);
  background: linear-gradient(
    0deg,
    rgba(223, 215, 213, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;
function About() {
  return (
    <Container>
      <InfoContainer>
        <Title>על "דרשיז"</Title>
        <Description>
          סוף סוף, מקום קטן משלי. נעים להכיר, קוראים לי חן ואני שמחה שהגעתם
          לבקר. תמיד אהבתי ליצור ולפנק, מה שהוביל אותי ליצור את "דרשיז". המקום
          הזה, שאני קוראת לו בית, שלכם בדיוק כפי שהוא שלי. אני יותר מאשמח אם
          תכנסו ותשוטטו, תסתכלו ותקנו ובעיקר תרוצו לספר לכל הדודות שלכם, כי הן
          הלקוחות הכי טובות. מבטיחה לכם הנאה גדולה, אלף מחמאות וערמות של סיפוק.
          תהנו😊
        </Description>
        <Description>
          כל המוצרים שלי שלי נעשים בעבודת יד, בתפירה אישית מלב אל לב, לכם רק
          נשאר להנות מהקטנטנים שלכם! המוצרים נתפרים מבדים איכותיים, ביניהם בדי
          פליז, קרפ, טטרה ו-100% כותנה. ניתן לכבס את מהוצרים במכונת כביסה,
          בתכנית של כביסה עדינה ללא סחיטה ולייבש בצל.
        </Description>
      </InfoContainer>
      <Fader />
    </Container>
  );
}

export default About;
