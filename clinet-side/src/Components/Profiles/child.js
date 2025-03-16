import React ,{useEffect, useState} from "react";
import { BodySection, H1, LeftSide, RightSide, Sec1, Sec3, TableHeader,TableRow,TableCell, TableContainer2 } from "./style";
import axios from "axios";
import {TableDiv,TBody,Image3,Header,HeaderSection,IconP3,Iconp5,UlList,ListItem,ImageWrapper, Image,Schedules, Name,Header_child_list,Button_parent} from "./style.js";
import Footer from '../Footer/index.js';
import { Link } from "react-router-dom";

const getAuther = ()=>{
    if(localStorage.getItem("data"))
      {
        return JSON.parse(localStorage.getItem("data"));
  
      }
  }


const Child=({index})=> {
       const [ChildTable, setChildTable] = useState ([]);
       useEffect(() => {
        axios.get('js/data.json').then(res => {setChildTable (res.data.games)})
       }, []);

      const TimeTablee =ChildTable.map((cellItem) =>{
      return(
          <React.Fragment>
            <TableRow key={cellItem.id}>
            <TableCell ><Image3 src={cellItem.token} /></TableCell>
            <TableCell >{cellItem.name} </TableCell>
            <TableCell >{cellItem.quantity}</TableCell> 
            </TableRow>
          </React.Fragment>
        )})

      const [user , setUser] = useState ([])
      useEffect(()=> {
          setUser(getAuther())  
      } ,[] )


    const PortfolioImages = () =>{

      return(
          <div>
          
          <Schedules>
          <ImageWrapper key={user.id}>
          <Image src={user.profile_image || "images/about.png"} alt=""/>
          <Name>{user.first_name + " " + user.last_name}&nbsp;&nbsp;<Link to={{
                        pathname: "/EditPatientProfile" }} > <i class="fa fa-edit"></i></Link></Name>
          </ImageWrapper>
          <br/> <hr/><br/>
          <UlList>
          <ListItem><IconP3 className="fa fa-envelope" aria-hidden="true"></IconP3>e-mail : {user.email}</ListItem>
          <br/><br/><br/>
          <br/><br/>
          <ListItem><Iconp5 className= "fa fa-user"></Iconp5>age : {user.age}</ListItem> 
          </UlList>
          </Schedules>
     </div>
      )       
  }
        
        
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
            
            <Header_child_list><i className="fa fa-list"> </i> List of Games</Header_child_list>
            <TableDiv>
            <TableContainer2>
            <thead>
                <tr>
                <TableHeader> Token<br/></TableHeader>
                <TableHeader> Name<br/></TableHeader>
                <TableHeader> Quantity<br/></TableHeader>
                
                </tr>
            </thead>
            <TBody>
                {TimeTablee}
            </TBody>
            </TableContainer2>
            </TableDiv>
            </Sec3>
            </LeftSide> 


            <RightSide>
            {PortfolioImages()}
            <Sec1>
             
            <Link to="/Treatments"><Button_parent><i class="fa fa-gamepad"></i> let's play</Button_parent>  </Link>
            <br/><br/>
            </Sec1>
            
            </RightSide>
            </BodySection>
            <Footer/>
            </React.Fragment>
        )}
      ;
  export default Child;