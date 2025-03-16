import React from "react";
import { FooterDesc,FooterSection,FooterTitle,Icon,Logo,ProfileList,ProfileItem,ProfileItemSpan } from "./style";
const Footer =()=>{
    
    return( 
    <div>  
    <FooterSection>
        <br/>
        <Logo src="../images/logo_light.png" alt="react"></Logo>
        <ProfileList>
        <FooterTitle>Follow Us</FooterTitle>
        <ProfileItem >
        you can achieve your goal by contact with our best team here.        </ProfileItem>
        <ProfileItem>
        <Icon className= "icon fa fa-facebook fa-lg"></Icon>
        <Icon className= "icon fa fa-pinterest fa-lg"></Icon>
        <Icon className= "icon fa fa-twitter fa-lg"></Icon>
        <Icon className= "fa fa-instagram"></Icon>
        
        </ProfileItem>
        </ProfileList>


        <ProfileList>
        <FooterTitle> Contacts</FooterTitle>
        <ProfileItem >
        <i  className= "fa fa-phone"></i> +2-789-123-654
        </ProfileItem>
        <br/>
        <ProfileItem >
        <i  className= "fa fa-map-marker"></i>  92490 North, New York City
        </ProfileItem>
        </ProfileList>


        <ProfileList>
        <FooterTitle>About Us</FooterTitle> 
        <ProfileItem >
         Our dedicated to improving the lives of those impacted by autism or other developmental disabilities, we provides comprehensive autism therapy and intervention services to help individuals maximize their potential.        </ProfileItem>
        </ProfileList>

    
        <FooterDesc>© 2023 - Autism All Right Reserved <br/>
    </FooterDesc>
    </FooterSection>
    </div>
    )
}
export default Footer ;