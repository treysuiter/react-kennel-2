import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import AnimalManager from '../../modules/AnimalManager';
const endpoint = "employees"

const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setEmployees function to update state
    return AnimalManager.getAll(endpoint)
    .then(employeesFromAPI => {
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
      {employees.map(employee => <EmployeeCard />)}
    </div>
  );
};
export default EmployeeList