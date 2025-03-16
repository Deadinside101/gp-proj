import React ,{useEffect, useState} from "react";
import { BodySection, LeftSide, RightSide } from "./style";
import axios from "axios";
import {Icon2,Icon,Icon1,Header,InputSubmit,RadioWrapper,RadioLabel,RadioButton, UlList,ListItem,ImageWrapper, Image,Schedules, Name} from "./style.js";
import Table from "./timetable.js";
import Footer from '../Footer/index.js';
const Schedule=({index})=> {
  
    const [images , setImages] = useState ([])
    useEffect(()=> {
        axios.get('js/data.json').then(res => {setImages (res.data.Doctors)})
    } ,[] )
    const PortfolioImages =images.map((imageItem) =>{
        console.log(typeof index);
    if (index === imageItem.id) {
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
const UserSelection=()=> {
    const [selectedOption, setSelectedOption] = useState('female');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
        <div>
      <Icon className= "fa fa-user-o"><Header>Choose a consultation type</Header></Icon>   
      <RadioWrapper>
        <RadioLabel>
          <RadioButton
            type="radio"
            name="status"
            value="new"
            checked={selectedOption === 'new'}
            onChange={handleOptionChange}
          />
          I'm a new patient
        </RadioLabel>
        <br/>
        <br/>
        <RadioLabel>
          
          <RadioButton
            type="radio"
            name="status"
            value="old"
            checked={selectedOption === 'old'}
            onChange={handleOptionChange}
          />
          I've seen this doctor before
        </RadioLabel>
        
      </RadioWrapper>
      </div>
    );
  }
    return (
      <React.Fragment>
        <BodySection>
        <LeftSide>
            {PortfolioImages}
        </LeftSide>    
        <RightSide>
        <Table/>
          <UserSelection/>
          <InputSubmit type='submit' onClick={() => { alert("Thank you , Your appointment is sent"); window.location.reload(); }} >Submit</InputSubmit>
           </RightSide>
          </BodySection>
          <Footer/>
        </React.Fragment>
    )
    }


  export default Schedule;