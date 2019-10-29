import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello User, How are you!');
});
router.post('/', function(req, res, next) {
  res.send('Hello User, What did you send!');
});
router.put('/', function(req, res, next) {
  res.send('Hello User, you made update!');
});
router.delete('/', function(req, res, next) {
  res.send('Hello User, you mean to delete!');
});

export default router;
