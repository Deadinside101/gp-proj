import styled from "styled-components";

export const Header =styled.div`
    position: absolute;
    color:white;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
`

export const Title =styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: white;
    font-family:Bradley Hand, cursive;
   
`
export const HeaderSection =styled.div`
    height:300px;
    background:url('../images/about.png');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    margin-bottom:10%;
`
export const SecondSection =styled.div`
width:100%;
height:700px;
margin-top:8%;
margin-bottom:6%;

`
export const RightSide = styled.div`
float:right;
width:50%;

` 
export const LeftSide = styled.div `
float:left;
width:50%;

`

export const Image = styled.img`  
   float:left;
   margin:10%;
   margin-left:15%;
   margin-top:15%;
   height:500px;
   width:80%;
   border: 10px solid lightgray;
   border-radius: 20px;

`
export const TitleList = styled.h1`

text-shadow:5px 2px #dddd;
margin-bottom:10%;
margin-top:10%;
margin-left:15%;
 font-family:Bradley Hand, cursive;
font-size:45px;
padding: 0%;
font-weight:bold;
`
export const List = styled.ul`
text-align:left;
margin-top:15%;
font-size:40px;
list-style: none;
 padding: 0%;
`
export const Elements = styled.div`
color:gray;
margin-left:16%;
font-size:22px;

` 
export const ThirdSection =styled.div`
width:100%;
height:900px;
display:block;
margin-bottom:22%;
margin-top:6%;

`

export const ListElements = styled.li`
color:gray;
margin-left:10%;
margin-bottom:5%;
font-size:20px;
position:relative;
display:flex;
` 
export const Day = styled.span`
color:white;
font-size:25px;

` 
export const Info = styled.span`
color:white;
font-size:18px;

` 
export const Time = styled.div`
color:white;
font-size:20px;
margin-left:35%;

` 
export const ListRight = styled.ul`

background:#5F9EA0;
padding:10%;
padding-top:15%;
height:700px;
margin:10%;

` 
export const TitleRight =styled.h2`
    font-size: 40px;
    font-weight: bold;
    color: white;
    
`
export const TitleLeft =styled.h2`
    font-size: 30px;
    font-weight: bold;
    color: white;
    `
export const ListLeft = styled.ul`
background:#A3C1AD;
padding:10%;
padding-top:15%;
height:700px;
margin:12%;
margin-top:10%;
` 
export const Icon =styled.i`
margin-right:5%;
font-size:28px;
padding:3%;
border-radius: 20px;
color:white;
&:hover {
    background-color:#85d5a5;
    color: white;
    }
`