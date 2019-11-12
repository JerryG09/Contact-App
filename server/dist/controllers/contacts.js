"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contacts_1 = __importDefault(require("../models/contacts"));
function addContact(req, res) {
    const { name, phone, email, company } = req.body;
    if (!name || !phone || !email || !company) {
        res.status(404).json({
            message: 'Input fields are required',
        });
        return;
    }
    const newContact = req.body;
    contacts_1.default.find({ name })
        .then(dbData => {
        if (dbData.length === 0) {
            const newUser = new contacts_1.default(newContact);
            newUser
                .save()
                .then(_result => {
                return res.status(201).json({
                    message: 'Contact added successfully',
                    newContact
                });
            })
                .catch(err => {
                console.error(err);
            });
        }
        else {
            throw new Error('User with name exist');
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
    return contacts_1.default.find({})
        .then(data => {
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
exports.fetchAllContacts = fetchAllContacts;
function findAContact(req, res) {
    const phone = req.params.phone;
    return contacts_1.default.findOne({ phone })
        .then(data => {
        if (!data) {
            throw new Error('Contact not found');
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
    const phoneId = req.params.phoneId;
    const { name, email, phone, company } = req.body;
    contacts_1.default.findOne({ phone: phoneId })
        .then(data => {
        if (!data) {
            throw new Error('Contact not found');
        }
        // const { name, email, phone, company, ...rest } = data
        name ? (data.name = name) : data.name;
        email ? (data.email = email) : data.email;
        phone ? (data.phone = phone) : data.email;
        company ? (data.company = company) : data.company;
        res.status(200).json({
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
exports.editContact = editContact;
function deleteContact(req, res) {
    const phoneId = req.params.phoneId;
    return contacts_1.default.remove({ phone: phoneId })
        .then(data => {
        if (data.n === 0) {
            return res.status(404).json({
                message: 'Contact not found',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'contact removed successfully',
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
exports.deleteContact = deleteContact;
//# sourceMappingURL=contacts.js.map