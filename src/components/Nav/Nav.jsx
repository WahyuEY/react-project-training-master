import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
        <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">
            Home
          </Link><Link to="/" className="navbar-logo">
            Logout
          </Link>
        </div>
      </nav>
    </>
  )
}
