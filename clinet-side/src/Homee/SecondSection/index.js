import React, { Component } from "react";
import axios from 'axios' ;
import {Span,SecondSection,RightSide,LeftSide,Image,ListElements,TitleList, List,Icon } from "./style.js";
class Second_Section extends Component {
render (){
    return(
        <SecondSection>
            <LeftSide>
            <Image src="../images/section2.jpg" alt="react"/>
            </LeftSide>
            <RightSide>
            <TitleList>We are a link between the autistic patient and the specialist</TitleList>

            There are dozens of autism treatments, and choosing the right ones depends on the individual’s needs as well as challenges.

            When selecting a treatment,
            <List>
           <ListElements><Icon className="fa fa-angle-double-right"></Icon>it is important to work closely with your doctor and other healthcare professionals.<hr/></ListElements> 
           <ListElements><Icon className="fa fa-angle-double-right"></Icon>also recommended that you inquire about the evidence supporting the effectiveness of the prescribed treatment(s).<hr/> </ListElements> 
           <ListElements><Icon className="fa fa-angle-double-right"></Icon> This should include positive and negative findings as well as possible side effects.<hr/></ListElements> 
           </List>
            <Span>so we try to help you to reach for the best way to treat with.</Span>
            </RightSide>
            
        </SecondSection>


    )}}
export default Second_Section ;