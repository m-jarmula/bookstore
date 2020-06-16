class ApplicationController {
  constructor (controller, action, req, res) {
    this.req = req
    this.res = res
    this.controller = controller
    this.action = action
  }

  render (params) {
    this.res.render(this.viewPath(), this.renderParams(params))
  }

  renderParams (params) {
    const defaultParams = {
      controller: this.controller,
      action: this.action
    }

    return Object.assign(defaultParams, params)
  }

  viewPath () {
    return `${this.controller}/${this.action}`
  }
}

module.exports = ApplicationController;
