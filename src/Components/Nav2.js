import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {




    return (
        <>


            <nav className="navbar navbar-expand secondNav p-0 ">
                <div className="container">
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav text-dark ">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li tours="nav-item">
                                <Link to="/tours" className="nav-link">Tours</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contactus" className="nav-link" >Contact Us</Link>
                            </li>



                        </ul>



                    </div>

                </div>

            </nav>

        </>
    )
}

export default Nav