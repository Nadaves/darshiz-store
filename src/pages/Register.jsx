import React from "react";
import styled from "styled-components";
import NoBG from "../assets/NoBG.png";
import Modal from "react-modal";
import TermsOfUse from "../components/TermsOfUse";
import { useMediaQuery } from "react-responsive";

const DesktopBG =
  "https://images.pexels.com/photos/821735/pexels-photo-821735.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const MobileBG =
  "https://images.pexels.com/photos/10139847/pexels-photo-10139847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const Container = styled.div`
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: rtl;
  background-color: rgba(255, 255, 255, 0.25);
  border: 1px solid gray;
  border-radius: 15px;
  box-shadow: 1.5px 1.5px 19px black;
  width: 70%;
  @media screen and (min-width: 900px) {
    width: 50%;
  }
`;

const Logo = styled.img`
  display: none;
  @media screen and (min-width: 900px) {
    display: block;
    height: 120px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  color: white;
  @media screen and (min-width: 900px) {
    font-size: 30px;
    color: white;
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 900px) {
    flex-direction: row-reverse;
    flex-wrap: wrap;
  }
`;
const Input = styled.input`
  color: black;
  margin: 5px;
  text-align: center;
  flex: 1;
  border: 1.5px solid lightgray;
  direction: rtl;
  min-height: 2rem;
  min-width: 40%;
`;
const Terms = styled.div`
  display: flex;
  direction: rtl;
  font-size: 15px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
`;
const Link = styled.div`
  margin-right: 5px;
  font-weight: bold;
  cursor: pointer;
`;
const Button = styled.button`
  cursor: pointer;
  height: 2rem;
  width: 40%;
  font-size: 15px;
  background-color: white;
`;

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(66, 66, 66, 0.75)",
  },
  content: {
    textAlign: "center",
    background: "white",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    direction: "rtl",
    top: "5%",
    bottom: "5%",
    right: "5%",
    left: "5%",
  },
};

const TermsContainer = styled.div``;

const Register = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 900px)` });
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {}
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Container
      style={{ backgroundImage: `url(${isMobile ? MobileBG : DesktopBG})` }}
    >
      <Wrapper>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h1>תנאי שימוש באתר</h1>
          <TermsContainer>{TermsOfUse}</TermsContainer>
          <Button onClick={closeModal}>סגור</Button>
        </Modal>
        <Logo src={NoBG} />
        <Title>יצירת משתמש חדש</Title>
        <Form>
          <Input placeholder="שם פרטי" />
          <Input placeholder="שם משפחה" />
          <Input placeholder="שם משתמש" />
          <Input placeholder="דואר אלקטרוני" />
          <Input placeholder="סיסמא" />
          <Input placeholder="אימות סיסמא" />
        </Form>
        <Terms>
          {isMobile ? (
            <p onClick={openModal}>
              בהרשמתך את/ה מסכימ/ה <b>לתנאי השימוש באתר</b>
            </p>
          ) : (
            <>
              ביצירת המשתמש אתם מביעים הסכמתכם
              <Link onClick={openModal}>לתנאי השימוש באתר </Link>
            </>
          )}
        </Terms>
        <Button>הרשמה</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
