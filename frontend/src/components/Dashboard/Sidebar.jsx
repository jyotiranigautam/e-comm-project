import React, { useEffect, useState } from 'react'
import '../../styles/dashboard.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const [showSidebar, setShowSidebar] = useState(true);


  return (
    <>
      
          <div className="sidebar">
            <div className="menus pt-5 ">
              <div className="logo m-4">
                <h3>LOGO</h3>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div >
                <ul className='menu-list mt-2'>
                  <li className="menu-item me-5">

                    <NavLink className="nav-link" activeclassname="active" exact to="/manage-products">
                      <i className='bx bxs-package px-2'></i>  Manage Products
                    </NavLink>
                  </li>
                  <li className="menu-item me-5">
                    <NavLink className="nav-link" activeclassname="active" to="/manage-categories">
                      <i className='bx bx-category  px-2' ></i>Manage Catgeories
                    </NavLink>
                  </li>
                  <li className="menu-item me-5">
                    <NavLink className="nav-link" activeclassname="active" to="/settings">
                      <i className='bx bx-cog  px-2' ></i>Settings
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
     

    </>
  )
}

export default Sidebar
