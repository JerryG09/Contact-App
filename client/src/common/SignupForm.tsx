import React, { useState} from 'react'
import { Link } from 'react-router-dom'

function SignupForm({}) {
  const user = {
    email: "",
    password: "",
    confirm: ""
  }

  const [newUser, setUser] = useState(user)

  function handleChange(e: any) {
    e.preventDefault()
    const value = e.target.value;
    const name = e.target.name;
    setUser({ ...newUser, [name]: value})
    console.log(newUser)
  }

  function handleSubmit(e: any) {
    e.preventDefault()
  }

  return (
    <div className="container">
      <div className="bg-light p-5 rounded" style={{ height: '84vh' }}>
        <div className="row justify-content-center bg-secondary border rounded">
          <div className="d-flex flex-column">
            <form onSubmit={handleSubmit}>
              <h4 className="lead bold mt-5 mb-4">Account Signup</h4>
              <div className="d-flex justify-content-between mt-3">
                <div className="">
                  <label htmlFor="email" className="">
                    Email:{' '}
                  </label>
                </div>
                <div className="">
                  <input
                    type="email"
                    placeholder="email"
                    style={{padding: '0.3rem 0'}}
                    className="border border-primary rounded"
                    onChange={handleChange}
                    name="email"
                    value={newUser.email}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="mr-4">
                  <label htmlFor="password">Password: </label>
                </div>
                <div className="">
                  <input
                    style={{padding: '0.3rem 0'}}
                    type="password"
                    placeholder="password"
                    className="border border-primary rounded"
                    onChange={handleChange}
                    name="password"
                    value={newUser.password}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="mr-4">
                  <label htmlFor="password">Confirm: </label>
                </div>
                <div className="">
                  <input
                    style={{padding: '0.3rem 0'}}
                    type="password"
                    placeholder="confirm password"
                    className="border border-primary rounded"
                    onChange={handleChange}
                    name="confirm"
                    value={newUser.confirm}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between mt-4 mb-3">
                <button className="btn-sm btn-primary">Signup</button>
                <button className="btn-sm btn-danger">Cancel</button>
              </div>
            </form>
            <div className="mb-5">
              <Link to="/login">
                <span className="leading text-gray">
                  Already have an account? click here...
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
  </div>

  )
}

export default SignupForm
