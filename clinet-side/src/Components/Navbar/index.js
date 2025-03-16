import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import { LogoImg,NavbarSection,Logo,LogoText,UlList,ListItem,Anchor,LinkItem } from "./style.js"

const getAuther = ()=>{
  if(localStorage.getItem("data"))
    {
      return JSON.parse(localStorage.getItem("data"));

    }
}

const Navbar = () => {

  const [auth , setAuth] = useState(null) ; 

  // For Access LocalStorage 


useEffect(()=>{
  setAuth(getAuther())
} ,[])
  const handleMyAccoun = () => {
    switch (auth.role) {
      case 'SPECIALIST':
        return "specialist-account"
        break;
      case 'CHILD':
        return "Child"
        break;
      case 'PARENT':
        return "parent"
        break;
      default:
        return "";
    }
  }
    // For Logout 
    const logoutHandler = ()=>{
        localStorage.removeItem("user" ) ; 
        localStorage.removeItem("data" ) ;
        window.location.replace("http://localhost:3000/Login")
    }

  return (
    <NavbarSection>

    <div className="container">

        <Logo>
        <LogoImg src="../images/logo_dark2.png" alt="react"/>
         <LogoText>ACS</LogoText>
        </Logo>



        <UlList>

            <ListItem><LinkItem to="/">Home</LinkItem></ListItem>
            <ListItem><LinkItem to="/appointment">Appointments </LinkItem></ListItem>
            <ListItem><LinkItem to="/questionnaire">Questionnaire </LinkItem></ListItem>
            <ListItem><Anchor href="/Treatments">Treatments </Anchor></ListItem>
            <ListItem><LinkItem to="/About">About</LinkItem></ListItem>
            <ListItem><LinkItem to="/contact">Contact</LinkItem></ListItem>
            {
            !auth && (
              <ListItem><LinkItem to="/Login">Login</LinkItem></ListItem>
 
            )
            }
                        {
              auth && (
                <>
                <ListItem><LinkItem to={handleMyAccoun()}>My Account</LinkItem></ListItem>
                <ListItem><Anchor to="/login" onClick={logoutHandler} >Logout</Anchor></ListItem>
                </>

              )
            }


        </UlList>

    </div>

</NavbarSection>
  );
}

export default Navbar;

/**
 {
              auth && auth.user_role=="Specialist" (
                <>
                <ListItem><LinkItem to="/MyAccount">My Account</LinkItem></ListItem>
                <ListItem><Anchor to="/login" onClick={logoutHandler} >Logout</Anchor></ListItem>
                </>

              )
            }
            {
              auth && auth.user_role=="parent" (
                <>
                <ListItem><LinkItem to="/Parent">My Account</LinkItem></ListItem>
                <ListItem><Anchor to="/login" onClick={logoutHandler} >Logout</Anchor></ListItem>
                </>

              )
            }
            {
              auth && auth.user_role=="child" (
                <>
                <ListItem><LinkItem to="/Child">My Account</LinkItem></ListItem>
                <ListItem><Anchor to="/login" onClick={logoutHandler} >Logout</Anchor></ListItem>
                </>

              )
            }

 */