import React, { Component } from 'react'
import EmployeeList from "./Employee"  // Import EmployeeList component
import LocationList from "./LocationList"  // Import LocationList component
import AnimalList from "./Animals"  // Import AnimalList component
import OwnerList from "./Owner"  // Import AnimalList component
import App from "../App"
import "./Kennel.css";


export default class Kennel extends Component {
        /*
            Although you will eventually be pulling your objects
            from your json-server API, for this chapter, we're
            faking it and just creating those arrays in the component
            itself
        */
        employeesFromAPI = [
            { id: 1, name: "Jessica Younker" },
            { id: 2, name: "Jordan Nelson" },
            { id: 3, name: "Zoe LeBlanc" },
            { id: 4, name: "Blaise Roberts" }
        ]
        // This will eventually get pulled from the API
        locationsFromAPI = [
            { id: 1, name: "Nashville North", address: "500 Circle Way" },
            { id: 2, name: "Nashville South", address: "10101 Binary Court" }
        ]
        
        animalsFromAPI = [
            { id: 1, name: "Pooky" },
            { id: 2, name: "Fats" },
            { id: 3, name: "Chicken Nugget" },
            { id: 4, name: "Bloop" },
            { id: 5, name: "Meow" },
            { id: 6, name: "Zing" },
        ]

        ownersFromAPI = [
            { id: 1, name: "Ryan Tanay" },
            { id: 2, name: "Emma Beaton" },
            { id: 3, name: "Dani Adkins" },
            { id: 4, name: "Adam Oswalt" },
            { id: 5, name: "Fletcher Bangs" },
            { id: 6, name: "Angela Lee" }
        ]

        intersectionAPI = [
            {id: 1, ownerID:1, animalID:2},
            {id: 2, ownerID:6, animalID:1},
            {id: 3, ownerID:3, animalID:6},
            {id: 4, ownerID:2, animalID:5},
            {id: 5, ownerID:4, animalID:3},
            {id: 6, ownerID:5, animalID:4},
            
        ]


        // State
        state = {
            employees: this.employeesFromAPI,
            locations: this.locationsFromAPI,
            animals: this. animalsFromAPI,
            owners: this.ownersFromAPI,
            animalsOwners: this.intersectionAPI,
            login: false,
        }

    render() {
        return (
            // <div>
            //     <LocationList />
            //     <EmployeeList />
            // </div>
            <div>
            <App/>
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
                <OwnerList owners={this.state.owners} />
                <animalsOwnersList animalOwners= {this.state.animalsOwners}/>
            </article>
            </div>
        );
    }
}