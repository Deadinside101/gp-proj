import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 5%;
	width:100%;

`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	padding: 30px;
	border-radius: 10px;
	box-shadow: 0px 0px  rgba(0, 0, 0, 0.1);
	width: 40%;
`;

export const Title = styled.h1`
	font-size: 36px;
	margin-bottom: 30px;
	text-align: center;
	color: #000;
`;

export const Input = styled.input`
	padding: 10px;
	margin-bottom: 20px;
	width: 100%;
	font-size: 16px;
	border : none;
	border-bottom: 3px solid black;
	

`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  text-align: left;
  color: rgba(0, 0, 0, 0.64);
  text-decoration: none;
  font-size: 16px;
  margin-left: 1.5%;
`;

export const Button = styled.button`
	justify-content: center;
	align-items: center;
	gap: 10px;
	width: 60%;
    margin-left: 22%;
	height: 8%;
	padding: 20px;
	border-radius: 5px;
	border: none;
	background-color: rgba(120, 70, 225, 0.94);
	color: #fff;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;
	font-size: 16px;
	display: inline-block;
	&:hover {
		background: rgba(50, 70, 225, 0.74);
	}
`; 

export const DropdownContainer = styled.div`
  position: relative;
  left: 10%;
  width:60%;
  display: inline-block;
  ;
`;

export const DropdownButton = styled.button`
	width: 100%;
	height: 8%;
	padding: 20px;
	border: none;
	background-color: rgba(20, 60, 225, 0.74);
	color: #fff;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;
	font-size: 16px;
	border-radius: 5px;

	&:hover {
		background: rgba(50, 70, 225, 0.74);
	}
	`;

export const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  z-index: 1;
  left: 0%;
  padding: 12px 16px 12px 16px;
  width: 70%;
`;


export const DropdownLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 5%;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  width: 100%;
  height: 10px;
  padding: 15px;
  background-color: rgba(100, 50, 225, 0.59);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-size: 16px;
  border-radius: 7px;

  &:hover {
	background: rgba(120, 70, 225, 0.94);
  }
`;

export const TriangleRight = styled.div`
position: absolute;
width: 445px;
height: 572px;
left: -438px;
top: 7%;

background: #885FFF;
transform: rotate(-50deg);

`

export const FileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  padding: 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 8%;
  display: block;
  text-align: center;
  background-color: rgba(100, 50, 225, 0.59);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-size: 16px;
  border-radius: 7px;
  width: 80%;
  &:hover {
	background: rgba(120, 70, 225, 0.94);
  }
`;

export const FormGroup = styled.div`
  width: 103%;
  margin-bottom: 10%;
  border-bottom: 3px solid black;
`;
export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin-top: 10px;
  margin-left: 35%;
  border-radius: 50%;

`;


export const ProfileImage = styled.img`
  width: 30%;
  height: 40%;
  margin-top: 10px;
  margin-left: 35%;
  border-radius: 50%;

`;

/*
export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #ddd;
  }
`;

export const DrowDIV = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	padding: 30px;
	border-radius: 10px;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
	width: 400px;
	padding-top: 10px;
`;



export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 20px;
gap: 10px;

position: absolute;
width: 228px;
height: 95px;
left: 693px;
top: 665px;

background: rgba(27, 70, 225, 0.74);
border-radius: 15px;
`;*/
/**
export const SwitchMode = styled.p`
	font-size: 14px;
	margin-bottom: 0;
	color: #000;
`;

export const SwitchModeButton = styled.button`
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 50%;
height: 8%;
right: 100%;
padding: 20px;
border-radius: 5px;
border: none;
background-color: #1e90ff;
color: #fff;
cursor: pointer;
transition: background-color 0.2s ease-in-out;
font-size: 16px;
border-radius: 15px;

&:hover {
	background: rgba(27, 70, 225, 0.74);
}
`;

export const SignUpText = styled.p`
	font-size: 14px;
	margin-top: 20px;
`; */
