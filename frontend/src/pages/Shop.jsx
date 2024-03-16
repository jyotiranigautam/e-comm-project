import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product from '../images/product.jpg'

const Shop = () => {
  return (
    <>
      <Navbar />
      <section className="categories-banner">
        <div className="container ">
          <div className="wrapper">
            <div className="categories-banner-header">
              <div className="title">
                <h1>Shop</h1>
              </div>
              <div className="breadcrumb">
                <a href="/home" className='breadcrumb-home'>Home</a>
                <i className='bx bx-chevron-right'></i>
                <a href="/shop" className='current-page'>Shop</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------new-arrivals-------------------------- */}
      <section className='shop new-arrivals mt-100'>
        <div className='container'>

          <div className="trending-tabs pt-5">
            <div className="product-list">
              <div className="row ">
                <div className="col-lg-9 col-md-8 col-sm-8">
                  <div className="row">

                    <div className="col-lg-4 col-md-6">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <i className='bx bx-heart save-icon'></i>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <i className='bx bx-heart save-icon'></i>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <i className='bx bx-heart save-icon'></i>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-4 col-md-6">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <i className='bx bx-heart save-icon'></i>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <i className='bx bx-heart save-icon'></i>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <i className='bx bx-heart save-icon'></i>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                  <div className="col-lg-4 col-md-6">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <i className='bx bx-heart save-icon'></i>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <i className='bx bx-heart save-icon'></i>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <i className='bx bx-heart save-icon'></i>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-lg-4 col-md-6">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <i className='bx bx-heart save-icon'></i>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <i className='bx bx-heart save-icon'></i>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="product-item">
                        <div className="product-image">
                          <img src={product2} alt="product1" className="img-fluid" />
                        </div>
                        <div className="product-details pt-3">
                          <div className='d-flex align-items-center justify-content-between'>
                            <h5 >Tony Mask</h5>
                            <i className='bx bx-heart save-icon'></i>
                          </div>

                          <div className='price'>$24.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-4 sticky-sidebar sticky-top ">
                  <div className="filters">
                    <form className="search-form d-flex align-items-center" role="search">
                      <input className="search-input form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <i className='bx bx-search-alt-2 nav-icon' type="submit"></i>
                    </form>

                    <div className="filter mt-5">
                      <select className="form-select" >

                        <option className='option' value="1" selected>From low to high price</option>
                        <option className='option' value="2">From high to low price</option>

                      </select>
                    </div>

                    <div className="shop-aside__item mt-5">
                      <h4 className="shop-aside__item-title py-2">
                        Categories
                      </h4>
                      <ul>
                        <li className='py-3'>
                          <a  href="#">Make up <span>(37)</span>
                          </a>
                        </li>
                        <li className='py-3'>
                          <a  href="#">SPA<span>(162)</span>
                          </a>
                        </li>
                        <li className='py-3'>
                          <a  href="#">Perfume <span>(153)</span>
                          </a>
                        </li>
                        <li className='py-3'>
                          <a  href="#">Nails <span>(86)</span>
                          </a>
                        </li>
                        <li className='py-3'>
                          <a  href="#">Skin care <span>(48)</span>
                          </a>
                        </li>
                        <li className='py-3'>
                          <a  href="#">Hair care <span>(54)</span>
                          </a>
                        </li>
                      </ul>
                    </div>


                    {/* <div className="shop-aside__item">
                                            <span className="shop-aside__item-title">Price</span>
                                            <div className="range-slider">
                                                


                                            </div>
                                        </div> */}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>

    </>
  )
}

export default Shop
