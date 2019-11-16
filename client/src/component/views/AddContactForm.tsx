import React from 'react'
import {FaRegUserCircle} from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa'

function AddContactForm() {
  return(
    <div className="container pt-lg-5" style={{height: '87vh'}}>
      <div className="row" style={{ height: '100%'}}>
        <div className="col-md-5 p-5 text-left" style={{ backgroundColor: '#ccc'}}>
          <h5 className="pb-4" style={{fontSize:'1.8rem'}}>New contact</h5>
          <p style={{fontSize: '1.3rem'}}>You can add more information than what you see here, such as address and birthday. Select <strong>Add more</strong> to bring up more options</p>
          <div className="d-flex flex-column pt-2 align-items-center" style={{height: '14rem'}}>
            <FaRegUserCircle
            className="text-primary"
              style={{fontSize: '9rem'}}
            />
          </div>
        </div>
        <div className="col-md-7 px-5 pt-5" style={{ backgroundColor: '#f5f5f5'}}>
          <div className="d-flex" style={{height: '8rem'}}>
            <div className="rounded-circle bg-warning" style={{height: '8rem,', width: '8rem', position: 'relative'}}>
              <FaUserCircle
                className="text-white"
                style={{fontSize:'2rem', position: 'absolute', top: '3rem', left: '3rem'}}
              />
            </div>
            <div className="ml-4">
              <div className="pt-3">
                <input
                  className="border-0 py-2 mb-3 px-2"
                  style={{width: '220%'}}
                  placeholder="First Name"
                type="text"/>
              </div>
              <div className="pt-2">
                <input
                  className="border-0 py-2 px-2"
                  style={{width: '220%'}}
                  placeholder="Last Name"
                type="text"/>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column text-left mt-3 border-bottom pb-3">
            <h6>Contact information</h6>
            <div className="mt-2">
              <input
                className="border-0 py-2 px-2"
                placeholder="Email address"
                style={{width: '101%'}}
                type="text"/>
            </div>
            <div className="mt-3">
              <input
                className="border-0 py-2 px-2"
                placeholder="Phone number"
                style={{width: '101%'}}
                type="text"/>
            </div>
            <h6 className="mt-4">Work</h6>
            <div className="mt-2">
              <input
                className="border-0 py-2 px-2"
                placeholder="Company"
                style={{width: '101%'}}
                type="text"/>
            </div>
            <h6 className="mt-4">Notes</h6>
            <textarea className="border-0"></textarea>
          </div>
          <div className="d-flex mt-2">
            <div className="btn btn-secondary mr-3">CREATE</div>
            <div className="btn btn-warning mr-3">DISCARD</div>
            <select name="" id="" className="border-0">
              <option value="">Add More</option>
              <option value="">Email</option>
              <option value="">Chat</option>
              <option value="">Name</option>
              <option value="">Phone</option>
              <option value="">Address</option>
              <option value="">Others</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddContactForm;
