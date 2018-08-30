import { Route, Redirect } from 'react-router-dom'
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
import AnimalForm from './AnimalForm'
import OwnerDetail from './OwnerDetail'
import Login from './Login'
import AnimalEditForm from './AnimalEditForm'
import "../index.css"


export default class ApplicationViews extends Component {



    // Check if credentials are in local storage
    isAuthenticated = () => localStorage.getItem("credentials") !== null


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
    editAnimal = (id, animalObject) => AnimalManager.patch(id, animalObject)
    .then(() => AnimalManager.getAll())
    .then(animals => this.setState({
        animals: animals
    }))

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

    addAnimal = animal => AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        }))

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
    }

    render() {
        return (
            <React.Fragment>
                
                <div className="viewArea">
                    <Route exact path="/" render={(props) => {
                        return <LocationList locations={this.state.locations} />
                    }} />
                    <Route path="/animals/:animalId(\d+)" render={(props) => {
                        return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    <Route exact path="/animals" render={(props) => {
                        return <AnimalList {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals} />
                    }} />

                    <Route path="/animals/new" render={(props) => {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            employees={this.state.employees} />
                    }} />
                    <Route exact path="/employees" render={props => {
                        if (this.isAuthenticated()) {
                            return <EmployeeList deleteEmployee={this.deleteEmployee}
                                employees={this.state.employees} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    
                    <Route exact path="/owners" render={props => {
                        if (this.isAuthenticated()) {
                            return <OwnersList deleteOwner={this.deleteOwner}
                                owners={this.state.owners} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/owners/:ownerId(\d+)" render={(props) => {
                        return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    }} />
                    <Route path="/animals/edit/:animalId(\d+)" render={(props) => {
                        return <AnimalEditForm {...props}
                        editAnimal={this.editAnimal}
                        animals={this.state.animals}
                        employees={this.state.employees} />
                     }} />
                </div>
                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }

}
