import React, { useState } from "react";
import "../emplist.css"; 

const Emplist = () => {
 
  const employees = [
    {
      id: 1,
      name: "John Doe",
      dob: "1990-05-15",
      role: "Software Engineer",
    },
    {
      id: 2,
      name: "Jane Smith",
      dob: "1985-08-20",
      role: "Product Manager",
    },
    {
      id: 3,
      name: "Alex Johnson",
      dob: "1993-02-10",
      role: "Sales Executive",
    },
    {
      id: 4,
      name: "Emily Brown",
      dob: "1987-11-30",
      role: "HR Manager",
    },
    {
      id: 5,
      name: "Michael Wilson",
      dob: "1991-07-05",
      role: "Financial Analyst",
    },
    {
      id: 6,
      name: "Jessica Taylor",
      dob: "1988-04-18",
      role: "Marketing Specialist",
    },
    {
      id: 7,
      name: "William Martinez",
      dob: "1995-09-25",
      role: "Operations Manager",
    },
    {
      id: 8,
      name: "Sophia Anderson",
      dob: "1989-03-12",
      role: "Customer Service Representative",
    },
    {
      id: 9,
      name: "Daniel Thomas",
      dob: "1992-06-08",
      role: "Project Coordinator",
    },
    {
      id: 10,
      name: "Olivia Garcia",
      dob: "1986-12-22",
      role: "Quality Assurance Engineer",
    },
  ];


  
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.id.toString().includes(searchQuery) ||
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="table-container">
      <center>
        <h1>Employee List</h1>
      </center>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by EMP ID, Name, or Role"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>EMP ID</th>
            <th>NAME</th>
            <th>DOB</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.dob}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Emplist;
