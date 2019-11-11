import Contacts from '../models/contacts';
import express from 'express';

function addContact(req: express.Request, res: express.Response) {
  const { name, phone, email, company } = req.body;
  if (!name || !phone || !email || !company) {
    res.status(404).json({
      message: 'Input fields are required',
    });

    return;
  }

  const newContact = req.body;

  Contacts.find({ name })
    .then(dbData => {
      if (dbData.length === 0) {
        const newUser = new Contacts(newContact);

        newUser
          .save()
          .then(_result => {
            return res.status(201).json({
              message: 'Contact added successfully',
              newContact
            });
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        throw new Error('User with name exist');
      }
    })
    .catch(_err => {
      res.status(409).json({
        message: 'User with detail exist',
      });
    });
}

export {
  addContact,
  findAContact,
  fetchAllContacts,
  editContact,
  deleteContact,
};
