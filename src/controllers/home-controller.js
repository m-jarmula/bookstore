const ApplicationController = require('./application-controller')

class HomeController extends ApplicationController {
  index () {
    this.render('home/index')
  }
}

module.exports = HomeController;
