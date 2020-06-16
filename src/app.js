const express = require('express');
const router = require('./config/router');
const path = require('path')
const hbs = require('hbs');
const app = express();
const port = process.env.PORT
console.log(process.env.PORT)
const staticDir = path.join(__dirname, '../src/public')
const viewsPath = path.join(__dirname, 'templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')

hbs.registerHelper('currentPathClass', function (controller, action) {
  if(typeof action === 'object') {
    if(this.controller === controller) return 'current'
  } else {
    if(this.controller === controller && this.action === action) return 'current'
  }

  return ''
})

hbs.registerPartials(partialsPath)

app.use(express.static(staticDir))
app.set('view engine', 'hbs')
app.set('partials', partialsPath)
app.set('views', viewsPath)
app.set('view options', { layout: `../layouts/default` })

router(app)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
