const fs = require('fs');
const path = require('path')

function router (app) {
  app.get('/', (req, res) => {
    callController('home', 'index', req, res)
  })

  app.get('/books/:id', (req, res) => {
    callController('books', 'show', req, res)
  })
  app.get('/books', (req, res) => {
    callController('books', 'index', req, res)
  })

  app.get('/account', (req, res) => {
    callController('account', 'show', req, res)
  })

  app.get('/sign-up', (req, res) => {
    callController('registration', 'index', req, res)
  })

  app.get('/sign-in', (req, res) => {
    callController('session', 'index', req, res)
  })

  app.get('*', (req, res) => {
    res.render('404')
  })
};

function callController (name, action, req, res) {
  const srcDir = path.join(__dirname, '../controllers')
  const controllerClass = require(`${srcDir}/${name}-controller.js`)
  const controller = new controllerClass(name, action, req, res);

  return controller[action]()
}

module.exports = router;
