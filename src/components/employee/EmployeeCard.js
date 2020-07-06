import React from "react";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          {props.employee.name}
        </h3>
      </div>
    </div>
  );
};

export default EmployeeCard;