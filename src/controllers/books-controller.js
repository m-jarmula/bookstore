const ApplicationController = require('./application-controller')

class ProductsController extends ApplicationController {
  show () {
    const book = {
      title: 'All about cooking',
      cover: 'images/templatemo_image_02.jpg',
      author: 'Deke McClelland',
      publishDate: 'January 2024',
      pages: '498',
      isbn: '0-496-91612-0',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec dui. Donec nec neque ut quam sodales feugiat. Nam sodales, pede vel dapibus lobortis, ipsum diam molestie risus, a vulputate risus nisl pulvinar lacus. Donec at arcu. Nunc aliquam, dolor vitae sollicitudin lacinia, nibh orci sagittis diam, dignissim sodales dui erat nec eros. Fusce quis enim. Aenean eleifend, neque hendrerit elementum sodales, odio erat sagittis quam, sed tempor orci magna vitae tellus. Proin dui mauris, tempor eget, pulvinar sed, pretium sit amet, dui. Proin vulputate justo et quam. In fermentum, eros ac tincidunt aliquam, elit velit semper nunc, a tincidunt orci lectus a arcu. Nullam commodo, arcu non facilisis imperdiet, felis lectus tempus felis, vitae volutpat augue ante quis leo. Aliquam tristique dolor ac odio. Sed consectetur, lacus et dictum tristique, odio neque elementum ante, nec eleifend leo dolor vel tortor.'
    }
    this.render({ book: book })
  }
}

module.exports = ProductsController;
