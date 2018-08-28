import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import App from "../App"

import "bootstrap/dist/css/bootstrap.min.css"
import "./Kennel.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <App/>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel