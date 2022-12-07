import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCart } from "@material-ui/icons"
import { Badge } from '@material-ui/core'
import {mobile} from "../responsive"

const Container = styled.div`
  height: 60px;
  background-color: antiquewhite;
  ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div `
  flex:1;
  display:flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}

`
const SearchContainer = styled.div`
border: 0.5px solid white;
display: flex;
align-items: center;
margin-left: 25px;
padding:5px;
${mobile({ fontSize: "12px", marginLeft:"5px" })}
`
const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
`
const Center = styled.div `
  flex:1;
  text-align:center;
`
const Logo = styled.h1`
font-weight : bold;
${mobile({ fontSize: "22px", marginLeft: "20px" })}
`
const Right = styled.div `
  flex:1;
  display: flex;
  align-items:center;
  justify-content: flex-end ;
  ${mobile({ justifyContent: "center" , flex: 2 })}
`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
${mobile({ fontSize: "10px", marginLeft:"10px" })}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left> 
          <Language> EN </Language>
          <SearchContainer>
             <Input placeholder="Search"/>
             <Search style = {{color:"gray", fontSize:16}}/>
              </SearchContainer> </Left>
          
        <Center><Logo> WEBSHOP </Logo></Center>
        <Right> 
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
      <ShoppingCart/>
    </Badge>
          
          </MenuItem>
        </Right>
      
      </Wrapper>
      
        
        </Container>
  )

}

export default Navbar