import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarSection = styled.div`
    overflow: hidden;
    background: #fff;
    position: relative;
   border-bottom: 0.1px solid gray;
    margin:0px;
`

export const Logo = styled.div`
    width: 35%;
    float: left;
   display:flex;
  //margin-top:10px;
   
`

export const LogoText = styled.h2`
    font-size: 40px;
    font-weight: bold;
    font-family:Apple Chancery, cursive;
`

export const UlList = styled.ul`
    width: 65%;
    float: left;
    list-style: none;
    padding: 0%;
    margin-top:4%;
`

export const ListItem = styled.li`
    display: inline-block;
`

export const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight:bold;
    &:hover {
        color: #eb5424

    }
`

export const LinkItem = styled(Link)`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424

    }
`
export const LogoImg =styled.img`
margin-top:9%;
border-radius:200px;
width:12%;
height:40px;
margin-right:0%;

`