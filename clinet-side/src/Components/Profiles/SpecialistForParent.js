import React ,{useEffect, useState} from "react";
import { IconSection,Icon4,BodySection, H1, LeftSide, RightSide, Sec1, Sec3, ReviewHeader } from "./style";
import axios from "axios";
import {Button,Button2,Header,HeaderSection,ReviewSection,Image2,Name2,Icon5,IconSection2,Comment,Icon2,Icon,Icon1,UlList,ListItem,ImageWrapper, Image,Schedules, Name} from "./style.js";
import Footer from '../Footer/index.js';
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import { TableDiv } from "./style";

const SpecialistForParent=({index})=> {
      const [images , setImages] = useState ([])
      useEffect(()=> {
          axios.get('js/data.json').then(res => {setImages (res.data.Doctors)})
      } ,[] )

      const [showReviewForm, setShowReviewForm] = useState(false);

        const handleMakeReviewClick = () => {
            setShowReviewForm(true);
        };

        const handleSubmitReview = (review) => {
            console.log(review);
            setShowReviewForm(false);
        };
        const handleCloseReviewForm = () => {
            setShowReviewForm(false);
          };
        
            
    const PortfolioImages =images.map((imageItem) =>{
     if (index === imageItem.id)
      {
      return(
          <div>
          
          <Schedules>
          <ImageWrapper key={imageItem.id}>
          <Image src={imageItem.image} alt=""/>
          <Name>{imageItem.name}</Name>
          </ImageWrapper>
          <IconSection>
           
            <Icon4 className= "fa fa-facebook-square"></Icon4>
            <Icon4 className= "fa fa-envelope"></Icon4>
            <Icon4 className= "fa fa-linkedin"></Icon4>
            
            </IconSection>
            <br/>
            <hr/>
          <UlList>
          <ListItem><Icon1 className="fa fa-user" aria-hidden="true"></Icon1>age :{imageItem.age}</ListItem>
          <br/>
          <ListItem><Icon2 className= "fa fa-hospital-o"></Icon2> {imageItem.desc}</ListItem>
          <br/>
          <ListItem><Icon className= "fa fa-medkit"></Icon> {imageItem.body}</ListItem> 
          </UlList>
          </Schedules>
     </div>
      )       
  }})
        const [user , setUsers] = useState ([])
        useEffect(()=> {
            axios.get('js/data.json').then(res => {setUsers (res.data.Reviews)})
        } ,[] )

        const  Reviews =user.map((userCom) =>{
        {
            if(userCom.id > 2){
        return(
            <div>
            
            <ReviewSection key={userCom.id}>
            <Image2 src={userCom.image} alt=""/>
            <Name2>{userCom.Name}</Name2>
            <IconSection2>
            <Icon5 className= "fa fa-star"></Icon5>
            <Icon5 className= "fa fa-star"></Icon5>
            <Icon5 className= "fa fa-star"></Icon5>
            <Icon5 className= "fa fa-star"></Icon5>
            <Icon5 className= "fa fa-star"></Icon5>
            </IconSection2>
            <Comment>{userCom.Comment}</Comment>
            </ReviewSection>
           
        </div>
        )       
        }}})
        
      return (
        <React.Fragment>
            
            <BodySection>
            <LeftSide>
            <HeaderSection>
            <Header>
                <H1>Welcome to our team</H1> 
            </Header>
            </HeaderSection>
            <Sec3>
                <ReviewHeader><i className="fa fa-comments"></i> Reviews</ReviewHeader>
                <br/><br/> <br/><br/><TableDiv> {Reviews}</TableDiv>
                <Button2 type='submit' onClick={handleMakeReviewClick}><i className= "fa fa-pencil"></i> Make Review</Button2>
                {showReviewForm && <ReviewForm onSubmit={handleSubmitReview} onClose={handleCloseReviewForm}/>}
            </Sec3>
            </LeftSide> 


            <RightSide>
            {PortfolioImages}
            <Sec1>
            <Link to={{
                        pathname: "/Schedule" + index}} ><Button ><i className="fa fa-clock-o"></i> Request an Appointment</Button></Link>
            </Sec1>
            
            </RightSide>
            </BodySection>
            <Footer/>
            </React.Fragment>
        )
      }
  export default SpecialistForParent;