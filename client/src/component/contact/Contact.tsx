import React, {useState} from 'react'

function Contact(props: any) {

  const contact = {
    name: "",
    email: "",
    phoneNumber: ""
  }

  const [currentContact, setContact] = useState(contact);

  function handleChange(e: any) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setContact({ ...currentContact, [name]: value });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if(!currentContact.name || !currentContact.phoneNumber || !currentContact.email) {
      return window.alert("please, enter required field")
    }

    handleSubmit((prevContacts: any) => prevContacts.concat(currentContact))
    console.log(currentContact)

  }
   


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add Contact: </label>
        <input name="name" placeholder="name" value={currentContact.name} onChange={handleChange} />
        <input name="phoneNumber" placeholder="Phone Number" value={currentContact.phoneNumber} onChange={handleChange} />
        <input name="email" placeholder="Email" value={currentContact.email} onChange={handleChange} />

        <button>ADD</button>
      </form>
    </div>
  )
}

// value={props.contact.name}

export  default Contact;