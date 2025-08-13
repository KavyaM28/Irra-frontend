const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body; // lowercase keys
  console.log('Contact form received:', name, email, message);
  res.json({ message: 'Thank you for contacting us!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
