import React from 'react';
import IndexHeader from '../../common/IndexHeader';
import Footer from '../../common/Footer';

function Community() {
  return (
    <>
      <IndexHeader />
      <div className="container">
        <h2 className="mt-4 mb-4">Communities</h2>

        {/* Office */}
        <div className="row">
          <div className="col-md-6">
            <img src={require('../../assets/images/office (1).jpg')}
                className="img-fluid rounded"
              alt=""/>
          </div>
          <div className="col-md-6 bg-light  border rounded">
            <h4 className="mt-3 lead">Offices</h4>

            <div className="d-flex flex-column justify-content-center">
              <p>Keep your team engaged even after the meeting</p>
              <p>Help you set reminder</p>
              <p>Help you create an environment where people can do their best work</p>
              <p>Rid you of procrastination</p>
              <p>Auto reminder of appointment and meetings</p>
              <p>Garbage collector reminder</p>
              <p>Improve your communication with people that matter most to you</p>
            </div>
          </div>
        </div>

        {/* Campus */}
        <div className="row mt-5">
          <div className="col-md-6">
          <img src={require('../../assets/images/office (2).jpg')}
                className="img-fluid rounded"
              alt=""/>
          </div>
          <div className="col-md-6 bg-light  border rounded">
            <h4 className="mt-3 lead">Campus</h4>

            <div className="d-flex flex-column justify-content-center">
              <p>Keep your team engaged even after the meeting</p>
              <p>Help you set reminder</p>
              <p>Help you create an environment where people can do their best work</p>
              <p>Rid you of procrastination</p>
              <p>Auto reminder of appointment and meetings</p>
              <p>Garbage collector reminder</p>
              <p>Improve your communication with people that matter most to you</p>
            </div>
          </div>
        </div>

        {/* Market */}
        <div className="row mt-5 mb-5">
          <div className="col-md-6">
          <img src={require('../../assets/images/office (3).jpg')}
                className="img-fluid rounded"
              alt=""/>
          </div>
          <div className="col-md-6 bg-light  border rounded">
            <h4 className="mt-3 lead">Market</h4>

            <div className="d-flex flex-column justify-content-center">
              <p>Keep your team engaged even after the meeting</p>
              <p>Help you set reminder</p>
              <p>Help you create an environment where people can do their best work</p>
              <p>Rid you of procrastination</p>
              <p>Auto reminder of appointment and meetings</p>
              <p>Garbage collector reminder</p>
              <p>Improve your communication with people that matter most to you</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Community
