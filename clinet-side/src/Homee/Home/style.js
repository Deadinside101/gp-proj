import styled from "styled-components";

export const HomeSection =styled.div`
    height:600px;
    width:100%;
    background: linear-gradient(to right, #9907facc,#3204),url('../images/hand.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    
`

export const HomeInfo =styled.div`
    position: absolute;
    color:white;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
`

export const HomeTitle =styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: white;
`

export const HomeInfo2 =styled.h4`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
    
`

export const HomeDesc =styled.div`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    color: white;
    
`

export const Span =styled.span`
    color: #000
`

export const HomeButton=styled.button`
    background: orange;
    color: #fff;
    font-size: 10px;
    width: 300px;
    margin-top:4%;
    border: 0;
    padding: 13px 20px;
    cursor: pointer;
    font-weight: bold;
    border-radius:15px;
    &:hover{
        background: #fff;
        color: #eb5424;
    } 
`
