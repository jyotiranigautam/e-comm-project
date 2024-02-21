import React, { useState } from "react";
import { NavLink } from 'react-router-dom';


const Navbartwo = () => {


    return (
        <>
            <div className="navbar-area-two ">
                <nav className="navbar navbar-expand-lg h-1">
                        <NavLink className="navbar-brand px-4" to="/"><h3>Navbar</h3></NavLink>
                <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse px-5" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 my-lg-3 gap-2 ms-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="active" exact to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="active" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="active" to="/shop">Shop</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="active" to="/categories">Categories</NavLink>
                                </li>
                            
                                
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="active" to="/contact">Contact</NavLink>
                                </li>
                                {/* Add similar NavLink components for other links */}
                            </ul>

                        </div>
                            {/* <div className='other-options d-flex m-auto'>
                               
                                <div className="d-flex align-items-center">
                                    <div className="mx-4">
                                        <i className='bx bxs-user nav-icon' ></i>
                                    </div>
                                    
                                </div>
                            </div> */}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbartwo
