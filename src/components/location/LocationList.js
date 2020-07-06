import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import AnimalManager from '../../modules/AnimalManager';
const endpoint = "locations"

const LocationList = () => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setLocations function to update state
    return AnimalManager.getAll(endpoint)
    .then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  // got the locations from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  // Finally we use map() to "loop over" the locations array to show a list of animal cards
  return (
    <div className="container-cards">
      {locations.map(location => 
      <LocationCard key={location.id} location={location}/>)}
    </div>
  );
};
export default LocationList