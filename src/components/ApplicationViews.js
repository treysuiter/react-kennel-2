import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationsDetail"
import LocationForm from "./location/LocationForm"
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm"
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm"
import Login from "./auth/Login.js";
import AnimalManager from "../modules/AnimalManager"

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = () => {
    return (
        <React.Fragment>

            <Route path="/login" component={Login} />

            <Route
                exact
                path="/"
                render={props => {
                    return <Home />;
                }}
            />
            <Route exact path="/animals" render={props => {
                if (isAuthenticated()) {
                    return <AnimalList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
            <Route
                exact
                path="/animals/:animalId(\d+)"
                render={props => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
                }} />

            <Route path="/animals/new" render={props => {
                return <AnimalForm {...props} />
            }} />

            <Route path="/animals/:animalId(\d+)/edit" render={props => {
                if (isAuthenticated()) {
                    return <AnimalEditForm {...props} />
                } else {
                    return <Redirect to="/login" />
                }
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
                exact
                path="/employees"
                render={props => {
                    return <EmployeeList {...props} />;
                }}
            />

            <Route path="/employees/new" render={props => {
                return <EmployeeForm {...props} />
            }} />

            <Route
                exact
                path="/owners"
                render={props => {
                    return <OwnerList {...props} />;
                }}
            />

            <Route path="/owners/new" render={props => {
                return <OwnerForm {...props} />
            }} />
        </React.Fragment>
    );
};

export default ApplicationViews;