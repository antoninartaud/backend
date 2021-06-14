const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const upload = multer({ dest: 'public/uploads/' });
console.log('upload:', upload);

const uploadSingle = upload.single('image');
console.log('upload.single:', uploadSingle);

const port = 8000;

const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('i"m in route / !!');
});

app.post('/upload', upload.single('image'), (req, res) => {
  console.log('req.body', req.body);
  console.log('req.file', req.file);

  console.log(object);

  fs.renameSync(
    req.file.path,
    path.join(req.file.destination, req.file.originalname)
  );

  res.send('ok');
});

app.listen(8000, () => {
  console.log(`App listening on port ${port}!`);
});
