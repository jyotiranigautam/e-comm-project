import React from 'react'
import Navbar from '../components/Navbar'
import product from '../images/product.jpg'
import makeup2 from '../images/makeup2.jpg'
import spa from '../images/spa.jpg'
import hairs from '../images/hairs.jpg'
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/blog2.jpg'
import Footer from '../components/Footer'




const Home = () => {
  return (
    <>
      <Navbar />
      {/* ------------------home-banner--------------------------------- */}
      <section className='home-banner '>
        <div>
          <div className='container'>
            <div className='banner-content pt-5'>
              <div className='main-text mt-100 '>Professional</div>
              <h1 className='main-heading'>Beauty & Care</h1>
              <div className='banner-description '>
                Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.
              </div>
              <div>
                <button className='btn default-button mt-5'>
                  SHOP NOW
                </button>
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
            <ul className="nav-tab-list tabs">
              <li className="tab-link" activeclassname="active">Make Up</li>
              <li className="tab-link" activeclassname="active">SPA</li>
              <li className="tab-link" activeclassname="active">Perfume</li>
              <li className="tab-link" activeclassname="active"> Nails</li>
              <li className="tab-link" activeclassname="active">Skin care</li>
              <li className="tab-link" activeclassname="active">Hair care</li>
            </ul>
            <div className="product-list">
              <div className="row">
                <div className="col-lg-3">
                  <div className="product-item">
                    <div className="product-image">
                      <img src={product} alt="product1" className="img-fluid" />
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
                <div className="col-lg-3">
                  <div className="product-item">
                    <div className="product-image">
                      <img src={product} alt="product1" className="img-fluid" />
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
                <div className="col-lg-3">
                  <div className="product-item">
                    <div className="product-image">
                      <img src={product} alt="product1" className="img-fluid" />
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
                <div className="col-lg-3">
                  <div className="product-item">
                    <div className="product-image">
                      <img src={product} alt="product1" className="img-fluid" />
                    </div>
                    <div className="product-details pt-3">
                      <div className='d-flex align-items-center justify-content-between'>
                        <h5 >Lorem Ipsum</h5>
                        <i className='bx bx-heart save-icon'></i>
                      </div>

                      <div className='price'>$24.00</div>
                    </div>
                  </div>
                </div>
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
                <h1 className='offer-banner-heading'>Get Your <br /><span className='discount'>50%</span> Off</h1>
                <div className='offer-banner-description '>
                  Nourish your skin with toxin-free cosmetic products. With the 
                  offers that you can’t refuse.
                </div>
                <div>
                  <button className='btn default-button mt-5'>
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

      {/* --------------------polular categories---------------------- */}
      <section className='popular-categories'>
        <div className='main-text text-center mt-100'>Popular collection</div>
        <h2 className='heading text-center'>Top Categories</h2>
        <div className="subheading text-center">
          Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.
        </div>
        <div className="categories-list mt-5">
          <a className="categories-item" href='/categories'>
            <img src={makeup2} alt="makeup2" />
            <div className="popular-categories__item-hover">
              <h5>Nails</h5>
              <span className='browse'>browse products </span>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>
          <a className="categories-item" href='/categories'>
            <img src={spa} alt="spa" />
            <div className="popular-categories__item-hover">
              <h5>Nails</h5>
              <span className='browse'>browse products </span>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>
          <a className="categories-item" href='/categories'>
            <img src={hairs} alt="hairs" />
            <div className="popular-categories__item-hover">
              <h5>Nails</h5>
              <span className='browse'>browse products </span>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>
        </div>
      </section>

      {/* --------------------info blocks---------------------- */}
      <section className='info-blocks pt-5'>
        <div className="info-items">
          <div className="info-blocks__item">
            <div className="wrapper">
              <div className="info-blocks__item-img">
                <img src={product1} alt="product1" />
              </div>
              <div className="info-blocks__item-text">
                <span className="main-text">Check This Out</span>
                <h2>New collection for delicate skin</h2>
                <div className="info-blocks__item-subheading body-text-color ">Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.
                </div>
                <div className='info-blocks__item-descr body-text-color pt-3'>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim.
                </div>
                <button className='btn default-button mt-5'>
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          <div className="info-blocks__item_reverse">

            <div className="info-blocks__item-img ">
              <img src={product2} alt="product1" />
            </div>

            <div className="info-blocks__item-text">
              <span className="main-text">About Us</span>
              <h2>Who We Are</h2>
              <div className="info-blocks__item-subheading body-text-color ">Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.
              </div>
              <div className='info-blocks__item-descr body-text-color pt-3'>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua reprehenderit reprehenderit culpa laboris nulla minim.
              </div>
              <div className="about-link pt-5  ">
                <a href="/about" >
                  <i className='bx bx-video info-icon'></i>
                  WATCH VIDEO ABOUT US
                  <i className='bx bx-right-arrow-alt info-icon' ></i>

                </a>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ------------------new-arrivals-------------------------- */}
      <section className='new-arrivals'>
        <div className='container'>
          <div className='main-text text-center mt-100'>Cosmetics</div>
          <h2 className='heading text-center'>New Arrivals</h2>
          <div className="subheading text-center">
            Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.
          </div>
          <div className="trending-tabs pt-5">
            <div className="product-list">
              <div className="row">
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
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
                <div className="col-lg-3">
                  <div className="product-item">
                    <div className="product-image">
                      <img src={product2} alt="product1" className="img-fluid" />
                    </div>
                    <div className="product-details pt-3">
                      <div className='d-flex align-items-center justify-content-between'>
                        <h5 >Lorem Ipsum</h5>
                        <i className='bx bx-heart save-icon'></i>
                      </div>

                      <div className='price'>$24.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------our blogs-------------------------- */}
      <section className='our-blogs'>
        <div className='container'>
          <div className='main-text text-center mt-100'>Our Blogs</div>
          <h2 className='heading text-center'>The Latest News At Non aliqua</h2>
          <div className="subheading text-center">
            Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.
          </div>
          <div className="blogs pt-5">
            <div className="row">
              <div className="col-lg-6 col-md-12 px-5">
                <div className="blog-item ">
                  <a className="blog-item__img" href="/blog">
                    <img src={blog1} className="js-img" alt="" />
                    <span className="blog-item__date"><span>june</span> 21 </span>
                  </a>
                  <a className="blog-item__title mt-5" href="/blog">
                    Perfumes, perfumed or eau de toilette?
                  </a>
                  <p className='blog-item__des'>Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.
                  </p>
                  <a className="blog-item__link" href="/blog"
                  >Read more <i className='bx bx-right-arrow-alt'></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 px-5">
                <div className="blog-item ">
                  <a className="blog-item__img" href="/blog">
                    <img src={blog1} className="js-img" alt="" />
                    <span className="blog-item__date"><span>june</span> 21 </span>
                  </a>
                  <a className="blog-item__title" href="/blog">
                    Perfumes, perfumed or eau de toilette?
                  </a>
                  <p className='blog-item__des'>Nourish your skin with toxin-free cosmetic products. With the offers that yo skin with toxin-free cosmetic products that you can’t refuse.
                  </p>
                  <a className="blog-item__link" href="/blog"
                  >Read more <i className='bx bx-right-arrow-alt'></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------stay in touch-------------------------- */}
      <section className="stay-in-touch">
        <div className="container">
          <div className="wraper">
            <div className="stay-in-touch_box ">
              <div className="inner-wrapper">

                <h2 className="heading">Stay In Touch</h2>
                <div className="common-description">Nourish your skin with toxin-free cosmetic roducts.</div>
                <div className="box-field__row">
                  <div className="box-field">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                  </div>
                  <button className='btn default-button'>
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<Footer />

    </>
  )
}

export default Home
