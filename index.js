const express = require('express');
const app = express();
const axios = require('axios');
const fetch = require('node-fetch');
const ejs = require('ejs');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(express.static(`Public`));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get('/', async (req, res) => {
  try {
    const response = await fetch(
      'https://api.myzila.com/LiveDashboard'
    ).then(res => res.json());
    console.log(response.data);
    res.render('index', {
      data: response.data,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, err => {
  console.log('Server is up on port 3000');
});
