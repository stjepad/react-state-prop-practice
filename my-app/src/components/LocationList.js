import React, { Component } from 'react'



export default class LocationList extends Component {
    render() {
        return (
            <div className="locations">
                <h2>Our Locations </h2>
                    {
                this.props.locations.map(location =>
                    <div id={`location--${location.id}`} key={location.id}>
                        <h4>{location.name}</h4>
                        <p>{location.address}</p>

                    </div>
                )
            }
            </div>
            // <div>
            //     <div>
            //         <h3>Student Kennels</h3>
            //         <h4>Nashville North Location</h4>
            //         <h5>500 Puppy Way</h5>
            //     </div>
            //     <div>
            //         <h3>Chicken Kennels</h3>
            //         <h4>Nashville South Location</h4>
            //         <h5>500 Meow Way</h5>
            //     </div>
            // </div>
        );
    }
}