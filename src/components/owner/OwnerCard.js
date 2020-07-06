import React from "react";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          {props.owner.name}
        </h3>
        <h3>
            {props.owner.phoneNumber}
        </h3>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Delete</button>
      </div>
    </div>
  );
};

export default OwnerCard;