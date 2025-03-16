import styled from "styled-components";

export const WorkSection = styled.div `
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff;
`

export const WorkTitle = styled.h2 `
    font-size: 50px; 
    text-align: center;
    
`

export const Span = styled.span `
    font-weight: normal
`

export const WorkPart = styled.div `
margin-top: 20px;
margin-bottom: 5%;
    width: 100%;
    float: left;
    height: auto;
    padding: 60px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 1%;
    border-radius:30px;

`

export const GamePhoto = styled.img `
    width: 100%;
    height:300px;
    border-radius:50px;
`
export const ImageWrapper = styled.div`
    width: 50%;
    left: 25%;
    font-size: 0;
    position: relative;
    border-radius:100px;
    &:hover > div {
        opacity : 0.7;
        
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background:#5F9EA0;#073980;#5F9EA0;#5F9EA0;#AFDBF5;#008080;rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0 ;
    transition: 1s ease;
    border-radius:50px;
`

export const OverlaySpan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    padding: 0px 0px;
    background:#5F9EA0;#073980;#5F9EA0;#5F9EA0;#AFDBF5;#008080;
    //border-radius:30px;
    color:white;
    font-size:40px;
  transition-delay: 1s;
`

export const PartTitle = styled.h4 `
    font-size: 25px;
    color: #A3C1AD;
    margin-bottom: 20px;
    font-family:OCR A Std, monospace;
`

export const PartLine = styled.hr `
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const PartDesc = styled.p `
    font-size: 14px;
    color: #888;
    padding: 20px
`
