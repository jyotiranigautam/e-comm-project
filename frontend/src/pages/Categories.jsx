import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import makeup2 from '../images/makeup2.jpg'
import spa from '../images/spa.jpg'
import hairs from '../images/hairs.jpg'

const Categories = () => {
  return (
    <div>
      <Navbar />
      <section className="categories-banner">
        <div className="container ">
          <div className="wrapper">
            <div className="categories-banner-header">
              <div className="title">
                <h1>Categories</h1>
              </div>
              <div className="breadcrumb">
                <a href="/home">Home</a>
                <i className='bx bx-chevron-right'></i>
                <a href="/categories" className='current-page'>Categories</a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* --------------------category-section---------------------- */}
      <section className='category-section mt-100'>

        <div className="row categories-list ">
          <a className="categories-item col-4-lg col-md-12" href='/categories'>
            <img src={makeup2} alt="makeup2" />
            <div className="category-section__item-hover">
              <h5>Nails</h5>
              <span className='browse'>browse products </span>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>
          <a className="categories-item col-4-lg col-md-12" href='/categories'>
            <img src={spa} alt="spa" />
            <div className="category-section__item-hover">
              <h5>Nails</h5>
              <span className='browse'>browse products </span>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>
          <a className="categories-item col-4-lg col-md-12" href='/categories'>
            <img src={hairs} alt="hairs" />
            <div className="category-section__item-hover">
              <h5>Nails</h5>
              <span className='browse'>browse products </span>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>
        </div>
        <div className="row categories-list ">
          <a className="categories-item col-4-lg col-md-12" href='/categories'>
            <img src={hairs} alt="hairs" />
            <div className="category-section__item-hover">
              <h5>Nails</h5>
              <span className='browse'>browse products </span>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>
          <a className="categories-item col-4-lg col-md-12" href='/categories'>
            <img src={makeup2} alt="makeup2" />
            <div className="category-section__item-hover">
              <h5>Nails</h5>
              <span className='browse'>browse products </span>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>
          <a className="categories-item col-4-lg col-md-12" href='/categories'>
            <img src={spa} alt="spa" />
            <div className="category-section__item-hover">
              <h5>Nails</h5>
              <span className='browse'>browse products </span>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>

        </div>
        <div className="row categories-list ">
          <a className="categories-item col-4-lg col-md-12" href='/categories'>
            <img src={makeup2} alt="makeup2" />
            <div className="category-section__item-hover">
              <h5>Nails</h5>
              <span className='browse'>browse products </span>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>

          <a className="categories-item col-4-lg col-md-12" href='/categories'>
            <img src={hairs} alt="hairs" />
            <div className="category-section__item-hover">
              <h5>Nails</h5>
              <span className='browse'>browse products </span>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>
          <a className="categories-item col-4-lg col-md-12" href='/categories'>
            <img src={spa} alt="spa" />
            <div className="category-section__item-hover">
              <h5>Nails</h5>
              <span className='browse'>browse products </span>
              <i className='bx bx-right-arrow-alt'></i>
            </div>
          </a>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default Categories