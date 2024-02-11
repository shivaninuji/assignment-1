const express = require('express');
const app = express();

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, this is your API!');
});

// Other routes go here...

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
