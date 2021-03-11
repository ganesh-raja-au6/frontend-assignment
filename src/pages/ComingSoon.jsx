import React from 'react'

import {Timer} from '../components'

function Comingsoon() {
    return (
        <div>
            <h1 className="text-center py-4">Omega</h1>
            <section className="showcase">
                <div className="container">
                    <h2 className="text-center font-weight-bolder">We are coming with something big for you!</h2>
                    <p className="text-center create">Create custom landing pages with Omega that converts more visitors than any website. You can easily build a page now.</p>
                    <div className="timer d-flex justify-content-center mt-5">
                        <Timer />
                        <Timer />
                        <Timer />
                        <Timer />
                    </div>
                    <p className="text-center stay">Stay tuned, early subscribers will receive goodies.</p>
                    <div className="subscribe">
                        <i className="fa fa-envelope"></i>
                        <input type="text" placeholder="Email address" />
                        <button className="butt">Notify Me!</button>
                    </div>
                    <section className="social">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Comingsoon
