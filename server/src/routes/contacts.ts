import express from 'express';
import { addContact, fetchAllContacts, findAContact, editContact, deleteContact } from '../controllers/contacts';
const router = express.Router();
import { checkAuth } from '../auth/checkAuth'

// interface data {
//   id: number;
//   name: string;
//   phoneNumber: string;
//   email: string;
// }

router.get('/', fetchAllContacts);

router.get('/:phone', checkAuth, findAContact);

router.post('/', checkAuth, addContact);

router.put('/:phoneId', checkAuth, editContact);

router.delete('/:phoneId', checkAuth, deleteContact);

export default router;
