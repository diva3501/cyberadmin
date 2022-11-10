import React from 'react'
import './navbar.css'
import data from "./data";

export default function navbar(props) {
    let id = props.id;
    

  return (
    <div>

<nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">EMART</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                        <a className="nav-link active" style={{color : 'black' }} aria-current="page" href={'/home/' + id}>Verification</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active"  style={{color : 'black'}} aria-current="page" href={'/winner/' + id}>Winners</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </div>
  )
}
