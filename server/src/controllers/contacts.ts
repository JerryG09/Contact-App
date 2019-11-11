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

function fetchAllContacts(_req: express.Request, res: express.Response) {
  return Contacts.find({})
    .then(data => {
      return res.status(200).json({
        success: true,
        data,
      });
    })
    .catch(err => {
      console.error(err);
      return res.status(400).json({
        succes: false,
        message: 'Contact not found',
      });
    });
}

function findAContact(req: express.Request, res: express.Response) {
  const phone = req.params.phone;
  return Contacts.findOne({ phone })
    .then(data => {
      if (!data) {
        throw new Error('Contact not found');
      }
      return res.status(200).json({
        success: true,
        data,
      });
    })
    .catch(err => {
      console.error(err);
      return res.status(400).json({
        succes: false,
        message: 'Contact not found',
      });
    });
}

function editContact(req: express.Request, res: express.Response) {
  const phoneId = req.params.phoneId;
  const { name, email, phone, company } = req.body;

  Contacts.findOne({ phone: phoneId })
    .then(data => {
      if (!data) {
        throw new Error('Contact not found');
      }

      // const { name, email, phone, company, ...rest } = data

      name ? (data.name = name) : data.name;
      email ? (data.email = email) : data.email;
      phone ? (data.phone = phone) : data.email;
      company ? (data.company = company) : data.company;

      res.status(200).json({
        success: true,
        data,
      });
    })
    .catch(err => {
      console.error(err);
      return res.status(400).json({
        succes: false,
        message: 'Contact not found',
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
