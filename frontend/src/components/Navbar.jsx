import React, { useState } from "react";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    const showStickyMenu = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    if (typeof window !== "undefined") {
        // browser code
        window.addEventListener("scroll", showStickyMenu);
    }

    return (
        <>
            <div className={sticky ? "is-sticky navbar-area" : "navbar-area "}>
                <nav className="navbar navbar-expand-lg " >
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i  className='bx bx-menu'></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 my-lg-3 gap-2">
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
                                    <NavLink className="nav-link" activeclassname="active" to="/dashboard">Dashboard</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="active" to="/contact">Contact</NavLink>
                                </li>
                                {/* Add similar NavLink components for other links */}
                            </ul>
                            <div className='other-options d-flex m-auto'>
                                <form className="search-form d-flex align-items-center" role="search">
                                    <input className="search-input form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <i className='bx bx-search-alt-2 nav-icon' type="submit"></i>
                                </form>
                                <div className="d-flex align-items-center">
                                    <div className="mx-4">
                                        <i className='bx bxs-user nav-icon' ></i>
                                    </div>
                                    <div className="mx-1">
                                        <i className='bx bxs-cart nav-icon'></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
