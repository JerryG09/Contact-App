"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
// import { userValidator } from "../validation/contact"
const router = express_1.default.Router();
/* GET users listing. */
router.post('/signup', user_1.signUp);
router.post('/login', user_1.login);
router.delete('/:userId', user_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.js.map