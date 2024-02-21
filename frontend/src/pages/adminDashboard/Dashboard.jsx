import React from 'react'
import DashboardNav from '../../components/Dashboard/DashboardNav'
import Navbartwo from '../../components/Dashboard/Navbartwo'

const Dashboard = () => {
  return (
    <>
      <div>
      <Navbartwo/>
        <div className="dashboard admin-background container-fluid">
          <div className="row" >
            <div className="col-lg-3 col-md-3 col-xl-2 px-sm-2 px-0 dashboard-nav">
              <DashboardNav/>
            </div>
            <div className="col-lg-9" style={{paddingLeft:'0'}}>
      
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
