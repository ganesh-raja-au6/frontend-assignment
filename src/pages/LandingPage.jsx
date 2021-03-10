import React from 'react'
import {Navbar, Testimonial} from '../components'

function LandingPage() {
    return (
        <div>
            <Navbar />
            <section className="showcase my-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img src="https://images.app.goo.gl/NNwXZ1nwHXEx4ATHA" className="iPhone-Body" alt=""/>
                        </div>
                        <div className="col-md-7">
                            <h2 className="Travel-the-world-m">Travel the world & meet new friends.</h2>
                            <p className="Create-custom-landin">Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
                            <div className="Rectangle">
                                <i className="fa fa-envelope email-84"></i>
                                <input type="email" className="landing-email" placeholder="Email Address" />
                                <input type="submit" value="I want to join" className="BG" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="landing-testimonials py-5">
                <div className="container">
                    <div className="d-flex">
                    <div className="testimonial-1 mr-5">
                        <div className="rating">
                            <i className="fa fa-star star" aria-hidden="true"></i>
                            <i className="fa fa-star star" aria-hidden="true"></i>
                            <i className="fa fa-star star" aria-hidden="true"></i>
                            <i className="fa fa-star star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o star" aria-hidden="true"></i>
                        </div>
                        <p className="OMG-I-cannot-belie">“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish. Everyone should try it!”</p>
                        <p className="author">Jonathan Taylor</p>
                    </div>
                    <div className="testimonial-1">
                        <div className="rating">
                            <i className="fa fa-star star" aria-hidden="true"></i>
                            <i className="fa fa-star star" aria-hidden="true"></i>
                            <i className="fa fa-star star" aria-hidden="true"></i>
                            <i className="fa fa-star star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o star" aria-hidden="true"></i>
                        </div>
                        <p className="OMG-I-cannot-belie">“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish. Everyone should try it!”</p>
                        <p className="author">Jonathan Taylor</p>
                    </div>
                    </div>
                </div>
            </section>
            <section className="py-5 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h2 className="Making-trip-is-fun">Making trip is fun. Travel with friends.</h2>
                            <p className="Create-custom-landin">Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without coding.</p>
                            <div className="addressing">
                                <div className="d-flex">
                                    <div className="Oval">1</div>
                                    <div>
                                        <h4 className="Find-your-trip-partn">Find your trip partner</h4>
                                        <p className="With-lots-of-unique">With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="addressing">
                                <div className="d-flex">
                                    <div className="Oval">1</div>
                                    <div>
                                        <h4 className="Find-your-trip-partn">Find your trip partner</h4>
                                        <p className="With-lots-of-unique">With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src="../images/116-1162552_latest-smartphones-android-mobile-phones-at-best-smartphone.png" className="Img-1" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage

