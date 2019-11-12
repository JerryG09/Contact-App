import React from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from '../../common/IndexHeader'
import Footer from '../../common/Footer'

function LandingPage() {
  return (
    <>
      <IndexHeader />
      <section className="container-fluid p-0 m-0" style={{ position: 'relative' }}>
        <div className="hero">
          <img
            className=""
            src={require('../../assets/images/woman-in-white-t-shirt-holding-smartphone-in-front-of-laptop-914931.jpg')}
            style={{
              height: '100vh',
              backgroundSize: 'cover',
              width: '100%'
             }}
            alt=""
          />
        </div>
        <div className="d-flex justify-content-end p-5" style={{ position: 'absolute', top: '3rem', width: '100%', }}>
          <Link to="/signup">
            <div className="btn btn-primary px-5 py-4">Get Started</div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
