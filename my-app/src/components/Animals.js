import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./Animals.css"

export default class AnimalList extends Component {
    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" alt="doggos"/>
                                {animal.name}
                                <button
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Euthanize</button>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}