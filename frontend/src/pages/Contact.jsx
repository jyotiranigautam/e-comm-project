import React from 'react'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'



import location from '../images/location.png'
import call from '../images/call.png'
import support from '../images/support.png'
import Footer from '../components/Footer'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="about-banner">
        <div className="container ">
          <div className="wrapper">
            <div className="about-banner-header">
              <div className="title">
                <h1>Contact</h1>
              </div>
              <div className="breadcrumb">
                <a href="/home">Home</a>
                <i className='bx bx-chevron-right'></i>
                <a href="/contact" className='current-page'>Contact</a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ------------------details_block-------------------------- */}

      <div className="details_block ">
        <div className="wrapper container">
          <div className="row justify-content-center mx-5 px-5">
            <div className="col-lg-4 col-md-12 ">
              <div className="detail-block__item">
                <div className="detail-block__item-icon">

                  <img src={location} className="details-icon" alt="img" />
                </div>
                <div className="detail-block__item-info">
                  <h6>ABC, Green Avenue, </h6>AB - 123456, India
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="detail-block__item">
                <div className="detail-block__item-icon">
                  <img src={call} className="details-icon" alt="img" />
                </div>
                <div className="detail-block__item-info">
                  <h6>contact@abc.com</h6>+1 345 99 71 345

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="detail-block__item">
                <div className="detail-block__item-icon">
                  <img src={support} className="details-icon" alt="img" />
                </div>
                <div className="detail-block__item-info">
                  <h6>
                    Mon - Fri : 9am - 6pm</h6>Sat, Sun : Holiday
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------description------------------------- */}
      <div className="contact container">
        <div className="row ">
          <div className="col-lg-9 col-md-12">
            <h3 className='heading mt-5'>We Take Care of You.
            </h3>
            <div className="descrption mt-3" style={{ width: '100%' }}>
              Email us if you have any questions, we will be sure to contact you and find a solution. Also, our managers will help you choose the product that suits you best, at the best price. From year to year, the BeShop network develops and improves, taking into account all consumer needs and market trends. But for us, the concern remains that when coming to the BeShop store, customers do not have questions about the convenience and comfort of shopping, product quality and the level of professionalism of sales consultants.
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="footer-top__social text center d-flex flex-column mt-5" >
              <span className='text-center' style={{ color: 'black' }}>Find us here:</span>
              <ul >
                <li style={{ backgroundColor: 'lightgrey' }}><a href="#/"><i className='bx bxl-linkedin footer-icon' style={{ color: 'black' }}></i></a>
                </li >
                <li style={{ backgroundColor: 'lightgray' }}><a href="#/"><i className='bx bxl-facebook footer-icon' style={{ color: 'black' }}></i></a>
                </li>
                <li style={{ backgroundColor: 'lightgray' }}><a href="#/"><i className='bx bxl-instagram footer-icon' style={{ color: 'black' }}></i></a>
                </li>
                <li style={{ backgroundColor: 'lightgray' }}><a href="#/"><i className='bx bxl-twitter footer-icon' style={{ color: 'black' }} ></i></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>




      {/* ------------------stay in touch-------------------------- */}
      <section className="contact-form">
        <div className="container">
          <div className="wraper">
            <div className="contact-form_box ">
              <div className="inner-wrapper">

                <h2 className="heading mt-5">Leave your message</h2>
                <div className="common-description">We are here to listen you</div>
                <div className="box-field__row contact-form">
                  <div className="box-field">
                    <input type="name" className="form-control" placeholder="Enter your name" />
                  </div>
                  <div className="box-field">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                  </div>
                  <div className="box-field">
                    <textarea type="message" className="form-control" placeholder="Enter your message" />
                  </div>
                  <button className='btn default-button mt-5'>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
