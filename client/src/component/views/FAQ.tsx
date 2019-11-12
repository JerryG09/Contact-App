import React from 'react';
import IndexHeader from '../../common/IndexHeader'
import Footer from '../../common/Footer';

function FAQ() {
  return (
    <>
      <IndexHeader />
      <div className="container-fluid">
        <div className="row justify-content-center pb-5"
          style={{
            height: '20rem',
            backgroundColor: '#ccc'
            }}>
          {/* <img src={require('../../assets/images/sunset-on-rain-forest-1125776.jpg')} alt=""/> */}

          <div className="d-flex flex-column justify-content-end align-items-center" style={{height: '100%'}}>
            <img
              src={require('../../assets/images/black-and-white-business-career-close-up-221164.jpg')}
              style={{width: '3rem'}}
              className="pb-3"
              alt=""/>
            <h3 className="pb-4 text-primary lead">How can we help you?</h3>
            <div className="shadow">
              <input
                type="text"
                style={{width: '20rem'}}
                className="border rounded border-primary"
                placeholder="search"
                />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row" style={{height: '20rem'}}>
          <div className="d-flex flex-column align-content-center">
            <h4>List of Possible questions</h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FAQ
