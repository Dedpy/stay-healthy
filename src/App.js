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
import Notification from "./Components/Notification/Notification";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ProfileForm from "./Components/ProfileCard/ProfileCard";
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Notification>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/finddoctor" element={<FindDoctorSearch />} />
          <Route path="/search/doctors" element={<DoctorBook />} />
          <Route path="/reviews" element={<ReviewForm />} />
          <Route
            path="/instant-consultation"
            element={<InstantConsultation />}
          />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/reports" element={<ReportsLayout />} />
        </Routes>
      </Notification>
    </BrowserRouter>
  );
}
