import express from 'express';
import { addContact, getAllContacts, getAContact, editContact, deleteContact, search } from '../controllers/contacts';
const router = express.Router();
import { checkAuth } from '../auth/checkAuth'

router.get('/', (_req, res) => {
  getAllContacts()
    .then(data => {
      res.status(200).json({ data });
    })
    .catch(err => {
      console.error(err);

      res
        .status(500)
        .json({ message: 'An error occurred. Please try again later' });
    });
});

router.get('/:contactID', checkAuth, getAContact);

router.post('/', checkAuth, addContact);

router.get('/search', checkAuth, search);

router.patch('/:contactID', checkAuth, editContact);

router.delete('/:contactID', checkAuth, deleteContact);

export default router;
