import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="App container">
            <h1 className="text-center">Blood Donation Management System</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/donors">Donors</Link>
                        <Link className="nav-link" to="/requests">Requests</Link>
                        <Link className="nav-link" to="/blood-inventory">Blood Inventory</Link>
                        <Link className="nav-link" to="/hospitals">Hospitals</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
