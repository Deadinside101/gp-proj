import styled from "styled-components";

export const PortfolioSection = styled.div` 
    background: #f8f8f8;
    padding-top: 5%; 
    overflow: hidden;
    //border-radius:30px;
    `

export const PortfolioTitle = styled.h2`
    text-align: center;
    font-size: 38px;
    font-family: Roboto, Arial, sans-serif;
    font-weight: bold;
    //text-shadow:5px 2px lightgray;
`

export const Span = styled.span `
    font-weight: normal
`

export const PortfolioList = styled.ul `
    list-style: none;
    text-align: left;
    margin: 15px 0;
`

export const PortfolioItem = styled.li`
    display: inline-block;
    width: 100px;
    padding: 0px;
    margin-left:15%;
    font-size:15px;
    color:#5d8aa8;
    
`


export const ImageWrapper = styled.div `
    width: 24.3%;
    float: left;
    font-size: 0;
    position: relative;
    margin-left:0.5%;
    &:hover > div {
        opacity: 0.8
    }
`

export const Image = styled.img`
    width: 100%;
    height:350px;
    border-radius:30px;
`

export const Overlay = styled.div` 
    position: absolute;
    border-radius:30px;
    left: 0;
    bottom: 0;
    right: 0;
    top:0;
    background:#8DA399;#5F9EA0;#073980;#5F9EA0;#5F9EA0;#AFDBF5;#008080;rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0 ;
    transition: 1s ease;
]
`

export const OverlaySpan= styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    font-size:19px;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding:0 10px 10px;
    background:#5F9EA0;#073980;#5F9EA0;#5F9EA0;#AFDBF5;#008080;
    border-radius:30px;
    color:white;
  transition-delay: 0.5s;
`
export const Box= styled.div`
    border-radius:30px;
`
export const Header= styled.h1`
font-size:50px;
background-color:#A3C1AD;
color:white;
padding:8%;
text-align:center;
margin-top:0px;
margin-bottom:0px;
font-family:Comic Sans MS, Comic Sans, cursive;
`
export const Qes_Title= styled.h1`
font-size:30px;
font-family:Comic Sans MS, Comic Sans, cursive;

`
export const Body= styled.div`
margin:20%;
margin-top:5%;
margin-bottom:6%;
text-align:left;
float:left;
`
export const Sec1= styled.div`
font-size:20px;
display:flex;
padding:0px;
font-family: serif;
`
export const Sec= styled.div`
font-size:25px;
display:flex;
padding:0px;
font-family: serif;
`
export const List = styled.ul`
padding-bottom:20px;
`
export const ListItem = styled.li`
font-size:20px;

`
export const All = styled.div`

display:inline-block;
width:100%;
`

export const Image2 =styled.img`
width: 80%;
height:600px;
margin:4%;
`
export const Span2 =styled.span`
font_size:25px;
font-weight: bold;
`
