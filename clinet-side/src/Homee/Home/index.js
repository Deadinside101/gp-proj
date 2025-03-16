import React from "react";
import {HomeSection ,HomeTitle,HomeInfo, HomeDesc, HomeButton} from "./style";
import { Link } from "react-router-dom";
const Home =()=>{
return(
    <HomeSection>
    <div >
        <HomeInfo> 
            <HomeTitle>Autism</HomeTitle>
            <HomeDesc>
            We can help you with  how to deal with mental health related to autism 
            </HomeDesc>
           <Link to ="/Understanding_Autism1"><HomeButton >Let's Begin swipe down for more information</HomeButton></Link> 
        </HomeInfo>
    </div>
    </HomeSection>
  );
};

export default Home ;