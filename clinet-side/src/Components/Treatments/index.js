import React , {useState , useEffect} from "react";
import Footer from "../Footer/index.js";
import axios from 'axios';
import { WorkSection , WorkTitle , WorkPart , GamePhoto , PartLine , PartDesc , Span , PartTitle, OverlaySpan, Overlay, ImageWrapper } from './Style.js';
import { Link } from "react-router-dom";

const Treatments = () => {
  
  const [ treatments , setTreatments ] = useState([])


  useEffect ( () => {
    axios.get('js/data.json').then( res => {setTreatments( res.data.treatments )})
  } , [] ) 

 
    const treatmentList = treatments.map((treatmentItem) => {
      return(
        <WorkPart first={treatmentItem.id} key={treatmentItem.id}>
           <ImageWrapper key={treatmentItem.id}>
            <GamePhoto src={treatmentItem.demo} alt=""/>
            <Overlay >
              <Link to={{
                  pathname: "/Game" + treatmentItem.id
                }} >
                <OverlaySpan type='submit' >
                  Show Game
                </OverlaySpan>
              </Link>
            </Overlay>
            </ImageWrapper>
            <PartTitle>{treatmentItem.title}</PartTitle>
            <PartLine/>
            <PartDesc>
                {treatmentItem.body}
            </PartDesc>
          </WorkPart>
      )
    })
    return (
      <div>
      <WorkSection>
        <div className="container">
          <WorkTitle><Span> Treatments through Games</Span> </WorkTitle>
          {treatmentList}
          
        </div>
      </WorkSection>
     <Footer />
     </div>
     );
  }


export default Treatments;
