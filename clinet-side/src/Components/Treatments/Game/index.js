import React , {useState , useEffect} from "react";
import Footer from "../../Footer";
import axios from 'axios';
import { WorkSection , WorkTitle , WorkPart , GamePhoto , ImageWrapper } from './Style.js';

const Game = ({index}) => {
  
  const [ treatments , setTreatments ] = useState([])


  useEffect ( () => {
    axios.get('js/data.json').then( res => {setTreatments( res.data.treatments )})
  } , [] ) 

 
    const gameList = treatments.map((treatmentItem) => {
      if (index === treatmentItem.id){
      return(
        <>
        <WorkTitle >{treatmentItem.title}</WorkTitle>
        <WorkPart first={treatmentItem.id} key={treatmentItem.id}>
          <ImageWrapper key={treatmentItem.id}>
            <GamePhoto src={treatmentItem.demo} alt="" />
          </ImageWrapper>
        </WorkPart>
        </>
      )}
    })
    return (
      <div>
      <WorkSection>
        <div className="container">
          {gameList}
        </div>
      </WorkSection>
      <Footer />
     </div>
     );
  }


export default Game;
