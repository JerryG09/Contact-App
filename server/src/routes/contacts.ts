import express from 'express';
import { addContact, getAllContacts, getAContact, editContact, deleteContact, findContact } from '../controllers/contacts';
const router = express.Router();
import { checkAuth } from '../auth/checkAuth'
import { contactSchema, editContactSchema } from '../validation/contact';

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

router.get('/:contactID', checkAuth, (req, res) => {
  const contactID = req.params.contactID;

  getAContact(contactID)
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'Contact not found' });

        return;
      }

      res.status(200).json({ data });
    })
    .catch(err => {
      console.error(err);

      res
        .status(500)
        .json({ message: 'An error occurred. Please try again later' });
    });
});

router.post('/', checkAuth, async (req, res) => {
  const { error, value } = contactSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    res.status(400).json({ message: 'Please provide valid parameters', error: error.details[0].message });

    return;
  }

  try {
    const doc = await addContact(value);

    res.status(200).json({ data: doc.toJSON() });
  } catch (err) {
    res.status(400).json({ message: err.message });

    return;
  }
});


router.patch('/:contactID', checkAuth, async (req, res) => {
  const { error, value } = editContactSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    res.status(400).json({ message: 'Please pass only valid values', error: error.details[0].message });

    return;
  }

  const doc = await editContact(req.params.contactID, value);

  if (!doc) {
    res.status(404).json({ message: 'Contact to edit not found' });

    return;
  }

  res.status(200).json({ data: doc.toJSON() });
});

router.delete('/:contactID', checkAuth, deleteContact);

export default router;
