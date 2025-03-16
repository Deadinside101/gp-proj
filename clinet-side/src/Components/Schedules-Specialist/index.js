import React ,{useEffect, useState} from "react";
import { BodySection, LeftSide, RightSide } from "./style";
import axios from "axios";
import {Icon2,Icon1, UlList,ListItem,ImageWrapper, Image,Schedules, Name} from "./style.js";
import TableAdmin from "./timetable-admin.js";
import Footer from '../Footer/index.js';
const ScheduleAdmin=(index)=> {

    const [images , setImages] = useState ([])
    useEffect(()=> {
        axios.get('js/data.json').then(res => {setImages (res.data.Doctors)})
    } ,[] )
    const PortfolioImages =images.map((imageItem) =>{
    if (1 === imageItem.id) {
    return(
        <div>
        
        <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt=""/>
        <Name>{imageItem.name}</Name>
        </ImageWrapper>
        <Schedules>
        <UlList>
        <ListItem> <Icon1 className= "fa fa-hospital-o"></Icon1> {imageItem.desc}</ListItem>
        <br/>
        <ListItem><Icon2 className= "fa fa-medkit"></Icon2> {imageItem.body}</ListItem> 
        </UlList>
        </Schedules>
   </div>
    )       
}})
  
    return (
      <React.Fragment>
       
        <BodySection>
        <LeftSide>
            {PortfolioImages}
        </LeftSide>    
        <RightSide>
        <div>welcome doctor you can Schedule your appointments now :</div>
        <TableAdmin/>
           </RightSide>
          </BodySection>
          <Footer/>
        </React.Fragment>
    )
    }


  export default ScheduleAdmin;