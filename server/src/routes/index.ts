import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(_req, res) {
  res.render('index', { title: 'My API' });
});

router.post('/', function(_req, res) {
  res.send("Got a POST request");
});

router.put('/', function(_req, res) {
  res.send("Got a PUT request");
});

const data = [
  {
    id: 1,
    name: "Jane",
    stack: 'Node'
  },
  {
    id: 1,
    name: "James",
    stack: 'Swift'
  },
  {
    id: 1,
    name: "Jasmen",
    stack: 'Python'
  }
]

router.get('/sq003', function(_req, res) {
  res.status(200).json({ data: data});
});

router.get('/sq003/:StudentID', (req, res) => {

  const studentID = Number(req.params.StudentID)

  if (Number.isNaN(studentID)) {
    res.status(404).json({ message: 'Please send a valid student id'});

    return;
  }

  if (studentID < 0 || studentID > data.length) {
    res
      .status(400)
      .json({ message: `Student with id ${studentID} was not found`})

      return
  }

  const studentData = data[studentID - 1]

  res.status(200).json({ data: studentData})
})

export default router;
