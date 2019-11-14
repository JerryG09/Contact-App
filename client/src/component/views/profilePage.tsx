import React from 'react';
import { Link } from 'react-router-dom'
import {IoMdGrid} from 'react-icons/io'
import {AiOutlineSkype} from 'react-icons/ai';
import {GoChecklist} from 'react-icons/go'
import { FiSettings } from 'react-icons/fi'
import { FaQuestion } from 'react-icons/fa'
import { IoIosMegaphone } from 'react-icons/io'
import { MdMenu } from 'react-icons/md'
import Footer from '../../common/Footer'

function Profile() {
  return(
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-blue shadow bg-primary" style={{backgroundColor: '#b2b2b2'}}>
      <div className="navbar-brand">
        <IoMdGrid
          className="mr-3"
          style={{
            fontSize: '3rem',
            color: '#fff'
          }}
        />
        <h5 className="d-inline mr-5 text-white">Contacts</h5>

        <input
          type="text"
          // placeholder="search"
          style={{width: '120%'}}
          className="border rounded py-1 ml-5"
          />
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
            <AiOutlineSkype
              className="text-white"
              style={{fontSize:'2rem'}}
            />
          </li>
          <li className="nav-item nav-link text-white">
              <GoChecklist
                className="text-white ml-3"
                style={{fontSize:'2rem'}}
              />
          </li>
          <li className="nav-item nav-link text-white">
            <FiSettings
              className="text-white ml-3"
              style={{fontSize:'1.8rem'}}
            />
          </li>
          <li className="nav-item nav-link text-white">
            <FaQuestion
              className="text-white ml-3"
              style={{fontSize:'1.5rem'}}
            />
          </li>
          <li className="nav-item nav-link text-white">
            <IoIosMegaphone
              className="text-white ml-3"
              style={{fontSize:'1.9rem'}}
            />
          </li>
          <li className="nav-item nav-link text-white">
            <div className="" style={{backgroundColor: "red", borderRadius: '50%', padding: '0.5rem'}}>
              <span>J O</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container-fluid pt-3 pb-3" style={{backgroundColor: '#ccc'}}>
      <div className="row pl-3">
        <MdMenu
          className="text-white"
          style={{fontSize:'2.2rem'}}
        />
        <span className="btn btn-primary ml-5">New Contact</span>
      </div>
    </div>

    {/* Main Section */}
    <div className="container-fluid p-0" style={{height: '80vh'}}>
      <div className="row" style={{height: '100%'}}>
        <div className="col-md-2 pt-4 px-5" style={{backgroundColor: '#c2c2c2', height: '100%'}}>
          <div className="d-flex pb-2">
            <p>icon</p>
            <h5 className="ml-3">Favorites</h5>
          </div>
          <div className="d-flex justify-content-between" style={{backgroundColor:'d2d2d2'}}>
            <div className="d-flex">
              <p>icon</p>
              <h5 className="ml-3 text-sm">Inbox</h5>
            </div>
            <div className="">
              <h6>6</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </div>
  )
}

export default Profile
