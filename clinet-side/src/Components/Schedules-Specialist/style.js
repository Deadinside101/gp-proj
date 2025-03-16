import styled from "styled-components";

export const BodySection = styled.div` 
    margin:80px;
    padding:40px;
    border-radius: 6px;
    box-shadow: 0 0 10px  #669999; 
    height: 600px;
`
export const LeftSide = styled.div`
    width:20%;
    float:left;
    background-color:rgba(236, 236, 236, 0.8);
    height: 380px;
`
export const RightSide = styled.div`
    width:68%;
    float:right;
    background-color:white;rgba(236, 236, 236, 0.8);
    color:gray;
    margin-top:10px;
    height: 400px;
    padding:50px;
    border-radius: 6px;
    box-shadow: 0 0 10px  #669999;

`

export const ImageWrapper = styled.div `
    width: 85%;
    padding-top:30px;
    padding:30px;
    display:block;
    border:2px solid white;
    background:white;
    margin-bottom:10px;
    margin-top:10px;
    border-radius: 6px;
    box-shadow: 0 0 8px  #669999;
`

export const Image = styled.img`
    width: 60%;
    height: 60px;
    border-radius:60px;
    margin-left:35px 
`

export const Overlay = styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
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
export const Schedules=styled.div`
    padding:5px;
    width: 105%;
    height:280px;
    display:block;
    padding-top:20px;
    border-radius: 6px;
    box-shadow: 0 0 8px  #669999;
    background-color:white;rgba(236, 236, 236, 0.8);

`
export const Name=styled.h2`
    font-size:20px;
    color:black;
    text-align:center;
    //background-color:#ddd;
    //text-shadow: 3px 0px lightgray;
    font-family: Comic Sans MS, Comic Sans, cursive;

`
export const Desc=styled.div`
    color:white;
    font-size:20px;
    text-align:center;
    padding-top:10px;
    
`

export const UlList = styled.ul`
    width: 50%;
    list-style: none;
    padding: 0%;
    font-size: 15px;
    margin-left:50px;
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
export const TableContainer = styled.table`
  width:100%;
  margin-top:14px;
  
`;

export const TableHeader = styled.th`
padding: 3px;
text-align: center;
background-color: #A3C1AD;
color: #fff;
font-size:20px;
`
export const TableRow = styled.tr`

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`

export const TableCell = styled.td`
border: 1px solid #ddd;
padding: 3px;
text-align: center;
&:hover {
  background-color: #f2f2f2;
}

`

export const SelectedCell1 = styled.div`
margin-top: 16px;
float:right;
font-size: 15px;
font-weight: bold;
border:2px solid white;
width:30%;
padding:10px;
background-color:lightgreen;
color:white;
color: ${({ selectedCell }) => (selectedCell ? 'A3C1AD' : 'black')};
`
export const Date=styled.td`
text-align:center;
color:white;
font-size:10px;
padding-left:20px;
`


export const RadioWrapper = styled.div`
  padding:3px;
  margin:10px;
  border:2px solid white;
  width:60%;
  background-color:white;
  font-size:15px;
`
export const Header = styled.div`
font-size:20px;
padding-left:20px;
margin-top:0px;
`
export const InputSubmit =styled.button`
position: relative;
background-color: black;
color: white;
font-size: 15px;
padding:12px 60px;
margin-top:50px;
float:right;
border: none;
border-radius: 10px;
text-align: center;
&:hover {
background-color:#6c757d;
color: white;
}
`
export const RadioLabel = styled.label`
 
 
`

export const RadioButton = styled.input`
  
`
export const Icon1 =styled.i`
color:gray;
display:flex;
padding-top:25px;
padding-right:20px;
font-size:20px;
`
export const Icon =styled.i`
color:gray;
display:flex;
padding-top:30px;
padding-bottom:10px;
font-size:20px;
`
export const Icon2 =styled.i`
color:gray;
display:flex;
padding-top:68px;
padding-right:20px;
font-size:20px;
`
export const SpanIcon =styled.span`

`
export const AlarmContainer = styled.div`
  position: absolute;
  box-shadow: 0 0 20px  #669999;
  top: 55%;
  left: 56%;
  transform: translate(-50%, -50%);
  background-color: white;
  width:60%;
  height:50%;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`
export const Button = styled.button`
  margin-top: 2%;
  margin-right:120px;
  padding:12px 44px;
  float:right;
  background-color: #6c757d;
  color: #FFF;
  border: none;
  border-radius: 4px;

`
export const CloseButton = styled.button`
margin-top: 2%;
margin-left:130px;
padding:12px 44px;
float:left;
background-color:  #6c757d;
color: #FFF;
border: none;
border-radius: 4px;
`

export const AlarmText = styled.p`
  font-size: 30px;
  margin-top:6%;
  text-align:center;
  padding:40px;
  background-color:black;
  color:white;
`
export const SubmittedText= styled.h1`
padding-left:30px;
padding-top:30px;
color:#6c757d;
font-size: 30px;
text-shadow: 2px 0px lightgray;
`

export const DoctorHeader=styled.h2`

text-align:center;
width:100%;
margin-left:200%;
color:black;
background-color:white;
`
export const Btn= styled.button`

`

export const ActionButton = styled.button`
  margin-top:5%;
  margin-left:4px;
  margin-right:0px;
  border-radius:px;
  padding:8px 14%;
  border:1px solid #A3C1AD;
  border-radius:10px;
  color:black;
  background:white;
font-family:Arial, sans-serif;
&:hover {
  background:linear-gradient(to right, #5F9EA0, #A3C1AD);#E1EBEE;#ADD8E6;#E1EBEE;#E6E6FA;
    color: white;
    }


`;








