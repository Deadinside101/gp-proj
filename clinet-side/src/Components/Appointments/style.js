import styled from "styled-components";

export const PortfolioSection = styled.div` 
    background: #f8f8f8;
    overflow: hidden;   
`

export const PortfolioTitle = styled.h2`
    padding:10%;
    text-align:center;
    margin-top:0;
    font-size: 60px;
    color:white;
    //background-color:#ddd;
    font-family: Roboto, Arial, sans-serif;
    background:linear-gradient(to right, #9907facc,#3204),url('../images/date1.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    font-family:Apple Chancery, cursive;

`

export const Span1 = styled.span `
text-align: left;
color:#ddd;
margin: 10px 20px;
margin-bottom:10px;
display: inline-block;
padding-left:6% ;
font-size:20px;
`

export const PortfolioList = styled.ul `
    list-style: none;
    text-align: center;
    margin: 20px 0;
`

export const PortfolioItem = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background :${props => props.active ? '#eb5424' : ''}
    color :${props => props.active ? '#fff' : '#000'}
`


export const ImageWrapper = styled.div `
    width: 25%;
    float: right;
    margin-right:7%;
    margin-top:5%;
    margin-bottom:3%;
    font-size: 0;
    padding-top:5%;
    height:450px;
    position: relative;
    background-size: cover;
    background-position: center;
    box-shadow: 4px 4px 6px 6px rgba(0, 0, 0, 0.1);
`
export const Hover = styled.div `
    
    position: relative;
    height:120px;
    &:hover > div {
    background:#A3C1AD;#5F9EA0;#073980;#5F9EA0;#5F9EA0;#AFDBF5;#008080;rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0.8 ;
    transition: 1s ease;
    }`

export const Image = styled.img`
    width: 25%;
    height: 120px;
    border-radius:200px; 
    margin-left:33%;
    left: 0;
`

export const Overlay = styled.div` 
    position:absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background:##5F9EA0;gray; rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0 ;
    margin:0;
    width:25%;
    left: 33%;
    border-radius: 200px;
    
`

export const OverlaySpan= styled.button`
    position: relative;
    top: 30%;
    left: 47%;
    transform: translate(-50%,75%);
    background: #fff;
    padding: 3px 3px;
    border: none;
    border-radius: 20px;
    text-align: center;
    &:hover > img{
    background-color: black;
    color: white;
    
}

`
export const Schedules=styled.div`
padding:3%;
width: 100%;
height:200px;
border-radius:10px;

`
export const Name=styled.h2`
font-size:25px;
color:black;rgba(24, 193, 150, 0.8);
text-align:center;
font-family:Apple Chancery, cursive;

`
export const Desc=styled.div`
color:gray;
font-size:20px;
text-align:center;
padding-top:5%;
`
export const Last_Sec=styled.div`

margin-left:3%;
margin-right:5%;
margin-top:2%;
color:black;
border:1px solid black;

`
export const Left=styled.div`
text-align:left;
color:gray;
width:50%;
float:left;
font-size:12px;
padding-top:10%;
`
export const Right=styled.div`
text-align:center;
color:black;
width:40%;
margin-right:8%;
margin-top:5%;
float:right;
`
export const Button=styled.button`
padding:8%;
width:100%;
border-radius: 10px;
border:none; 
font-size:24px;
color:white;
margin-right:30%;
font-family:Apple Chancery, cursive;
//background:linear-gradient(to right, #A3C1AD, #008080);
background:linear-gradient(to right, #A3C1AD, #8DA399);#E1EBEE;#ADD8E6;#E1EBEE;#E6E6FA;    ;
&:hover {
    background:black;
    color: white;
    }
`

export const Icon =styled.i`
color:yellow;
font-size:20px;
margin-right:2%;
`
export const IconSection =styled.span`
margin-left:35%;
text-align:center;
`
export const Icon2 =styled.i`
font-size: 40px;
`