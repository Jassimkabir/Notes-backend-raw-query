const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 5000;
const basicRoutes = require('./src/routes/basic/index');

app.use(express.json());
app.use(morgan('tiny'));

app.use(basicRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
