import React, {useState} from 'react'
import {Testimonial, Navbar, Rating, Footer,Routing} from '../components'

function Sample() {
  const [numbers, setNumbers] = useState(10)
    return (
        <div className="wrapper">
          <Routing />
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
      <Footer />
    </div>
    )
}

export default Sample
