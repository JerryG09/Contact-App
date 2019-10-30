import express from 'express';
const router = express.Router();

router.post('/', (_req, res) => {
    res.send("register...")
})

export default router