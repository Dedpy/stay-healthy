import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Components/Landing_Page/LandingPage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign_Up/Sign_Up";
import Navbar from "./Components/Navbar/Navbar";
import FindDoctorSearch from "./Components/FindDoctorSearch/FindDoctorSearch";
import DoctorBook from "./Components/DoctorCard/DoctorBook";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instant-consultation" element={<InstantConsultation />} />
        <Route path="/finddoctor" element={<FindDoctorSearch />} />
        <Route path="/search/doctors" element={<DoctorBook />} />
      </Routes>
    </BrowserRouter>
  );
}
