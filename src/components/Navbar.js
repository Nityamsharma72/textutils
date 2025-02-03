// used shourtcut `rfc` stands for react function based component

import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router"
 
/* This func based component is going to reused. So, somethings of it will keep changin. This will by passing values for those particular things from `App.js` and accept here using `props` Ex :
 In `app.js`
 <Navbar title = "TextUtils"  aboutText = "About TextUtils"/>
 In`Navbar.js`
 step 1: add param `props` to func `Navbar`
 step 2: And on place of things supposed to change: {props.title} and {props.aboutText}
*/
export default function Navbar(props) {
  return (
    <div>
      {/* The `Link` and `to` attributes are alternatives of `anchor tag` and `href` respectively. These prevent website from reloding when we change page */}
   <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
    <div className="container-fluid">
      {/* <Link className="navbar-brand" style = {{color : props.mode==='light'?' #042743':'white'}} to="/">{props.title}</Link>  */}
      <a className="navbar-brand" style = {{color : props.mode==='light'?' #042743':'white'}} href="#">{props.title}</a> 
      <button className="navbar-toggler" style = {{backgroundColor : props.mode==='light'?'white':'grey'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" style = {{color : props.mode==='light'?' #042743':'white'}} to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" style = {{color : props.mode==='light'?' #042743':'white'}} href="#">Home</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" style = {{color : props.mode==='light'?' #042743':'white'}} to="/About">{props.aboutText}</Link> */}
            <a className="nav-link" style = {{color : props.mode==='light'?' #042743':'white'}} href="/About">{props.aboutText}</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'} mx-3`}>
  <input className="form-check-input" onClick ={props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" HTMLfor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>

      </div>
    </div>
  </nav>
    </div>
  )
}

// we set two conditions here. One(`string`) is `title` must be string and 2nd (`isRequired`) is `title` must be provided

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title : 'Set title here',
  aboutText : 'About text here'
};