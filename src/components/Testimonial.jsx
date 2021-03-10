import React from 'react'

export default function Testimonial() {
    return (  
      <>
        <p className="testi-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorem, facilis vero, aut illum, harum sunt eveniet sed nobis assumenda esse vel nisi dignissimos sit!"</p>
      <div className="identity d-flex vertical-align-middle">
        <img src="https://picsum.photos/100" alt="" className="testi-img img-fluid img-circle mr-3 " />
        <div className="identity-names">
          <h4 className="mb-0">User Name</h4>
          <p className="text-small">From Amazon.com</p>
        </div>
      </div>
      </>
    )
}
