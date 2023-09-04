import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Landing_Page/Landing_page';
import Navbar from './Components/Navbar/Navbar';
function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Route path="/" element={<Landing_Page />} />
                <Route path="/instant-consultation" element={<InstantConsultation />} />



            </BrowserRouter>

        </div>
    );
}

export default App;