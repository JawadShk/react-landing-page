import React from 'react'

function HeroSection() {
  return (
    <>
      <section className="parent-div container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="buttons">
            <button>Shop Now</button>
            <button>Category</button>
          </div>
          <div className="market-place">
            <p>Also Available On</p>
            <div className='market-place-logo'>
              <img src="img/flipkart.png" alt="flipkart" />
              <img src="img/amazon.png" alt="amazon" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="img/shoe_image.png" alt="shoe" />
        </div>
      </section>
    </>
  )
}

export default HeroSection