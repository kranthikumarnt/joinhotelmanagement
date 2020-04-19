import React from 'react';
import {NavLink} from 'react-router-dom'

export default function NavigationBar(props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "rgb(0, 123, 255)", position:"sticky"}}>
  <p className="navbar-brand" >Logo</p>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink to="/User/Home" className="nav-link" >Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/User/Dash_board" className="nav-link" >DashBoard</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/User/New_college" className="nav-link" >Publish</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/User/Publish" className="nav-link" >New college</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/User/Refer_us" className="nav-link" >Refer us</NavLink>
      </li>
    </ul>
    <div className="navbar-collapse collapse ">
        <ul className="navbar-nav ml-auto">
        <li className="navbar-toggler-right">
        <NavLink to="/Login" className="nav-link" >Log Out</NavLink>
      </li>
        </ul>
    </div>
  </div>
</nav>
{props.children}
        </React.Fragment>
    )
}
