import React from 'react'
import {NavLink} from 'react-router-dom'
function NavBar(){

    return(

    
    <>

      
        <nav className="navbar navbar-expand-sm navbar-dark myNav">
  
    <NavLink className="navbar-brand" to="/">
      <img src="images/logo.png" className="myLogo"/>
    </NavLink>


  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#collapsibleNavbar" aria-controls="navbarSupportedContent" 
  aria-expanded="false" aria-label="Togglenavigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">

      <li className="nav-item">
        <NavLink activeClassName="menu_active"
        className="nav-link" 
        exact
        to="/">
        Home
        <span className="sr-only">(current)</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink activeClassName="menu_active"
        className="nav-link" 
        to="/movies">
        Movies
        </NavLink>
      </li>


      <li className="nav-item">
        <NavLink activeClassName="menu_active"
        className="nav-link" 
        to="/sport">
        Sports
        </NavLink>
      </li>
      

      <li className="nav-item">
        <NavLink activeClassName="menu_active"
        className="nav-link" 
        to="/about">
        About Us
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink activeClassName="menu_active"
        className="nav-link" 
        to="/contact">
        Contact
        </NavLink>
      </li>
    </ul>
  </div>
</nav>
  </>
    )
}

export default NavBar