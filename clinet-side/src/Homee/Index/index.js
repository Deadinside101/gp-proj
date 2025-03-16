import React, { Component } from "react";
import Home from "./../Home/index";
import Footer from "../../Components/Footer/index";
import Third_Section from "../ThirdSection/index.js";
import FeedbackSection from "../FeedbackSection/index";
import SecondSection from "../SecondSection/index";
import { Body } from "./style";
class Index extends Component{
  render(){
  return (
    <Body>
      <Home/>
      <SecondSection />
      <Third_Section />
      <FeedbackSection />
      <Footer />
    </Body>
  );
}
}
export default Index;
