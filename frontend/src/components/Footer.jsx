import React from 'react'

const Footer = () => {
  return (
    <>
      {/* -----------------footer------------------------------ */}

      <footer className="footer">
        <div className="wrapper">
          <div className="footer-top">
            <div className="footer-top__social text center">
              <span>Find us here:</span>
              <ul>
                <li><a href="#/"><i className='bx bxl-linkedin footer-icon' ></i></a>
                </li><li><a href="#/"><i className='bx bxl-facebook footer-icon'></i></a>
                </li><li><a href="#/"><i className='bx bxl-instagram footer-icon' ></i></a>
                </li><li><a href="#/"><i className='bx bxl-twitter footer-icon' ></i></a></li>
              </ul>
            </div>
            {/* <div className="footer-top__logo">
              <a href="/">
                <img src="/assets/img/footer-logo.svg" className="js-img" alt="" />
              </a></div>
            <div className="footer-top__payments"><span>Payment methods:</span>
              <ul>
                <li><img src="/assets/img/payment1.png" className="js-img" alt="" /></li><li><img src="/assets/img/payment2.png" className="js-img" alt="" />
                </li>
                <li><img src="/assets/img/payment3.png" className="js-img" alt="" /></li><li><img src="/assets/img/payment4.png" className="js-img" alt="" />
                </li>
              </ul>
            </div> */}
          </div>
          <div className="footer-nav mt-4">
            <div className='row'>
              <div className="col-lg-3 col-md-6 footer-nav__col">
                <span className="footer-nav__col-title">About</span>
                <ul>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/about">About us</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/categories">Categories</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/shop">Shop</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/blog">Blog</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/faq">FAQ</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/contact">Contacts</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-nav__col">
                <span className="footer-nav__col-title">Categories</span>
                <ul>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/categories">Make up</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/categories">SPA</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/categories">Perfume</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/categories">Nails</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/categories">Skin care</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/categories">Hair care</a></li>
                </ul></div>
              <div className="col-lg-3 col-md-6 footer-nav__col"><span className="footer-nav__col-title">Useful links</span>
                <ul>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/about">Careers</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/faq">Privacy policy</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/about">Terms of use</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/blog">Support</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/about">Shipping details</a></li>
                  <li><i className='bx bxs-chevron-right' ></i><a href="/about">Information</a></li>
                </ul></div>

              <div className="col-lg-3 col-md-6 footer-nav__col ">
                <span className="footer-nav__col-title">Contact</span>
                <ul>
                  <li ><i className='bx bx-map px-2' ></i>
                    

                      27 Division St, New York, NY 10002, USA

                    </li>
                  <li className='d-flex align-items-center '><i className='bx bxs-phone px-2'></i>
                    <div className="footer-nav__col-phones">
                      <a href="tel:+13459971345">+1 345 99 71 345</a><br />
                      <a href="tel:+13457464975">+1 345 74 64 975</a>
                    </div></li>
                  <li >
                    <i className='bx bx-envelope px-2' ></i>
                    <a href="mailto:info@beshop.com">info@beshop.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copy">
            <span>© All rights reserved. BeShop 2020</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
