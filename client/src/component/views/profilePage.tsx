import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import { Contact } from '../contact';
import { Link } from 'react-router-dom'
import {IoMdGrid} from 'react-icons/io'
import {AiOutlineSkype} from 'react-icons/ai';
import {GoChecklist} from 'react-icons/go'
import { FiSettings } from 'react-icons/fi'
import { FaQuestion } from 'react-icons/fa'
import { IoIosMegaphone } from 'react-icons/io'
import { MdMenu } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io';
import { FaTrashAlt } from 'react-icons/fa';
import { FiArchive } from 'react-icons/fi';
// import { IoIosContact } from 'react-icons/io'
import { IoIosStarHalf } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { MdStar } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { FaUsersCog } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa'
import { GiCircle } from 'react-icons/gi';
// import { MdMailOutline } from 'react-icons/md';
// import { MdChatBubbleOutline } from 'react-icons/md';
// import { MdEdit } from 'react-icons/md'

import MasterDetail from '../contact/MasterDetail'
import Footer from '../../common/Footer'
import ContactGridView from '../contact/ContactGridView';
import { ContactType } from '../interface/interface'

function Profile() {
  const [currentContacts, setContacts]: [ContactType[], Function] = useState([]);
  const { contactReducer: contact } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5050/api/v1/contacts');
      dispatch({
        type: 'SET_CONTACT',
        payload: result.data.data,
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    setContacts(contact);
  }, [contact]);

  if (!currentContacts) {
    return <>'Loading...=>'</>;
  }

  console.log(currentContacts);







  return(
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-blue shadow bg-primary p-0 pl-3" style={{backgroundColor: '#b2b2b2'}}>
      <div
        className="navbar-brand pt-2"
        style={{
          width:'13.3rem',
          display: 'flex',
          justifyContent: 'flex-start'}}>
        <IoMdGrid
          className="mr-2"
          style={{
            fontSize: '1.4rem',
            color: '#fff'
          }}
        />
        <h5 className="d-inline ml-1 mr-5 ml-3 text-white" style={{fontSize: '1rem'}}>Contacts</h5>
      </div>

      <div className="" style={{width: '27rem'}}>
        <input
          type="text"
          // placeholder="search"
          style={{width: '120%'}}
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
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
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

    {/* Inner Nav */}
    <div className="container-fluid pt-2 pb-2" style={{backgroundColor: '#ccc'}}>
      <div className="row">
        <div className="d-flex pl-3" style={{width: '15.3rem'}}>
          <MdMenu
            className="text-white pt-2"
            style={{fontSize:'1.5rem'}}
          />
          <select id="" className="border-0 bg-primary ml-3 py-1">
            <option value="">New contact</option>
            <option value="">New contact list</option>
            <option value="">New group</option>
          </select>
          {/* <span className="btn btn-primary ml-2">New Contact</span> */}
        </div>

        <div className="d-flex justify-content-between" style={{width: "83%", height: '1.9rem'}}>
            <div className="d-flex justify-content-center" style={{height: '100%'}}>
              <div className="d-flex">
                <IoIosStarHalf
                  className="text-primary"
                  style={{fontSize: '1.4rem'}}
                />
                <p className="text-primary">Add to favorites</p>
              </div>
              <div className="d-flex ml-3">
                <MdModeEdit
                  className="text-primary"
                  style={{fontSize: '1.4rem'}}
                />
                <p className="text-primary">Edit</p>
              </div>
              <div className="d-flex ml-3">
                <MdDeleteForever
                  className="text-primary"
                  style={{fontSize: '1.4rem'}}
                />
                <p className="text-primary">Delete</p>
              </div>
              <div className="d-flex ml-3">
                <AiOutlineUsergroupAdd
                  className="text-primary"
                  style={{fontSize: '1.4rem'}}
                />
                <p className="text-primary">Add to List</p>
              </div>
            </div>

            <div className="d-flex">
              <select className="border-0" placeholder="Managing">
                <option value="">
                  {/* <AiOutlineUserAdd /> */}
                  Manage
                </option>
                <option value="">Import contacts</option>
                <option value="">Export contacts</option>
                <option value="">Link duplicate contacts</option>
              </select>
            </div>
        </div>
      </div>
    </div>


    {/* Main Section */}
    <div className="container-fluid p-0" style={{height: '80vh'}}>
      <div className="row p-0" style={{height: '100%'}}>

        {/* Column--2 */}
        <div className="col-md-2 pt-4 px-0" style={{backgroundColor: '#c2c2c2', height: '100%'}}>
          <div className="d-flex pb-2" style={{paddingLeft: '2rem'}}>
            <MdStar
              className=''
              style={{fontSize:'1.1rem'}}
            />
            <h5 className="ml-3" style={{fontSize:'1rem'}}>Favorites</h5>
          </div>
          <div className="d-flex justify-content-between bg-primary" style={{padding: '0.5rem 2rem'}}>
            <div className="d-flex pt-1">
              <IoIosArrowDown
                className=''
                style={{fontSize:'1.1rem'}}
              />
              <h5 className="ml-3" style={{fontSize: '0.9rem'}}>My Contacts</h5>
            </div>
            <div className="pt-1">
              <h6>6</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between shadow" style={{padding: '0.5rem 2rem'}}>
            <div className="d-flex pt-1">
              <AiOutlineUser
                className=''
                style={{fontSize:'1.1rem'}}
              />
              <h5 className="ml-3 lead" style={{fontSize: '0.9rem'}}>All Contacts</h5>
            </div>
            <div className="pt-1">

            </div>
          </div>
          <div className="d-flex justify-content-between shadow" style={{padding: '0.5rem 2rem'}}>
            <div className="d-flex pt-1">
              <FiUsers
                className=''
                style={{fontSize:'1.1rem'}}
              />
              <h5 className="ml-3 lead" style={{fontSize: '0.9rem'}}>All Contact Lists</h5>
            </div>
            <div className="pt-1">

            </div>
          </div>
          <div className="d-flex justify-content-between shadow" style={{padding: '0.5rem 2rem'}}>
            <div className="d-flex pt-1">
              <FaTrashAlt
                className=''
                style={{fontSize:'1.1rem'}}
              />
              <h5 className="ml-3 lead" style={{fontSize: '0.9rem'}}>Deleted</h5>
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
              <h5 className="ml-3 lead" style={{fontSize: '0.9rem'}}>Folders</h5>
            </div>
            <div className="pt-1">
              <h6></h6>
            </div>
          </div>

          {/* Second Side Group */}
          <div className="d-flex pb-2 mt-4" style={{paddingLeft: '2rem'}}>
            <IoIosArrowDown
              className=''
              style={{fontSize:'1.1rem'}}
            />
            <h5 className="ml-3" style={{fontSize:'1rem'}}>Groups</h5>
          </div>

          <div className="d-flex pb-2" style={{paddingLeft: '2rem'}}>
            <FaUsersCog
              className=''
              style={{fontSize:'1.1rem'}}
            />
            <h5 className="ml-3 lead" style={{fontSize:'1rem'}}>Members</h5>
          </div>

          <div className="d-flex pb-2" style={{paddingLeft: '2rem'}}>
            <FaUserFriends
              className=''
              style={{fontSize:'1.1rem'}}
            />
            <h5 className="ml-3 lead" style={{fontSize:'1rem'}}>Owners</h5>
          </div>


          <div className="d-flex mt-4 pb-2" style={{paddingLeft: '3rem'}}>
            <h5 className="ml-3 text-primary lead" style={{fontSize:'1rem'}}>Coversation History</h5>
          </div>
        </div>

        {/* Column--4 */}
        <div className="col-md-4 pt-3 px-0" style={{backgroundColor: '#f4f2f2', height: '100%'}}>
          <div className="d-flex justify-content-between pb-3" style={{padding: '0 2rem'}}>
            <div className="">
              <GiCircle
                style={{fontSize: '1.5rem'}}
              />
              <h5 className="ml-3 d-inline-block" style={{fontSize:'1rem'}}>All Contacts</h5>
            </div>
            <div className="">
              <select className="border-0 rounded text-primary py-1">
                <option value="">First name</option>
                <option value="">Last name</option>
                <option value="">Company</option>
                <option value="">Home city</option>
                <option value="">Work city</option>
                <option value="">Recently added</option>
              </select>
            </div>
          </div>

          <ContactGridView contact={currentContacts} />

        </div>

        {/* Column--6 */}
        <MasterDetail />
        {/* <div className="col-md-6 pt-4 px-0">
          <div className="d-flex px-3 mb-1">
            <div className="">
              <IoIosContact
                style={{fontSize: '10rem'}}
                className="text-primary"
              />
            </div>
            <div className="d-flex flex-column text-left pt-4 ml-2">
              <h6 className="text-primary lead">AbdulRazak Darrot</h6>
              <p className="">Decagon</p>
              <div className="d-flex">
                <div className="d-flex justify-content-center">
                  <MdMailOutline
                    className="text-primary"
                    style={{fontSize: '1.5rem'}}
                  />
                  <p className="ml-2">Send mail</p>
                </div>
                <div className="d-flex justify-content-center ml-5">
                  <MdChatBubbleOutline
                    className="text-primary"
                    style={{fontSize: '1.5rem'}}
                  />
                  <p className="ml-2">Start chat</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex pl-4 border-bottom" style={{width: '100%'}}>
            <h6 className="text-primary">Contact</h6>
            <h6 className="ml-3">Files</h6>
            <h6 className="ml-3">Email</h6>
            <h6 className="ml-3">LinkedIn</h6>
          </div>
          <div className="d-flex justify-content-between pl-4 pr-5 pt-4">
            <p>Contact information</p>
            <div className="d-flex">
              <MdEdit
                style={{fontSize: '1.5rem'}}
              />
              <p>Edit contact</p>
            </div>
          </div>
          <div className="row pl-5 border-bottom">
            <div className="d-flex flex-column col-md-3 text-left border-right">
              <p>Email</p>
              <p className="text-primary">bondz@gmail.co</p>
            </div>
            <div className="d-flex flex-column col-md-3 text-left border-right">
              <p>Mobile</p>
              <p className="text-primary">0812233449</p>
            </div>
            <div className="d-flex flex-column col-md-3 text-left">
              <p>Company</p>
              <p className="text-primary">Decagon</p>
            </div>
          </div>
        </div> */}
      </div>


    </div>

    <Footer />
    </div>
  )
}

export default Profile
