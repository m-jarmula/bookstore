const hbs = require('hbs');
const path = require('path');
const partialsPath = path.join(__dirname, '..', 'templates/partials')
const viewsPath = path.join(__dirname, '../templates/views')

function config (app) {
  hbs.registerHelper('currentPathClass', function (controller, action) {
    if(typeof action === 'object') {
      if(this.controller === controller) return 'current'
    } else {
      if(this.controller === controller && this.action === action) return 'current'
    }

    return ''
  })

  hbs.registerPartials(partialsPath)

  app.set('view engine', 'hbs')
  app.set('views', viewsPath)
  app.set('view options', { layout: `../layouts/default` })
}
module.exports = config
