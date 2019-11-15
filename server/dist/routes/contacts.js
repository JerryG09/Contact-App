"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contacts_1 = require("../controllers/contacts");
const router = express_1.default.Router();
const checkAuth_1 = require("../auth/checkAuth");
router.get('/', contacts_1.fetchAllContacts);
router.get('/:contactID', checkAuth_1.checkAuth, contacts_1.findAContact);
router.post('/', checkAuth_1.checkAuth, contacts_1.addContact);
router.get('/search', checkAuth_1.checkAuth, contacts_1.search);
router.patch('/:contactID', checkAuth_1.checkAuth, contacts_1.editContact);
router.delete('/:contactID', checkAuth_1.checkAuth, contacts_1.deleteContact);
exports.default = router;
//# sourceMappingURL=contacts.js.map