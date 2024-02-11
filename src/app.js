const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello, this is your API!');
});



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
