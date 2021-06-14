const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const upload = multer({ dest: 'public/uploads/' });

const port = 8000;

const app = express();

app.use(cors());

app.use(express.static('public'));

app.post('/upload', upload.single('image'), (req, res) => {
  console.log('req.body', req.body);
  console.log('req.file', req.file);

  fs.renameSync(
    req.file.path,
    path.join(req.file.destination, req.file.originalname)
  );

  res.send('ok');
});

// app.get('/', (req, res) => {
//   res.send('i"m in route / !!');
// });

app.listen(8000, () => {
  console.log(`App listening on port ${port}!`);
});
