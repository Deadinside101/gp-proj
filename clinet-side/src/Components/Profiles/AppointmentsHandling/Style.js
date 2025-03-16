import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const AppointmentTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 0 8px  #669999; 
`;

export const TableHeader = styled.th`
  background-color: #f2f2f2;
  text-align: left;
  padding: 0.7rem;
  border: 1px solid #ddd;
  width: auto;
  
`;

export const IDTableHeader = styled.th`
  width: 3%;
  background-color: #f2f2f2;
  text-align: left;
  padding: 0.5rem;
  border: 1px solid #ddd;
  
`;
export const PictureTableHeader = styled.th`
  width: 5%;
  background-color: #f2f2f2;
  text-align: left;
  padding: 0.5rem;
  border: 1px solid #ddd;
  
`;

export const TableRow = styled.tr`
  
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
  
`;
export const DoctorImage = styled.img`
    border-radius: 50%;
    height:45px;
`;

export const Approoved = styled.td`
    background-color: #50C878;
    padding: 0.5rem;
    border: 1px solid #ddd;
    color: black;
    text-align: center;
`;

export const Pending = styled.td`
    background-color: #FFFF5C;
    padding: 0.5rem;
    border: 1px solid white;
    color: black;
    text-align: center;
`;

export const Declined = styled.td`
    background-color: red;
    padding: 0.5rem;
    border: 1px solid #ddd;
    color: black;
    text-align: center;
`;


export const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 0.5rem;
  align-items: center;
  &:first-child {
    background: #4caf50;
    color: white;

    &:hover {
        transition: background-color 0.2s ease-in-out;
        background: darkgreen;
      }
  }

  &:last-child {
    background-color: #f44336;
    color: white;

    &:hover {
        transition: background-color 0.2s ease-in-out;
        background: darkred;
      }
  }

  
`;
