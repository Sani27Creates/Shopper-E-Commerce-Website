import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is basically an online store. It's a destination on the internet where people can browse for products, add them to a virtual shopping cart, and then securely purchase them with a digital payment method.  E-commerce sites are convenient for both businesses and consumers.</p>
            <p>E-commerce websites can sell pretty much anything you can imagine - from physical goods like clothes and electronics to digital products like software and ebooks. </p>       
        </div>
      </div>
  )
}

export default DescriptionBox;
