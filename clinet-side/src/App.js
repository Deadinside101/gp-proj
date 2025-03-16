import React, { Component } from "react";
import Index from "./Homee/Index/index";
import Navbar from "./Components/Navbar/index";
import Contact from "./Components/Contact/index";
import Login from "./Components/Login/index";
import Appointment from "./Components/Appointments/index";
import Questionnaire from "./Components/Questionnaire/index";
import Schedule from "./Components/Schedules";
import ScheduleAdmin from "./Components/Schedules-Specialist/index.js";
import Understanding_Autism1 from "./Homee/ThirdSection/Understanding_Autism1";
import Understanding_Autism2 from "./Homee/ThirdSection/Understanding_Autism2";
import Understanding_Autism3 from "./Homee/ThirdSection/Understanding_Autism3";
import Understanding_Autism4 from "./Homee/ThirdSection/Understanding_Autism4";
import Specialist from "./Components/Profiles/specialist";
import About from "./Components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body } from "./Homee/Index/style";
import SpecialistForParent from "./Components/Profiles/SpecialistForParent";
import Parent from "./Components/Profiles/parent";
import Child from "./Components/Profiles/child";
import Treatments from "./Components/Treatments";
import EditParentProfile from "./Components/Profiles/EditProfile/EditParentProfile";
import EditPatientProfile from "./Components/Profiles/EditProfile/EditPatientProfile";
import EditSpecialistProfile from "./Components/Profiles/EditProfile/EditSpecialistProfile";
import SpecialistAppointments from "./Components/Profiles/AppointmentsHandling/SpecialistAppointments";
import ParentAppointments from "./Components/Profiles/AppointmentsHandling/ParentAppointments";
import ParentSignUpForm from "./Components/Login/ParentSignUpForm";
import PatientSignUpForm from "./Components/Login/PatientSignUpForm";
import SpecialistSignUpForm from "./Components/Login/SpecialistSignUpForm";
import Game from "./Components/Treatments/Game";
import GameFour from "./Components/Treatments/Game/classify/Game.js";
import Game1 from "./Components/Treatments/Game/game1/game1";
class App extends Component {
  state = {
    id: 1,
    id2: 2,
  };

  render() {
    return (
      <Body>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Parent" element={<Parent />} />
            <Route path="/About" element={<About />} />
            <Route path="/Child" element={<Child />} />
            <Route path="/EditParentProfile" element={<EditParentProfile />} />
            <Route
              path="/EditPatientProfile"
              element={<EditPatientProfile />}
            />
            <Route
              path="/SpecialistAppointments"
              element={<SpecialistAppointments />}
            />
            <Route
              path="/ParentAppointments"
              element={<ParentAppointments />}
            />
            <Route
              path="/EditSpecialistProfile"
              element={<EditSpecialistProfile />}
            />
            <Route path="/ParentSignUpForm" element={<ParentSignUpForm />} />
            <Route path="/PatientSignUpForm" element={<PatientSignUpForm />} />
            <Route
              path="/SpecialistSignUpForm"
              element={<SpecialistSignUpForm />}
            />
            <Route path="/Treatments" element={<Treatments />} />
            <Route
              path="/specialist-account"
              element={<Specialist index={1} />}
            />
            <Route path="/Specialist2" element={<Specialist index={2} />} />
            <Route path="/Specialist3" element={<Specialist index={3} />} />
            <Route path="/Specialist4" element={<Specialist index={4} />} />
            <Route path="/Specialist5" element={<Specialist index={5} />} />
            <Route path="/Specialist6" element={<Specialist index={6} />} />
            <Route path="/Specialist7" element={<Specialist index={7} />} />
            <Route path="/Specialist8" element={<Specialist index={8} />} />
            <Route path="/Specialist9" element={<Specialist index={9} />} />
            <Route
              path="/SpecialistForParent1"
              element={<SpecialistForParent index={1} />}
            />
            <Route
              path="/SpecialistForParent2"
              element={<SpecialistForParent index={2} />}
            />
            <Route
              path="/SpecialistForParent3"
              element={<SpecialistForParent index={3} />}
            />
            <Route
              path="/SpecialistForParent4"
              element={<SpecialistForParent index={4} />}
            />
            <Route
              path="/SpecialistForParent5"
              element={<SpecialistForParent index={5} />}
            />
            <Route
              path="/SpecialistForParent6"
              element={<SpecialistForParent index={6} />}
            />
            <Route
              path="/SpecialistForParent7"
              element={<SpecialistForParent index={7} />}
            />
            <Route
              path="/SpecialistForParent8"
              element={<SpecialistForParent index={8} />}
            />
            <Route
              path="/SpecialistForParent9"
              element={<SpecialistForParent index={9} />}
            />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/Schedule1" element={<Schedule index={1} />} />
            <Route path="/Schedule2" element={<Schedule index={2} />} />
            <Route path="/Schedule3" element={<Schedule index={3} />} />
            <Route path="/Schedule4" element={<Schedule index={4} />} />
            <Route path="/Schedule5" element={<Schedule index={5} />} />
            <Route path="/Schedule6" element={<Schedule index={6} />} />
            <Route path="/Schedule7" element={<Schedule index={7} />} />
            <Route path="/Schedule8" element={<Schedule index={8} />} />
            <Route path="/Schedule9" element={<Schedule index={9} />} />
            <Route
              path="/ScheduleAdmin1"
              element={<ScheduleAdmin index={1} />}
            />
            <Route
              path="/ScheduleAdmin2"
              element={<ScheduleAdmin index={2} />}
            />
            <Route
              path="/ScheduleAdmin3"
              element={<ScheduleAdmin index={3} />}
            />
            <Route
              path="/ScheduleAdmin4"
              element={<ScheduleAdmin index={4} />}
            />
            <Route
              path="/ScheduleAdmin5"
              element={<ScheduleAdmin index={5} />}
            />
            <Route
              path="/ScheduleAdmin6"
              element={<ScheduleAdmin index={6} />}
            />
            <Route
              path="/ScheduleAdmin7"
              element={<ScheduleAdmin index={7} />}
            />
            <Route
              path="/ScheduleAdmin8"
              element={<ScheduleAdmin index={8} />}
            />
            <Route
              path="/ScheduleAdmin9"
              element={<ScheduleAdmin index={9} />}
            />
            <Route
              path="/Understanding_Autism1"
              element={<Understanding_Autism1 />}
            />
            <Route
              path="/Understanding_Autism2"
              element={<Understanding_Autism2 />}
            />
            <Route
              path="/Understanding_Autism3"
              element={<Understanding_Autism3 />}
            />
            <Route
              path="/Understanding_Autism4"
              element={<Understanding_Autism4 />}
            />
            <Route path="/Game1" element={<Game1 />} />
            <Route path="/Game2" element={<Game index={2} />} />
            <Route path="/Game3" element={<Game index={3} />} />
            <Route path="/Game4" element={<GameFour />} />
          </Routes>
        </BrowserRouter>
      </Body>
    );
  }
}

export default App;
