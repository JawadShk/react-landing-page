import React from 'react'

function Navigation() {
  return (
    <>
      <nav>

        <div className="logo">
          <img src="img/brand_logo.png" alt="logo" className='logo' />
        </div>

        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="button">
          <button>Login</button>
        </div>
        
      </nav>
    </>
  )
}

export default Navigation