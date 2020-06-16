const ApplicationController = require('./application-controller')

class RegistrationController extends ApplicationController {
  index () {
    this.render()
  }
}

module.exports = RegistrationController;
