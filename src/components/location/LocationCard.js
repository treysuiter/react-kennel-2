import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          {props.location.name}
        </h3>
        <button type="button" onClick={() => props.closeLocation(props.location.id)}>Close</button>
      </div>
    </div>
  );
};

export default LocationCard;