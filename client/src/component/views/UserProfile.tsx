import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Header } from '../../common';
import { Contact } from '../contact';
import Modal from '../contact/Modal';
import IndexHeader from '../../common/IndexHeader'
// import "bootstrap/dist/js/bootstrap"
// import { connect } from 'react-redux';
// import { fetchContacts, addContact } from "../../containers/redux/actions"
// import { getContacts, fetchDB } from '../../actions/contactActions';
interface jQuery {}
function Home(props: any) {
  const [currentContacts, setContacts]: any = useState([]);
  const { contactReducer: contact } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5050/api/v1/contacts');
      dispatch({
        type: 'SET_CONTACT',
        payload: result.data.data,
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    setContacts(contact);
  }, [contact]);

  if (!currentContacts) {
    return <>'Loading...=>'</>;
  }

  console.log(currentContacts[0]);

  const data = currentContacts.map((contact: any) => (
    <div className="container" key={contact._id}>
      <div className="col d-flex mt-5">
        <div className="col-md-1">{contact.id}</div>
        <div className="col-md-3">{contact.name}</div>
        <div className="col-md-3">{contact.email}</div>
        <div className="col-md-3">{contact.phoneNumber}</div>
        <div className="col-md-1 mr-3">
          <span
            className="btn btn-primary"
            id={contact.id}
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={loadId}
            data-name={contact.name}
          >
            EDIT
          </span>
        </div>
        <div className="col-md-1">
          <span className="btn btn-danger" id={contact.id}>
            DELETE
          </span>
        </div>
      </div>
    </div>
  ));

  function loadId(contact: any) {
    let target = contact.target;
    console.log(target);
    let name = $(target).attr('data-name');

    $('#exampleModal').on('shown.bs.modal', function(event) {
      console.log(name);
      let modal = $(this);
      modal.find('.modal-body').html(`<p>${name}</>`);
    });
    return null;
  }

  // $('#exampleModal').on('show.bs.modal', function (event) {
  //   let modal = $(this)
  //   modal.find(".modal-body").text("am working")
  // })

  function handleSubmit(newContact: any) {
    setContacts([...currentContacts, newContact]);
    dispatch({
      type: 'ADD_CONTACT',
      payload: newContact,
    });
  }

  return (
    <div>
      <IndexHeader />
      <Modal />
      <Contact onSubmit={handleSubmit} />
      {data}
    </div>
  );
}

export default Home;
