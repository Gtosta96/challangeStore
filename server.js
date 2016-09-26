const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const data = require('./mock/products.json');

app.use(cors());

app.get('/products', (request, response) => {
  response.json(data);
});

app.listen(port, (error) => {
  if (error) {
    return console.log('Error: ', error);
  }

  console.log(`Server is listening on http://localhost:${port}`);
});
