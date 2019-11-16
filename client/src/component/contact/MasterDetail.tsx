import React from 'react';
import { useParams } from 'react-router-dom';

import { MdMailOutline } from 'react-icons/md';
import { MdChatBubbleOutline } from 'react-icons/md';
import { MdEdit } from 'react-icons/md'
import { IoIosContact } from 'react-icons/io'

function MasterDetail() {
  const { contactID } = useParams();
  
  return (
    <div className="col-md-6 pt-4 px-0">
      <div className="d-flex px-3 mb-1">
        <div className="">
          <IoIosContact
            style={{ fontSize: '10rem' }}
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
                style={{ fontSize: '1.5rem' }}
              />
              <p className="ml-2">Send mail</p>
            </div>
            <div className="d-flex justify-content-center ml-5">
              <MdChatBubbleOutline
                className="text-primary"
                style={{ fontSize: '1.5rem' }}
              />
              <p className="ml-2">Start chat</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex pl-4 border-bottom" style={{ width: '100%' }}>
        <h6 className="text-primary">Contact</h6>
        <h6 className="ml-3">Files</h6>
        <h6 className="ml-3">Email</h6>
        <h6 className="ml-3">LinkedIn</h6>
      </div>
      <div className="d-flex justify-content-between pl-4 pr-5 pt-4">
        <p>Contact information</p>
        <div className="d-flex">
          <MdEdit style={{ fontSize: '1.5rem' }} />
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
    </div>
  );
}

export default MasterDetail
