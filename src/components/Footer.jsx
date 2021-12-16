import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Container = styled.div`
display: flex;
background-color: rgb(46,51,51);
color: white;
height: 100%;
justify-content: space-evenly;
padding-top: 30px;
padding-bottom: 5%;
`

const Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Logo = styled.h1`
font-weight: 100;
`
const LinksContainer = styled.div`
margin: 10px 10px;
display: flex;
width: 100%;
justify-content: space-evenly;
`
const SocialItem = styled.div`
cursor: pointer;
`
const Center = styled.div`
direction: rtl;
`
const CenterContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
const CenterItem = styled.div`
cursor: pointer;
flex: 1;
`
const Right = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
margin-right: 5%;
`
const RightItem = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: flex-end;
font-weight: 100;
display: flex
margin: 3px;
`
const Title = styled.h1`
font-weight: 100;
font-size 25px;
`


const Footer = () => {
    return (
        <Container>
            <Left>
            <Logo>Darshiz baby.</Logo>
            <LinksContainer>
                <SocialItem>
                    <InstagramIcon/>
                </SocialItem>
                <SocialItem>
                    <FacebookIcon/>
                </SocialItem>
                <SocialItem>
                    <PinterestIcon/>
                </SocialItem>
                <SocialItem>
                    <InfoIcon/>
                </SocialItem>
            </LinksContainer>
            </Left>
            <Center>
                <Title>קישורים</Title>
                <CenterContainer>
                    <CenterItem>מוצרים</CenterItem>
                    <CenterItem>על דרשיז</CenterItem>
                    <CenterItem>לקוחות מספרים</CenterItem>
                </CenterContainer>
            </Center>
            <Right>
                <Title>יצירת קשר</Title>
                <RightItem>
                    אורנים 5, גבעת שמואל                   
                    <LocationOnIcon/>
                </RightItem>
                <RightItem>
                    Contact@Darshiz-baby.co.il
                    <MailIcon/>
                </RightItem>
                <RightItem>
                    054-5442928
                    <LocalPhoneIcon/>
                </RightItem>
            </Right>
        </Container>
    )
}

export default Footer
