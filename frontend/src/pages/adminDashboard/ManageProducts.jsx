import React from 'react'
import DashboardNav from '../../components/Dashboard/DashboardNav'
import Navbartwo from '../../components/Dashboard/Navbartwo'
import Breadcrumbs from '../../components/Dashboard/Breadcrumbs'
import product from '../../images/product.jpg'
// import makeup2 from '../images/makeup2.jpg'
// import spa from '../images/spa.jpg'
// import hairs from '../images/hairs.jpg'
import product1 from '../../images/product1.png'
import product2 from '../../images/product2.png'

const ManageProducts = () => {
  return (
    <>
      <div>
      <Navbartwo />
        <div className="dashboard dashboard-container admin-background px-0" >
       
          <div className="d-flex" >
            <div className="px-sm-2 px-0 dashboard-nav">
              <DashboardNav />

            </div>
            <div className="dashboard-content" >
        
              <div className="px-5">
                <div className='d-flex mt-50  align-items-center justify-content-between '>
                  <Breadcrumbs pageName='Manage Products' />
                  <a href='/add-product'>
                    <button className='btn default-button'>
                      Add Product
                    </button>
                  </a>
                </div>
                <div className="product-list  mt-5">
                  <div className="row justify-content-center gap-5 ">
                    <div className="col-lg-3">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <div className="product-icons">
                              
                              <i class='bx bx-edit'></i>
                              <i class='bx bx-trash-alt'></i>
                            </div>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <div className="product-icons">
                              
                             <a href='/edit-product'><i class='bx bx-edit'></i></a> 
                              <i class='bx bx-trash-alt'></i>
                            </div>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <div className="product-icons">
                              
                              <i class='bx bx-edit'></i>
                              <i class='bx bx-trash-alt'></i>
                            </div>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="row justify-content-center gap-5 mt-5">
                    <div className="col-lg-3">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <div className="product-icons">
                              
                              <i class='bx bx-edit'></i>
                              <i class='bx bx-trash-alt'></i>
                            </div>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <div className="product-icons">
                              
                              <i class='bx bx-edit'></i>
                              <i class='bx bx-trash-alt'></i>
                            </div>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <div className="product-icons">
                              
                              <i class='bx bx-edit'></i>
                              <i class='bx bx-trash-alt'></i>
                            </div>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageProducts
