"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const db = [
    {
        id: 1,
        name: "Adams Cruff",
        phoneNumber: "09094939291"
    },
    {
        id: 2,
        name: "Lola Coker",
        phoneNumber: "09094939291"
    },
    {
        id: 3,
        name: "Desmond Wande",
        phoneNumber: "09094939291"
    }
];
router.get('/', (_req, res) => {
    res.status(200).json({ data: db });
});
router.get('/:ContactID', (req, res) => {
    const contactID = Number(req.params.ContactID);
    if (Number.isNaN(contactID)) {
        res.status(400).json({ message: "Please send a valid id" });
        return;
    }
    if (contactID < 0 || contactID > db.length) {
        res.status(404).json({ message: `Contact with id ${contactID} does not exist.` });
        return;
    }
    const contactData = db[contactID - 1];
    res.status(200).json({ data: contactData });
});
router.post('/', (req, res) => {
    if (!req.body.name || !req.body.id || !req.body.phoneNumber) {
        res.status(404).json({
            message: "input fields are required"
        });
        return;
    }
    const newContact = req.body;
    db.push(newContact);
    res.status(201).json({
        message: "Contact added successfully",
        data: newContact
    });
});
router.put('/:ContactID', (req, res) => {
    const contactID = Number(req.params.ContactID);
    if (Number.isNaN(contactID)) {
        res.status(400).json({ message: "Please send a valid id" });
        return;
    }
    if (contactID < 0 || contactID > db.length) {
        res.status(404).json({ message: `Contact with this ${contactID} does not exist.` });
        return;
    }
    const contactData = db[contactID - 1];
    contactData.name = req.body.name;
    contactData.phoneNumber = req.body.phoneNumber;
    res.status(200).json({
        message: `user with id ${contactID} edited succesfully`,
        data: contactData
    });
});
router.delete('/:ContactID', (req, res) => {
    const contactID = Number(req.params.ContactID);
    if (Number.isNaN(contactID)) {
        res.status(400).json({ message: "Please send a valid id" });
        return;
    }
    if (contactID < 0 || contactID > db.length) {
        res.status(404).json({ message: `Contact with id ${contactID} does not exist.` });
        return;
    }
    const newDB = db.filter(contact => contact.id !== contactID);
    res.status(200).json({
        message: `User with id ${contactID} deleted succesfully`,
        data: newDB
    });
});
exports.default = router;
//# sourceMappingURL=contacts.js.map