import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './Animals'
import LocationList from './LocationList'
import EmployeeList from './Employee'
import OwnersList from './Owner'
import AnimalManager from "../modules/animalManager"
import EmployeeManager from "../modules/employeeManager"
import LocationManager from "../modules/locationManager"
import OwnerManager from "../modules/ownerManager"
import AnimalDetail from './AnimalDetail'
import OwnerDetail from './OwnerDetail'
import "../index.css"


export default class ApplicationViews extends Component {
    state = {

        locations: [],
        animals: [],
        employees: [],
        owners: []

    }


    // deleteAnimal = id => {
    //     return fetch(`http://localhost:5002/animals/${id}`, {
    //         method: "DELETE"
    //     })
    //         .then(e => e.json())
    //         .then(() => fetch(`http://localhost:5002/animals`))
    //         .then(e => e.json())
    //         .then(animals => this.setState({
    //             animals: animals
    //         }))
    // }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            }))
    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
            .then(owners => this.setState({
                owners: owners
            }))
    }
    deleteAnimal = id => AnimalManager.delete(id)
        .then(animals => this.setState({
            animals: animals
        }))

    componentDidMount() {

        AnimalManager.getAll().then(allAnimals => {
            // console.log(allAnimals)
            this.setState({
                animals: allAnimals
            })
        })


        EmployeeManager.getAll().then(allEmployees => {
            // console.log(allEmployees)
            this.setState({
                employees: allEmployees
            })
        })

        LocationManager.getAll().then(allLocations => {
            // console.log(allLocations)
            this.setState({
                locations: allLocations
            })
        })

        OwnerManager.getAll().then(allOwners => {
            // console.log(allOwners)
            this.setState({
                owners: allOwners
            })
        })
        // const newState = {}

        // fetch("http://localhost:5002/animals")
        //     .then(r => r.json())
        //     .then(animals => newState.animals = animals)
        //     .then(() => fetch("http://localhost:5002/employees")
        //     .then(r => r.json()))
        //     .then(employees => newState.employees = employees)
        //     .then(() => fetch("http://localhost:5002/locations")
        //     .then(r => r.json()))
        //     .then(locations => newState.locations = locations)
        //     .then(() => fetch("http://localhost:5002/owners")
        //     .then(r => r.json()))
        //     .then(owners => newState.owners = owners)
        //     .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <div className="viewArea">
                    <Route exact path="/" render={(props) => {
                        return <LocationList locations={this.state.locations} />
                    }} />
                    <Route exact path="/animals" render={(props) => {
                        return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    <Route path="/animals/:animalId(\d+)" render={(props) => {
                        return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    }} />
                    <Route exact path="/owners" render={(props) => {
                        return <OwnersList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    }} />
                    <Route path="/owners/:ownerId(\d+)" render={(props) => {
                        return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    }} />
                </div>
            </React.Fragment>
        )
    }
}
