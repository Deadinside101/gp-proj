import styled from "styled-components";

export const BodySection = styled.div` 
    margin:60px;
    padding:4%;
    border-radius: 6px;
    box-shadow: 0 0 10px  #669999; 
    //background:linear-gradient(to top, white, #E1EBEE);
    height: 1000px;
    //background-color:#E1EBEE;#ADD8E6;#E1EBEE;#E6E6FA;
`
export const LeftSide = styled.div`
    width:65%;
    float:left;
    height: 900px;
    margin-top:3%;
`
export const RightSide = styled.div`
    width:30%;
    float:right;
    height: 860px;
    padding:2%;
    margin-top:1%;

`

export const ImageWrapper = styled.div `
    width: 100%;
    padding-left:2%;
    padding-top:8%;
    padding-bottom:0%;

    
`

export const Image = styled.img`
    width: 40%;
    height: 80px;
    border-radius:5px;
    margin-left:30% ;
    box-shadow: 0 0 4px  ; 
`
export const Header =styled.div`
    position: absolute;
    color:white;
    top: 20%;
    left: 50%;
    transform: translate(-50%,-50%);
    
`
export const H1 =styled.h1`
    font-size:35px;
    background-color:white;
    border-radius:5px;
    color:#005f69;#A3C1AD;#005f69; black;#800080;black;white;#005f69;
`

export const Title =styled.div`
    font-size:25px;
    text-align:left;
    color: black;
`
export const HeaderSection =styled.div`
    height:250px;
    background: url('../images/prof7.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    border-radius:60px;
    box-shadow: 0 0 12px  ; 
`
export const Schedules=styled.div`
    padding:5px;
    width: 100%;
    height:430px;  
    border-radius: 20px;
    box-shadow: 0 0 5px ; 
    margin-bottom:65px;
    
`
export const Name=styled.h2`
    font-size:20px;
    color:black;
    text-align:center;
    //text-shadow: 2px 0px lightgray;
    font-family:  Arial, sans-serif;
`
export const Desc=styled.div`
    color:white;
    font-size:20px;
    text-align:center;
  
    
`
export const Sec1=styled.div`
height:300px;
margin-bottom:95px;
margin-top:20px;
width:100%;
background-color:white;
border-radius: 10px; 


`
export const Sec3=styled.div`
height:540px;
margin-top:50px;
width:100%;
background-color:white;
border-radius: 20px; 
box-shadow: 0 0 5px  ;  
`
export const Icon4 =styled.i`

font-size:20px;
padding-right:3%;
padding-left:3%;
border-radius: 20px;
color:#5F9EA0;#007791;#800080;#367588;
&:hover {
    background-color:black;
    color: white;
    }
`

export const IconSection=styled.div`
text-align:center;
width:100%;
padding-bottom:2%;

`
export const Overlay = styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    font-size: 15px;
    opacity: 0 ;
    margin:0;
    border-radius: 20px;
    
`

export const OverlaySpan= styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    text-align: center;
    &:hover {
    background-color: black;
    color: white;
}

`

export const UlList = styled.ul`
    width: 70%;
    list-style: none;
    padding: 0%;
    font-size: 9px;
    margin-left:12%;
    margin-top:10%;
    text-align:center;
    
`

export const ListItem = styled.li`
    display:flex;
    padding:0px;
    color:gray;
    font-size: 15px;
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
`

export const ReviewHeader = styled.div`
margin-top: 30px;
margin-left: 30px;
float:left;
font-size: 40px;
font-weight: bold;
border:2px solid white;
color:#008080;
//text-shadow: 0 0 7px gray ; 
padding:10px;
`
export const ReviewHeader2 = styled.div`
color:#008080;
text-align:center;
font-size: 30px;
border:2px solid white;
margin-bottom:5%;
margin-top:4%;
`
export const Image2 = styled.img`
    width:8%;
    height: 70px;
    border-radius:70px;
    float:left;
    margin-right:15px;
`
export const Icon5 =styled.i`
color:gold;
font-size:20px;
background:white;
border:none;
`
export const Name2=styled.h2`
    font-size:20px;
    color:black;
    text-align:left;
    margin-top:10px;
    font-family: Arial, sans-serif;
`
export const ReviewSection = styled.div` 
    margin:0px;
    padding:20px;
    margin-top:30px;
    margin-left:10%;
    width:80%;
    padding-bottom:0px;
    border-radius: 6px;
    box-shadow: 0 0 3px  #669999; 
`
export const Comment = styled.div`
font-size:20px;
margin-left:7%;
color:gray;
text-align:left;
display:flex;
font-family:  Arial, sans-serif;
padding-bottom:1%;
`

export const IconSection2 =styled.button`
text-align:center;
margin-bottom:3%;
background:white;
border:none;
`

export const Icon1 =styled.i`
color:gray;
display:flex;
padding-top:0px;
padding-right:20px;
font-size:20px;
`
export const Icon =styled.i`
color:gray;
display:flex;
padding-top:30px;
padding-bottom:10px;
padding-right:13px;
font-size:20px;
`

