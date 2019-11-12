import React from 'react';
import IndexHeader from '../../common/IndexHeader';
import Footer from '../../common/Footer'

function Services() {
  return (
    <>
      <IndexHeader />
      <div className="container">
        <h2 className="mt-5 mb-3">What we do...</h2>
        <p className="mb-5 px-5">We can help you turn a disorderly mess of contacts into a cleanly sorted address book. With our app, you can spend less time looking for your contacts and more time actually connecting with them.</p>
        <div className="row">
          <div className="col-md-4" style={{height: '100%'}}>
            <img src={require('../../assets/images/apple-coffee-computer-desk-356056.jpg')}
              className="img-fluid inline-block rounded"
              alt=""/>
              <div className="mt-3 d-flex flex-column ">
                <h5 className="lead">Keep you organized</h5>
                <p>Leave it to us to keep your contacts organised and available accross all your devices anytime any day from anywhere around the world.</p>
              </div>
          </div>
          <div className="col-md-4" style={{height: '100%'}}>
            <img src={require('../../assets/images/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.jpg')}
              className="img-fluid inline-block rounded"
              alt=""/>
              <div className="mt-3 d-flex flex-column ">
                <h5 className="lead">Keep you connected</h5>
                <p>Leave it to us to keep your contacts organised and available accross all your devices anytime any day from anywhere around the world.</p>
              </div>
          </div>
          <div className="col-md-4" style={{height: '100%'}}>
            <img src={require('../../assets/images/woman-in-blue-spaghetti-strap-top-posing-for-photo-944762.jpg')}
              className="img-fluid inline-block rounded"
              alt=""/>
              <div className="mt-3 d-flex flex-column ">
                <h5 className="lead">Keep you winning</h5>
                <p>Leave it to us to keep your contacts organised and available accross all your devices anytime any day from anywhere around the world.</p>
              </div>
          </div>
        </div>

        <h2 className="mb-5 mt-4">Our Partners</h2>

        <div className="d-flex justify-content-center mb-5">
          <div className="d-flex justify-content-between">
            <div className="col-md-3 col-sm-6">
              <img src={require('../../assets/images/instagram (1).jpg')}
                className="img-fluid inline-block rounded"
                style={{ width: '19rem', height: '11rem' }}
                alt=""/>
            </div>
            <div className="col-md-3 col-sm-6">
              <img src={require('../../assets/images/instagram (2).jpg')}
                className="img-fluid inline-block rounded"
                style={{width: '19rem', height: '11rem' }}
                alt=""/>
            </div>
            <div className="col-md-3 col-sm-6">
              <img src={require('../../assets/images/instagram (3).jpg')}
                className="img-fluid inline-block rounded"
                style={{width: '19rem', height: '11rem' }}
                alt=""/>
            </div>
            <div className="col-md-3 col-sm-6">
              <img src={require('../../assets/images/instagram (4).jpg')}
                className="img-fluid inline-block rounded"
                style={{width: '19rem', height: '11rem'}}
                alt=""/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services
