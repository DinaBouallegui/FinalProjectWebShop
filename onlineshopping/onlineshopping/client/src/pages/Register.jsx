import styled from "styled-components";
import { mobile } from "../responsive";
import Navbar from "../components/Navbar";
import { useDispatch,useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import { useState } from "react";
import { Link } from "react-router-dom";

  

const handleRegister = (e)=>{
   e.preventDefault();
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    
       url("https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 25px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 25px 15px 5px 5px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 10px;
  margin: 20px 5px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px ;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, {  username, password, email });
  };
  return (
    <div>
     <Navbar />
     <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          {/* <Input placeholder="Name" 
          onChange={(e) => setName(e.target.value)}/>
          <Input placeholder="Surname" 
          onChange={(e) => setSurname(e.target.value)}/>
          <Input placeholder="Phone number" 
          onChange={(e) => setNumber(e.target.value)}/> */}
          <Input placeholder="username" 
          onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="email" 
          onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="password" 
          onChange={(e) => setPassword(e.target.value)}/>
          <Agreement>
          
          Already have an account? <Link to="/login">Sign in</Link>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching} >CREATE AN ACCOUNT</Button>
        </Form>
         </Wrapper>
    </Container>
    </div>
  );
};

export default Register;
