import React from "react";
import {Link} from 'react-router-dom'
import '../styles/navBar.scss'


const NavBar = (props) => {
  return(
      <div className="col-12">
        <div className="row navbar">
          <div className="navbar-items col-sm-2">
            <ul>
              <li><Link to="/">GIPHY</Link></li>
            </ul>
          </div>
          <div className="navbar-items col-sm-6">
            <ul>
              <li><Link to="/">Entertainment</Link></li>
              <li><Link to="/">Sports</Link></li>
              <li><Link to="/">Stickers</Link></li>
              <li><Link to="/">Artists</Link></li>
            </ul>
          </div>
          <div className="navbar-items col-sm-4">
            <ul>
              <li><Link to="/">Create</Link></li>
              <li><Link to="/">Upload</Link></li>
              <li><Link to="/search">Search</Link></li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default NavBar