import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import AnimalManager from '../../modules/AnimalManager';
const endpoint = "owners"

const OwnerList = () => {
  // The initial state is an empty array
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    // After the data comes back from the API, we
    //  use the setOwners function to update state
    return AnimalManager.getAll(endpoint)
    .then(ownersFromAPI => {
      setOwners(ownersFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getOwners();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {owners.map(owner => 
      <OwnerCard key={owner.id} owner={owner}/>)}
    </div>
  );
};
export default OwnerList