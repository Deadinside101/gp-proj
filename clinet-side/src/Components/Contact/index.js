import React from "react";
import Footer from "../Footer/index.js";
import {Drop ,Body,Title,Span ,FormSection,InputForm,InputText,InputEmail,InputExp,TextArea,InputSubmit,Icon, SpanIcon,Header,HeaderSection,Title2} from'./style.js'

const Contact =()=> {
    return(
    <div>
    <Drop>
    <HeaderSection>
            <Header>
                <Title2></Title2>
            </Header>
        </HeaderSection>
        <div class="container">
        <Body>
           
            <Title>Contact</Title>
            
            <Span><br/>If you have any questions, do not hesitate to ask them.<br/></Span>
            <div>
            <Icon className="fa fa-phone"><SpanIcon>  Phone : 12345</SpanIcon></Icon>
            <br/>
            <Icon className= "fa fa-envelope"><SpanIcon>  e-mail : mail@mail.com</SpanIcon></Icon>
            </div>
            <FormSection action="">
                <InputForm>
                    <InputText type='text'  placeholder="Your Name" required/>
                    <InputEmail type='email' placeholder="Your Email" required/>
                </InputForm>
                <InputExp type='text' placeholder="Your Subject" required/>
                <TextArea cols="30" rows="9" placeholder="Your Message"></TextArea>
                <InputSubmit type='submit' >Send Message</InputSubmit>
                <br/>
            </FormSection>
            </Body>
         </div>
    </Drop>
    
     <Footer />
    
     </div>
    )
}
export default Contact ;