import React, { Component } from 'react'
import "./Employees.css"

export default class EmployeeList  extends Component {
    render() {
        return (
            <div className="employees">
                <h3>Our Employees </h3>
                    {
                this.props.employees.map(employee =>
                    <div id={`employee--${employee.id}`} key={employee.id}>
                        {employee.name}
                        <a href="#"
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Fire</a>
                    </div>
                )
            }
            </div>
        );
    }
}