const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'form.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log(`Name: ${name}, Email: ${email}`);
  res.send(`<h2>Thank you, ${name}. We received your email: ${email}</h2>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
