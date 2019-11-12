import React from 'react';
import { Link } from "react-router-dom";
import IndexHeader from '../../common/IndexHeader'

function Login() {
  return (
    <div className="container-fluid m-0 p-0">
      <IndexHeader />
      <div className="container">
        <div className="bg-light p-5 rounded" style={{height: "80vh"}}>
          <div className="row justify-content-center bg-secondary border rounded">
            <div className="d-flex flex-column" >
              <form action="">
                <h4 className="lead bold mt-5 mb-4">Account Login</h4>
                <div className="d-flex justify-content-between mt-3">
                  <div className="">
                    <label htmlFor="email" className="">
                      Email:{' '}
                    </label>
                  </div>
                  <div className="">
                    <input type="email" placeholder="email" className="border border-primary rounded" />
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <div className="mr-4">
                    <label htmlFor="password">Password: </label>
                  </div>
                  <div className="">
                    <input type="password" placeholder="password" className="border border-primary rounded" />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary mt-3 mb-4" style={{width: "18vw"}}>Login</button>
                </div>
              </form>
              <div className="mb-5">
                <Link to="/signup">
                  <span className="leading text-gray">Don't have an account yet? click here...</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
