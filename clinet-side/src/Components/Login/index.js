import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  Container,
  Form,
  Title,
  Input,
  Button,
  DropdownLink,
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  TriangleRight,
} from "./Style.js";

const options = [
  { label: "Specialist", link: "/SpecialistSignUpForm" },
  { label: "Parent", link: "/ParentSignUpForm" },
  { label: "Patient", link: "/PatientSignUpForm" },
];

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(null);

  const setAuther = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
  };
  const setData = (userdata) => {
    localStorage.setItem("data", JSON.stringify(userdata));
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/token/", {
        email,
        password,
      });
      const decodedtoken = jwt_decode(response.data.access);
      setUserId(decodedtoken["user_id"]);
      const tempUserId = decodedtoken["user_id"];
      console.log(decodedtoken);
      setAuther(response.data);
      console.log(response.data);
      try {
        const response = await axios.get(
          "http://localhost:8000/user/" + tempUserId + "/"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {

        console.error(error);
      }
    window.location.replace("http://localhost:3000/");
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // SetAuther

  // Karim Code
  const loginHandler = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    setAuther(data);
    window.location.replace("http://localhost:3000/");
  };
  // For Logout
  const logout = () => {
    localStorage.removeItem("user");
  };

  return (
    <>
      <Container>
        <TriangleRight></TriangleRight>
        <Form onSubmit={handleSignIn}>
          <Title>Sign In</Title>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button type="submit">Sign In</Button>
            <DropdownContainer>
              <DropdownButton onClick={toggleDropdown}>
                Create new account
              </DropdownButton>
              <DropdownContent isOpen={isOpen}>
                {options.map(({ label, link }) => (
                  <DropdownLink key={label} to={link}>
                    {label}
                  </DropdownLink>
                ))}
              </DropdownContent>
            </DropdownContainer>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Login;

