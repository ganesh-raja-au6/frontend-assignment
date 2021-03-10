import React from 'react'
import {Link} from 'react-router-dom'

function Routing() {
    return (
        <nav className="navbar navbar-light bg-light">
            <ul className="navbar nav m-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link> </li>
                <li className="nav-item"><Link  className="nav-link" to="/sampleform">Sample Form</Link> </li>
                <li className="nav-item"><Link  className="nav-link" to="/sample">Sample</Link> </li>
                <li className="nav-item"><Link  className="nav-link" to="/landingpage">Landing page</Link> </li>
            </ul>
        </nav>
    )
}

export default Routing
