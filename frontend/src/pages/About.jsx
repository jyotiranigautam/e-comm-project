import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/app.css';
import '../styles/responsive.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import shipping from '../images/shipping.png'
import call from '../images/call.png'
import support from '../images/support.png'
import user from '../images/user.png'

const About = () => {

  var testimonials = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Navbar />
      <section className="about-banner">
        <div className="container ">
          <div className="wrapper">
            <div className="about-banner-header">
              <div className="title">
                <h1>About</h1>
              </div>
              <div className="breadcrumb">
                <a className='breadcrumb-home' href="/home">Home</a>
                <i className='bx bx-chevron-right'></i>
                <a href="/about" className='current-page'>About</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------details_block-------------------------- */}
      <section>

        <div className="details_block container">
          <div className="wrapper ">
            <div className="row justify-content-center ">
              <div className="col-lg-4 col-sm-12  ">
                <div className="detail-block__item">
                  <div className="detail-block__item-icon">
                    <img src={shipping} className="details-icon" alt="img" />
                  </div>
                  <div className="detail-block__item-info">
                    <h6>Free Shipping</h6>World wide
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 ">
                <div className="detail-block__item">
                  <div className="detail-block__item-icon">
                    <img src={call} className="details-icon" alt="img" />
                  </div>
                  <div className="detail-block__item-info">
                    <h6>Helpline</h6>+1 345 99 71 345

                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 ">
                <div className="detail-block__item">
                  <div className="detail-block__item-icon">
                    <img src={support} className="details-icon" alt="img" />
                  </div>
                  <div className="detail-block__item-info">
                    <h6>
                      Customer Support</h6>Finish!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------promotion-video-------------------------- */}
      <section className='promotion-video mt-100'>
        <div className="wrapper container">
          <div className='main-text text-center pt-100'>Promotion Video</div>
          <h2 className='heading text-center'>Welcome To Lorem
          </h2>
          <div className="subheading text-center">
            Nourish your skin with toxin-free cosmetic products. With the offers that you can’t refuse.
          </div>

          <div className="video-container mt-5 mx-lg-5 px-lg-5">
            <div className="embed-responsive embed-responsive-16by9 text-center">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen>

              </iframe>
            </div>
          </div>
        </div>
      </section>


      {/* ------------------count-details-------------------------- */}

      <section className='count-details mt-100'>
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 count-box">
                <div className="count">
                  <h2 className='text-center'>2300+</h2>
                  <h5 className='common-font text-center'>Products</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 count-box">
                <div className="count">
                  <h2 className='text-center'>108</h2>
                  <h5 className='common-font text-center'>Brands</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 count-box">
                <div className="count">
                  <h2 className='text-center'>32</h2>
                  <h5 className='common-font text-center'>Partners</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 count-box">
                <div className="count">
                  <h2 className='text-center'>618+</h2>
                  <h5 className='common-font text-center'>Customers</h5>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ------------------success-story-------------------------- */}
      <section className='success-story'>
        <div>
          <div className='success-story-content container pt-5'>
            <div className='success-story-content-inner wrapper'>
              <div className="success-story__item-text">
                <span className="main-text">Success Story</span>
                <h2>Non aliqua Develops Its Own Brands</h2>
                <div className=" success-story__item-subheading body-text-color common-font">The Non aliqua network is being developed and improved, taking into account all consumer.
                </div>
                <div className='success-story__item-descr body-text-color pt-3'>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do. adipisicing ea aliqua alluptate sit do do
                </div>
                <button className='default-button mt-5'>
                  SHOP NOW
                </button>
              </div>

            </div>
          </div>


        </div>
      </section>

      {/* -----------------benefits---------------------------------- */}
      <section className='benefits mt-100'>
        <div className='container'>
          <div className="row g-4">
            <div className='col-md-4 px-3'>
              <div className='benefits-item text-center'>
                <div className='icon-bg'><i className='bx bx-leaf wrapper-icon'></i></div>
                <div className="title text-center">Natural</div>
                <div className="description">Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim
                  velit adipisicing ea aliqua alluptate sit do do.
                </div>
              </div>
            </div>
            <div className='col-md-4 px-3'>
              <div className='benefits-item text-center'>
                <div className='icon-bg'><i className='bx bx-badge-check wrapper-icon'></i></div>
                <div className="title text-center">Quality</div>
                <div className="description">Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim
                  velit adipisicing ea aliqua alluptate sit do do.
                </div>
              </div>
            </div>
            <div className='col-md-4 px-3'>
              <div className='benefits-item text-center'>
                <div className='icon-bg'><i className='bx bx-leaf wrapper-icon'></i></div>
                <div className="title text-center">Natural</div>
                <div className="description">Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim
                  velit adipisicing ea aliqua alluptate sit do do.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------testimonials---------------------------------- */}
      <section className='testimonials mt-100'>
        <div className="container ">
          <div className="testimonial-content">
            <div className='main-text text-center'>They Stay</div>
            <h2 className='heading text-center'>Testimonials
            </h2>
            <div className="client-testimonials text-center">
              <Slider {...testimonials} className=' mt-5'>
                <div>
                  <p>I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you. I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank youI am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank youI am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you
                  </p>
                  <div className="testimonials-author mt-5">
                    <img src={user} className="js-img" alt="img" />
                    <h5>Melissa Jones</h5>
                  </div>
                </div>
                <div>
                  <p>I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you. I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank youI am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank youI am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you
                  </p>
                  <div className="testimonials-author mt-5">
                    <img src={user} className="js-img" alt="img" />
                    <h5>Melissa Jones</h5>
                  </div>
                </div>
                <div>
                  <p>I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you. I am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank youI am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank youI am grateful to the employees of BeShop for the quality products that I have been using for more than a year, try to work at this level in the future. Thank you
                  </p>
                  <div className="testimonials-author mt-5">
                    <img src={user} className="js-img" alt="img" />
                    <h5>Melissa Jones</h5>
                  </div>
                </div>

              </Slider>
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
                  <button className='default-button'>
                    SUBSCRIBE
                  </button>
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

export default About
