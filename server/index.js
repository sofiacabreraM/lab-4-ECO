const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 5052; 


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('client1')); 
app.use('/uploads', express.static('uploads')); 


const posts = [];

app.post('/posts', upload.single('image'), (req, res) => {
  const { title, content } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

  if (title && content) {
    const post = { title, content, image: imagePath };
    posts.push(post); 
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, message: 'All fields are required.' });
  }
});

app.get('/posts', (req, res) => {
  res.json(posts); 
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
