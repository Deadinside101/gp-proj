import styled from "styled-components";

export const FooterSection =styled.div` 
margin-top:10%;
padding-top:5%;
color: white; 
background: linear-gradient(to right, #A3C1AD,#A3C1AD);#A3C1AD;
height:70vh;
`
export const Logo =styled.img`

margin-left:2%;
margin-top:3%;
width:13%;

`
export const FooterTitle =styled.div` 
margin-top:2%;
margin-bottom:15%;
font-weight:bold;
font-size:45px;
color:white;
font-family:OCR A Std, monospace;
&:hover {
    color:black;
    font-size:60px;
    }

`
export const FooterDesc =styled.div` 
font-size:15px;
background:rgba(0, 0, 0, 0.2);
background: black;
color:white;
margin-top:13%;
text-align:center;
font-family:Comic Sans MS, Comic Sans, cursive;
padding:0.5%;
`

export const Icon =styled.i`
margin-top:10%;
margin-right:6%;
margin-left:3%;
font-size:20px;
padding:4%;
border-radius: 20px;
color:black;
&:hover {
    background-color:#85d5a5;
    color: white;
    }
`
export const IconSec =styled.i`
margin-top:10%;
margin-right:60%;
font-size:28px;
//background-color:white;
padding:4%;
border-radius: 20px;
color:black;
display:flex;
&:hover {
    background-color:#85d5a5;
    color: white;
    }
`
export const ProfileList = styled.ul`
    list-style: none;
    width: 20%;
    margin-right:4%;
    margin-top:3%;
    float: right;
`

export const ProfileItem= styled.li`
    margin-bottom:8%;
    color:gray;rgba(0, 0, 0, 0.5);
    font-family:Bradley Hand, cursive;
    font-size:15px;
   
`

export const ProfileItemSpan= styled.div`
  
    color:black;
    font-family:Luminari, fantasy;
`
