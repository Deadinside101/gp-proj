import React ,{useEffect, useState} from "react";
import { IconSection,Icon4,BodySection, H1, LeftSide,TableContainer, RightSide, Sec1, Sec3, TableHeader,TableRow,TableCell, AddButton } from "./style";
import axios from "axios";
import {TableDiv,Header,HeaderSection,IconP3,IconP4,Iconp5,UlList,ListItem,ImageWrapper, Image,Schedules, Name,Image3,Header_child_list,Button_parent} from "./style.js";
import Footer from '../Footer/index.js';
import { Link } from "react-router-dom";
import ChildCard from "./ChildCard";


const getAuther = ()=>{
  if(localStorage.getItem("data"))
    {
      return JSON.parse(localStorage.getItem("data"));

    }
}
const child = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [child, setChild] = useState(null)
}

const Parent=({index})=> {

        const [user , setUser] = useState ([])
        const [parent, setParent] = useState(null)
        useEffect(()=> {
            setUser(getAuther())  
        } ,[]);
        useEffect( () => {
          console.log(`http://127.0.0.1:8000/parent/${user?.id}/`);
          axios.get(`http://127.0.0.1:8000/parent/${user?.id}/`).then(res => {setParent (res.data)})
        }, [user])

        console.log(parent);
 
       
 
    const PortfolioImages = () =>{
      return(
          <div>
          
          <Schedules>
          <ImageWrapper key={user.id}>
          <Image src={user.profile_image} alt=""/>
          <Name>{user.first_name + ' ' + user.last_name}&nbsp;&nbsp;<Link to={{
                        pathname: "/EditParentProfile" }} > 
                 <i class="fa fa-edit"></i></Link></Name>
          </ImageWrapper>
            <hr/>
          <UlList>
          <ListItem><IconP3 className="fa fa-envelope" aria-hidden="true"></IconP3>e-mail : {user.email}</ListItem>
          <br/><br/><br/>
          <ListItem><IconP4 className= "fa fa-child"></IconP4>number of childs : {user.num_of_childs}</ListItem>
          <br/><br/>
          <ListItem><Iconp5 className= "fa fa-user"></Iconp5>age : {user.age}</ListItem> 
          </UlList>
          </Schedules>
     </div>
      )       
  }
        
        
      return (
        <React.Fragment>
            
           { <BodySection>
            <LeftSide>
            <HeaderSection>
            <Header>
                <H1>Welcome to our team</H1> 
            </Header>
            </HeaderSection>
            <Sec3>
            <div>
                <Header_child_list><i className="fa fa-list"> </i> List of your children</Header_child_list>
              <TableDiv>
            <TableContainer>
            <thead>
                <tr>
                <TableHeader> Image<br/></TableHeader>
                <TableHeader> Name<br/></TableHeader>
                <TableHeader> Action<br/></TableHeader>
                </tr>
            </thead>
            <tbody>
                {parent && parent.children.map( (url, i) => <ChildCard id={i} url={{url}}/>)}
            </tbody>
            </TableContainer>
            </TableDiv>
            <Link to="/PatientSignUpForm"><AddButton><i className="fa fa-plus" title="add new child"></i> Add</AddButton></Link>
    </div>
            </Sec3>
            </LeftSide> 


            <RightSide>
            {PortfolioImages()}
            <Sec1>
            
            <Link to="/ParentAppointments"><Button_parent><i className="fa fa-clock-o"></i> Check Appointments Status</Button_parent>  </Link>
            <br/><br/>
            </Sec1>
            
            </RightSide>
            </BodySection>}
            <Footer/>
            </React.Fragment>
        )}
      ;
  export default Parent;