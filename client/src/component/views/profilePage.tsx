import React from 'react';
import { Link } from 'react-router-dom'
import {IoMdGrid} from 'react-icons/io'
import {AiOutlineSkype} from 'react-icons/ai';
import {GoChecklist} from 'react-icons/go'
import { FiSettings } from 'react-icons/fi'
import { FaQuestion } from 'react-icons/fa'
import { IoIosMegaphone } from 'react-icons/io'
import { MdMenu } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { FiInbox } from 'react-icons/fi';
import { IoMdSend } from 'react-icons/io';
import { MdDrafts } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi'
import { MdContactPhone } from 'react-icons/md'
import { IoIosContact } from 'react-icons/io'

import Footer from '../../common/Footer'

function Profile() {
  return(
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-blue shadow bg-primary" style={{backgroundColor: '#b2b2b2'}}>
      <div className="navbar-brand">
        <IoMdGrid
          className="mr-2"
          style={{
            fontSize: '2rem',
            color: '#fff'
          }}
        />
        <h5 className="d-inline ml-1 mr-5 text-white">Contacts</h5>

        <input
          type="text"
          // placeholder="search"
          style={{width: '120%', marginLeft: '3.4rem'}}
          className="border rounded py-1"
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
              style={{fontSize:'1.4rem'}}
            />
          </li>
          <li className="nav-item nav-link text-white">
              <GoChecklist
                className="text-white ml-3"
                style={{fontSize:'1.4rem'}}
              />
          </li>
          <li className="nav-item nav-link text-white">
            <FiSettings
              className="text-white ml-3"
              style={{fontSize:'1.3rem'}}
            />
          </li>
          <li className="nav-item nav-link text-white">
            <FaQuestion
              className="text-white ml-3"
              style={{fontSize:'1.1rem'}}
            />
          </li>
          <li className="nav-item nav-link text-white">
            <IoIosMegaphone
              className="text-white ml-3"
              style={{fontSize:'1.3rem'}}
            />
          </li>
          <li className="nav-item nav-link text-white">
            <div className="bg-danger border rounded-circle p-1">
              <span>F O</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    {/* Inner Na */}
    <div className="container-fluid pt-2 pb-2" style={{backgroundColor: '#ccc'}}>
      <div className="row pl-3">
        <MdMenu
          className="text-white"
          style={{fontSize:'2.2rem'}}
        />
        <span className="btn btn-primary ml-2">New Contact</span>
      </div>
    </div>

    {/* Main Section */}
    <div className="container-fluid p-0" style={{height: '80vh'}}>
      <div className="row p-0" style={{height: '100%'}}>

        {/* Column--2 */}
        <div className="col-md-2 pt-4 px-0" style={{backgroundColor: '#c2c2c2', height: '100%'}}>
          <div className="d-flex pb-2" style={{paddingLeft: '2rem'}}>
            <IoIosArrowDown
              className=''
              style={{fontSize:'1.1rem'}}
            />
            <h5 className="ml-3" style={{fontSize:'1rem'}}>Favorites</h5>
          </div>
          <div className="d-flex justify-content-between bg-primary" style={{padding: '0.5rem 2rem'}}>
            <div className="d-flex pt-1">
              <FiInbox
                className=''
                style={{fontSize:'1.1rem'}}
              />
              <h5 className="ml-3" style={{fontSize: '0.9rem'}}>Inbox</h5>
            </div>
            <div className="pt-1">
              <h6>6</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between shadow" style={{padding: '0.5rem 2rem'}}>
            <div className="d-flex pt-1">
              <IoMdSend
                className=''
                style={{fontSize:'1.1rem'}}
              />
              <h5 className="ml-3" style={{fontSize: '0.9rem'}}>Sent Items</h5>
            </div>
            <div className="pt-1">
              <h6>3</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between shadow" style={{padding: '0.5rem 2rem'}}>
            <div className="d-flex pt-1">
              <MdDrafts
                className=''
                style={{fontSize:'1.1rem'}}
              />
              <h5 className="ml-3" style={{fontSize: '0.9rem'}}>Drafts</h5>
            </div>
            <div className="pt-1">
              <h6>5</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between shadow" style={{padding: '0.5rem 2rem'}}>
            <div className="d-flex pt-1">
              <FaTrashAlt
                className=''
                style={{fontSize:'1.1rem'}}
              />
              <h5 className="ml-3" style={{fontSize: '0.9rem'}}>Trash</h5>
            </div>
            <div className="pt-1">
              <h6>3</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between shadow" style={{padding: '0.5rem 2rem'}}>
            <div className="d-flex pt-1">
              <FiArchive
                className=''
                style={{fontSize:'1.1rem'}}
              />
              <h5 className="ml-3" style={{fontSize: '0.9rem'}}>Archived</h5>
            </div>
            <div className="pt-1">
              <h6>11</h6>
            </div>
          </div>

          <div className="d-flex mt-4 pb-2" style={{paddingLeft: '3rem'}}>
            <h5 className="ml-3 text-primary lead" style={{fontSize:'1rem'}}>Coversation History</h5>
          </div>
        </div>

        {/* Column--5 */}
        <div className="col-md-5 pt-3 px-0" style={{backgroundColor: '#f4f2f2', height: '100%'}}>
          <div className="d-flex justify-content-between pb-3" style={{padding: '0 2rem'}}>
            <div className="">
              <MdContactPhone />
              <h5 className="ml-3 d-inline-block" style={{fontSize:'1rem'}}>Contacts</h5>
            </div>
            <div className="">
              <select className="border-0 rounded text-primary">
                <option value="">Filter</option>
              </select>
            </div>
          </div>
          <div className="d-flex px-lg-5 mb-3 justify-content-between shadow" style={{height: '5rem'}}>
            <div className="">
              <IoIosContact
                style={{fontSize: '4rem'}}
                className="text-primary pt-2"
              />
            </div>
            <div className="pt-2">
              <h4 className="text-primary">AbdulRazak</h4>
              <p className="">08199332244</p>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <Link to="">
                <span className="btn btn-secondary">Detail</span>
              </Link>
            </div>
          </div>

          <div className="d-flex px-lg-5 mb-3 justify-content-between shadow" style={{height: '5rem'}}>
            <div className="">
              <IoIosContact
                style={{fontSize: '4rem'}}
                className="text-primary pt-2"
              />
            </div>
            <div className="pt-2">
              <h4 className="text-primary">Usman Dembele</h4>
              <p className="">0744556688</p>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <Link to="">
                <span className="btn btn-secondary">Detail</span>
              </Link>
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
