const express = require('express');
const router = require('./config/router');
const hbsConfig = require('./config/hbs');
const path = require('path')
const app = express();
const port = process.env.PORT
const staticDir = path.join(__dirname, '../src/public')

app.use(express.static(staticDir))

hbsConfig(app)
router(app)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
