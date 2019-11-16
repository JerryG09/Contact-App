"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contacts_1 = require("../controllers/contacts");
const router = express_1.default.Router();
const checkAuth_1 = require("../auth/checkAuth");
const contact_1 = require("../validation/contact");
router.get('/', (_req, res) => {
    contacts_1.getAllContacts()
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
router.get('/search', checkAuth_1.checkAuth, async (req, res) => {
    const body = req.body;
    const data = await contacts_1.findContact(body);
    if (data.length === 0) {
        res.status(200).json({ data: [] });
        return;
    }
    res.status(200).json({ data });
});
router.get('/:contactID', checkAuth_1.checkAuth, (req, res) => {
    const contactID = req.params.contactID;
    contacts_1.getAContact(contactID)
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
router.post('/', checkAuth_1.checkAuth, async (req, res) => {
    const { error, value } = contact_1.contactSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    });
    if (error) {
        res.status(400).json({ message: 'Please provide valid parameters', error: error.details[0].message });
        return;
    }
    try {
        const doc = await contacts_1.addContact(value);
        res.status(200).json({ data: doc.toJSON() });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
        return;
    }
});
router.patch('/:contactID', checkAuth_1.checkAuth, async (req, res) => {
    const { error, value } = contact_1.editContactSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    });
    if (error) {
        res.status(400).json({ message: 'Please pass only valid values', error: error.details[0].message });
        return;
    }
    const doc = await contacts_1.editContact(req.params.contactID, value);
    if (!doc) {
        res.status(404).json({ message: 'Contact to edit not found' });
        return;
    }
    res.status(200).json({ data: doc.toJSON() });
});
router.delete('/:contactID', checkAuth_1.checkAuth, async (req, res) => {
    const contactID = req.params.contactID;
    const doc = await contacts_1.deleteContact(contactID);
    if (!doc) {
        res.status(404).json({ message: 'Contact to delete not found' });
        return;
    }
    res.status(200).json({ data: doc.id });
});
exports.default = router;
//# sourceMappingURL=contacts.js.map