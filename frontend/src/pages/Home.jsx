import React from 'react'
import Navbar from '../components/Navbar'
import product from '../images/product.jpg'
import makeup2 from '../images/makeup2.jpg'
import spa from '../images/spa.jpg'
import hairs from '../images/hairs.jpg'
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import blog1 from '../images/blog1.jpg'

const Home = () => {
    return (
        <div>
            <Navbar />
            <section className="home-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-sm-8">
                            <div className="banner-content pt-5">
                                <div className="main-text mt-100">Professional</div>
                                <h1 className="banner-heading main-heading mt-2">Beauty & Care</h1>
                                <div className="banner-description main-description mt-4">
                                    Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.
                                </div>
                                <div>
                                    <button className="default-button mt-5">
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------trending-products-------------------------- */}
            <section className='trending-products'>
                <div className='container'>
                    <div className='main-text text-center mt-100'>Cosmetics</div>
                    <h2 className='heading text-center'>Trending Products</h2>
                    <div className="subheading text-center">
                        Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.
                    </div>
                    <div className="trending-tabs pt-5">
                        <ul className="nav-tab-list nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Make Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SPA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Perfume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nails</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Skin care</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hair care</a>
                            </li>
                        </ul>
                        <div className="product-list mt-5">
                            <div className="row justify-content-center ">
                                <div className="col-lg-3 col-md-6 ">
                                    {/* <!-- Repeat this block for each product --> */}
                                    <div className="product-item px-3">
                                        <div className="product-image ">
                                            <img src={product} alt="product1" className="img-fluid" />
                                        </div>
                                        <div className="product-details pt-3">
                                            <div className='d-flex align-items-center justify-content-between text-truncate' >
                                                <h5>Tony Mask</h5>
                                                <i className='bx bx-heart save-icon'></i>
                                            </div>
                                            <div className='price'>$24.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    {/* <!-- Repeat this block for each product --> */}
                                    <div className="product-item px-3">
                                        <div className="product-image">
                                            <img src={product} alt="product1" className="img-fluid" />
                                        </div>
                                        <div className="product-details pt-3">
                                            <div className='d-flex align-items-center justify-content-between text-truncate' >
                                                <h5>Tony Mask</h5>
                                                <i className='bx bx-heart save-icon'></i>
                                            </div>
                                            <div className='price'>$24.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    {/* <!-- Repeat this block for each product --> */}
                                    <div className="product-item px-3">
                                        <div className="product-image">
                                            <img src={product} alt="product1" className="img-fluid" />
                                        </div>
                                        <div className="product-details pt-3">
                                            <div className='d-flex align-items-center justify-content-between text-truncate' >
                                                <h5>Tony Mask</h5>
                                                <i className='bx bx-heart save-icon'></i>
                                            </div>
                                            <div className='price'>$24.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    {/* <!-- Repeat this block for each product --> */}
                                    <div className="product-item px-3">
                                        <div className="product-image">
                                            <img src={product} alt="product1" className="img-fluid" />
                                        </div>
                                        <div className="product-details pt-3">
                                            <div className='d-flex align-items-center justify-content-between text-truncate' >
                                                <h5>Tony Mask</h5>
                                                <i className='bx bx-heart save-icon'></i>
                                            </div>
                                            <div className='price'>$24.00</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Repeat the above block for other products --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------offer-banner-------------------------- */}
            <section className='offer-banner'>
                <div>

                    <div className='offer-banner-content container pt-5'>
                        <div className='wrapper'>
                            <div className="discount-info">
                                <div className='main-text'>Discount</div>
                                <h1 className='offer-banner-heading main-heading'>Get Your <br /><span className='discount'>50%</span> Off</h1>
                                <div className='offer-banner-description main-description'>
                                    Nourish your skin with toxin-free cosmetic products. With the
                                    offers that you can’t refuse.
                                </div>
                                <div>
                                    <button className='default-button mt-5'>
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </section>

            {/* -----------------benefits---------------------------------- */}
            <section className='benefits mt-100'>
                <div className='container'>
                    <div className="wrapper mt-100">
                        <div className='benefits-item text-center'>
                            <div className='icon-bg '><i className='bx bx-leaf wrapper-icon'></i></div>
                            <div className="title text-center">Natural</div>
                            <div className="description">Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.
                            </div>
                        </div>
                        <div className='benefits-item  text-center'>
                            <div className='icon-bg'><i className='bx bx-badge-check wrapper-icon'></i></div>
                            <div className="title text-center">Quality</div>
                            <div className="description">Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.
                            </div>
                        </div>
                        <div className='benefits-item  text-center'>
                            <div className='icon-bg '><i className='bx bx-leaf wrapper-icon'></i></div>
                            <div className="title text-center">Natural</div>
                            <div className="description">Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
