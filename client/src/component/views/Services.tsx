import React from 'react';
import IndexHeader from '../../common/IndexHeader'

function Services() {
  return (
    <>
      <IndexHeader />
      <div className="container">
        <h2 className="lead mt-3 mb-3">Services</h2>
        <div className="row" style={{height: "20rem"}}>
          <div className="col-md-4">
            <h3>image1</h3>
          </div>
          <div className="col-md-4">
            <h3>image2</h3>
          </div>
          <div className="col-md-4">
            <h3>image3</h3>
          </div>
        </div>
        <div className="d-flex">
          <p>hi</p>
        </div>
      </div>
    </>
  )
}

export default Services
