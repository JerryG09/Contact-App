import Contacts from '../models/contacts';
import express from 'express';
import { contactSchema, editContactSchema } from '../validation/contact';

function addContact(req: express.Request, res: express.Response) {
  const { error, value, ...rest } = contactSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    res.status(400).json({ error: error.details[0].message });

    return;
  }

  Contacts.find({
    email: value.email,
    phone: value.phone,
  })
    .then(dbData => {
      if (dbData.length === 0) {
        const newUser = new Contacts(value);

        newUser
          .save()
          .then(_result => {
            return res.status(201).json({
              message: 'Contact added successfully',
              data: value,
            });
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        res.status(404).json({ message: 'Contact not found' });

        return;
      }
    })
    .catch(_err => {
      res.status(409).json({
        message: 'User with detail exist',
      });
    });
}

async function getAllContacts() {
  return Contacts.find({ deletedAt: null }).sort({ firstName: 'asc' })
}

function getAContact(req: express.Request, res: express.Response) {
  const contactID = req.params.contactID;
  return Contacts.findById({ _id: contactID })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'Contact not found' });

        return;
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
  const contactID: String = req.params.contactID

  const { error, value, ...rest } = editContactSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    res.status(400).json({ message: 'Please pass only valid values', error });

    return;
  }

  Contacts.findOneAndUpdate({ _id: contactID }, value, {
    new: true,
   })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'Contact to edit not found' });

        return;
      }
      res.status(200).json({
        success: true,
        data
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

function deleteContact(req: express.Request, res: express.Response) {
  const contactID = req.params.contactID;

  return Contacts.findOneAndUpdate({ _id: contactID }, { deletedAt: new Date() })
    .then(data => {
      if (!data) {
        return res.status(404).json({
          message: 'Contact to delete not found',
        });
      }

      return res.status(200).json({
        success: true,
        message: 'contact deleted successfully',
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

function search(req: express.Request, res: express.Response) {

}

export {
  addContact,
  getAContact,
  getAllContacts,
  editContact,
  deleteContact,
  search
};
