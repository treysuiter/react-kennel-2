import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm'
//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationsDetail"
import LocationForm from "./location/LocationForm"
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";

const ApplicationViews = () => {
    return (
        <React.Fragment>
            <Route
                exact
                path="/"
                render={props => {
                    return <Home />;
                }}
            />
            <Route exact path="/animals" render={props => {
                return <AnimalList {...props} />
            }} />
            <Route
                path="/animals/:animalId(\d+)"
                render={props => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                }} />

            <Route path="/animals/new" render={props => {
                return <AnimalForm {...props} />
            }} />

            <Route
                exact
                path="/locations"
                render={props => {
                    return <LocationList {...props} />;
                }}
            />

            <Route
                path="/locations/:locationId(\d+)"
                render={props => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
                }} />

            <Route path="/locations/new" render={props => {
                return <LocationForm {...props} />
            }} />

            <Route
                path="/employees"
                render={props => {
                    return <EmployeeList />;
                }}
            />
            <Route
                path="/owners"
                render={props => {
                    return <OwnerList />;
                }}
            />
        </React.Fragment>
    );
};

export default ApplicationViews;