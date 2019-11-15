"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: { type: mongoose_1.default.SchemaTypes.String, required: true, unique: true },
    password: { type: mongoose_1.default.SchemaTypes.String, required: true },
    deletedAt: { type: Date, default: null }
}, { timestamps: true });
exports.default = mongoose_1.default.model('user', userSchema);
//# sourceMappingURL=user.js.map