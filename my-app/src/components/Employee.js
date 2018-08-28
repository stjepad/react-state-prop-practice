import React, { Component } from 'react'
import "./Employees.css"

export default class EmployeeList  extends Component {
    render() {
        return (
            <div className="employees">
                <h3 className="employeesHeader"> Our Employees </h3>
                <div className="employeesDetails">{
                this.props.employees.map(employee =>
                    <div id={`employee--${employee.id}`} key={employee.id}>
                        {employee.name}
                       <p> <button
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Fire
                                    </button>
                                    </p> 
                    </div>
                )
            }
            </div>
            </div>
        );
    }
}