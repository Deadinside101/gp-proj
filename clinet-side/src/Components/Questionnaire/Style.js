import styled from "styled-components";

export const Body = styled.div`
min-height: 100%;
padding: 0;
margin: 0;
outline: none;
font-family: Roboto, Arial, sans-serif;
font-size: 14px;
color: #666;
line-height: 22px;
`

export const Textbox  = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: inherit;
padding: 100px;
padding-top:80px;
`
export const Form = styled.form`
width: 97%;
padding: 20px;
border-radius: 6px;
background: #fff;
box-shadow: 0 0 8px  #669999; 
margin: 0;
outline: none;
font-family: Roboto, Arial, sans-serif;
font-size: 14px;
color: #666;
line-height: 40px;

`
export const Banner  = styled.div`
position: relative;
height: 400px;
background:linear-gradient(to right, #9907facc,#3204),url('../images/app2.png');
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
&:after {
content: "";
background-color: rgba(0, 0, 0, 0.2); 
position: absolute;
width: 100%;
height: 100%;
}
`
export const QesBorder  = styled.div`

width: 80%;
margin-right:30
height: 100%;
}
`

export const Input  = styled.input`
width: calc(100% - 10px);
padding: 5px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 3px;
margin: 0;
outline: none;
font-family: Roboto, Arial, sans-serif;
font-size: 14px;
color: #666;
line-height: 22px;
&:hover::placeholder{
    color:  #669999;
}
`

/*.item:hover p, .item:hover i, .question:hover p, .question label:hover, input:hover::placeholder {
color:  #669999;
}*/




/*input[type=radio], input[type=checkbox]  {
display: none;
} */
export const InputRadio  = styled(Input)`
display: none;
&:checked + label:before  {
    border: 2px solid  #669999;
}
&:checked + label:after {
    opacity: 1;
}
`
export const QuestionAnswerLabel  = styled.label`
display: block;
padding: 0;
margin: 0;
outline: none;
font-family: Roboto, Arial, sans-serif;
font-size: 14px;
color: #666;
line-height: 22px;

&:hover{
    color:  #669999;
}

`

export const LabelRadio  = styled(QuestionAnswerLabel)`
position: relative;
display: inline-block;
margin: 5px 20px 15px 0;
cursor: pointer;

&:before {
    content: "";
    position: absolute;
    left: 0;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 2px solid #ccc;
}
&:hover:before{
    border: 2px solid  #669999;
}
&:after {
    content: "";
    position: absolute;
    top: 6px;
    left: 5px;
    width: 8px;
    height: 4px;
    border: 3px solid  #669999;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    opacity: 0;
  };
`

export const Span  = styled.span`
    margin-left: 10px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    
    &:hover{
        color:  #669999;
      }
    &:hover:before{
        border: 2px solid  #669999;
    }
    &:after {
        content: "";
        position: absolute;
        top: 6px;
        left: 5px;
        width: 8px;
        height: 4px;
        border: 3px solid  #669999;
        border-top: none;
        border-right: none;
        transform: rotate(-45deg);
        opacity: 0;
    };
    
`

export const BtnBlock  = styled.div`
margin-top: 10px;
text-align: center;
`
export const Button  = styled.button`
width: 300px;
padding: 15px 30px;
border: none;
margin-top:3%;
margin-bottom:3%;
border-radius: 80px; 
background:  #A3C1AD;
font-size: 16px;
color: #fff;
cursor: pointer;
&:hover{
    background:  #a3c2c2;
}
`

 export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: lft;
  margin:10px;
  margin-top: 0px;

`;

export const Question = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  &:hover{
    color:  #669999;
  }
`;

export const AnswerOption = styled.label`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const RadioInput = styled.input`
  margin-right: 10px;
  display: block;
  padding: 0;
  margin: 0;
  outline: none;
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  color: #666;
  line-height: 22px;
  content: "";
}
&:hover{
    color:  #669999;
    border: 2px solid  #669999;
}
`;
export const Form2 = styled.form`

align-items: center;
position: absolute;
  box-shadow: 0 0 200px  #669999;
  top: 105%;
  left: 56%;
  transform: translate(-90%, -40%);
  background-color: white;
  width:50%;
  height:68%;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;
export const CloseIcon = styled.span`
font-size: 24px;
color: black;
position: absolute;
top: 10px;
right: 30px;
cursor: pointer;
padding:1%;
&:hover {
    background-color: red;
    color: white;
    top: 10px;
    right: 30px;
    }
`;
export const FormHeader = styled.div`
color:#008080;
text-align:center;
font-size: 30px;
border:2px solid white;
margin-bottom:0%;
margin-top:2%;
padding:5%;

`;
export const Button2 =styled.button`
padding:10px 5px;
transform: translate(-10%, -110%);
width:20%;
margin-top:0%;
margin-right:5%;
float:right;
border-radius: 50px;
//box-shadow: 0 0 7px  gray; 
font-size:20px;
border:1px solid #A3C1AD;
color:black;
font-family:Apple Chancery, cursive;
background:white;
&:hover {
  background:linear-gradient(to right, #A3C1AD, #A3C1AD);#E1EBEE;#ADD8E6;#E1EBEE;#E6E6FA;
    ;
    color: white;
    }
   
`;
export const Button3 =styled.button`
padding:10px 5px;
transform: translate(-200%, -110%);
width:20%;
margin-top:0%;
margin-right:5%;
float:right;
border-radius: 50px;
//box-shadow: 0 0 7px  gray; 
font-size:20px;
border:1px solid #A3C1AD;
color:black;
font-family:Apple Chancery, cursive;
background:white;
&:hover {
  background:linear-gradient(to right, #A3C1AD, #A3C1AD);#E1EBEE;#ADD8E6;#E1EBEE;#E6E6FA;
    ;
    color: white;
    }
   
`;
export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #0077CC;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: #005CA9;
  }
`
