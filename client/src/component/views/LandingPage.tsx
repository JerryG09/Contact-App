import React from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from '../../common/IndexHeader'

function LandingPage() {
  return (
    <>
      <IndexHeader />
      <section className="container-fluid">
        <div className="hero">
          <img
            className="image-fluid rounded"
            src={require('../../assets/images/smartphone-notebook-technology-calendar-6330.jpg')}
            style={{ width: '40rem' }}
            alt=""
          />
        </div>
        <Link to="/signup">
          Get Started
        </Link>
      </section>
    </>
  );
}

export default LandingPage;
