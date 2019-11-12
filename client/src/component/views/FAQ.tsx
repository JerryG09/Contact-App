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
            backgroundColor: '#f5f5f5'
            }}>
          {/* <img src={require('../../assets/images/sunset-on-rain-forest-1125776.jpg')} alt=""/> */}

          <div className="d-flex flex-column justify-content-end align-items-center" style={{height: '100%'}}>
            <img
              src={require('../../assets/images/black-and-white-business-career-close-up-221164.jpg')}
              style={{width: '3rem'}}
              className="pb-3 rounded"
              alt=""/>
            <h3 className="pb-4 text-primary lead">How can we help you?</h3>
            <div className="shadow">
              <input
                type="text"
                style={{width: '20rem', padding: '0.8rem'}}
                className="border rounded border-primary"
                placeholder="search"
                />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{height: '20rem'}}>
          <div className="d-flex flex-column justify-content-center px-5" style={{height: '100%', width: '100%'}}>
            <h4 className="lead pb-3">Popular on Contactico Help</h4>
            <p>Getting started on Contactico</p>
            <p>Your account on Contactico</p>
            <p>How to link Contactico account with all your devices</p>
            <p>Disabled or enabled Restriction mode</p>
            <p>Get in touch customer care</p>
            <p>How to upgrade account</p>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FAQ
