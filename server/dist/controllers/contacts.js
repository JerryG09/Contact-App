"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contacts_1 = __importDefault(require("../models/contacts"));
async function addContact(contactObj) {
    const existingContact = await contacts_1.default.find({
        email: contactObj.email,
        phone: contactObj.phone,
    });
    if (existingContact.length !== 0) {
        throw new Error('Contact already exists');
    }
    const contact = new contacts_1.default(contactObj);
    return contact.save();
}
exports.addContact = addContact;
async function getAllContacts() {
    return contacts_1.default.find({ deletedAt: null }).sort({ firstName: 'asc' });
}
exports.getAllContacts = getAllContacts;
async function findContact({ phone, archived }) {
    const deletedAt = archived ? { $not: { $eq: null } } : { $eq: null };
    return contacts_1.default.find({ $and: [{ phone }, { deletedAt }] });
}
exports.findContact = findContact;
async function getAContact(contactID) {
    return contacts_1.default.findById(contactID);
}
exports.getAContact = getAContact;
async function editContact(contactID, contactObj) {
    return contacts_1.default.findOneAndUpdate({ _id: contactID }, contactObj, {
        new: true,
    });
}
exports.editContact = editContact;
async function deleteContact(contactID) {
    return contacts_1.default.findOneAndUpdate({ _id: contactID }, { deletedAt: new Date() });
}
exports.deleteContact = deleteContact;
//# sourceMappingURL=contacts.js.map