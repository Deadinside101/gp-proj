import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {PageContainer , Title , AppointmentTable , TableHeader , TableRow , TableCell , Button , Approoved , Pending , DoctorImage, IDTableHeader , PictureTableHeader , Declined} from "./Style.js"
import Footer from '../../Footer/index.js';
import { TBody } from '../style.js';

const ParentAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('js/data.json'); // Replace with your API endpoint
      setAppointments(response.data.Profiles);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleAccept = async (appointmentId) => {
    try {
      await axios.put(`/api/appointments/${appointmentId}/accept`); // Replace with your API endpoint
      fetchAppointments();
    } catch (error) {
      console.error('Error accepting appointment:', error);
    }
  };

  const handleDecline = async (appointmentId) => {
    try {
      await axios.put(`/api/appointments/${appointmentId}/decline`); // Replace with your API endpoint
      fetchAppointments();
    } catch (error) {
      console.error('Error declining appointment:', error);
    }
  };

  return (
    <>
    <PageContainer>
      <Title>Parent Appointment Page</Title>
      <TBody>
      <AppointmentTable>
        <thead>
          <tr>
            <IDTableHeader  >ID</IDTableHeader>
            <PictureTableHeader>Picture</PictureTableHeader>
            <TableHeader>Doctor Name</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.id}</TableCell>
              <TableCell><DoctorImage src={appointment.profileImage} ></DoctorImage></TableCell>
              <TableCell>{appointment.firstName} {appointment.lastName}</TableCell>
              <TableCell>{appointment.dob}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              {appointment.status === "Approved" ? (
                <Approoved>Approved</Approoved>
              ) : appointment.status === "Declined" ? (
                <Declined>Declined</Declined>
              ) : (
                <Pending>Pending</Pending>
              )}
              
            </TableRow>
          ))}
        </tbody>
      </AppointmentTable>
      </TBody>
    </PageContainer>
    <Footer/>
    </>
  );
};


export default ParentAppointments