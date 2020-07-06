import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import AnimalManager from '../../modules/AnimalManager';
const empendpoint = "employees"

const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setEmployees function to update state
    return AnimalManager.getAll(empendpoint)
    .then(employeesFromAPI => {
        console.log("emps from api")
      setEmployees(employeesFromAPI)
    });
  };

  // got the employees from the API on the component's first render
  useEffect(() => {
    getEmployees();
  }, []);
  // Finally we use map() to "loop over" the employees array to show a list of animal cards
  return (
    <div className="container-cards">
      {employees.map(employee => 
        <EmployeeCard key={employee.id} employee={employee} />)}
    </div>
  );
};
export default EmployeeList