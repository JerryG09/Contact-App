import Contacts from '../models/contacts';
import { contactInfo } from '../interface/Interface'

async function addContact(contactObj: contactInfo) {
  const existingContact = await Contacts.find({
    email: contactObj.email,
    phone: contactObj.phone,
  })

  if (existingContact.length !== 0) {
    throw new Error('Contact already exists');
  }

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

async function editContact(
  contactID: string,
  contactObj: Partial<contactInfo>,
  ) {

    return Contacts.findOneAndUpdate({ _id: contactID }, contactObj, {
      new: true,
  })
}

async function deleteContact(contactID: string) {
  return Contacts.findOneAndUpdate(
    { _id: contactID },
    { deletedAt: new Date() }
  );
}

export {
  addContact,
  getAContact,
  getAllContacts,
  editContact,
  deleteContact,
  findContact
};
