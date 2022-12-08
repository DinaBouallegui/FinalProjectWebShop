import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, NavLink } from "react-router-dom";


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Nedixie Store</Logo>
        WOMEN FASHION
        
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><Link to="/"  style={{textDecoration: 'none', color:"black"}} >Home</Link></ListItem>
          <ListItem><Link to="/cart"  style={{textDecoration: 'none', color:"black"}} >Cart</Link></ListItem>
          <ListItem><Link to="/products/JEANS"  style={{textDecoration: 'none', color:"black"}} >Jeans</Link></ListItem>
          <ListItem><Link to="/products/dress"  style={{textDecoration: 'none', color:"black"}} >Dresses</Link></ListItem>
          <ListItem><Link to="/products/T-SHIRTS"  style={{textDecoration: 'none', color:"black"}} >T-Shirts and tops</Link></ListItem>
          <ListItem><Link to="/products/COATS"  style={{textDecoration: 'none', color:"black"}} >Coats</Link></ListItem>
          <ListItem><Link to="/products/TROUSERS"  style={{textDecoration: 'none', color:"black"}} >Trousers</Link></ListItem>
          <ListItem><Link to="/products1"  style={{textDecoration: 'none', color:"black"}} >Popular Products</Link></ListItem>
          <ListItem><Link to="/products/JACKETS"  style={{textDecoration: 'none', color:"black"}} >Jackets</Link></ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>   
        {/* <Title>Contact</Title> */}
        {/* <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem> */}
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
