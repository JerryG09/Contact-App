"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/', function (req, res, next) {
    res.send("Got a POST request");
});
router.put('/', function (req, res, next) {
    res.send("Got a PUT request");
});
router.delete('/', function (req, res, next) {
    res.send("Got a DELETE request");
});
exports.default = router;
//# sourceMappingURL=index.js.map