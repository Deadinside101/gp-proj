import styled from "styled-components";
export const BarTitle= styled.span`
    float: left;
`


export const BarPerc= styled.span`
    float: right;
    margin-right: 100px
`


export const Parent= styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const ParentSpan= styled.span `
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`

export const Sp1= styled.span `
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
`

export const Sp2= styled.span `
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: 90%;
`

export const Sp3= styled.span `
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
    width: 80%;
`
export const Title= styled.div`
    font-size: 35px; 
    margin-bottom: 10%;
    color:black;
    font-weight: bold;
    //text-shadow:0px 0px lightgray;
`
export const TitleSpan= styled.span `
    font-weight: normal;
`

export const FormContainer = styled.form`
  flex-direction: column;
  justify-content: center;
  margin-top:10%;
 
`;
export const ThirdSection = styled.div` 
    background: #f8f8f8;
    overflow: hidden;
    margin-top:5%;
    padding:7%;
    height:700px;
    background-color: white;
    `;
export const RightSide = styled.div`
float:right;
width:60%;
margin-top:2%;
` 
export const LeftSide = styled.div `
margin-top:5%;
float:left;
width:40%;
`
export const Text = styled.div`
  font-size:25px;
  flex-direction: column;
  margin-bottom: 7%;
  margin-top: 10%;
  width:100%;
  color:#8DA399;gray;
`;


export const Button = styled.button`
  background: white;
  border: 1px solid #8DA399;
  padding: 2% 18%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-family:Apple Chancery, cursive;
  margin-top: 20%;
  cursor: pointer;
  border-radius:30px;
  &:hover {
    //background-color #2774AE;
    //background:#8DA399;
    background: linear-gradient(to right, #8DA399,#A3C1AD);  color: white;
    color: white;
    }

`;
export const Image1 = styled.img`  
   float:center;
   height:700px;
   margin-left:3%;
   width:100%;
   //border: 5px solid gray;
  //border-bottom-right-radius: 50%;
  border-radius:30px;

`
export const Image2 = styled.img`  
float:right;
height:450px;
width:35%;
margin-right:13%;
border-radius:30px;
margin-top:15%;

`
export const Image3 = styled.img`  
float:left;
height:320px;
margin-left:10%;
margin-top:20%;
width:30%;
border-radius:30px;

`