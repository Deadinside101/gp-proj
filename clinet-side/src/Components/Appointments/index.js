import React ,{Component} from "react";
import './style.js' ;
import Footer from "../Footer/index.js";
import axios from "axios";
import {Hover,Tr,Td, ImageWrapper, Overlay, OverlaySpan,Last_Sec, PortfolioSection, PortfolioTitle ,Span1,Image,Schedules, Name,Desc, Left, Right, Button} from "./style.js";
import { Link } from "react-router-dom";
class Appointment extends Component
 {

    state ={
        images: [],
        index:''
    }
    componentDidMount (){
        axios.get('js/data.json').then(res=> {this.setState({images : res.data.Doctors})})
    }


    render (){
    const {images}= this.state;
    const PortfolioImages =images.map((imageItem) =>{
        return(
             
               <ImageWrapper key={imageItem.id}> 
               <Hover>
               <Image src={imageItem.image} alt=""/>
                <Overlay>
                <Link to={{
                        pathname: "/SpecialistForParent" + imageItem.id}} > <OverlaySpan type='submit'>
                        View Profile
                    </OverlaySpan>
                </Link>

                </Overlay>
                </Hover>
                <Schedules>
                    <Name>{imageItem.name}</Name>            
                    <br /><br />
                    <Desc> {imageItem.desc}<br/><br/></Desc>
                    <Last_Sec>
                    <Left>{imageItem.body}</Left>
                    <Right><Link to={{
                        pathname: "/Schedule" + imageItem.id}} >
                        <Button>Ask for date</Button></Link>
                        </Right>
                    </Last_Sec>
                </Schedules>
                
            
        </ImageWrapper>
    
        )
       
    })
    return(
        <div>
          <PortfolioSection>
            <PortfolioTitle><i class="fa fa-calendar" aria-hidden="true"></i> Appointments <br/><Span1><i className="fa fa-angle-double-right"></i> schedule your appointment now</Span1></PortfolioTitle>
            
            <div className="box">
               {PortfolioImages} 
            </div>    
        </PortfolioSection>
        <Footer/>
        </div>
    )}
    }
export default Appointment ;