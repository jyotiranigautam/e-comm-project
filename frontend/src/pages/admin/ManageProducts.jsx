import React, { useEffect, useState } from 'react'
import DashboardNav from '../../components/Dashboard/Sidebar'
import Navbartwo from '../../components/Dashboard/Navbartwo'
import Breadcrumbs from '../../components/Dashboard/Breadcrumbs'
import product from '../../images/product.jpg'
// import makeup2 from '../images/makeup2.jpg'
// import spa from '../images/spa.jpg'
// import hairs from '../images/hairs.jpg'
import product1 from '../../images/product1.png'
import product2 from '../../images/product2.png'
import Sidebar from '../../components/Dashboard/Sidebar'

const ManageProducts = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <div>
        {
           windowWidth <= 1200 ? (
            ""
          ) : (
            <Sidebar />
          )
        }
        <div className="admin-page">
          <div className="header">
            <Navbartwo/>
            <div className="page-content">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageProducts
