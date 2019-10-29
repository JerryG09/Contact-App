import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(_req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(_req, res) {
  res.send("Got a POST request");
});

router.put('/', function(_req, res) {
  res.send("Got a PUT request");
});

router.delete('/', function(_req, res) {
  res.send("Got a DELETE request");
});

export default router;
