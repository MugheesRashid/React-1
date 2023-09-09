import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {

  function themea(){
    document.body.classList.remove("custom1","custom2","custom3")
    props.theme("#0f2605","custom1")
  }
  function themeb(){
    document.body.classList.remove("custom1","custom2","custom3")
    props.theme("#2f0606","custom2")
  }
  function themec(){
    document.body.classList.remove("custom1","custom2","custom3")
    props.theme("#2f0624","custom3")
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand mb-0 mx-20" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active " aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link " to="/about">{props.about}</Link>
          </li> */}
        </ul>
        <p className={`my-1 text-${props.mode==='light'?'dark':'light'}`}>Select Website Theme Color</p>
            <button onClick={themea} className="btn custom1 mx-2"></button>
            <button onClick={themeb} className="btn custom2 mx-0"></button>
            <button onClick={themec} className="btn custom3 mx-2"></button>
            <div className="form-check form-switch">
        <input className="form-check-input" onClick={props.Dark} type="checkbox" id="flexSwitchCheckDefault" />
        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'} `} htmlFor="flexSwitchCheckDefault">{props.text}</label>
      </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
}

Navbar.defaultProps = {
  title: "lol",
  about: "call"
}
