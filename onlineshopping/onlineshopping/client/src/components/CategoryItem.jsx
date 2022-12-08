
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import { categories} from "../data";

const Container = styled.div`
  display:flex;
  // flex-direction:column;
  flex: 1;
  margin: 1px;
  height: 40vh;
  position: relative;
  // direction:flex;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:#331900;
    // color:black;
    margin-bottom: 20px;
    font-size:13pt;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        {/* <Button>SHOP NOW</Button> */}
      </Info>
      </Link>
    </Container>
  );
};

  

export default CategoryItem;
