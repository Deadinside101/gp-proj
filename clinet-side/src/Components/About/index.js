import React from "react";
import Footer from "../Footer/index.js";
import {Icon,Info,TitleLeft,ListLeft,TitleRight,ListRight,Time,Day,ListElements,ThirdSection,Elements,SecondSection,RightSide,LeftSide,Image,TitleList, Header,Title,HeaderSection} from "./style";

const About =()=> {
    return(
    <div>
        <HeaderSection>
        <Header>
            <Title></Title>
        </Header>
        </HeaderSection>
            <SecondSection>
            <LeftSide>
            <TitleList>Who we are ?</TitleList>
            <Elements>
            Dedicated to improving the lives of those impacted by autism or other developmental disabilities,we provides comprehensive autism therapy and intervention services to help individuals maximize their potential.<br/><br/> we uses the latest and most widely accepted teachings and therapeutic methodologies
            related to ABA therapy. <br/> <br/>Our compassionate team has extensive training and experience in designing , developing , implementing ,  and evaluating a wide range <br/>of ABA programs for individuals with autism and other developmental disabilities.For over 25 years, we has been a trusted autism therapy center.<br/><br/> Learn more about our autism therapy services today.</Elements>
            </LeftSide>
            <RightSide>
            <Image src="../images2/who_we_are.jpg" alt="react"/>
            
            </RightSide>
           </SecondSection>
           <hr/>
           <ThirdSection>
            <LeftSide>
            
            <ListLeft>
            <TitleLeft><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;Address</TitleLeft>
            <ListElements><Info>7895 Piermont Dr NE Albuquerque,NM 198866, See Our Stores </Info></ListElements><br/><br/>
            
            <TitleLeft><i class="fa fa-coffee"></i>&nbsp;&nbsp;&nbsp;Get In Touch</TitleLeft> 
            <ListElements><Info>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +012 (345) 6789</Info></ListElements>
            <ListElements><Info>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; support@gmail.com</Info></ListElements>
            <ListElements><Info>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hotline&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12345678</Info></ListElements>
            <br/><br/>
            
            <TitleLeft><i class="fa fa-weixin"></i>&nbsp;&nbsp;&nbsp;&nbsp;Follow Us</TitleLeft>
            <ListElements><Info>Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore</Info></ListElements><br/><br/>
            <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon className= "fa fa-facebook-square"></Icon>
            <Icon className= "fa fa-youtube-play"></Icon>
            <Icon className= "fa fa-linkedin"></Icon>
            </div>
            </ListLeft>
            </LeftSide>

            <RightSide>
                
            <ListRight>
            <TitleRight>Working Hour</TitleRight>
            <ListElements><Day><i className="fa fa-angle-double-right"></i> Monday   </Day>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Time>9:00-19:00</Time></ListElements><hr/>
            <ListElements><Day><i className="fa fa-angle-double-right"></i> Tuesday  </Day>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Time>9:00-19:00</Time></ListElements><hr/>
            <ListElements><Day><i className="fa fa-angle-double-right"></i> Wednesday</Day><Time>9:00-19:00</Time></ListElements><hr/>
            <ListElements><Day><i className="fa fa-angle-double-right"></i> Thursday</Day>&nbsp;&nbsp;&nbsp;&nbsp;<Time>9:00-19:00</Time></ListElements><hr/>
            <ListElements><Day><i className="fa fa-angle-double-right"></i> Friday   </Day>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Time>9:00-19:00</Time></ListElements><hr/>
            <ListElements><Day><i className="fa fa-angle-double-right"></i> Saturday </Day>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Time>9:00-19:00</Time></ListElements><hr/>
            <ListElements><Day><i className="fa fa-angle-double-right"></i> Sunday   </Day>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Time>9:00-19:00</Time></ListElements><hr/>
            </ListRight>
            </RightSide>
           </ThirdSection>
         <Footer />
    
     </div>
    )
}
export default About ;