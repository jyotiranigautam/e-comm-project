import React from 'react'
import DashboardNav from '../../components/Dashboard/DashboardNav'
import Navbartwo from '../../components/Dashboard/Navbartwo'
import Breadcrumbs from '../../components/Dashboard/Breadcrumbs'

const AddProduct = () => {
  return (
    <div>
       <div>
       <Navbartwo />
        <div className="dashboard dashboard-container admin-background px-0" >
          <div className="d-flex" >
            <div className="sidebar px-sm-2 px-0 dashboard-nav">
              <DashboardNav />

            </div>
            <div className="dashboard-content" style={{ paddingLeft: '0' }}>
     
              <div className="px-5">
                <div className='d-flex mt-50  align-items-center justify-content-between '>
                  <Breadcrumbs pageName='Manage Products' />
                 
                </div>
                <div className='products-form mt-3'>
                  <div className="form-box py-4">
                    <div className='form-box-heading mt-3'>Basic Informations</div>
                    <div className='form-group d-flex mt-4 align-items-center gap-2'>
                      <i class='bx bx-notepad'></i>
                      <label>Product Title: </label>
                    </div>
                    <input type="text" className='form-control form-control-lg mt-3' placeholder='Name of your product' />


                    <div className='form-group d-flex mt-4 align-items-center gap-2'>
                      <i class='bx bx-notepad'></i>
                      <label>Category: </label>
                    </div>
                    <input type="text" className='form-control form-control-lg mt-3' placeholder='Category of your product' />


                  </div>

                  <div className="form-box py-4 mt-5">
                    <div className='form-box-heading mt-'>Details</div>
                    <div className='form-group d-flex mt-4 align-items-center gap-2'>
                      <i class='bx bx-notepad'></i>
                      <label>Description: </label>
                    </div>
                    <textarea type="text" className='form-control form-control-lg mt-3' placeholder='Description of your product' />

                    <div className='form-group d-flex mt-4 align-items-center gap-2'>
                    <i class='bx bx-image-alt'></i>
                      <label>Images: </label>
                    </div>
                    <input type="file" className='custom-file-input form-control form-control-lg mt-3' placeholder='$' />
                    </div>
                    <div className="form-box py-4 mt-5">
                    <div className='form-box-heading mt-'>Price</div>
                    <div className='form-group d-flex mt-4 align-items-center gap-2'>
                      <i class='bx bx-purchase-tag' ></i>
                      <label>Price: </label>
                    </div>
                    <input type="text" className='form-control form-control-lg mt-3' placeholder='$' />

                  </div>

                  <div>
                    <button className='btn default-button mb-5'>
                     Submit
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
