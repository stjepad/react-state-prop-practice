import React, { Component } from 'react'


export default class EmployeeList  extends Component {
    render() {
        return (
            <div className="employees">
                <h3>Our Employees </h3>
                    {
                this.props.employees.map(employee =>
                    <div id={`employee--${employee.id}`} key={employee.id}>
                        {employee.name}

                    </div>
                )
            }
            </div>
            // <article>
            //     <h1>Employee List</h1>
            //     <section>Jessica Younker</section>
            //     <section>Jordan Nelson</section>
            //     <section>Zoe LeBlanc</section>
            //     <section>Blaise Roberts</section>
            // </article>
        );
    }
}