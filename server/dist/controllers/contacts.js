"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contacts_1 = __importDefault(require("../models/contacts"));
const contact_1 = require("../validation/contact");
function addContact(req, res) {
    // const { name, phone, email, company } = req.body;
    // if (!name || !phone || !email || !company) {
    //   res.status(404).json({
    //     message: 'Input fields are required',
    //   });
    //   return;
    // }
    const { error, value, ...rest } = contact_1.contactSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    });
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }
    // const newContact = req.body;
    contacts_1.default.find({
        email: value.email,
        phone: value.phone,
    })
        .then(dbData => {
        if (dbData.length === 0) {
            const newUser = new contacts_1.default(value);
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
        }
        else {
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
exports.addContact = addContact;
function fetchAllContacts(_req, res) {
    return contacts_1.default.find({ deletedAt: null }).sort({ firstName: 'asc' })
        .then(data => {
        return res.status(200).json({
            success: true,
            data,
        });
    })
        .catch(_err => {
        return res.status(500).json({
            succes: false,
            message: 'An error occurred. Please try again later'
        });
    });
}
exports.fetchAllContacts = fetchAllContacts;
function findAContact(req, res) {
    const contactID = req.params.contactID;
    return contacts_1.default.findById({ _id: contactID })
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
exports.findAContact = findAContact;
function editContact(req, res) {
    const contactID = req.params.contactID;
    const { error, value, ...rest } = contact_1.editContactSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    });
    if (error) {
        res.status(400).json({ message: 'Please pass only valid values', error });
        return;
    }
    contacts_1.default.findOneAndUpdate({ _id: contactID }, value, {
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
exports.editContact = editContact;
function deleteContact(req, res) {
    const contactID = req.params.contactID;
    return contacts_1.default.findOneAndUpdate({ _id: contactID }, { deletedAt: new Date() })
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
exports.deleteContact = deleteContact;
function search(req, res) {
}
exports.search = search;
//# sourceMappingURL=contacts.js.map