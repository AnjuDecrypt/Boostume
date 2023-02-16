import React from 'react'
import logo from '../../img/logo.png';
export default function Header() {
  return (
    <div>
      <section className="header">
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src={logo} alt="logo"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
          <ul className="ms-auto navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Drops</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Marketplace</a>
              <ul className="nav">
                <li className="dropdown-nav-item"><a href="#">Coming soon</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nonprofits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Help Center</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Company</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
    </div>
  )
}
