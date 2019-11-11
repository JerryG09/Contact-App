import express from 'express';

import { signUp, login, deleteUser } from '../controllers/user';
// import { userValidator } from "../validation/contact"
const router = express.Router();

/* GET users listing. */
router.post('/signup', signUp);
router.post('/login', login)
router.delete('/:userId', deleteUser)


export default router;
