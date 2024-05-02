import React, { useState } from "react";
import { NavLink } from 'react-router-dom';


const Navbartwo = () => {


    return (
        <>
           <nav className='admin navbar bg-light navbar-expand-lg'>
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


                
                <div className='other-options d-flex '>

                  <div className="d-flex align-items-center">
                    <div className="mx-2">
                      <i className='bx bxs-user nav-icon' ></i>
                    </div>

                  </div>
                </div>
              </div>
            </nav> 
        </>
    )
}

export default Navbartwo
