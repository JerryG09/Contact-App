"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET users listing. */
router.get('/', function (_req, res) {
    res.send('Hello User, How are you!');
});
router.post('/', function (_req, res) {
    res.send('Hello User, What did you send!');
});
router.put('/', function (_req, res) {
    res.send('Hello User, you made update!');
});
router.delete('/', function (_req, res) {
    res.send('Hello User, you mean to delete!');
});
exports.default = router;
//# sourceMappingURL=users.js.map