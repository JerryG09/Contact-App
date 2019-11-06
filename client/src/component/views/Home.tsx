import React, { useEffect, useState } from 'react'
import { Header } from '../../common'
import { Contact } from '../contact'
import { connect } from "react-redux";
import { fetchContacts, addContact } from "../../containers/redux/actions"


function Home (props: any) {
  const { handleContacts } = props
  useEffect(() => {
    handleContacts()
  }, [handleContacts]);

  if (! props.contacts.contacts.data) {
    return <>'Loading'</>
  }

  const data = props.contacts.contacts.data.map((contact: any) => (
    <div className="container" key={contact.id}>
      <div className="col d-flex mt-5">
        <div className="col-md-1">{contact.id}</div>
        <div className="col-md-3">{contact.name}</div>
        <div className="col-md-3">{contact.email}</div>
        <div className="col-md-3">{contact.phoneNumber}</div>
        <div className="col-md-1"><span className="btn btn-primary">EDIT</span></div>
        <div className="col-md-1"><span className="btn btn-danger">DELETE</span></div>
      </div>
    </div>
  ))

  return (
    <div>
      <Header />
      <Contact onSubmit={handleSubmit} handleChange={handleChange} />
      {data}

    </div>
  )
}

// const [] = useState()
// setContact={setContact} contact={contact}

function handleChange() {

}

function handleSubmit() {

}

const mapStateToProps = (state: any) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleContacts: () => dispatch(fetchContacts()),
    createContact: () => dispatch(addContact())
  }
}

// const mapDispatchToProps  = {
//   handleContacts: () => dispatch(fetchContacts())
// }

export  default connect(mapStateToProps, mapDispatchToProps)(Home);
