import React, { Component } from 'react'


export default class OwnerList  extends Component {
    render() {
        return (
            <div className="owners">
                <h2>Our Owners</h2>
                    {
                this.props.owners.map(owner =>
                    <div id={`owner--${owner.id}`} key={owner.id}>
                       <h4>{owner.name}</h4>
                        <p>{owner.phone}</p>
                        <button
                                    onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Delete</button>
                    </div>
                )
            }
            </div>
        );
    }
}