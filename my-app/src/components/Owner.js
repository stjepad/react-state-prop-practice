import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class OwnerList  extends Component {
    render() {
        return (
            <div className="owners">
                <h2>Our Owners</h2>
                    {
                this.props.owners.map(owner =>
                    <div id={`owner--${owner.id}`} key={owner.id}>
                       <h4>{owner.name}</h4>
                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
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