export const Icon2 =styled.i`
color:gray;
display:flex;
padding-top:15px;
padding-right:20px;
font-size:20px;
`
export const IconP3 =styled.i`
color:gray;
display:flex;
padding-top:0px;
padding-right:20px;
font-size:20px;
`
export const IconP4 =styled.i`
color:gray;
display:flex;
padding-top :0px;
padding-bottom:10px;
padding-right:13px;
font-size:20px;
`

export const Iconp5 =styled.i`
color:gray;
display:flex;
padding-top:0px;
padding-right:10px;
font-size:20px;
`
export const Button =styled.button`
padding:13%;
width:100%;
border-radius: 20px;
box-shadow: 0 0 7px  gray; 
font-size:25px;
color:white;
font-family:Apple Chancery, cursive;
background:linear-gradient(to right, #A3C1AD, #008080);#E1EBEE;#ADD8E6;#E1EBEE;#E6E6FA;
&:hover {
    background:black;
    color: white;
    }

`
export const Button2 =styled.button`
padding:10px 20px;
width:30%;
margin-top:4%;
margin-right:5%;
float:right;
border-radius: 50px;
//box-shadow: 0 0 7px  gray; 
font-size:25px;
border:1px solid #A3C1AD;
color:black;
font-family:Apple Chancery, cursive;
background:white;
&:hover {
  background:linear-gradient(to right, #A3C1AD, #008080);#E1EBEE;#ADD8E6;#E1EBEE;#E6E6FA;
    ;
    color: white;
    }

`
export const Form = styled.form`

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

export const Label = styled.label`
  font-weight: bold;
  margin-left: 6%;
  font-size:20px;
font-family:Apple Chancery, cursive;

`;



export const RatingContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const StarIcon = styled.span`
  font-size: 30px;
  color: ${({ isActive }) => (isActive ? "#ffc107" : "#e4e5e9")};
  cursor: pointer;
  &:hover {
          color: #ffc107;
      }
  
  

  `;

  export const InputForm =styled.div`
    overflow: hidden
`;

export const Input =styled.input`

  width: 60%;
  padding: 10px 10px;
  margin-left: 25px ;
  border: 0.5px solid gray;
  text-align: center;
  border-radius: 20px;
  
`;

export const TextArea =styled.textarea`
    width: 60%;
    margin-left:17%;
    background:#F0F8FF;#A3C1AD;
    border-radius: 5px;
    margin-top:10px;
    font-size:15px;
    padding:25px;
    
    `;

export const InputSubmit =styled.button`
position: relative;
background-color: black;
color: white;
font-size: 15px;
padding:15px 45px;
float:right;
margin-left:100px;
margin-top:50px;
margin-bottom:10px;
border: none;
cursor: pointer;
border-radius: 20px;
text-align: center;
&:hover {
background-color: gray;
color: white;
}
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

export const TableHeader = styled.th`
padding: 3px;
text-align: center;
background-color: #008080;
background:#8DA399;linear-gradient(to right, #A3C1AD, #A3C1AD);
color: white;
font-size:20px;
`
export const TableRow = styled.tr`

  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`

export const TableCell = styled.td`
border: 1px solid #ddd;
padding: 20px;
text-align: center;
transition: background-color 0.3s ease;

`
export const TableContainer = styled.table`
  width:100%;
  padding:7%;
  
`;
export const TableContainer2 = styled.table`
  width:100%;
  padding:6%;
  
`;
export const TableDiv = styled.div`
  width:100%;
  overflow: auto;
   height: 340px;
   margin-bottom:0%;
  
`;
export const TBody = styled.tbody`
  width:100%;
  overflow: auto;
   height: 350px;
   margin-bottom:3%;
`;

export const Image3 = styled.img`
    width:18%;
    height: 30px;
    border-radius:100px;
    float:center;
    margin-right:10px;
`
export const Header_child_list =styled.div`
  font-size:30px;
    color:black;
    padding-top:6%;
    padding-left:8%;
    color: #008080;
    font-family:Apple Chancery, cursive;

    `
export const AddButton = styled.button`
font-size: 24px;
background:white;
border-radius:50px;
padding :2px 50px;
float:right;
margin-right:10%;
font-family:Apple Chancery, cursive;
border: 1px solid  #A3C1AD;
&:hover {
    background:linear-gradient(to right, #A3C1AD, #8DA399);#E1EBEE;#ADD8E6;#E1EBEE;#E6E6FA;    ;
    color: white;
    }
`;
export const Button_parent =styled.button`
padding:13%;
width:100%;
border-radius: 20px;
box-shadow: 0 0 7px  gray; 
font-size:25px;
color:white;
font-family:Apple Chancery, cursive;
background:linear-gradient(to right, #A3C1AD, #008080);
background:linear-gradient(to right, #A3C1AD, #8DA399);#E1EBEE;#ADD8E6;#E1EBEE;#E6E6FA;    ;

&:hover {
    background:black;
    color: white;
    }`
