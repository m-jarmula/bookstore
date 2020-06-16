const ApplicationController = require('./application-controller')

class SessionController extends ApplicationController {
  index () {
    this.render()
  }
}

module.exports = SessionController;
