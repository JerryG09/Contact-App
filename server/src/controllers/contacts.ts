import Contacts from '../models/contacts';
import express from 'express';
import { contactSchema, editContactSchema } from '../validation/contact';
import { contactInfo } from '../interface/Interface'

async function addContact(contactObj: contactInfo) {
  const existingContact = await Contacts.find({
    email: contactObj.email,
    phone: contactObj.phone,
  })

  if (existingContact.length !== 0) {
    throw new Error('Contact already exists');
  }

  // if (error) {
  //   res.status(400).json({ error: error.details[0].message });

  //   return;
  // }

  const contact = new Contacts(contactObj)

  return contact.save();
}

async function getAllContacts() {
  return Contacts.find({ deletedAt: null }).sort({ firstName: 'asc' })
}

async function findContact({
  phone,
  archived
}: {
  phone?: string;
  archived?: boolean
}) {
  const deletedAt = archived ? { $not: { $eq: null } } : { $eq: null }

  return Contacts.find({ $and: [{ phone }, { deletedAt }] });
}


async function getAContact(contactID: string) {
  return Contacts.findById(contactID)
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

export {
  addContact,
  getAContact,
  getAllContacts,
  editContact,
  deleteContact,
  findContact
};
