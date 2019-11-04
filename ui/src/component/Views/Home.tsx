import React, { useEffect } from 'react'
import { Header, Footer } from '../../common'
import { Contact } from '../contact'
import { connect } from "react-redux";
import { getAContact, fetchContacts } from "../../containers/redux/actions"


function Home (props: any) {
  const { handleContacts } = props
  useEffect(() => {
    handleContacts()
  }, [handleContacts]);

  if (! props.contacts.contacts.data) {
    return <>'Loading'</>
  }

  const data = props.contacts.contacts.data.map((contact: any) => (
    <div key={contact.id}>
      <p>{contact.id}</p>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
    </div>
  ))

  return (
    <div>
      <Header />
      <Contact />
      {data}

    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleContacts: () => dispatch(fetchContacts())
  }
}

// const mapDispatchToProps  = {
//   handleContacts: () => dispatch(fetchContacts())
// }

export  default connect(mapStateToProps, mapDispatchToProps)(Home);