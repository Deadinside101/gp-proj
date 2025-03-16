
import React, { useState } from "react";
import { ThirdSection,Button,Text,RightSide , LeftSide ,Image1,Image2, Image3, Title} from "./style.js";
import { Link } from "react-router-dom";
const FeedbackSection =()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
 };


  return (
    <ThirdSection>
         <LeftSide>
         <Title>Are you concerned about your child behaviours ?</Title>
      <Text>
      a time-efficient and accessible a time-efficient and accessible 
      ASD screening is imminent to help health professionals and inform 
      you whether you should pursue formal clinical diagnosis.
        </Text>
        <Link to="/Questionnaire">
        <Button type="submit">Take the Quiz</Button>
      </Link>
    </LeftSide>
    <RightSide>
    <Image1 src="../images/fed1.jpg" alt="react"/>
    </RightSide>
    </ThirdSection>
    )
}
export default FeedbackSection ;