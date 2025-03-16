import React  ,{useState,useEffect}from "react";
import {ActionButton,Date,TableHeader,TableContainer,TableRow,TableCell} from './style.js';
import axios from "axios";

const TableAdmin = () => {
       const [tableData, setTableData] = useState([]);
       const [selectedCell, setSelectedCell] = useState(null);
       useEffect(() => {
        axios.get('js/data.json').then(res => {setTableData (res.data.tableData)})
       }, []);  
       
       const addData = () => {
        // Prompt the user to enter new data
      
        const newData = prompt("Enter new data:");
        for (let i = 1; i < tableData.length; i++) {
          for (let j = 1; j < tableData[i].length; j++) {
            if (tableData[i][j] === "") {
          setTableData((prevData) => {
            const newDataArray = [...prevData];
            newDataArray[i][j] = newData;
            return newDataArray;
          });
          return tableData;
        }
      }
    }
    alert("No empty cell found in the table!");
  };
      const updateData = () => {
        if (selectedCell) {
          const updatedData = prompt("Enter updated data:");
          setTableData((prevData) => {
            const updatedDataArray = [...prevData];
            updatedDataArray[selectedCell.row][selectedCell.col] = updatedData;
            return updatedDataArray;
          });
          return tableData;
        }
        alert("Please select cell to update");
      };
      const deleteData = () => {
        if (selectedCell) {
          setTableData((prevData) => {
            const newDataArray = [...prevData];
            newDataArray[selectedCell.row][selectedCell.col] = "";
            return newDataArray;
          });
          return tableData;
        }
        alert("Please select cell to delete");
      };
    
      const renderTable = () => {
        return (
          <React.Fragment>
        <tbody>
        {tableData.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
          {row.map((cell, colIndex) => (
            <TableCell key={colIndex} onClick={() => setSelectedCell({ row: rowIndex, col: colIndex })}
            style={{
              backgroundColor:selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex? "#A3C1AD": "white",
              color:selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex? "white": "gray", }}
          >
                {cell}
          </TableCell>
            ))}
          </TableRow>
              ))}
          </tbody>
          </React.Fragment>
        );
      };
    

  return (
    <div>
    <TableContainer>
      <thead>
        <tr>
          <TableHeader>Fri <br/><Date>30 Mar.</Date></TableHeader>
          <TableHeader>Sat <br/><Date>31 Mar.</Date></TableHeader>
          <TableHeader>Sun <br/><Date>01 Apr.</Date></TableHeader>
          <TableHeader>Mon <br/><Date>02 Apr.</Date></TableHeader>
          <TableHeader>Tue <br/><Date>03 Apr.</Date></TableHeader>
          <TableHeader>Wed <br/><Date>04 Apr.</Date></TableHeader>
        </tr>
      </thead>
        {renderTable()}
      </TableContainer>
     
        <ActionButton onClick={addData}>Add</ActionButton>
        <ActionButton onClick={updateData}>Update</ActionButton>
        <ActionButton onClick={deleteData}>Delete</ActionButton>
      
   
    </div>
  )};
  
  
export default TableAdmin;