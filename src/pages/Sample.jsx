import React, {useState} from 'react'
import {Testimonial, Navbar, Rating} from '../components'

function Sample() {
  const [numbers, setNumbers] = useState(10)
    return (
        <div className="wrapper">
      <Navbar />
      <section className="testimonial">
        <div className="container">
          <div className="sec-header">
            <h2 className="text-center mt-5  font-weight-bold">Reviews from readers</h2>
            <p className="text-center">Create custom landing pages with Omega that converts<br /> more visitors than any website.</p>
          </div>
          <div className="row">
          <div className="col-md-4">
              <div className="card p-5 mb-3">
                <Rating />
                <Testimonial />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-5 mb-3">
                <Rating />
                <Testimonial />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-5 mb-3">
                <Rating />
                <Testimonial />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-5 mb-3">
                <Rating />
                <Testimonial />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-5 mb-3">
                <Rating />
                <Testimonial />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-5 mb-3">
                <Rating />
                <Testimonial />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-5 mb-3">
                <Rating />
                <Testimonial />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-5 mb-3">
                <Rating />
                <Testimonial />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-5 mb-3">
                <Rating />
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className=" text-white">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h2>Omega</h2>
            <div className="about">
              <h4>About</h4>
              <ul className="list-unstyled">
                <li>Our mission</li>
                <li>Our mission</li>
                <li>Our mission</li>
              </ul>
            </div>
            <div className="about">
              <h4>About</h4>
              <ul className="list-unstyled">
                <li>Our mission</li>
                <li>Our mission</li>
                <li>Our mission</li>
              </ul>
            </div>
            <div className="about">
              <h4>About</h4>
              <ul className="list-unstyled">
                <li>Our mission</li>
                <li>Our mission</li>
                <li>Our mission</li>
              </ul>
            </div>
            <div className="about">
              <h4>About</h4>
              <ul className="list-unstyled">
                <li>Our mission</li>
                <li>Our mission</li>
                <li>Our mission</li>
              </ul>
            </div>
          </div>
          <hr className="bg-secondary" />
          <div className="foo-bar d-flex justify-content-between">
            <p>© 2020 UXTheme, All Rights Reserved</p>
            <div className="social-icons">
              <i className="fa fa-twitter mr-3"></i>
              <i className="fa fa-facebook mr-3"></i>
              <i className="fa fa-google-plus mr-3"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
}

export default Sample
