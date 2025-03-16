import React  ,{useState,useEffect}from "react";
import {SelectedCell1,Date,TableHeader,TableContainer,TableRow,TableCell} from './style.js';
import axios from "axios";

const Table = () => {

      const [day,setDay] = useState("")
      
       const [selectedCell, setSelectedCell] = useState (null);
       const [tableData, settableData] = useState ([]);
       useEffect(() => {
        axios.get('js/data.json').then(res => {settableData (res.data.cells)})
        setDay("ay7aga")
       }, []);

      const SelectedCell = ({ selectedCell }) => {
        if (!selectedCell) {
          return null;
        }

        return <SelectedCell1>Selected Appointment is:<br/><br/>{selectedCell}</SelectedCell1>;
      };

        const handleSelectCell = (value) => {
          setSelectedCell(value);
      };

      const TimeTablee =tableData.map((cellItem) =>{
      return(
          <React.Fragment>
            <TableRow key={cellItem.id}>
            
            <TableCell isSelected={selectedCell === cellItem.cell1+'Fri'} onClick={() => handleSelectCell(cellItem.cell1+'Fri')}>{cellItem.cell1}</TableCell>
            <TableCell isSelected={selectedCell === cellItem.cell2+'Sat'} onClick={() => handleSelectCell(cellItem.cell2+'Sat')}>{cellItem.cell2}</TableCell>
            <TableCell isSelected={selectedCell === cellItem.cell3+'Sun'} onClick={() => handleSelectCell(cellItem.cell3+'Sun')}>{cellItem.cell3}</TableCell>
            <TableCell isSelected={selectedCell === cellItem.cell4+'Mon'} onClick={() => handleSelectCell(cellItem.cell4+'Mon')}>{cellItem.cell4}</TableCell>
            <TableCell isSelected={selectedCell === cellItem.cell5+'Tue'} onClick={() => handleSelectCell(cellItem.cell5+'Tue')}>{cellItem.cell5}</TableCell>
            <TableCell isSelected={selectedCell === cellItem.cell6+'Wed'} onClick={() => handleSelectCell(cellItem.cell6+'Wed')}>{cellItem.cell6}</TableCell>
            </TableRow>
          </React.Fragment>
        )})

  return (
    <div>
    <TableContainer>
      <thead>
        <tr>
          <TableHeader>Sat <br/><Date>31 Mar.</Date></TableHeader>
          <TableHeader>Sun <br/><Date>01 Apr.</Date></TableHeader>
          <TableHeader>Mon <br/><Date>02 Apr.</Date></TableHeader>
          <TableHeader>Tue <br/><Date>03 Apr.</Date></TableHeader>
          <TableHeader>Wed <br/><Date>04 Apr.</Date></TableHeader>
          <TableHeader>{day}<br/><Date>30 Mar.</Date></TableHeader>
        </tr>
      </thead>
      <tbody>
        {TimeTablee}
      </tbody>
    </TableContainer>
    <SelectedCell selectedCell={selectedCell} />
    </div>
  )};
  
  
export default Table;