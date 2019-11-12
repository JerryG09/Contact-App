import React from 'react';
import { Link } from 'react-router-dom';

function IndexHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-blue shadow" style={{backgroundColor: '#b2b2b2'}}>
      <div className="navbar-brand">
        <span className="text-danger">C</span>
        <span className="text-white">ontact</span>{' '}
        <span className="text-danger">A</span>
        <span className="text-white">pp</span>
      </div>
      <button
        className="navbar-toggler bg-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon bg-primary"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="ml-auto navbar-nav">
          <li className="nav-item nav-link active">
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li className="nav-item nav-link text-white">
            <Link to="/services" className="text-white">
              Services
            </Link>
          </li>
          <li className="nav-item nav-link text-white">
            <Link to="/community" className="text-white">
              Community
            </Link>
          </li>
          <li className="nav-item nav-link text-white">
            <Link to="/FAQ" className="text-white">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default IndexHeader
