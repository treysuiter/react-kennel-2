import React from "react";
import { Link } from "react-router-dom";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          {props.location.name}
        </h3>
        <Link to={`/locations/${props.location.id}`}>
            <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.closeLocation(props.location.id)}>Close</button>
      </div>
    </div>
  );
};

export default LocationCard;