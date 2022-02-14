import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Container = styled.div`
  display: flex;
  background-color: rgb(223, 215, 213);
  justify-content: space-evenly;
  padding-top: 5%;
  padding-bottom: 5%;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: 100;
`;
const LinksContainer = styled.div`
  margin: 10px 10px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const SocialItem = styled.div`
  cursor: pointer;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
`;
const RightItem = styled.div`
  display: flex;
  margin: 0.2rem;
`;

const ItemSeperation = styled.div`
  margin-right: 0.5rem;
`;
const Title = styled.h1`
font-weight: 100;
font-size 25px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Darshiz baby.</Logo>
        <LinksContainer>
          <SocialItem>
            <InstagramIcon />
          </SocialItem>
          <SocialItem>
            <FacebookIcon />
          </SocialItem>
        </LinksContainer>
      </Left>
      <Right>
        <Title>יצירת קשר</Title>
        <RightItem>
          <ItemSeperation>Contact@darshiz.co.il</ItemSeperation>
          <MailIcon />
        </RightItem>
        <RightItem>
          <ItemSeperation>054-5442928</ItemSeperation>
          <WhatsAppIcon />
        </RightItem>
      </Right>
    </Container>
  );
};

export default Footer;
