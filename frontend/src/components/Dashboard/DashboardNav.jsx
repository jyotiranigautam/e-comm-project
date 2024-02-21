import React from 'react'
// import '../../styles/dashboard.css'
import { NavLink } from 'react-router-dom';

const DashboardNav = () => {
  return (
    <>
      <div className="sidebar  dashboard-navbar d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          {/* <h3 className='mt-3'>Menu</h3> */}
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-5 pt-5" id="menu">
          {/* <li >
            <NavLink className="nav-link" activeclassname="active" to="/dashboard">Dashboard</NavLink>
          </li> */}
          <li>
            <NavLink activeclassname="active" to="/manage-products" className="nav-link px-0 align-middle">
              <i className='bx bx-detail'></i><span className="ms-1 d-none d-sm-inline">Manage Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/manage-categories" className="nav-link px-0 align-middle">
              <i className='bx bx-detail'></i><span className="ms-1 d-none d-sm-inline">Manage Categories</span>
            </NavLink>
          </li>
          {/* Add more NavLink items as needed */}
        </ul>
        <hr />
        <div className="dropdown pb-4">
          <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false" >
            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
            <a className="d-none d-sm-inline mx-1" >Account</a>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">

            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default DashboardNav
