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
        phoneNumber: "09094939291",
        email: "adams@gmail.com",
        password: "ada123"
    },
    {
        id: 2,
        name: "Lola Coker",
        phoneNumber: "09094939291",
        email: "lolcoker@gmail.com",
        password: "lola123"
    },
];
router.post('/', (req, res) => {
    const { id, name, phoneNumber, email, password } = req.body;
    if (!id || !name || !phoneNumber || !email || !password) {
        return res.status(404).json({
            message: "required field(s) cannot be empty"
        });
    }
    const registeredUser = req.body;
    // bcrypt.genSalt(10, (err, salt) => {
    //   bcrypt.hash("B4c0/\/", salt, (err, hash) => {
    //     password = hash
    //   })
    // })
    db.push(registeredUser);
    return res.status(200).json({
        message: "registered succesfully"
    });
});
router.get('/', (req, res) => {
    const { email, password, id } = req.body;
    const userId = Number(id);
    if (!email || !password || !userId) {
        res.status(404).json({
            message: "fill necessary fields"
        });
        return;
    }
    const user = db.filter(user => user.id === userId);
    if (user[0].email !== email || user[0].password !== password) {
        res.status(404).json({
            message: "invalid login details"
        });
        return;
    }
    return res.status(200).json({
        message: `user with id ${userId} is logged in`
    });
});
exports.default = router;
//# sourceMappingURL=register.js.map