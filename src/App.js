// src/App.js

import React from "react";

import "./App.css";
import EmployeeDetaily from "./components/EmployeeDetail";
import EmployeeDetailxyz from "./components/EmployeeDetailxyz";
// import ContactPage from "./components/ContactPage"; // Page to show contact info
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/employee/:employee_id" element={<EmployeeDetaily />} />

        <Route path="/employee/pf" element={<EmployeeDetailxyz />} />
      </Routes>
    </Router>
  );
};

export default App;
