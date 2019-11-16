import express from 'express';
import { addContact, getAllContacts, getAContact, editContact, deleteContact, findContact } from '../controllers/contacts';
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

router.get('/search', checkAuth, async (req, res) => {
  const body = req.body

  const data = await findContact(body)

  if(data.length === 0) {
    res.status(200).json({ data: [] })

    return
  }

  res.status(200).json({ data })
});

router.get('/:contactID', checkAuth, getAContact);

router.post('/', checkAuth, addContact);


router.patch('/:contactID', checkAuth, editContact);

router.delete('/:contactID', checkAuth, deleteContact);

export default router;
