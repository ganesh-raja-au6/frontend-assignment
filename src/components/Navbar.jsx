import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <h1><a href="#" className="navbar-header text-dark">Omega</a></h1>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item  ml-2"><a className="nav-link" href="#">Demos <i className="fa fa-caret-down"></i> </a></li>
          <li className="nav-item  ml-2"><a className="nav-link" href="#">Pages</a></li>
          <li className="nav-item  ml-2"><a className="nav-link" href="#">Support</a></li>
          <li className="nav-item  ml-2"><a className="nav-link btn btn-danger text-white" href="#">Get Started</a></li>
        </ul>
      </nav>
    )
}

export default Navbar
