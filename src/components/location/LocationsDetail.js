import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
const endpoint = "locations"

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(endpoint, props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address
        });
        setIsLoading(false);
      });
  }, [props.locationId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(endpoint, props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <p>Address: {location.address}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
            Close
        </button>
      </div>
    </div>
  );
}

export default LocationDetail;