const ApplicationController = require('./application-controller')

class AccountController extends ApplicationController {
  show () {
    this.render()
  }
}

module.exports = AccountController;
