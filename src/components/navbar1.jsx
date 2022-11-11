import React from 'react'

export default function Navbar1() {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">CYBER ADMIN</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                        <a className="nav-link active" style={{color : 'black' }} aria-current="page" href={'/certificate/participants'}>Verification</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active"  style={{color : 'black'}} aria-current="page" href={'/certificate/winners' }>Winners</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </div>
  )
}
