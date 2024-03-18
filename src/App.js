import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import EmployeeListView from "./pages/EmployeeListView.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employeelistview" element={<EmployeeListView />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
