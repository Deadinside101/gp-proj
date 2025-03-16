import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {PageContainer , Title , AppointmentTable , TableHeader , TableRow , TableCell , Button } from "./Style.js"
import Footer from '../../Footer/index.js';
import { TBody } from '../style.js';
const SpecialistAppointments = () => {
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
      <Title>Doctor Appointment Page</Title>
      <TBody>
      <AppointmentTable>
        <thead>
          <tr>
            <TableHeader>Patient Name</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <TableRow key={appointment.id}>
              <TableCell>{appointment.firstName} {appointment.lastName}</TableCell>
              <TableCell>{appointment.dob}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>
                <Button onClick={() => handleAccept(appointment.id)}>Accept</Button>
                <Button onClick={() => handleDecline(appointment.id)}>Decline</Button>
              </TableCell>
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

 
 export default SpecialistAppointments