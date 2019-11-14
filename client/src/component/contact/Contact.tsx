import React, { useState } from 'react';

function Contact({ onSubmit }: any) {
  const contact = {
    name: '',
    email: '',
    phoneNumber: '',
  };

  const [currentContact, setContact] = useState(contact);

  function handleChange(e: any) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setContact({ ...currentContact, [name]: value });
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      !currentContact.name ||
      !currentContact.phoneNumber ||
      !currentContact.email
    ) {
      return window.alert('please, enter required field');
    }

    onSubmit(currentContact);
    setContact(contact);
  };

  return (
    <div className="container mt-4 p-0">
      <div
        className="row justify-content-center shadow"
        style={{ width: '100%' }}
      >
        <div className="d-flex flex-column" style={{ width: '30%' }}>
          <form onSubmit={handleSubmit}>
            <h5 className="lead py-2 text-primary">Add Contact</h5>
            <div className="d-flex justify-content-between mb-2">
              <div className="">
                <label htmlFor="name" className="">
                  Name:
                </label>
              </div>
              <input
                name="name"
                placeholder="name"
                value={currentContact.name}
                onChange={handleChange}
                className="border rounded"
                style={{ width: '70%' }}
              />
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="">
                <label htmlFor="name">Phone:</label>
              </div>
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                value={currentContact.phoneNumber}
                onChange={handleChange}
                className="border rounded"
                style={{ width: '70%' }}
              />
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div className="">
                <label htmlFor="name">Email:</label>
              </div>
              <input
                name="email"
                placeholder="Email"
                value={currentContact.email}
                onChange={handleChange}
                className="border rounded"
                style={{ width: '70%' }}
              />
            </div>
            <button className="btn-sm btn-secondary mb-3 px-4">ADD</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
