import React, { useState } from 'react';
import IndexHeader from '../../common/IndexHeader';
import Footer from '../../common/Footer';
import SignupForm from '../../common/SignupForm'

function signUp() {
  // const [registeredUser, setRegister] = useState([])

  function handleSubmit(newUser: any) {

  }

  // console.log(registeredUser)

  return (
    <div className="container-fluid m-0 p-0">
      <IndexHeader />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default signUp;
