import React ,{useEffect, useState} from "react";
import { IconSection,Icon4,BodySection, H1, LeftSide,TableContainer, RightSide, Sec1, Sec3, TableHeader,TableRow,TableCell, AddButton } from "./style";
import axios from "axios";
import {TableDiv,Header,HeaderSection,IconP3,IconP4,Iconp5,UlList,ListItem,ImageWrapper, Image,Schedules, Name,Image3,Header_child_list,Button_parent} from "./style.js";
import Footer from '../Footer/index.js';
import { Link } from "react-router-dom";


const ChildCard = ({url}) =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [child, setChild] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect( () => {
      axios.get(url.url).then(res => {setChild(res.data)})
    }, [])
    console.log(child);
    if(child !== null){
   return(
       <React.Fragment>
         <TableRow key={child.user.id}>
         <TableCell ><Image3 src={child.user.profile_image} /></TableCell>
         <TableCell >{child.user.first_name}</TableCell> 
         <TableCell ><Link to="/EditPatientProfile"><i class="fa fa-edit"  title="edit the data of child"></i> </Link>&nbsp;&nbsp;<Link to="/"><i class="fa fa-trash" aria-hidden="true"  title="delete the data of child"></i></Link></TableCell>
         </TableRow>
       </React.Fragment>
       )}

    }

export default ChildCard;