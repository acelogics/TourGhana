import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
import { RiAdminLine } from 'react-icons/ri';




const Nav = () => {




    return (
        <>
            <nav className="navbar navbar-expand navColor">

                <div className="container ">
                    <Link to="/" className="navbar-brand fw-bold text-light py-3 fixed" >Tour Ghana</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <li className="nav-item ">
                        <Link to="signin" className="nav-link text-light mb-3">Admin <RiAdminLine /></Link>
                    </li>

                </div>

            </nav>

            <nav className="navbar navbar-expand secondNav p-0 ">
                <div className="container">
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav text-dark">
                            <li className="nav-item">
                                <Link to="" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li tours="nav-item">
                                <Link to="tours" className="nav-link">Tours</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about" className="nav-link">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="contactus" className="nav-link" >Contact Us </Link>
                            </li>



                        </ul>



                    </div>

                </div>

            </nav>

        </>
    )
}

export default Nav