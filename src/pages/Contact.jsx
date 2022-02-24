import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import MobileFooter from "../components/MobileFooter";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Container = styled.div`
  padding: 20px;
  background-color: rgb(223, 215, 213);
  display: flex;
  align-items: center;
  justify-content: center;
  direction: rtl;
  flex-direction: column;
  @media screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 900px) {
    width: 30%;
  }
`;

const ContactOption = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  padding: 0.1em;
`;

const Link = styled.a`
  text-decoration: inherit;
  color: black;
`;

const Desc = styled.div`
  margin-right: 0.5em;
`;

function Contact() {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });

  return (
    <>
      <Navbar />
      <Container>
        <ContactContainer>
          <ContactOption>
            <Desc>
              <h1>חן אשל, "דרשיז"</h1>
            </Desc>
          </ContactOption>
          <Link href="https://api.whatsapp.com/send/?phone=972545442928&text&app_absent=0">
            <ContactOption>
              <WhatsAppIcon /> <Desc>הודעת וואטספ</Desc>
            </ContactOption>
          </Link>
          <Link href="mailto:darshiz.baby@gmail.com">
            <ContactOption>
              <AlternateEmailIcon />
              <Desc>דואר אלקטרוני</Desc>
            </ContactOption>
          </Link>
          <Link href="https://www.instagram.com/invites/contact/?i=ycfohdeyyn9a&utm_content=n3czjiq%E2%80%8E%E2%80%8F">
            <ContactOption>
              <InstagramIcon />
              <Desc>עמוד אינסטגרם</Desc>
            </ContactOption>
          </Link>
        </ContactContainer>
        <ContactContainer>
          <img
            src="https://i.postimg.cc/NFm2vZFb/589c840564b351149f22a838.png"
            alt="envelope"
            height="250px"
          />
        </ContactContainer>
      </Container>
      {isMobile ? <MobileFooter /> : <Footer />}
    </>
  );
}

export default Contact;
