import React, { useState , useEffect } from "react";
import axios from 'axios';
import { Container , Form , Input , Button , FileInput , FileInputLabel , FormGroup , ImagePreview , Label , TriangleRight , ProfileImage} from './Style.js'
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../Footer/index.js";
import data from "../../../JS/data.json";


const INITIAL_STATE = {
  id: 1,    
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  specialty: "",
  password: "",
  dob: "",
  phoneNumber: "",
  profileImage: "",
};

const EditParentProfile = () => {


  const [profileImage, setProfileImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [user, setUser] = useState(INITIAL_STATE);

  useEffect(() => {
    try {
      const userProfile = data.Profiles.find(profile => profile.id === 1);
      if (userProfile) {
        setUser(userProfile);
      } else {
        console.log("User profile not found");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);


    const handleChange = (e) => {
      console.log(e.target.name, " : ", e.target.value);
      setUser({ ...user, [e.target.name]: e.target.value });
    };

  
    const handleEditProfile = async (e) => {
      e.preventDefault();
      try {
        console.log("Data for update : ", user);
        const response = await axios.put(`https://yourendpoint/${user.id}`, user);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
  const handleProfileImagePreview = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview('');
    }
    setProfileImage(file);
  };





    return (
      <React.Fragment>
        
        <Container>
        <TriangleRight></TriangleRight>
        <Form onSubmit={handleEditProfile}>
          <ProfileImage src={user.profileImage} alt="" /> 
          <Label>First Name</Label>
          <Input name="firstName" type="text" placeholder="First Name" value={user.firstName} onChange={handleChange} />
          <Label>Last Name</Label>
          <Input name="lastName" type="text" placeholder="Last Name" value={user.lastName}  onChange={handleChange} />
          <Label>Email</Label>
          <Input name="email" type="email" placeholder="Email" value={user.email}  onChange={handleChange} />
          <Label>Uername</Label>
          <Input name="username" type="text" placeholder="Username" value={user.username}  onChange={handleChange} />
          <Label>Password </Label>
          <Input name="password" type="password" placeholder="Password" value={user.password}  onChange={handleChange} />
          <Label>Phone Number</Label>
          <Input name="phoneNumber" type="tel" placeholder="Phone Number" value={user.phoneNumber}  onChange={handleChange} />
          <FormGroup>
            <FileInputLabel htmlFor="profile-image">Change Profile Image</FileInputLabel>
            <FileInput id="profile-image" placeholder="Profile Image" type="file"  onChange={handleProfileImagePreview} />
            {imagePreview && <ImagePreview src={imagePreview} alt="Profile" />}
          
          </FormGroup>
          <div>
          <Button type="submit">Save</Button>

          </div>
        </Form>
      </Container>
      
    
    <Footer/>
   </React.Fragment>
    );
  };

  export default EditParentProfile;
  
