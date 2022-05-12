import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar">
      <Router>
        <h1 className='title-item' >example app</h1>
        <Link to="/myapp">my app</Link>
        <ul className="navbar-items">
          <li className="navbar-items_item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-items_item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-items_item">
            <Link to="/user">User</Link>
          </li>
        </ul>
      </Router>
    </nav>
  )
}

export default Header
