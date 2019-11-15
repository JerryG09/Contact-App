"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const contactSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: { type: String, index: true },
    company: { type: mongoose_1.default.SchemaTypes.String, required: true },
    deletedAt: { type: Date, default: null },
}, { timestamps: true });
exports.default = mongoose_1.default.model('contact', contactSchema);
//# sourceMappingURL=contacts.js.map