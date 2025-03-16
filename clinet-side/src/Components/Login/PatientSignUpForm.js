import React, { useState } from "react";
import axios from "axios";
import countrydata from "./CountryData.json";
import {
  Container,
  Form,
  Input,
  Button,
  DropdownContainer,
  DropdownButton,
  FileInput,
  FileInputLabel,
  FormGroup,
  ImagePreview,
  TriangleRight,
  CustomSelect,
} from "./Style.js";
import { Link } from "react-router-dom";

const PatientSignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("user.username", username);
      formData.append("user.email", email);
      formData.append("user.password", password);
      formData.append("user.first_name", firstName);
      formData.append("user.last_name", lastName);
      formData.append("user.phone_number", phoneNumber);
      formData.append("user.birthdate", dob);
      formData.append("user.profile_image", profileImage);
      formData.append("user.country", country);
      formData.append("user.city", city);
      formData.append("user.address", address);
      // const user = {
      //   first_name: firstName,
      //   last_name: lastName,
      //   email,
      //   username,
      //   password,
      //   address,
      //   birthdate: dob,
      //   phone_number: phoneNumber,
      //   country: country,
      //   city: city,
      // };
      // formData.append("user", JSON.stringify(user));
      // formData.append("specialization", specialty);
      // formData.append("cv", cv);

      console.log(formData);
      const response = await axios.post(
        "http://127.0.0.1:8000/child/",
        formData
      );

      //window.location.replace("http://localhost:3000/Login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleProfileImagePreview = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
    setProfileImage(file);
  };
  const handleCountry = (e) => {
    const getCountryId = e.target.value;
    const selectedCountry = countrydata.find(
      (country) => country.country_id === getCountryId
    );
    const getStatedata = selectedCountry.states;
    console.log(getCountryId);
    setState(getStatedata);
    setCountryid(getCountryId);
    setCountry(selectedCountry.country_name);
  };
  const handlestate = (e) => {
    const stateid = e.target.value;
    const selectedstate = state.find((state) => state.state_id === stateid);
    setStateid(stateid);
    setCity(selectedstate.state_name);
  };

  return (
    <>
      <Container>
        <TriangleRight></TriangleRight>
        <Form onSubmit={handleSignUp}>
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

          <CustomSelect
            placeholder="Country"
            onChange={(e) => handleCountry(e)}
          >
            <option value="">Select a country</option>
            {countrydata.map((getcountry, index) => (
              <option value={getcountry.country_id} key={index}>
                {getcountry.country_name}
              </option>
            ))}
          </CustomSelect>

          <CustomSelect placeholder="City" onChange={(e) => handlestate(e)}>
            <option value="">Select a city</option>
            {state.map((getstate, index) => (
              <option value={getstate.state_id} key={index}>
                {getstate.state_name}
              </option>
            ))}
          </CustomSelect>

          <Input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <Input
            type="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <FormGroup>
            <FileInputLabel htmlFor="profile_image">
              Choose Profile Image
            </FileInputLabel>
            <FileInput
              id="profile_image"
              placeholder="Profile Image"
              type="file"
              onChange={handleProfileImagePreview}
            />
            {imagePreview && <ImagePreview src={imagePreview} alt="Profile" />}
          </FormGroup>
          <div>
            <Button type="submit">Sign Up</Button>
            <Link to={{ pathname: "/Login" }}>
              <DropdownContainer>
                <DropdownButton>Already have an account</DropdownButton>
              </DropdownContainer>
            </Link>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default PatientSignUpForm;
