import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(_req, res) {
  res.send('Hello User, How are you!');
});
router.post('/', function(_req, res) {
  res.send('Hello User, What did you send!');
});
router.put('/', function(_req, res) {
  res.send('Hello User, you made update!');
});
router.delete('/', function(_req, res) {
  res.send('Hello User, you mean to delete!');
});

export default router;
